import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import urlJoin from 'url-join';

const collectStylesheetContents = baseHref => {
  const sheetPromises = Array.from(document.querySelectorAll('link[rel="stylesheet"]'))
    .map(el => {
      const href = el.getAttribute('href');
      const url = urlJoin(baseHref, href);

      return axios.get(url).then(({ data }) => data);
    });

  return Promise.all(sheetPromises)
    .then(sheets => sheets.join('\n'));
};

const collectStyleTagContents = () => {
  return Array.from(document.querySelectorAll('style'))
    .map(el => el.innerHTML)
    .join('\n');
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
    const styleTagContents = collectStyleTagContents();

    collectStylesheetContents(baseHref).then(stylesheetContents => {
      this.setState({
        styleContent: `${stylesheetContents}\n${styleTagContents}`
      });
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
