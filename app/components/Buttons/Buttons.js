import styles from './Buttons.less';
import buttonStyles from 'seek-style-guide/react/Button/Button.less';

import React, { Component } from 'react';
import Baseline from 'react-baseline';
import classnames from 'classnames';
import { StickyContainer, Sticky } from 'react-sticky';

import GridContainer from 'GridContainer/GridContainer';
import Section from 'Section/Section';
import HeadlineText from 'HeadlineText/HeadlineText';

import { Button } from 'seek-style-guide/react';

const specs = {
  default: {
    Height: '5 grid rows',
    'Padding left': '1 gutter width',
    'Padding right': '1 gutter width',
    'Font size': '18px',
    'Text color': '@sk-white',
    'Background color': '@sk-pink',
    'Border radius': '2px',
    Shadow: '0 1px rgba(33, 33, 33, 0.7)'
  },
  hover: {
    'Background color': 'lighten(@sk-pink, 5%)'
  },
  active: {
    'Background color': 'darken(@sk-pink, 5%)',
    Shadow: 'none',
    Transform: 'scale(0.95)'
  },
  focus: {
    Shadow: '0 0 0 1px @sk-focus'
  }
};
const propertiesToRemove = {
  Shadow: 'none'
};

function getSpec(specsObj) {
  const mergedSpec = Object.keys(specsObj).reduce((result, specName) => ({
    ...result,
    ...(specsObj[specName] ? specs[specName] : {})
  }), {});

  return Object.keys(mergedSpec).reduce((spec, property) => {
    if (mergedSpec[property] !== propertiesToRemove[property]) {
      spec[property] = mergedSpec[property];
    }

    return spec;
  }, {});
}

export default class Buttons extends Component {
  constructor() {
    super();

    this.state = {
      hover: false,
      active: false,
      focus: false,
      loading: false,
      baseline: false
    };

    this.toggleHover = this.toggleHover.bind(this);
    this.toggleActive = this.toggleActive.bind(this);
    this.toggleFocus = this.toggleFocus.bind(this);
    this.toggleLoading = this.toggleLoading.bind(this);
    this.toggleBaseline = this.toggleBaseline.bind(this);
  }

  toggleHover(event) {
    this.setState({
      hover: event.target.checked
    });
  }

  toggleActive(event) {
    this.setState({
      active: event.target.checked
    });
  }

  toggleFocus(event) {
    this.setState({
      focus: event.target.checked
    });
  }

  toggleLoading(event) {
    this.setState({
      loading: event.target.checked
    });
  }

  toggleBaseline(event) {
    this.setState({
      baseline: event.target.checked
    });
  }

  render() {
    const { hover, active, focus, loading, baseline } = this.state;
    const className = classnames({
      [buttonStyles.rootHover]: hover,
      [buttonStyles.rootActive]: active,
      [buttonStyles.rootFocus]: focus
    });
    const spec = getSpec({
      default: true,
      hover,
      active,
      focus
    });

    return (
      <StickyContainer>
        <div className={styles.root}>
          <Sticky className={styles.sticky}>
            <div className={styles.fixedContainer}>
              <GridContainer>
                <div className={styles.fixedContainerContent}>
                  <div className={styles.buttonContainer}>
                    <Baseline isVisible={baseline}>
                      <Button colour="pink" className={className} loading={loading}>
                        Button
                      </Button>
                    </Baseline>
                  </div>

                  <div>
                    <p>
                      <label>
                        <input type="checkbox" checked={hover} onChange={this.toggleHover} /> hover
                      </label>
                    </p>
                    <p>
                      <label>
                        <input type="checkbox" checked={active} onChange={this.toggleActive} /> active
                      </label>
                    </p>
                    <p>
                      <label>
                        <input type="checkbox" checked={focus} onChange={this.toggleFocus} /> focus
                      </label>
                    </p>
                    <p>
                      <label>
                        <input type="checkbox" checked={loading} onChange={this.toggleLoading} /> loading
                      </label>
                    </p>
                    <p>
                      <label>
                        <input type="checkbox" checked={baseline} onChange={this.toggleBaseline} /> baseline
                      </label>
                    </p>
                  </div>
                </div>
              </GridContainer>
            </div>
          </Sticky>

          <GridContainer>
            <Section>
              <HeadlineText>Spec</HeadlineText>
              <div className={styles.specContainer}>
                <table>
                  <tbody>
                    {
                      Object.keys(spec).map(property =>
                        <tr key={property}>
                          <td className={styles.specProperty}>{property}</td>
                          <td>{spec[property]}</td>
                        </tr>
                      )
                    }
                  </tbody>
                </table>
              </div>
            </Section>
          </GridContainer>
        </div>
      </StickyContainer>
    );
  }
}
