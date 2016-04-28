import styles from './AddCode.less';

import React, { Children, Component, PropTypes } from 'react';
import jsxToString from 'jsx-to-string';
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

    this.toggleCodeVisibility = this.toggleCodeVisibility.bind(this);
    this.copiedToClipboard = this.copiedToClipboard.bind(this);
  }

  toggleCodeVisibility() {
    const { isCodeVisible } = this.state;

    this.setState({
      isCodeVisible: !isCodeVisible
    });
  }

  copiedToClipboard() {
    this.setState({
      copiedToClipboard: true
    }, () => {
      setTimeout(() => {
        this.setState({
          copiedToClipboard: false
        });
      }, 5000);
    });
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
          {
            isCodeVisible &&
              <CopyToClipboard text={code} onCopy={this.copiedToClipboard}>
                <button className={styles.copyToClipboardButton} disabled={copiedToClipboard}>
                  {copiedToClipboard ? 'Copied!' : 'Copy to clipboard'}
                </button>
              </CopyToClipboard>
          }
        </div>
        {
          isCodeVisible &&
            <pre className={styles.code}>
              {code}
            </pre>
        }
      </div>
    );
  }
}
