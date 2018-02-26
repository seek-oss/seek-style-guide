import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radio from './Radio';
import * as sketch from './Radio.sketch';
import demoStyles from './Radio.demo.less';

class RadioContainer extends Component {
  static propTypes = {
    component: PropTypes.func.isRequired,
    componentProps: PropTypes.object.isRequired
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
    const { component: DemoComponent, componentProps } = this.props;
    const { checked } = this.state;

    return (
      <div className={demoStyles.root}>
        <DemoComponent
          {...componentProps}
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
  route: '/radio',
  title: 'Radio',
  category: 'Form',
  component: Radio,
  container: RadioContainer,
  sketch,
  initialProps: {
    id: 'stillInRole',
    label: 'Still in role',
    // Documentation only:
    inputProps: {
      checked: false,
      onChange: () => {}
    }
  },
  options: []
};
