import React, { Component, PropTypes } from 'react';

import VSplit from './layout_vsplit';
import HSplit from './layout_hsplit';
import SplitPane from '@kadira/react-split-pane';

export default class Layout extends React.Component {

  static propTypes = {
    controls: PropTypes.element.isRequired,
    preview: PropTypes.element.isRequired,
    actionLogger: PropTypes.element.isRequired,
  };

  render() {
    const { controls, preview, actionLogger } = this.props;

    const rootStyles = {
      height: '100vh',
      backgroundColor: '#F7F7F7',
    };

    const controlsStyle = {
      position: 'absolute',
      width: '100%',
      height: '100%',
    };

    const actionStyle = {
      position: 'absolute',
      width: '100%',
      height: '100%',
      padding: '5px 10px 10px 10px',
      boxSizing: 'border-box',
    };

    const previewStyle = {
      position: 'absolute',
      width: '100%',
      height: '100%',
      padding: '10px',
      boxSizing: 'border-box',
      backgroundColor: '#EEEEEE'
    };

    const vsplit = <VSplit />;
    const hsplit = <HSplit />;

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
          <SplitPane
            split="horizontal" primary="second" minSize={100}
            defaultSize={200} resizerChildren={hsplit}
            onDragStarted={onDragStart} onDragFinished={onDragEnd}
          >
            <div style={previewStyle}>
              {preview}
            </div>
            <div style={actionStyle}>
              {actionLogger}
            </div>
          </SplitPane>
        </SplitPane>
      </div>
    );
  }
}
