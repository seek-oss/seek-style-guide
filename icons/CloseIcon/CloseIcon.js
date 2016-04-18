import svgMarkup from '!!raw!svgo!./CloseIcon.svg';

import React, { Component, PropTypes } from 'react';

export default class CloseIcon extends Component {

  static propTypes = {
    svgClassName: PropTypes.string
  };

  static defaultProps = {
    svgClassName: ''
  };

  render() {
    const svgMarkupWithClassName = svgMarkup
      .replace('<svg ', `<svg class="${this.props.svgClassName}" `);

    return <span dangerouslySetInnerHTML={{ __html: svgMarkupWithClassName }} { ...this.props } />;
  }

}
