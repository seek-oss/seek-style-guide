import svgMarkup from '!!raw!svgo!./ChevronIcon.svg';
import styles from './ChevronIcon.less';

import React, { Component, PropTypes } from 'react';

export default class ChevronIcon extends Component {

  static propTypes = {
    svgClassName: PropTypes.string,
    direction: React.PropTypes.oneOf([
      'up', 'down', 'right', 'left'
    ]).isRequired,
    className: PropTypes.string
  };

  static defaultProps = {
    svgClassName: '',
    className: ''
  };

  render() {
    const { svgClassName, direction, className } = this.props;
    const svgMarkupWithClassName = svgMarkup
      .replace('<svg ', `<svg class="${svgClassName}" `);
    const combinedProps = {
      ...this.props,
      className: `${styles.rotate}${styles[direction] ? ` ${styles[direction]}` : ''}${className ? ` ${className}` : ''}`
    };

    return <span dangerouslySetInnerHTML={{ __html: svgMarkupWithClassName }} { ...combinedProps } />;
  }

}
