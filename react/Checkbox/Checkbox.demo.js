import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Checkbox from './Checkbox';
import demoStyles from './Checkbox.demo.less';

class CheckboxContainer extends Component {
  static propTypes = {
    component: PropTypes.func.isRequired
  };

  constructor() {
    super();

    this.state = {
      checked: false
    };
  }

  handleChange = event => {
    this.setState({
      checked: event.target.checked
    });
  };

  render() {
    const { component: DemoComponent } = this.props;
    const { checked } = this.state;

    return (
      <div className={demoStyles.root}>
        <DemoComponent
          inputProps={{
            checked,
            onChange: this.handleChange
          }}
        />
      </div>
    );
  }
}

export default {
  route: '/checkbox',
  title: 'Checkbox',
  component: Checkbox,
  container: CheckboxContainer,
  initialProps: {
    id: 'stillInRole',
    label: 'Still in role',
    type: 'standard',
    // Documentation only:
    inputProps: {
      checked: false,
      onChange: () => {}
    }
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
        },
        {
          label: 'Multiline',
          transformProps: props => ({
            ...props,
            isMultiline: true,
            label: 'All Information & Communication Technology'
          })
        }
      ]
    }
  ]
};
