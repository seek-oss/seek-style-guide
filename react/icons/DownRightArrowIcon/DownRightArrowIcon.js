import svgMarkup from './DownRightArrowIcon.svg';
import styles from './DownRightArrowIcon.less';

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

export default class DownRightArrowIcon extends Component {

  static displayName = 'DownRightArrowIcon';

  static propTypes = {
    className: PropTypes.string,
    svgClassName: PropTypes.string
  };

  static defaultProps = {
    className: '',
    svgClassName: ''
  };

  render() {
    const { className, svgClassName, ...props } = this.props;
    const svgMarkupWithClassName = svgMarkup
      .replace('<svg ', `<svg class="${svgClassName}" `);
    const combinedProps = {
      props,
      className: classnames(styles.root, className)
    };

    return (
      <span {...combinedProps} dangerouslySetInnerHTML={{ __html: svgMarkupWithClassName }} /> // eslint-disable-line react/no-danger
    );
  }

}
