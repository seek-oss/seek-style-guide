import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Checkbox, { STANDARD, BUTTON } from './Checkbox';
import * as sketch from './Checkbox.sketch';
import demoStyles from './Checkbox.demo.less';
import fieldMessageOptions from '../FieldMessage/FieldMessage.demoFragment';

class CheckboxContainer extends Component {
  static propTypes = {
    component: PropTypes.func.isRequired,
    componentProps: PropTypes.object.isRequired
  };

  constructor() {
    super();

    this.state = {
      checked1: false,
      checked2: false
    };
  }

  handleChange1 = event => {
    this.setState({
      checked1: event.target.checked
    });
  };

  handleChange2 = event => {
    this.setState({
      checked2: event.target.checked
    });
  };

  render() {
    const { component: DemoComponent, componentProps } = this.props;
    const { checked1, checked2 } = this.state;

    return (
      <div
        className={classnames({
          [demoStyles.root_isStandard]: componentProps.type === STANDARD,
          [demoStyles.root_isButton]: componentProps.type === BUTTON
        })}
      >
        <DemoComponent
          {...componentProps}
          id="fullTime"
          label="Full time"
          checked={checked1}
          onChange={this.handleChange1}
        />
        <DemoComponent
          {...componentProps}
          id="partTime"
          label="Part time / casual / vacation"
          checked={checked2}
          onChange={this.handleChange2}
        />
      </div>
    );
  }
}

export default {
  route: '/checkbox',
  title: 'Checkbox',
  category: 'Form',
  component: Checkbox,
  container: CheckboxContainer,
  sketch,
  initialProps: {
    type: 'standard',
    // Documentation only:
    label: 'Full Time',
    checked: false,
    onChange: () => {}
  },
  options: [
    {
      label: 'Type',
      type: 'radio',
      states: [
        {
          label: 'Standard',
          transformProps: props => props
        },
        {
          label: 'Button',
          transformProps: props => ({
            ...props,
            type: 'button'
          })
        }
      ]
    },
    ...fieldMessageOptions
  ]
};
