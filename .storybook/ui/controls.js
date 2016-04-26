import React, { Component, PropTypes } from 'react';
import logo from '!!raw!svgo!./logo.svg';
import { version } from 'json!../../package.json';

export default class StorybookControls extends Component {

  static propTypes = {
    storyStore: PropTypes.array,
    selectedKind: PropTypes.string,
    selectedStory: PropTypes.string,
    onKind: PropTypes.func,
    onStory: PropTypes.func
  };

  getKindNames() {
    const { storyStore = [] } = this.props;
    return storyStore.map(({ kind }) => kind);
  }

  getStories(kind) {
    const { storyStore } = this.props;
    const storiesInfo = storyStore.find(item => item.kind === kind);

    if (!storiesInfo) {
      return [];
    }
    return storiesInfo.stories;
  }

  fireOnKind(kind) {
    const { onKind } = this.props;
    if (onKind) onKind(kind);
  }

  fireOnStory(story) {
    const { onStory } = this.props;
    if (onStory) onStory(story);
  }

  renderStory(story) {
    const { selectedStory } = this.props;
    const storyStyle = {
      fontSize: 13,
      padding: '8px 0px 8px 10px',
      cursor: 'pointer',
    };

    if (story === selectedStory) {
      storyStyle.fontWeight = 'bold';
    }
    return (
      <div
        key={story}
        style={storyStyle}
        onClick={this.fireOnStory.bind(this, story)}
      >
        {story}
      </div>
    );
  }

  renderKind(kind) {
    const kindStyle = {
      fontSize: 15,
      padding: '10px 0px',
      cursor: 'pointer',
      borderBottom: '1px solid #EEE',
    };

    const { selectedKind } = this.props;
    if (kind === selectedKind) {
      const stories = this.getStories(selectedKind);
      kindStyle.fontWeight = 'bold';
      return (
        <div key={kind}>
          <div
            style={kindStyle}
            onClick={this.fireOnKind.bind(this, kind)}
          >
            {kind}
          </div>
          <div>
            {stories.map(this.renderStory.bind(this))}
          </div>
        </div>
      );
    }

    return (
      <div
        key={kind}
        style={kindStyle}
        onClick={this.fireOnKind.bind(this, kind)}
      >
        {kind}
      </div>
    );
  }

  render() {
    const kindNames = this.getKindNames();
    const mainStyle = {
      fontFamily: `
        -apple-system, ".SFNSText-Regular", "San Francisco", "Roboto",
        "Segoe UI", "Helvetica Neue", "Lucida Grande", sans-serif
      `,
      color: '#444',
    };

    const h1WrapStyle = {
      position: 'absolute',
      top: 0,
      right: '-10px',
      left: 0,
      textAlign: 'center'
    };

    const h1Style = {
      textTransform: 'uppercase',
      letterSpacing: '8px',
      fontSize: '12px',
      fontWeight: 'bolder',
      color: '#0D3880',
      borderBottom: '3px solid #0D3880',
      textAlign: 'center',
      borderRadius: '2px',
      padding: '5px',
      cursor: 'default',
      margin: 0
    };

    const listStyle = {
      overflowY: 'auto',
      position: 'absolute',
      top: '135px',
      right: '10px',
      bottom: '27px',
      left: '20px',
    };

    const versionStyle = {
      fontWeight: 'bolder',
      color: '#fff',
      backgroundColor: '#0D3880',
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: '-10px',
      textAlign: 'center',
      letterSpacing: '4px',
      fontSize: '12px',
      height: '27px',
      lineHeight: '27px',
    };

    const logoStyle = {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: '#0D3880',
      padding: '18px 10px'
    };

    return (
      <div style={mainStyle}>
        <div style={h1WrapStyle}>
          <div style={logoStyle} dangerouslySetInnerHTML={{ __html: logo }}></div>
          <h3 style={h1Style}>Style Guide</h3>
        </div>
        <div style={listStyle}>
          {kindNames.map(this.renderKind.bind(this))}
        </div>
        <div style={versionStyle}>
          {`v${version}`}
        </div>
      </div>
    );
  }
}
