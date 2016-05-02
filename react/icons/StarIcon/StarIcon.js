import styles from './StarIcon.less';

import svgMarkup from './StarIcon.svg';
import svgMarkupFilled from './StarIconFilled.svg';

import React, { Component, PropTypes } from 'react';

export default class StarIcon extends Component {

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
    const { svgClassName, className, filled } = this.props;

    const svgMarkupWithClassName = this.getSvg()
      .replace('<svg ', `<svg class="${svgClassName}" `);

    const combinedProps = {
      ...this.props,
      className: `${className}${filled ? ` ${styles.filled}` : ''}`
    };

    return <span dangerouslySetInnerHTML={{ __html: svgMarkupWithClassName }} { ...combinedProps } />;
  }

}
