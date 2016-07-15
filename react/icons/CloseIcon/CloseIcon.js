import svgMarkup from './CloseIcon.svg';

import React, { Component, PropTypes } from 'react';

export default class CloseIcon extends Component {

  static displayName = 'CloseIcon';

  static propTypes = {
    svgClassName: PropTypes.string
  };

  static defaultProps = {
    svgClassName: ''
  };

  render() {
    const { svgClassName, ...restProps } = this.props;
    const svgMarkupWithClassName = svgMarkup
      .replace('<svg ', `<svg class="${svgClassName}" `);

    /* eslint-disable react/no-danger */
    return (
      <span
        dangerouslySetInnerHTML={{ __html: svgMarkupWithClassName }}
        {...restProps} />
    );
    /* eslint-enable react/no-danger */
  }

}
