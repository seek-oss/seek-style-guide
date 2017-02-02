import styles from './AsidedLayout.less';
import React, { PropTypes } from 'react';
import classnames from 'classnames';

const defaultRenderAside = () => null;

const conditionallyRenderAside = (condition, renderAside, size) => (
  condition ?
    <div className={styles.aside} style={{ flexBasis: size }}>
      {renderAside()}
    </div> :
    null
);

export default function AsidedLayout({ className, children, renderAside = defaultRenderAside, size, reverse }) {
  return (
    <div
      className={classnames({
        [className]: className,
        [styles.root]: true,
        [styles.reverse]: reverse
      })}>
      { conditionallyRenderAside(reverse, renderAside, size) }
      <div className={styles.content}>
        {children}
      </div>
      { conditionallyRenderAside(!reverse, renderAside, size) }
    </div>
  );
}

AsidedLayout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  renderAside: PropTypes.func,
  size: PropTypes.string,
  reverse: PropTypes.bool
};
