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
    const { className, svgClassName, ...restProps } = this.props;
    const svgMarkupWithClassName = svgMarkup
      .replace('<svg ', `<svg class="${svgClassName}" `);
    const combinedProps = {
      ...restProps,
      className: classnames(styles.root, className)
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
