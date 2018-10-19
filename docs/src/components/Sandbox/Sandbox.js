import React, { Component } from 'react';
import PropTypes from 'prop-types';
import dedent from 'dedent';
import queryString from 'query-string';
import base64url from 'base64-url';
import debounce from 'lodash/debounce';
import localforage from 'localforage';
import acorn from 'acorn';
import acornJsx from 'acorn-jsx';
import Preview from './Preview/Preview';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import styles from './Sandbox.less';

// CodeMirror blows up in a Node context, so only execute it in the browser
const CodeMirror = typeof window === 'undefined' ? null : (() => {
  const lib = require('react-codemirror');
  require('codemirror/mode/jsx/jsx');

  return lib;
})();

const initialValue = `${dedent`
  <Header activeTab="Job Search" authenticationStatus="authenticated" userName="Olivia" />

  <PageBlock>
    <Section header>
      <Text hero>Style Guide Sandbox</Text>
    </Section>
  </PageBlock>

  <Footer />
`}\n`;

const store = localforage.createInstance({
  name: 'sandbox',
  version: 1
});

export default class Sandbox extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  state = {
    codeReady: false,
    code: null,
    renderCode: null
  };

  componentDidMount() {
    this.getCode().then(savedCode => {
      const code = savedCode || initialValue;
      this.initialiseCode(code);
      this.validateCode(code);
    });
  }

  getCode() {
    const { location } = this.props;

    const hash = location.hash.replace(/^#/, '');
    const query = queryString.parse(hash);

    return query.code ?
      Promise.resolve(base64url.decode(query.code)) :
      store.getItem('code');
  }

  storeCodeMirrorRef = cmRef => {
    this.cmRef = cmRef;
  };

  initialiseCode = (code = initialValue) => {
    this.setState({
      codeReady: true,
      code,
      renderCode: code
    });
  };

  updateCode = code => {
    const { history } = this.props;

    this.setState({ code });
    history.replace(!code ? {} : { hash: `?code=${base64url.encode(code)}` });
    store.setItem('code', code);

    this.validateCode(code);
  };

  revertCode = () => {
    this.updateCode(this.state.renderCode);

    const doc = this.cmRef.codeMirror.getDoc();
    doc.setValue(this.state.renderCode);
    doc.setCursor(this.state.cursor);
  };

  validateCode = code => {
    const cm = this.cmRef.codeMirror;
    cm.clearGutter(styles.gutter);

    try {
      acorn.Parser.extend(acornJsx()).parse(`<div>${code}</div>`);

      const cursor = cm.getDoc().getCursor();
      this.setState({ renderCode: code, cursor });
    } catch (err) {
      const errorMessage = err && (err.message || '');
      const matches = errorMessage.match(/\(([0-9]+):/);
      const lineNumber = matches && matches.length >= 2 && matches[1] && parseInt(matches[1], 10) - 1;

      if (!lineNumber) {
        return;
      }

      const marker = document.createElement('div');
      marker.classList.add(styles.marker);
      marker.setAttribute('title', err.message);
      marker.addEventListener('click', this.revertCode);
      cm.setGutterMarker(lineNumber, styles.gutter, marker);
    }
  };

  handleChange = debounce(this.updateCode, 200);

  render() {
    const { codeReady, code, renderCode } = this.state;

    return !codeReady ? null : (
      <div>
        <div className={styles.previewContainer}>
          <Preview code={renderCode} />
        </div>
        <div className={styles.editorContainer}>
          <CodeMirror
            ref={this.storeCodeMirrorRef}
            value={code}
            onChange={this.handleChange}
            options={{
              mode: 'jsx',
              theme: 'material',
              lineNumbers: true,
              gutters: [styles.gutter]
            }}
          />
        </div>
      </div>
    );
  }
}
