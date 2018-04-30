import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

const collectLinkHrefs = () => {
  return Array.from(document.querySelectorAll('link[rel="stylesheet"]'))
    .map(el => el.getAttribute('href'));
};

const collectStyleTagContent = () => {
  return Array.from(document.querySelectorAll('style'))
    .map(el => el.innerHTML)
    .join('');
};

export default class CollectStyles extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired
  };

  state = {
    linkHrefs: [],
    styleTagContent: ''
  };

  componentDidMount() {
    this.collect();
  }

  collect() {
    this.setState({
      linkHrefs: collectLinkHrefs(),
      styleTagContent: collectStyleTagContent()
    });
  }

  render() {
    const { styleTagContent, linkHrefs } = this.state;

    if (!styleTagContent && linkHrefs.length === 0) {
      return this.props.children(null);
    }

    return this.props.children(
      <Fragment>
        {linkHrefs.map((href, i) => <link key={i} rel="stylesheet" type="text/css" href={href} />)}
        <style type="text/css">{styleTagContent}</style>
      </Fragment>
    );
  }
}
