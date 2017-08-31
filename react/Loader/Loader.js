import React from 'react';
import PropTypes from 'prop-types';
import styles from './Loader.less';
import classnames from 'classnames';

export default function Loader({ _small }) {
  return (
    <div className={classnames(styles.root, { [styles._small]: _small })}>
      <div className={styles.ball} />
      <div className={styles.ball} />
      <div className={styles.ball} />
    </div>
  );
}

Loader.propTypes = {
  _small: PropTypes.bool
};

Loader.defaultProps = {
  _small: false
};
