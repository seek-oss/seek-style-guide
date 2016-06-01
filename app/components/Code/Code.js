import styles from './Code.less';

import React, { Component, PropTypes } from 'react';
import debounce from 'lodash.debounce';
import jsxToString from 'jsx-to-string';
import { PrismCode } from 'react-prism';
import CopyToClipboard from 'react-copy-to-clipboard';

// Hack. Please show me a better way :)
const cssModulesClassNameRegex = /\b[\w-]+___\w+\b/g;

export default class Code extends Component {

  static propTypes = {
    jsx: PropTypes.element.isRequired
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
    const { jsx } = this.props;
    const code = jsxToString(jsx).replace(cssModulesClassNameRegex, '...');

    return (
      <CopyToClipboard text={code} onCopy={this.copiedToClipboard}>
        <div className={styles.code} onMouseLeave={this.resetCopiedToClipboard}>
          <pre>
            <PrismCode className="language-jsx">
              <code>
                {code}
              </code>
            </PrismCode>
          </pre>
          <span className={styles.message}>
            {copiedToClipboard ? 'Copied!' : 'Click to copy'}
          </span>
        </div>
      </CopyToClipboard>
    );
  }

}
