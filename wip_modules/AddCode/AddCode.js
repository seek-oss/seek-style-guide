import styles from './AddCode.less';

import React, { Children, Component, PropTypes } from 'react';
import debounce from 'lodash.debounce';
import jsxToString from 'jsx-to-string';
import { PrismCode } from 'react-prism'
import CopyToClipboard from 'react-copy-to-clipboard';

// Hack. Please show me a better way :)
const cssModulesClassNameRegex = /\b[\w-]+___\w+\b/g;

function getCode(element) {
  return jsxToString(element)
    .replace(cssModulesClassNameRegex, '...');
}

export default class AddCode extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  constructor() {
    super();

    this.state = {
      isCodeVisible: false,
      copiedToClipboard: false
    };

    this.debouncedResetCopiedToClipboard =
      debounce(this.resetCopiedToClipboard, 5000);

    this.resetCopiedToClipboard = this.resetCopiedToClipboard.bind(this);
    this.toggleCodeVisibility = this.toggleCodeVisibility.bind(this);
    this.copiedToClipboard = this.copiedToClipboard.bind(this);
  }

  toggleCodeVisibility() {
    const { isCodeVisible } = this.state;

    this.setState({
      isCodeVisible: !isCodeVisible
    });
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
    const { isCodeVisible, copiedToClipboard } = this.state;
    const child = Children.only(this.props.children);
    const code = getCode(child);

    return (
      <div className={styles.root}>
        {child}
        <div className={styles.buttonsContainer}>
          <button className={styles.showHideButton} onClick={this.toggleCodeVisibility}>
            {isCodeVisible ? 'Hide code' : 'Show code'}
          </button>
        </div>
        {
          isCodeVisible &&
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
        }
      </div>
    );
  }
}
