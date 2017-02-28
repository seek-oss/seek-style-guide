import styles from './Demo.less';
import React, { Component, PropTypes } from 'react';
import { PageBlock, Text } from 'seek-style-guide/react';
import Code from './Code/Code';
import flatten from 'lodash.flatten';

export default class Demo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeStates: {}
    };
  }

  renderOption = option => {
    const { activeStates } = this.state;

    return option.type === 'radio' ? (
      <select className={styles.select} onChange={this.makeSelectChangeHandler(option)}>
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
      option.states.map((state, i) => {
        const checked = Boolean(
          activeStates[option.label] &&
          activeStates[option.label].indexOf(state.label) > -1
        );

        return (
          <Text key={i}>
            <label>
              <input
                type="checkbox"
                checked={checked}
                onChange={this.makeCheckboxChangeHandler(option, state)}
              />
              { state.label }
            </label>
          </Text>
        );
      })
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
      <div className={styles.root}>
        <div className={styles.component}>
          { demoElement }
        </div>
        <PageBlock>
          <div className={styles.options}>
            {
              flatten(options.map(this.renderOption))
                .map((option, i) => (
                  <div key={i} className={styles.optionItem}>{ option }</div>
                ))
              }
          </div>
        </PageBlock>
        <PageBlock style={{ background: 'white' }}>
          <Code jsx={demoElement} />
        </PageBlock>
      </div>
    );
  }
}

Demo.propTypes = {
  component: PropTypes.any.isRequired,
  spec: PropTypes.object.isRequired
};
