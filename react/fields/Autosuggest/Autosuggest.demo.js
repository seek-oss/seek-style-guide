import React, { Component, PropTypes } from 'react';
import Autosuggest from './Autosuggest';
import styles from '../TextField/TextField.less';
import classnames from 'classnames';
import fieldMessageOptions from '../FieldMessage/FieldMessage.demo';

class AutosuggestContainer extends Component {
  static propTypes = {
    component: PropTypes.func.isRequired
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

  handleClear = () => {
    this.setState({
      inputValue: ''
    });
  };

  render() {
    const { component: DemoComponent } = this.props;
    const { inputValue } = this.state;

    return (
      <div style={{ width: '300px' }}>
        <DemoComponent
          inputProps={{
            type: 'search',
            onChange: this.handleChange,
            value: inputValue
          }}
          onClear={this.handleClear}
        />
      </div>
    );
  }
}

export default {
  component: Autosuggest,
  container: AutosuggestContainer,
  initialProps: {
    id: 'jobTitles',
    label: 'Job Titles',
    autosuggestProps: {
      suggestions: ['Developer', 'Product manager', 'Iteration manager', 'Designer'],
      onSuggestionsFetchRequested: () => {},
      onSuggestionsClearRequested: () => {},
      renderSuggestion: suggestion => <div>{suggestion}</div>,
      getSuggestionValue: suggestion => suggestion
    },
    message: false,
    // Documentation only:
    inputProps: {
      type: 'search',
      value: '...',
      onChange: () => {}
    },
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
        }
      ]
    },
    ...fieldMessageOptions
  ]
};
