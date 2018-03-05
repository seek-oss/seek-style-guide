import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Button } from 'seek-asia-style-guide/react';
import styles from './MenuItem.less';

const withIcon = ({ ItemIcon, children, brandStyles, itemClass, iconProps = {} }) => {
  iconProps.svgClassName = iconProps.svgClassName ? classnames(iconProps.svgClassName, brandStyles.menuIcon) : brandStyles.menuIcon;

  return [
    ...(ItemIcon ? [(<ItemIcon key="icon" className={styles.icon} {...iconProps} />)] : []),
    <span key="children" className={itemClass}>{children}</span>
  ];
};

const interactionButton = ({ ItemIcon, children, iconProps, brandStyles, itemClass, ...restProps }) => {
  return (
    <Button {...restProps}>
      { withIcon({ ItemIcon, children, iconProps, brandStyles, itemClass }) }
    </Button>
  );
};

interactionButton.propTypes = {
  ItemIcon: PropTypes.func,
  children: PropTypes.any,
  iconProps: PropTypes.object,
  brandStyles: PropTypes.object,
  itemClass: PropTypes.string
};

const renderInteraction = ({ linkUrl, handleClick, children, ItemIcon, itemClass, iconProps, brandStyles }) => {
  const interactionProps = {
    color: 'transparent',
    component: 'a',
    className: styles.item,
    children,
    ItemIcon,
    iconProps,
    brandStyles,
    itemClass
  };

  if (linkUrl) {
    return interactionButton({
      ...interactionProps,
      href: linkUrl
    });
  } else if (handleClick) {
    return interactionButton({
      ...interactionProps,
      onClick: handleClick
    });
  }

  return (
    <span className={styles.item}>
      { withIcon({ ItemIcon, children, iconProps, brandStyles, itemClass }) }
    </span>
  );
};

renderInteraction.propTypes = {
  linkUrl: PropTypes.string,
  handleClick: PropTypes.func,
  children: PropTypes.any,
  ItemIcon: PropTypes.func,
  itemClass: PropTypes.string,
  iconProps: PropTypes.object,
  brandStyles: PropTypes.object
};

const MenuItem = ({ className, ...restProps }) => {
  return (
    <div className={classnames(styles.root, className)}>
      {renderInteraction({ ...restProps })}
    </div>
  );
};

MenuItem.propTypes = {
  className: PropTypes.string
};

export default MenuItem;
