import styles from './Icons.less';
import autosuggestStyles from './Autosuggest.less';

import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import Baseline from 'react-baseline';
import { StickyContainer, Sticky } from 'react-sticky';

import GridContainer from 'GridContainer/GridContainer';
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
  TickIcon
} from 'seek-style-guide/react';

const icons = [
  { icon: HeartIcon, name: 'Heart' },
  { icon: HeartIcon, name: 'Filled Heart', props: { filled: true } },
  { icon: StarIcon, name: 'Star' },
  { icon: StarIcon, name: 'Filled Star', props: { filled: true } },
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
  { icon: ProfileIcon, name: 'Profile' },
  { icon: SearchIcon, name: 'Search' },
  { icon: ThumbsUpIcon, name: 'Thumbs Up' },
  { icon: TickIcon, name: 'Tick' }
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
    this.onSuggestionsUpdateRequested = this.onSuggestionsUpdateRequested.bind(this);
    this.onSuggestionSelected = this.onSuggestionSelected.bind(this);
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

  onSuggestionsUpdateRequested({ value, reason }) {
    if (reason !== 'click' && reason !== 'enter') {
      this.setState({
        suggestions: getSuggestions(value)
      });
    }
  }

  onSuggestionSelected(event, { suggestion }) {
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

  render() {
    const { icon, baseline, value, suggestions } = this.state;
    const { icon: Icon, props: iconProps } = icon;
    const iconComponent = (
      <Icon {...iconProps} svgClassName={baseline ? styles.iconSvgWithBaseline : styles.iconSvg} />
    );
    const inputProps = {
      placeholder: 'Type to filter',
      value,
      onChange: this.onChange,
      onFocus: this.onFocus
    };

    return (
      <StickyContainer>
        <div>
          <Sticky className={styles.sticky}>
            <div className={styles.fixedContainer}>
              <GridContainer>
                <div className={styles.fixedContainerContent}>
                  <Baseline isVisible={baseline}>
                    <div className={styles.iconContainer}>
                      {iconComponent}
                    </div>
                  </Baseline>

                  <div>
                    <Autosuggest
                      suggestions={suggestions}
                      onSuggestionsUpdateRequested={this.onSuggestionsUpdateRequested}
                      getSuggestionValue={getSuggestionValue}
                      renderSuggestion={renderSuggestion}
                      shouldRenderSuggestions={() => true}
                      onSuggestionSelected={this.onSuggestionSelected}
                      inputProps={inputProps}
                      theme={autosuggestStyles}
                      ref={this.saveAutosuggest}
                    />
                  </div>

                  <div>
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
            </Section>

            <Section className={styles.section}>
              <HeadlineText>Code</HeadlineText>
              <Code jsx={iconComponent} />
            </Section>
          </GridContainer>
        </div>
      </StickyContainer>
    );
  }
}
