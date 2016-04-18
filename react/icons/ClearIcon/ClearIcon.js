import svgMarkup from '!!raw!svgo!./ClearIcon.svg';

import React, { Component, PropTypes } from 'react';

export default class ClearIcon extends Component {

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
