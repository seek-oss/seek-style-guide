import styles from './Icons.less';
import autosuggestStyles from './Autosuggest.less';

import React, { Component } from 'react';
import { Autosuggest } from 'seek-style-guide/react';
import Baseline from 'react-baseline';

import GridContainer from 'GridContainer/GridContainer';
import SandboxPreview from 'SandboxPreview/SandboxPreview';
import SandboxTogglePanel from 'SandboxTogglePanel/SandboxTogglePanel';
import SandboxToggle from 'SandboxToggle/SandboxToggle';
import Section from 'Section/Section';
import HeadlineText from 'HeadlineText/HeadlineText';
import Code from 'Code/Code';

import {
  HeartIcon,
  StarIcon,
  ChevronIcon,
  DownRightArrowIcon,
  ClearIcon,
  CloseIcon,
  ErrorIcon,
  HelpIcon,
  ProfileIcon,
  SearchIcon,
  ThumbsUpIcon,
  TickIcon,
  TickCircleIcon,
  MailIcon,
  CrossIcon,
  FacebookIcon,
  LinkedInIcon,
  TwitterIcon
} from 'seek-style-guide/react';

const icons = [
  { icon: ThumbsUpIcon, name: 'Thumbs Up' },
  { icon: ProfileIcon, name: 'Profile' },
  { icon: SearchIcon, name: 'Search' },
  { icon: TickIcon, name: 'Tick' },
  { icon: TickCircleIcon, name: 'Tick Circle' },
  { icon: TickCircleIcon, name: 'Filled Tick Circle', props: { filled: true } },
  { icon: ChevronIcon, name: 'Down Chevron', props: { direction: 'down' } },
  { icon: ChevronIcon, name: 'Up Chevron', props: { direction: 'up' } },
  { icon: ChevronIcon, name: 'Left Chevron', props: { direction: 'left' } },
  { icon: ChevronIcon, name: 'Right Chevron', props: { direction: 'right' } },
  { icon: DownRightArrowIcon, name: 'Down Right Arrow' },
  { icon: ClearIcon, name: 'Clear' },
  { icon: CloseIcon, name: 'Close' },
  { icon: ErrorIcon, name: 'Error' },
  { icon: ErrorIcon, name: 'Filled Error', props: { filled: true } },
  { icon: HelpIcon, name: 'Help' },
  { icon: HeartIcon, name: 'Heart' },
  { icon: HeartIcon, name: 'Filled Heart', props: { filled: true } },
  { icon: StarIcon, name: 'Star' },
  { icon: StarIcon, name: 'Filled Star', props: { filled: true } },
  { icon: MailIcon, name: 'Mail' },
  { icon: CrossIcon, name: 'Cross' },
  { icon: FacebookIcon, name: 'Facebook Unfilled', props: { filled: false } },
  { icon: FacebookIcon, name: 'Facebook Filled', props: { filled: true } },
  { icon: LinkedInIcon, name: 'LinkedIn Unfilled', props: { filled: false } },
  { icon: LinkedInIcon, name: 'LinkedIn Filled', props: { filled: true } },
  { icon: TwitterIcon, name: 'Twitter Unfilled', props: { filled: false } },
  { icon: TwitterIcon, name: 'Twitter Filled', props: { filled: true } }
];

// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestions(value) {
  const inputValue = value.trim().toLowerCase();
  const escapedValue = escapeRegexCharacters(inputValue);

  if (escapedValue === '') {
    return icons;
  }

  const regex = new RegExp(escapedValue, 'i');

  return icons.filter(icon => regex.test(icon.name));
}

function getSuggestionValue(suggestion) {
  return suggestion.name;
}

function renderSuggestion(suggestion) {
  const { icon: Icon, props: iconProps } = suggestion;

  return (
    <span>
      <Icon {...iconProps} svgClassName={autosuggestStyles.iconSvg} />
      <span className={autosuggestStyles.suggestionText}>
        {suggestion.name}
      </span>
    </span>
  );
}

export default class Icons extends Component {
  constructor() {
    super();

    this.state = {
      icon: icons[0],
      baseline: false,
      value: icons[0].name,
      suggestions: []
    };

    this.saveAutosuggest = this.saveAutosuggest.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.handleSuggestionsUpdateRequested = this.handleSuggestionsUpdateRequested.bind(this);
    this.handleSuggestionSelected = this.handleSuggestionSelected.bind(this);
    this.toggleBaseline = this.toggleBaseline.bind(this);
  }

  saveAutosuggest(autosuggest) {
    if (autosuggest !== null) {
      this.autosuggestInput = autosuggest.input;
    }
  }

  onChange(event, { newValue }) {
    this.setState({
      value: newValue
    });
  }

  onFocus() {
    this.setState({
      value: '',
      suggestions: getSuggestions('')
    });
  }

  handleSuggestionsUpdateRequested({ value, reason }) {
    if (reason !== 'click' && reason !== 'enter') {
      this.setState({
        suggestions: getSuggestions(value)
      });
    }
  }

  handleSuggestionSelected(event, { suggestion }) {
    this.setState({
      icon: suggestion
    }, () => {
      this.autosuggestInput.blur();
    });
  }

  toggleBaseline(event) {
    this.setState({
      baseline: event.target.checked
    });
  }

  shouldRenderSuggestions() {
    return true;
  }

  render() {
    const { icon, baseline, value, suggestions } = this.state;
    const { icon: Icon, props: iconProps } = icon;
    const iconComponent = (
      <Icon {...iconProps} svgClassName={baseline ? styles.iconSvgWithBaseline : styles.iconSvg} />
    );
    const inputProps = {
      value,
      onChange: this.onChange,
      onFocus: this.onFocus,
      placeholder: 'Type to filter'
    };

    return (
      <div>
        <Baseline isVisible={baseline} color="#eee">
          <div className={styles.sandboxContainer}>
            <GridContainer>
              <div className={styles.sandbox}>
                <SandboxPreview>
                  <div className={styles.iconContainer}>
                    {iconComponent}
                  </div>
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
          <Autosuggest
            autosuggestProps={{
              suggestions,
              onSuggestionsFetchRequested: this.handleSuggestionsUpdateRequested,
              onSuggestionsClearRequested: () => {},
              getSuggestionValue,
              renderSuggestion,
              shouldRenderSuggestions: this.shouldRenderSuggestions,
              onSuggestionSelected: this.handleSuggestionSelected,
              theme: autosuggestStyles
            }}
            inputProps={inputProps}
            className={styles.autosuggest}
            ref={this.saveAutosuggest}
          />
        </SandboxTogglePanel>

        <GridContainer className={styles.gridContainer}>
          <Section className={styles.section}>
            <HeadlineText>Spec</HeadlineText>
          </Section>

          <Section className={styles.section}>
            <HeadlineText>Code</HeadlineText>
            <Code jsx={iconComponent} />
          </Section>
        </GridContainer>
      </div>
    );
  }
}
