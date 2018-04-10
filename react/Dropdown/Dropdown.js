import styles from './Dropdown.less';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';

import ChevronIcon from '../ChevronIcon/ChevronIcon';

import FieldMessage from '../private/FieldMessage/FieldMessage';
import FieldLabel from '../private/FieldLabel/FieldLabel';

function combineClassNames(props = {}, ...classNames) {
  const { className, ...restProps } = props;

  return {
    className: classnames.apply(null, [...classNames, className]), // eslint-disable-line no-useless-call
    ...restProps
  };
}

export default class Dropdown extends Component {
  static displayName = 'Dropdown';

  static propTypes = {
    /* eslint-disable consistent-return */
    id: (props, propName, componentName) => {
      const { id } = props;

      if (typeof id !== 'string') {
        return new Error(`Invalid prop \`id\` of type \`${typeof id}\` supplied to \`${componentName}\`, expected \`string\`.`);
      }
    },
    /* eslint-enable consistent-return */
    className: PropTypes.string,
    valid: PropTypes.bool,
    /* eslint-disable consistent-return */
    inputProps: (props, propName, componentName) => {
      const { id, inputProps } = props;
      const { id: inputId, value } = inputProps || {};

      if (typeof inputProps !== 'object') {
        return new Error(`Invalid prop \`inputProps\` of type \`${typeof inputProps}\` supplied to \`${componentName}\`, expected \`object\`.`);
      }

      if (typeof value !== 'string') {
        return new Error(`Invalid prop \`inputProps.value\` of type \`${typeof value}\` supplied to \`${componentName}\`, expected \`string\`.`);
      }

      if (inputId && id) {
        return new Error(`\`inputProps.id\` will be overridden by \`id\` in ${componentName}. Please remove it.`);
      }
    },
    /* eslint-enable consistent-return */
    options: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.oneOfType([
          PropTypes.arrayOf(PropTypes.shape({
            value: PropTypes.string,
            label: PropTypes.string
          })),
          PropTypes.string
        ]).isRequired,
        label: PropTypes.string
      })
    ),
    placeholder: PropTypes.string
  };

  static defaultProps = {
    id: '',
    className: '',
    placeholder: '',
    options: []
  };

  constructor() {
    super();

    this.renderSelect = this.renderSelect.bind(this);
  }

  renderOption({ value, label }) {
    return (<option
      value={value}
      key={value}
      className={styles.option}>
      { label }
    </option>);
  }
  renderSelect() {
    const { inputProps, id, options, placeholder } = this.props;
    const inputStyles = classnames({
      [styles.dropdown]: true,
      [styles.placeholderSelected]: !inputProps.value
    });
    const allInputProps = {
      ...combineClassNames(inputProps, inputStyles),
      ...(id ? { id } : {})
    };

    return (
      <select {...allInputProps}>
        <option
          value=""
          disabled={true}>
          { placeholder }
        </option>
        {
          options.map(({ value, label }) => {
            if (Array.isArray(value)) {
              return (<optgroup value="" label={label} key={label}>{value.map(this.renderOption)}</optgroup>);
            }
            return this.renderOption({ value, label });
          })
        }
      </select>
    );
  }

  renderChevron() {
    return (
      <div className={styles.chevron}>
        <ChevronIcon
          svgClassName={styles.chevronSvg}
          direction="down"
        />
      </div>
    );
  }

  render() {
    const { className, valid } = this.props;
    const classNames = classnames({
      [styles.root]: true,
      [styles.invalid]: valid === false,
      [className]: className
    });

    // eslint-disable-next-line react/prop-types
    const { id, label, labelProps, secondaryLabel, tertiaryLabel, invalid, help, helpProps, message, messageProps } = this.props;

    return (
      <div className={classNames}>
        <FieldLabel {...{ id, label, labelProps, secondaryLabel, tertiaryLabel }} />
        {this.renderChevron()}
        {this.renderSelect()}
        <FieldMessage {...{ invalid, help, helpProps, valid, message, messageProps }} />
      </div>
    );
  }
}
