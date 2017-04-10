import React, { Component, PropTypes } from 'react';
import './StandaloneProvider.less';
import cssSelectorPrefix from '../../cssSelectorPrefix';

export default class StandaloneProvider extends Component {
  static propTypes = {
    component: PropTypes.func.isRequired,
    registerPropsUpdater: PropTypes.func.isRequired,
    initialProps: PropTypes.object
  };

  constructor(props) {
    super(props);

    this.props.registerPropsUpdater(this.updateProps.bind(this));

    this.state = {
      componentProps: this.props.initialProps
    };
  }

  updateProps(componentProps) {
    this.setState({ componentProps });
  }

  render() {
    const { component: StandaloneComponent } = this.props;
    const { componentProps } = this.state;

    return (
      <div className={cssSelectorPrefix.replace('.', '')}>
        <StandaloneComponent {...componentProps} />
      </div>
    );
  }
}
