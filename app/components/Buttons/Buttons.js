import styles from './Buttons.less';
import buttonStyles from 'seek-style-guide/react/Button/Button.less';

import React, { Component } from 'react';
import Baseline from 'react-baseline';
import classnames from 'classnames';
import { StickyContainer, Sticky } from 'react-sticky';

import GridContainer from 'GridContainer/GridContainer';
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
    'Text color': '@sk-white',
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
    'Background color': '@sk-pink'
  },
  pinkHover: {
    'Background color': 'lighten(@sk-pink, 5%)'
  },
  pinkActive: {
    'Background color': 'darken(@sk-pink, 5%)'
  },
  blue: {
    'Background color': '@sk-highlight'
  },
  blueHover: {
    'Background color': 'lighten(@sk-highlight, 5%)'
  },
  blueActive: {
    'Background color': 'darken(@sk-highlight, 5%)'
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
            <div className={styles.fixedContainer}>
              <GridContainer>
                <div className={styles.fixedContainerContent}>
                  <div className={styles.buttonContainer}>
                    <Baseline isVisible={baseline}>
                      {buttonComponent}
                    </Baseline>
                  </div>

                  <div>
                    <p>
                      <label>
                        <input type="radio" value="pink" name="button-color" checked={isPink} onChange={this.setColor} /> pink
                      </label>
                      <label>
                        <input type="radio" value="blue" name="button-color" checked={isBlue} onChange={this.setColor} /> blue
                      </label>
                    </p>
                    <p>
                      <label>
                        Icon:
                        <select onChange={this.setIcon}>
                          <option value="">None</option>
                          <option value="HeartIcon">Heart</option>
                          <option value="StarIcon">Star</option>
                        </select>
                      </label>
                    </p>
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
