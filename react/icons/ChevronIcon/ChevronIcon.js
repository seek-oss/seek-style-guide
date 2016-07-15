import svgMarkup from './ChevronIcon.svg';
import styles from './ChevronIcon.less';

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

export default class ChevronIcon extends Component {

  static displayName = 'ChevronIcon';

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
    const { svgClassName, direction, className, ...restProps } = this.props;
    const svgMarkupWithClassName = svgMarkup
      .replace('<svg ', `<svg class="${svgClassName}" `);
    const combinedProps = {
      ...restProps,
      className: classnames(className, styles.rotate, styles[direction])
    };

    /* eslint-disable react/no-danger */
    return (
      <span
        dangerouslySetInnerHTML={{ __html: svgMarkupWithClassName }}
        { ...combinedProps } />
    );
    /* eslint-enable react/no-danger */
  }

}
