import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FieldLabel from './FieldLabel';
import demoFragment from './FieldLabel.demoFragment';

class FieldLabelContainer extends Component {
  static propTypes = {
    component: PropTypes.func.isRequired,
    componentProps: PropTypes.object.isRequired
  };
  render() {
    const { component: DemoComponent, componentProps } = this.props;

    return (
      <div style={{ width: '300px' }}>
        <DemoComponent {...componentProps} />
      </div>
    );
  }
}

export default {
  route: '/field-label',
  title: 'Field Label',
  category: 'Form',
  component: FieldLabel,
  container: FieldLabelContainer,
  initialProps: {
    id: 'id-label',
    label: 'Field Label'
  },
  options: demoFragment
};
