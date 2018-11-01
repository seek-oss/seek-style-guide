import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radio from './Radio';
import Text from '../Text/Text';
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
      value: ''
    };
  }

  handleYes = () => {
    this.setState({
      value: 'Yes'
    });
  };

  handleNo = () => {
    this.setState({
      value: 'No'
    });
  };

  handleMaybe = () => {
    this.setState({
      value: 'Maybe'
    });
  };

  render() {
    const { component: DemoComponent, componentProps } = this.props;
    const { value } = this.state;

    return (
      <div className={demoStyles.root}>
        <Text subheading>Still in role</Text>
        <DemoComponent
          {...componentProps}
          id="Yes"
          label="Yes"
          checked={value === 'Yes'}
          onChange={this.handleYes}
        />
        <DemoComponent
          {...componentProps}
          id="No"
          label="No"
          checked={value === 'No'}
          onChange={this.handleNo}
        />
        <DemoComponent
          {...componentProps}
          id="Maybe"
          label="Maybe - Very long label which goes over many lines."
          checked={value === 'Maybe'}
          onChange={this.handleMaybe}
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
    name: 'stillInRole',
    // Documentation only:
    id: 'myRadio',
    checked: false,
    onChange: () => {}
  },
  options: []
};
