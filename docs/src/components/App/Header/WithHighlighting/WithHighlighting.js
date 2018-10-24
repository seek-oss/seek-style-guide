import React from 'react';
import { ChevronIcon, Highlight } from 'seek-style-guide/react';
import styles from './WithHighlighting.less';

const WithHighlighting = ({ highlighted, children }) => {
  if (highlighted) {
    return (
      <Highlight tone="neutral">
        <div className={styles.highlightWrapper}>
          <ChevronIcon direction="right" className={styles.highlightedIcon} />
          {children}
        </div>
      </Highlight>
    );
  }

  return children;
};
export default WithHighlighting;
