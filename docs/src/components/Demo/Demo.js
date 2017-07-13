import styles from './Demo.less';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { PageBlock, Section, Text } from 'seek-style-guide/react';
import Baseline from 'react-baseline';
import Code from './Code/Code';
import flatten from 'lodash.flatten';

const DefaultContainer = ({ component: DemoComponent }) => <DemoComponent />;
DefaultContainer.propTypes = {
  component: PropTypes.func.isRequired
};

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
        [option.label]: [value]
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
          return state.transformProps(innerProps);
        }

        return innerProps;
      }, outerProps);
    }, initialProps);
  }

  render() {
    const {
      title,
      block,
      component: DemoComponent,
      container: Container = DefaultContainer,
      options
    } = this.props.spec;

    const demoElement = <DemoComponent {...this.calculateProps()} />;
    const BoundComponent = props => <DemoComponent {...this.calculateProps()} {...props} />;

    return (
      <div className={styles.root}>
        <PageBlock>
          {
            title ? (
              <Section header>
                <Text hero>{ title }</Text>
              </Section>
            ) :
            null
          }
        </PageBlock>
        <Baseline isVisible={true} type="bar" color="#e5e5e5">
          <div
            className={classnames({
              [styles.component]: true,
              [styles.component_block]: block
            })}>
            <Container component={BoundComponent} />
          </div>
        </Baseline>
        {
          options && options.length ? (
            <PageBlock className={styles.optionsBlock}>
              <div className={styles.options}>
                {
                  flatten(options.map(this.renderOption))
                    .map((option, i) => (
                      <div key={i} className={styles.optionItem}>{ option }</div>
                    ))
                  }
              </div>
            </PageBlock>
          ) :
          null
        }
        <PageBlock className={styles.codeBlock}>
          <Code jsx={demoElement} />
        </PageBlock>
      </div>
    );
  }
}

Demo.propTypes = {
  spec: PropTypes.object.isRequired
};
