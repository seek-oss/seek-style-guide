import React, { Component } from 'react';

export default class HSplit extends Component {
  constructor(...args) {
    super(...args);
    this.state = {};
  }

  render() {
    const wrapStyle = {
      cursor: 'row-resize',
      width: '100%',
      height: '10px',
      marginTop: '-10px',
      marginBottom: '-10px',
      position: 'relative',
      borderTop: '1px solid #0D3880',
      backgroundColor: '#F7F7F7'
    };

    const spanStyle = {
      height: '1px',
      width: '20px',
      top: '5px',
      left: '50%',
      marginLeft: '-10px',
      position: 'absolute',
      borderTop: 'solid 1px #0D3880',
      borderBottom: 'solid 1px #0D3880',
    };

    return (
      <div style={wrapStyle}>
        <span style={spanStyle}></span>
      </div>
    );
  }
}
