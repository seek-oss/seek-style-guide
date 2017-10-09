import styles from './Code.less';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Section, Text } from 'seek-style-guide/react';
import debounce from 'lodash/debounce';
import uniq from 'lodash/uniq';
import jsxToString from 'react-element-to-jsx-string';
import CopyToClipboard from 'react-copy-to-clipboard';

export default class Code extends Component {
  static propTypes = {
    jsx: PropTypes.element,
    less: PropTypes.string
  };

  constructor() {
    super();

    this.state = {
      copiedToClipboard: false
    };

    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.debouncedHandleMouseLeave = debounce(this.handleMouseLeave, 5000);
    this.handleCopy = this.handleCopy.bind(this);
  }

  handleMouseLeave() {
    this.setState({
      copiedToClipboard: false
    });
  }

  handleCopy() {
    this.setState({
      copiedToClipboard: true
    }, this.debouncedHandleMouseLeave);
  }

  render() {
    const { copiedToClipboard } = this.state;
    const { jsx, less } = this.props;

    let code = '';

    if (jsx) {
      const componentCode = jsxToString(jsx, {
        showDefaultProps: false,
        filterProps: ['className', 'style'],
        useBooleanShorthandSyntax: false
      })
        .replace(/\={true}/ig, '')
        .replace(/svgClassName=".*?"/ig, 'svgClassName="..."')
        .replace(/function noRefCheck\(\) \{\}/ig, '() => {...}')
        .replace('<MockContent />', 'Lorem ipsum');

      const componentNames = uniq(
        (componentCode.match(/<([A-Z]\w*)(?=[\s>])/g) || [])
          .map(x => x.replace('<', ''))
      );

      code = `import {\n  ${componentNames.join(',\n  ')}\n} from 'seek-style-guide/react';\n\n\n${componentCode}`;
    } else if (less) {
      code = `@import (reference) "~seek-style-guide/theme";\n\n\n.element {\n  .${less}\n}`;
    }

    return (
      <CopyToClipboard text={code} onCopy={this.handleCopy}>
        <Section header className={styles.root} onMouseLeave={this.handleMouseLeave}>
          <pre className={styles.code}>
            <code>
              {code}
            </code>
          </pre>
          <Text strong className={styles.message} positive={copiedToClipboard}>
            {copiedToClipboard ? 'Copied' : 'Click to copy'}
          </Text>
        </Section>
      </CopyToClipboard>
    );
  }
}
