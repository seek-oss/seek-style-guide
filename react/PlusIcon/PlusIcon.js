import svgMarkup from './PlusIcon.svg';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PlusIcon extends Component {
  static displayName = 'PlusIcon';

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
        {...restProps}
      />
    );
    /* eslint-enable react/no-danger */
  }
}
