import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import urlJoin from 'url-join';

const collectStyleContent = baseHref => {
  const styleNodes = document.querySelectorAll('style, link[rel="stylesheet"]');

  const sheetPromises = Array.from(styleNodes).map(el => {
    if (el.nodeName === 'STYLE') {
      return Promise.resolve(el.innerHTML);
    }

    const href = el.getAttribute('href');
    const url = urlJoin(baseHref, href);

    return axios.get(url)
      .then(({ data }) => data)
      .catch(err => {
        console.error(`Failed to load CSS from ${url}`, err);
        return '';
      });
  });

  return Promise.all(sheetPromises)
    .then(sheets => sheets.join('\n'));
};

export default class CollectStyles extends Component {
  static propTypes = {
    baseHref: PropTypes.string,
    children: PropTypes.func.isRequired
  };

  static defaultProps = {
    baseHref: '/'
  };

  state = {
    styleContent: ''
  };

  componentDidMount() {
    const { baseHref } = this.props;

    collectStyleContent(baseHref).then(styleContent => {
      this.setState({ styleContent });
    });
  }

  render() {
    const { styleContent } = this.state;

    if (!styleContent) {
      return this.props.children(null);
    }

    return this.props.children(
      <style type="text/css">{styleContent}</style>
    );
  }
}
