import svgMarkup from './PlusIcon.svg';

import React, { Component, PropTypes } from 'react';

export default class PlusIcon extends Component {

  static displayName = 'PlusIcon';

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