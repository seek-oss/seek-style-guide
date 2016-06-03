import styles from './Buttons.less';
import buttonStyles from 'seek-style-guide/react/Button/Button.less';

import React, { Component } from 'react';
import Baseline from 'react-baseline';
import classnames from 'classnames';
import { StickyContainer, Sticky } from 'react-sticky';

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

const loremIpsum = 'Lorem ipsum dolor sit amet, an sit quas justo, lucilius pericula no sit. In tota meis maiestatis eos, quem quod noluisse sea ea, ei pri dicta adolescens. Ad suas purto volutpat cum. Mea id tota paulo efficiantur. Ius in nisl dicam delenit. In sit summo contentiones consectetuer. His id velit vivendum patrioque, id qui delenit tincidunt posidonium.';

const specs = {
  default: {
    Height: '5 grid rows',
    'Left and right internal padding': '1 gutter width',
    'Text colour': '@sk-white',
    'Font size': '18px',
    'Border radius': '2px',
    Shadow: '0 1px rgba(33, 33, 33, 0.7)'
  },
  icon: {
    'Space between icon and text': '7px'
  },
  active: {
    Shadow: 'none',
    Transform: 'scale(0.95)'
  },
  focus: {
    Shadow: '0 0 0 1px @sk-focus'
  },
  pink: {
    'Background colour': '@sk-pink'
  },
  pinkHover: {
    'Background colour': 'lighten(@sk-pink, 5%)'
  },
  pinkActive: {
    'Background colour': 'darken(@sk-pink, 5%)'
  },
  blue: {
    'Background colour': '@sk-highlight'
  },
  blueHover: {
    'Background colour': 'lighten(@sk-highlight, 5%)'
  },
  blueActive: {
    'Background colour': 'darken(@sk-highlight, 5%)'
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
      color: 'pink',
      icon: '',
      hover: false,
      active: false,
      focus: false,
      loading: false,
      baseline: false
    };

    this.setColor = this.setColor.bind(this);
    this.setIcon = this.setIcon.bind(this);
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
    const { color, icon, hover, active, focus, loading, baseline } = this.state;
    const isPink = (color === 'pink');
    const isBlue = (color === 'blue');
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
      blue: isBlue,
      pinkHover: isPink && hover,
      blueHover: isBlue && hover,
      pinkActive: isPink && active,
      blueActive: isBlue && active
    });
    const iconComponent = icon ?
      React.createElement(icons[icon], { filled: true, svgClassName: styles.iconSvg }) :
      null;
    const buttonComponent = (
      <Button colour={color} className={className} loading={loading}>
        {iconComponent}
        Click here
      </Button>
    );

    return (
      <StickyContainer>
        <div>
          <Sticky className={styles.sticky}>
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
          </Sticky>

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
              label="Pink"
              toggleType="radio"
              toggleProps={{
                type: 'radio',
                value: 'pink',
                checked: isPink,
                name: 'button-color',
                onChange: this.setColor
              }}
            />
            <SandboxToggle
              label="Blue"
              toggleType="radio"
              toggleProps={{
                type: 'radio',
                value: 'blue',
                checked: isBlue,
                name: 'button-color',
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

          <GridContainer className={styles.gridContainer}>
            <Section className={styles.section}>
              <HeadlineText>Do</HeadlineText>
              <p className={styles.content}>
                {loremIpsum}
              </p>
            </Section>

            <Section className={styles.section}>
              <HeadlineText>Don't</HeadlineText>
              <p className={styles.content}>
                {loremIpsum}
              </p>
            </Section>
          </GridContainer>
        </div>
      </StickyContainer>
    );
  }
}
