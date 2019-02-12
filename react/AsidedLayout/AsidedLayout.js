import styles from './AsidedLayout.less';
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const LEFT = 'left';
const RIGHT = 'right';

const defaultRenderAside = () => null;

const conditionallyRenderAside = (
  condition,
  renderAside,
  classNameAside,
  size,
  position
) =>
  condition ? (
    <div
      className={classnames({
        [classNameAside]: classNameAside,
        [styles.leftAside]: position === LEFT,
        [styles.rightAside]: position !== LEFT,
        [styles.aside]: true
      })}
      style={{ flexBasis: size }}
    >
      {renderAside()}
    </div>
  ) : null;

export default function AsidedLayout({
  className,
  children,
  position,
  renderAside = defaultRenderAside,
  classNameAside,
  size,
  reverse,
  ...restProps
}) {
  const renderAsideBeforeContent = position === LEFT ? !reverse : reverse;
  return (
    <div
      {...restProps}
      className={classnames({
        [className]: className,
        [styles.root]: true,
        [styles.reverse]: reverse
      })}
    >
      {conditionallyRenderAside(
        renderAsideBeforeContent,
        renderAside,
        classNameAside,
        size,
        position
      )}
      <div className={styles.content}>{children}</div>
      {conditionallyRenderAside(
        !renderAsideBeforeContent,
        renderAside,
        classNameAside,
        size,
        position
      )}
    </div>
  );
}

AsidedLayout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  renderAside: PropTypes.func,
  classNameAside: PropTypes.string,
  size: PropTypes.string,
  position: PropTypes.oneOf([LEFT, RIGHT]),
  reverse: PropTypes.bool
};

AsidedLayout.defaultProps = {
  position: RIGHT
};
