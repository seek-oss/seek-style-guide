import React from 'react';
import PropTypes from 'prop-types';
import styles from './Loader.less';
import classnames from 'classnames';

export default function Loader({ inline }) {
  return (
    <div className={classnames(styles.root, { [styles.inline]: inline })}>
      <div className={styles.ball} />
      <div className={styles.ball} />
      <div className={styles.ball} />
    </div>
  );
}

Loader.propTypes = {
  inline: PropTypes.bool.isRequired
};

Loader.defaultProps = {
  inline: false
};
