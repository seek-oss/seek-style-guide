import styles from './Code.less';

import React, { Component, PropTypes } from 'react';
import debounce from 'lodash.debounce';
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
        filterProps: ['className'],
        useBooleanShorthandSyntax: false
      }).replace(/svgClassName=".*?"/ig, 'svgClassName="..."')
      .replace(/function noRefCheck\(\) \{\}/ig, '() => {...}');

      code = `import { ${jsx.type.displayName} } from 'seek-style-guide/react';\n\n\n...\n\n\n${componentCode}`;
    } else if (less) {
      code = `@import (reference) "~seek-style-guide/theme";\n\n\n.element {\n  .${less}\n}`;
    }

    return (
      <CopyToClipboard text={code} onCopy={this.handleCopy}>
        <div className={styles.root} onMouseLeave={this.handleMouseLeave}>
          <pre className={styles.code}>
            <code>
              {code}
            </code>
          </pre>
          <span className={styles.message}>
            {copiedToClipboard ? 'Copied!' : 'Click to copy'}
          </span>
        </div>
      </CopyToClipboard>
    );
  }

}
