import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Section, Alert, Strong } from 'seek-style-guide/react';
import styles from './CatchErrors.less';

export default class CatchErrors extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  };

  state = {
    error: null,
    info: null
  };

  componentDidCatch(error, info) {
    this.setState({ error, info });
  }

  render() {
    const { error, info } = this.state;
    const { children } = this.props;

    if (!error) {
      return children;
    }

    // Ensure the stack only contains user-provided components
    const componentStack = info.componentStack
      .split('\n')
      .filter(line => /JsxParser/.test(line))
      .map(line => line.replace(/ \(created by .*/g, ''));

    // Ignore the JsxParser container components
    const lines = componentStack.slice(0, componentStack.length - 2);

    return (
      <div className={styles.root}>
        <Section>
          <Alert
            level="primary"
            tone="critical"
            message={(
              <Fragment>
                <Strong>{error.message}</Strong>
                {
                  lines.map((line, i) => (
                    <div key={i}>{line}</div>
                  ))
                }
              </Fragment>
            )}
          />
        </Section>
      </div>
    );
  }
}
