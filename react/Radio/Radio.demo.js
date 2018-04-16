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
          inputProps={{
            checked: value === 'Yes',
            onChange: this.handleYes
          }}
        />
        <DemoComponent
          {...componentProps}
          id="No"
          label="No"
          inputProps={{
            checked: value === 'No',
            onChange: this.handleNo
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
    name: 'stillInRole',
    // Documentation only:
    id: 'myRadio',
    inputProps: {
      checked: false,
      onChange: () => {}
    }
  },
  options: []
};
