import styles from './Code.less';

import React, { Component, PropTypes } from 'react';
import debounce from 'lodash.debounce';
import jsxToString from 'jsx-to-string';
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

    this.resetCopiedToClipboard = this.resetCopiedToClipboard.bind(this);
    this.debouncedResetCopiedToClipboard = debounce(this.resetCopiedToClipboard, 5000);
    this.copiedToClipboard = this.copiedToClipboard.bind(this);
  }

  resetCopiedToClipboard() {
    this.setState({
      copiedToClipboard: false
    });
  }

  copiedToClipboard() {
    this.setState({
      copiedToClipboard: true
    }, this.debouncedResetCopiedToClipboard);
  }

  render() {
    const { copiedToClipboard } = this.state;
    const { jsx, less } = this.props;

    let code = '';

    if (jsx) {
      const componentCode = jsxToString(jsx, {
        ignoreProps: ['className']
      }).replace(/svgClassName=".*?"/ig, 'svgClassName="..."');

      code = `import { ${jsx.type.displayName} } from 'seek-style-guide/react';\n\n\n...\n\n\n${componentCode}`;
    } else if (less) {
      code = `@import (reference) "~seek-style-guide/theme";\n\n\n.element {\n  .${less}\n}`;
    }

    return (
      <CopyToClipboard text={code} onCopy={this.copiedToClipboard}>
        <div className={styles.root} onMouseLeave={this.resetCopiedToClipboard}>
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
