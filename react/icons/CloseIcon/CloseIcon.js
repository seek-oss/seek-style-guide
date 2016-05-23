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
    const svgMarkupWithClassName = svgMarkup
      .replace('<svg ', `<svg class="${this.props.svgClassName}" `);

    return <span dangerouslySetInnerHTML={{ __html: svgMarkupWithClassName }} { ...this.props } />; // eslint-disable-line react/no-danger
  }

}
