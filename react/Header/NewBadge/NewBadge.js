import styles from './NewBadge.less';
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const NewBadge = ({ className, ...restProps }) => {
  const rootClasses = classnames({
    [styles.root]: true,
    [className]: className
  });
  return <span className={rootClasses} {...restProps}>New</span>;
};

NewBadge.propTypes = {
  className: PropTypes.string
};

export default NewBadge;
