import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { transform } from 'buble/dist/buble-browser.cjs.js'; // Fix for https://github.com/Rich-Harris/buble/issues/159
import scopeEval from 'scope-eval';

export default class RenderJsx extends Component {
  static displayName = 'RenderJsx';

  static propTypes = {
    jsx: PropTypes.string.isRequired,
    scope: PropTypes.object,
    initialState: PropTypes.object
  };

  static defaultProps = {
    scope: {},
    initialState: {}
  };

  constructor(props) {
    super(props);

    this.state = this.props.initialState;
  }

  render() {
    const { jsx, scope } = this.props;

    const fragment = `<React.Fragment>${jsx.trim() || '<React.Fragment />'}</React.Fragment>`;
    const { code } = transform(fragment);
    const el = scopeEval(code, { ...scope, React, this: this });

    return el;
  }
}
