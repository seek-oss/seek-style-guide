import React, { Component, PropTypes } from 'react';
import Code from './Code/Code';

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
        {
          option.type === 'radio' ? (
            <select onChange={this.makeSelectChangeHandler(option)}>
              {
                option.states.map((state, i) => {
                  const selected = (activeStates[option.label] === state.label);

                  return (
                    <option
                      key={i}
                      value={state.label}
                      selected={selected}>
                      { state.label }
                    </option>
                  );
                })
              }
            </select>
          ) : (
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
                          onChange={this.makeCheckboxChangeHandler(option, state)}
                        />
                        { state.label }
                      </label>
                    </li>
                  );
                })
              }
            </ul>
          )
        }
      </div>
    );
  };

  makeCheckboxChangeHandler = (option, state) => event => {
    const { checked } = event.target;
    const { [option.label]: currentValue = [], ...restState } = this.state.activeStates;

    if (checked) {
      this.setState({
        activeStates: {
          ...restState,
          [option.label]: option.type === 'radio' ? state.label :
            currentValue.concat(state.label)
        }
      });
    } else {
      this.setState({
        activeStates: {
          ...restState,
          [option.label]: option.type === 'radio' ? null :
            currentValue.filter(label => label !== state.label)
        }
      });
    }
  };

  makeSelectChangeHandler = option => event => {
    const { value } = event.target;
    const { activeStates } = this.state;

    this.setState({
      activeStates: {
        ...activeStates,
        [option.label]: value
      }
    });
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

    const demoElement = <DemoComponent {...this.calculateProps()} />;

    return (
      <div>
        { demoElement }
        { options.map(this.renderOption) }
        <Code jsx={demoElement} />
      </div>
    );
  }
}

Demo.propTypes = {
  component: PropTypes.any.isRequired,
  spec: PropTypes.object.isRequired
};
