import styles from './FieldLabel.less';

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

import Text from '../../Text/Text';

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
    /* eslint-disable consistent-return */
    id: (props, propName, componentName) => {
      const { id, label } = props;

      if (label && !id) {
        return new Error(`When ${componentName} has a \`label\`, it should also have an \`id\`.`);
      }
    },
    /* eslint-enable consistent-return */
    label: PropTypes.string,
    /* eslint-disable consistent-return */
    labelProps: (props, propName, componentName) => {
      const { id, label, labelProps } = props;
      const { htmlFor: labelFor } = labelProps || {};

      if (typeof labelProps !== 'undefined' && typeof labelProps !== 'object') {
        return new Error(`Invalid prop \`labelProps\` of type \`${typeof labelProps}\` supplied to \`${componentName}\`, expected \`object\`.`);
      }

      if (!label && labelProps) {
        return new Error(`Specifying \`labelProps\` is redundant when \`label\` is not specified in ${componentName}.`);
      }

      if (labelFor && id) {
        return new Error(`\`labelProps.htmlFor\` will be overridden by \`id\` in ${componentName}. Please remove it.`);
      }
    },
    /* eslint-enable consistent-return */
    secondaryLabel: PropTypes.string
  };

  static defaultProps = {
    label: '',
    secondaryLabel: ''
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

    return (
      <span className={styles.secondaryLabel}>
        {secondaryLabel}
      </span>
    );
  }

  render() {
    const { label } = this.props;

    if (!label) {
      return null;
    }

    const { labelProps, id } = this.props;
    const allLabelProps = {
      ...combineClassNames(labelProps, styles.label),
      ...(id ? { htmlFor: id } : {})
    };
    return (
      <label {...allLabelProps}>
        <Text>{label} {this.renderSecondary()}</Text>
      </label>
    );
  }
}
