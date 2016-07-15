import styles from './StarIcon.less';

import svgMarkup from './StarIcon.svg';
import svgMarkupFilled from './StarIconFilled.svg';

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

export default class StarIcon extends Component {

  static displayName = 'StarIcon';

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
    const { svgClassName, className, filled, ...restProps } = this.props;
    const svgMarkupWithClassName = this.getSvg()
      .replace('<svg ', `<svg class="${svgClassName}" `);
    const combinedProps = {
      ...restProps,
      className: classnames(className, {
        [styles.filled]: filled
      })
    };

    /* eslint-disable react/no-danger */
    return (
      <span
        dangerouslySetInnerHTML={{ __html: svgMarkupWithClassName }}
        {...combinedProps} />
    );
    /* eslint-enable react/no-danger */
  }

}
