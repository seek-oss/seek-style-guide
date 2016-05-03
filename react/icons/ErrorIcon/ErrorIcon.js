import styles from './ErrorIcon.less';

import svgMarkup from './ErrorIcon.svg';
import svgMarkupFilled from './ErrorIconFilled.svg';

import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

export default class ErrorIcon extends Component {

  static propTypes = {
    svgClassName: PropTypes.string,
    className: PropTypes.string,
    filled: PropTypes.bool
  };

  static defaultProps = {
    svgClassName: '',
    className: '',
    filled: false
  };

  getSvg() {
    const { filled } = this.props;

    return filled ? svgMarkupFilled : svgMarkup;
  }

  render() {
    const { svgClassName, className, ...props } = this.props;

    const svgMarkupWithClassName = this.getSvg()
      .replace('<svg ', `<svg class="${svgClassName}" `);

    return (
      <span
        className={classNames(styles.root, className)}
        dangerouslySetInnerHTML={{ __html: svgMarkupWithClassName }}
        { ...props }
      />
    );
  }

}
