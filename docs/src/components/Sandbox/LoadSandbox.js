import React, { Component } from 'react';
import Loader from 'seek-style-guide/react/Loader/Loader';

export default class LoadSandbox extends Component {
  state = {
    Sandbox: null
  };

  componentDidMount() {
    import('./Sandbox').then(({ default: Sandbox }) => {
      this.setState({ Sandbox });
    });
  }

  render() {
    const { Sandbox } = this.state;

    return !Sandbox ?
      <Loader style={{ marginTop: 6 * 10 }} /> :
      <Sandbox />;
  }
}
