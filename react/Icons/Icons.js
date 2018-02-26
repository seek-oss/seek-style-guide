import styles from './Icons.less';

import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import Icon from '../private/Icon/Icon';

const iconGenerator = IconName => {
  const IconExportable = ({ filled, direction, className, ...props }) => {
    const markup = require(`./svg/${IconName}${filled ? 'Filled' : ''}.svg`);

    const combinedProps = {
      ...props,
      className: classnames({
        [styles[IconName]]: true,
        [styles.filled]: filled,
        [className]: className,
        [styles[direction]]: direction
      })
    };

    return <Icon markup={markup} {...combinedProps} />;
  };

  IconExportable.displayName = IconName;

  IconExportable.propTypes = {
    filled: PropTypes.bool,
    className: PropTypes.string,
    direction: PropTypes.oneOf([
      'up', 'down', 'right', 'left'
    ])
  };

  IconExportable.defaultProps = {
    filled: false,
    className: ''
  };

  return IconExportable;
};

export const CheckMarkIcon = iconGenerator('CheckMarkIcon');
export const ChevronIcon = iconGenerator('ChevronIcon');
export const ClearIcon = iconGenerator('ClearIcon');
export const CloseIcon = iconGenerator('CloseIcon');
export const CriticalIcon = iconGenerator('CriticalIcon');
export const CrossIcon = iconGenerator('CrossIcon');
export const DeleteIcon = iconGenerator('DeleteIcon');
export const DownRightArrowIcon = iconGenerator('DownRightArrowIcon');
export const ErrorIcon = iconGenerator('ErrorIcon');
export const FacebookIcon = iconGenerator('FacebookIcon');
export const HeartIcon = iconGenerator('HeartIcon');
export const HelpIcon = iconGenerator('HelpIcon');
export const InfoIcon = iconGenerator('InfoIcon');
export const LinkedInIcon = iconGenerator('LinkedInIcon');
export const MailIcon = iconGenerator('MailIcon');
export const PlusIcon = iconGenerator('PlusIcon');
export const ProfileIcon = iconGenerator('ProfileIcon');
export const SearchIcon = iconGenerator('SearchIcon');
export const StarIcon = iconGenerator('StarIcon');
export const ThumbsUpIcon = iconGenerator('ThumbsUpIcon');
export const TickCircleIcon = iconGenerator('TickCircleIcon');
export const TickIcon = iconGenerator('TickIcon');
export const TwitterIcon = iconGenerator('TwitterIcon');
