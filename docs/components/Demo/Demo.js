import React, { Component, PropTypes } from 'react';

export default class Demo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeStates: {}
    };
  }

  renderOption = (option, key) => {
    const { activeStates } = this.state;

    return (
      <div key={key}>
        <ul>
          {
            option.states.map((state, i) => {
              const checked = Boolean(
                activeStates[option.label] &&
                activeStates[option.label].indexOf(state.label) > -1
              );

              return (
                <li key={i}>
                  <label>
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={this.makeChangeHandler(option, state)}
                    />
                    { state.label }
                  </label>
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  };

  makeChangeHandler = (option, state) => event => {
    const { checked } = event.target;
    const { activeStates } = this.state;

    if (checked) {
      this.setState({
        activeStates: {
          [option.label]: (activeStates[option.label] || [])
            .concat(state.label)
        }
      });
    } else {
      this.setState({
        activeStates: {
          [option.label]: (activeStates[option.label] || [])
            .filter(label => label !== state.label)
        }
      });
    }
  };

  calculateProps = () => {
    const { spec: { initialProps, options } } = this.props;
    const { activeStates } = this.state;

    return options.reduce((outerProps, option) => {
      const { states } = option;

      return states.reduce((innerProps, state) => {
        if (activeStates[option.label] && activeStates[option.label].indexOf(state.label) > -1) {
          return state.reduceProps(innerProps);
        }

        return innerProps;
      }, outerProps);
    }, initialProps);
  }

  render() {
    const { component: DemoComponent, spec } = this.props;
    const { options } = spec;

    return (
      <div>
        <DemoComponent {...this.calculateProps()} />
        {
          options.map(this.renderOption)
        }
      </div>
    );
  }
}

Demo.propTypes = {
  component: PropTypes.any.isRequired,
  spec: PropTypes.object.isRequired
};
