import styles from './Story.less';

import React, { Component, PropTypes } from 'react';

export default class Story extends Component {

  static propTypes = {
    title: PropTypes.string,
    children: PropTypes.node
  };

  render() {
    const { children, title } = this.props;

    return (
      <div>
        <h1 className={styles.storyHeading}>{title}</h1>
        <div className={styles.story}>
        { children }
        </div>
      </div>
    );
  }

}
