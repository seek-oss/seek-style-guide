import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Autosuggest from './Autosuggest';
import styles from '../TextField/TextField.less';
import classnames from 'classnames';
import fieldMessageOptions from '../FieldMessage/FieldMessage.demoFragment';
import fieldLabelOptions from '../FieldLabel/FieldLabel.demoFragment';

class AutosuggestContainer extends Component {
  static propTypes = {
    component: PropTypes.func.isRequired,
    componentProps: PropTypes.object.isRequired
  };

  constructor() {
    super();

    this.state = {
      inputValue: ''
    };
  }

  handleChange = (_, { newValue }) => {
    this.setState({
      inputValue: newValue
    });
  };

  handleFocus = event => {
    console.log('Focused, event: ', event);
  };

  handleClear = () => {
    this.setState({
      inputValue: ''
    });
  };

  render() {
    const { component: DemoComponent, componentProps } = this.props;
    const { inputValue } = this.state;

    return (
      <div style={{ width: '300px' }}>
        <DemoComponent
          {...componentProps}
          type="search"
          value={inputValue}
          onChange={this.handleChange}
          onFocus={this.handleFocus}
          onClear={this.handleClear}
        />
      </div>
    );
  }
}

export default {
  route: '/autosuggest',
  title: 'Autosuggest',
  category: 'Form',
  component: Autosuggest,
  container: AutosuggestContainer,
  initialProps: {
    id: 'jobTitles',
    label: 'Job Titles',
    type: 'search',
    value: '...',
    onChange: () => {},
    autosuggestProps: {
      suggestions: [
        'Developer',
        'Product manager',
        'Iteration manager',
        'Designer'
      ],
      onSuggestionsFetchRequested: () => {},
      onSuggestionsClearRequested: () => {},
      renderSuggestion: suggestion => <div>{suggestion}</div>,
      getSuggestionValue: suggestion => suggestion
    },
    message: false,
    onClear: () => {}
  },
  options: [
    {
      label: 'States',
      type: 'checklist',
      states: [
        {
          label: 'Focus',
          transformProps: ({ className, ...props }) => ({
            ...props,
            className: classnames(className, styles.rootFocus)
          })
        },
        {
          label: 'Grouped',
          transformProps: ({ autosuggestProps, ...props }) => ({
            ...props,
            autosuggestProps: {
              ...autosuggestProps,
              multiSection: true,
              suggestions: [
                {
                  title: 'RECENT TITLES',
                  suggestions: [
                    'Developer',
                    'Product manager',
                    'Iteration manager',
                    'Designer'
                  ]
                }
              ],
              renderSectionTitle: section => <div>{section.title}</div>,
              getSectionSuggestions: section => section.suggestions
            }
          })
        },
        {
          label: 'Show mobile backdrop',
          transformProps: ({ ...props }) => ({
            ...props,
            showMobileBackdrop: true
          })
        }
      ]
    },
    ...fieldMessageOptions,
    ...fieldLabelOptions
  ]
};
