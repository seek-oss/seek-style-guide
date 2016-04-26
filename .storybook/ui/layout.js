import React, { Component, PropTypes } from 'react';

import VSplit from './layout_vsplit';
import SplitPane from '@kadira/react-split-pane';

export default class Layout extends React.Component {

  static propTypes = {
    controls: PropTypes.element.isRequired,
    preview: PropTypes.element.isRequired,
  };

  render() {
    const { controls, preview } = this.props;

    const rootStyles = {
      height: '100vh',
      backgroundColor: '#F7F7F7',
    };

    const controlsStyle = {
      position: 'absolute',
      width: '100%',
      height: '100%',
    };

    const previewStyle = {
      position: 'absolute',
      width: '100%',
      height: '100%',
      boxSizing: 'border-box',
      backgroundColor: '#EEEEEE'
    };

    const vsplit = <VSplit />;

    const onDragStart = function () {
      document.body.classList.add('dragging');
    };

    const onDragEnd = function () {
      document.body.classList.remove('dragging');
    };

    return (
      <div style={rootStyles}>
        <SplitPane
          split="vertical" minSize={250} resizerChildren={vsplit}
          onDragStarted={onDragStart} onDragFinished={onDragEnd}
        >
          <div style={controlsStyle}>
            {controls}
          </div>
            <div style={previewStyle}>
              {preview}
            </div>
        </SplitPane>
      </div>
    );
  }
}
