import styles from './Buttons.less';
import buttonStyles from 'seek-style-guide/react/Button/Button.less';

import React, { Component } from 'react';
import Baseline from 'react-baseline';
import classnames from 'classnames';

import GridContainer from 'GridContainer/GridContainer';
import SandboxPreview from 'SandboxPreview/SandboxPreview';
import SandboxTogglePanel from 'SandboxTogglePanel/SandboxTogglePanel';
import SandboxToggle from 'SandboxToggle/SandboxToggle';
import Section from 'Section/Section';
import HeadlineText from 'HeadlineText/HeadlineText';
import Spec from 'Spec/Spec';
import Code from 'Code/Code';

import { Button, HeartIcon, StarIcon } from 'seek-style-guide/react';

const icons = {
  HeartIcon,
  StarIcon
};

const specs = {
  default: {
    Height: '5 grid rows',
    'Internal gutter': '1 gutter width',
    'Font size': '1.8 — @interaction-type-scale',
    'Border radius': '2px — @field-border-radius',
    'Drop shadow': '1px, @sk-black 70%'
  },
  icon: {
    'Space between icon and text': '7px'
  },
  active: {
    'Drop shadow': 'none',
    Transform: 'scale(0.95)'
  },
  focus: {
    'Drop shadow': '1px @sk-focus'
  },
  pink: {
    'Background color': '@sk-pink',
    'Text color': '@sk-white'
  },
  pinkHover: {
    'Background color': 'lighten(@sk-pink, 5%)'
  },
  pinkActive: {
    'Background color': 'darken(@sk-pink, 5%)'
  },
  blue: {
    'Background color': '@sk-highlight',
    'Text color': '@sk-white'
  },
  blueHover: {
    'Background color': 'lighten(@sk-highlight, 5%)'
  },
  blueActive: {
    'Background color': 'darken(@sk-highlight, 5%)'
  },
  gray: {
    'Background color': '@sk-mid-gray-light',
    'Text color': '@sk-black'
  },
  grayHover: {
    'Background color': 'lighten(@sk-mid-gray-light, 5%)'
  },
  grayActive: {
    'Background color': 'darken(@sk-mid-gray-light, 5%)'
  }
};
const propertiesToRemove = {
  'Drop shadow': 'none'
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
      color: 'pink',
      icon: '',
      component: '',
      hover: false,
      active: false,
      focus: false,
      loading: false,
      baseline: false
    };

    this.setColor = this.setColor.bind(this);
    this.setIcon = this.setIcon.bind(this);
    this.setComponent = this.setComponent.bind(this);
    this.toggleHover = this.toggleHover.bind(this);
    this.toggleActive = this.toggleActive.bind(this);
    this.toggleFocus = this.toggleFocus.bind(this);
    this.toggleLoading = this.toggleLoading.bind(this);
    this.toggleBaseline = this.toggleBaseline.bind(this);
  }

  setColor(event) {
    this.setState({
      color: event.target.value
    });
  }

  setIcon(event) {
    this.setState({
      icon: event.target.value
    });
  }

  setComponent(event) {
    this.setState({
      component: event.target.value
    });
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
    const { color, icon, hover, active, focus, loading, baseline, component } = this.state;
    const isPink = (color === 'pink');
    const isBlue = (color === 'blue');
    const isGray = (color === 'gray');
    const className = classnames({
      [buttonStyles.rootHover]: hover,
      [buttonStyles.rootActive]: active,
      [buttonStyles.rootFocus]: focus
    });
    const spec = getSpec({
      default: true,
      icon,
      active,
      focus,
      pink: isPink,
      pinkHover: isPink && hover,
      pinkActive: isPink && active,
      blue: isBlue,
      blueHover: isBlue && hover,
      blueActive: isBlue && active,
      gray: isGray,
      grayHover: isGray && hover,
      grayActive: isGray && active
    });
    const iconComponent = icon ?
      React.createElement(icons[icon], { filled: true, svgClassName: styles.iconSvg }) :
      null;
    const buttonComponent = (
      <Button
        {...(component ? { component } : {})}
        color={color}
        className={className}
        loading={loading}>
        {iconComponent}
        Click here
      </Button>
    );

    return (
      <div>
        <Baseline isVisible={baseline} color="#eee">
          <div className={styles.sandboxContainer}>
            <GridContainer>
              <div className={styles.sandbox}>
                <SandboxPreview>
                  {buttonComponent}
                </SandboxPreview>
                <div style={{ position: 'absolute', top: 0, right: 0 }}>
                  <SandboxToggle
                    label="Baseline"
                    toggleType="checkbox"
                    toggleProps={{
                      type: 'checkbox',
                      checked: baseline,
                      onChange: this.toggleBaseline
                    }}
                  />
                </div>
              </div>
            </GridContainer>
          </div>
        </Baseline>

        <SandboxTogglePanel>
          <SandboxToggle
            label="Hover"
            toggleType="checkbox"
            toggleProps={{
              type: 'checkbox',
              checked: hover,
              onChange: this.toggleHover
            }}
          />
          <SandboxToggle
            label="Active"
            toggleType="checkbox"
            toggleProps={{
              type: 'checkbox',
              checked: active,
              onChange: this.toggleActive
            }}
          />
          <SandboxToggle
            label="Focus"
            toggleType="checkbox"
            toggleProps={{
              type: 'checkbox',
              checked: focus,
              onChange: this.toggleFocus
            }}
          />
          <SandboxToggle
            label="Loading"
            toggleType="checkbox"
            toggleProps={{
              type: 'checkbox',
              checked: loading,
              onChange: this.toggleLoading
            }}
          />
          <div className={styles.divider} />
          <SandboxToggle
            toggleType="select"
            toggleProps={{
              options: [
                { name: 'As Button', value: '' },
                { name: 'As Anchor', value: 'a' },
                { name: 'As Div', value: 'div' }
              ],
              onChange: this.setComponent
            }}
          />
          <div className={styles.divider} />
          <SandboxToggle
            toggleType="select"
            toggleProps={{
              options: [
                { name: 'Pink', value: 'pink' },
                { name: 'Blue', value: 'blue' },
                { name: 'Gray', value: 'gray' }
              ],
              onChange: this.setColor
            }}
          />
          <div className={styles.divider} />
          <SandboxToggle
            toggleType="select"
            toggleProps={{
              options: [
                { name: 'No icon', value: '' },
                { name: 'Heart Icon', value: 'HeartIcon' },
                { name: 'Star Icon', value: 'StarIcon' }
              ],
              onChange: this.setIcon
            }}
          />
        </SandboxTogglePanel>

        <GridContainer className={styles.gridContainer}>
          <Section className={styles.section}>
            <HeadlineText>Spec</HeadlineText>
            <Spec spec={spec} />
          </Section>

          <Section className={styles.section}>
            <HeadlineText>Code</HeadlineText>
            <Code jsx={buttonComponent} />
          </Section>
        </GridContainer>
      </div>
    );
  }
}
