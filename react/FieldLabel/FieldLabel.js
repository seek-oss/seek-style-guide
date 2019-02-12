import styles from './FieldLabel.less';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';

import Text from '../Text/Text';
import Strong from '../Strong/Strong';
import Secondary from '../Secondary/Secondary';

function combineClassNames(props = {}, ...classNames) {
  const { className, ...restProps } = props;

  return {
    className: classnames.apply(null, [...classNames, className]), // eslint-disable-line no-useless-call
    ...restProps
  };
}

export default class FieldLabel extends Component {
  static displayName = 'FieldLabel';

  static propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.node,
    /* eslint-disable consistent-return */
    labelProps: (props, propName, componentName) => {
      const { id, label, labelProps } = props;
      const { htmlFor: labelFor } = labelProps || {};

      if (typeof labelProps !== 'undefined' && typeof labelProps !== 'object') {
        return new Error(
          `Invalid prop \`labelProps\` of type \`${typeof labelProps}\` supplied to \`${componentName}\`, expected \`object\`.`
        );
      }

      if (!label && labelProps) {
        return new Error(
          `Specifying \`labelProps\` is redundant when \`label\` is not specified in ${componentName}.`
        );
      }

      if (labelFor && id) {
        return new Error(
          `\`labelProps.htmlFor\` will be overridden by \`id\` in ${componentName}. Please remove it.`
        );
      }
    },
    /* eslint-enable consistent-return */
    secondaryLabel: PropTypes.string,
    tertiaryLabel: PropTypes.node,
    raw: PropTypes.bool
  };

  static defaultProps = {
    label: '',
    secondaryLabel: '',
    tertiaryLabel: '',
    raw: false
  };

  constructor() {
    super();

    this.renderSecondary = this.renderSecondary.bind(this);
  }

  renderSecondary() {
    const { secondaryLabel } = this.props;

    if (!secondaryLabel) {
      return null;
    }

    return <Secondary>{secondaryLabel}</Secondary>;
  }

  renderTertiary() {
    const { tertiaryLabel } = this.props;

    if (!tertiaryLabel) {
      return null;
    }

    return <span className={styles.tertiary}>{tertiaryLabel}</span>;
  }

  render() {
    const { label, raw } = this.props;

    if (!label) {
      return null;
    }

    const { id, labelProps } = this.props;
    const allLabelProps = {
      htmlFor: id,
      ...combineClassNames(labelProps)
    };
    return (
      <label {...allLabelProps}>
        <Text raw={raw}>
          <Strong>{label}</Strong> {this.renderSecondary()}
          {this.renderTertiary()}
        </Text>
      </label>
    );
  }
}
