import svgMarkup from './HelpIcon.svg';

import React, { Component, PropTypes } from 'react';

export default class HelpIcon extends Component {

  static displayName = 'HelpIcon';

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
