import styles from './AsidedLayout.less';
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const defaultRenderAside = () => null;

const conditionallyRenderAside = (condition, renderAside, classNameAside, size) => (
  condition ?
    <div
      className={classnames({
        [classNameAside]: classNameAside,
        [styles.aside]: true
      })}
      style={{ flexBasis: size }}>
      {renderAside()}
    </div> :
    null
);

export default function AsidedLayout({ className, children, renderAside = defaultRenderAside, classNameAside, size, reverse, ...restProps }) {
  return (
    <div
      {...restProps}
      className={classnames({
        [className]: className,
        [styles.root]: true,
        [styles.reverse]: reverse
      })}>
      { conditionallyRenderAside(reverse, renderAside, classNameAside, size) }
      <div className={styles.content}>
        {children}
      </div>
      { conditionallyRenderAside(!reverse, renderAside, classNameAside, size) }
    </div>
  );
}

AsidedLayout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  renderAside: PropTypes.func,
  classNameAside: PropTypes.string,
  size: PropTypes.string,
  reverse: PropTypes.bool
};
