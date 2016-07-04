import styles from './PinkButton.less';

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

export default class PinkButton extends Component {

  static displayName = 'PinkButton';

  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]).isRequired,
    className: PropTypes.string,
    loading: PropTypes.bool
  };

  static defaultProps = {
    className: '',
    loading: false
  };

  constructor() {
    super();

    this.storeButtonReference = this.storeButtonReference.bind(this);
  }

  storeButtonReference(button) {
    if (button !== null) {
      this.button = button;
    }
  }

  render() {
    const { className, loading, children, ...props } = this.props;

    const combinedProps = {
      type: 'button',
      className: classnames(styles.root, className, {
        [styles.loading]: loading
      }),
      disabled: loading,
      ref: this.storeButtonReference,
      ...props
    };

    return (
      <button {...combinedProps}>
        { children }
      </button>
    );
  }

}
