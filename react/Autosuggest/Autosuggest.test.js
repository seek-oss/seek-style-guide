import { mount, render } from 'enzyme';
import React from 'react';

import Autosuggest from './Autosuggest';

const getAutosuggestProps = (suggestions = []) => ({
  autosuggestProps: {
    suggestions,
    onSuggestionsFetchRequested: () => {},
    onSuggestionsClearRequested: () => {},
    getSuggestionValue: s => s,
    renderSuggestion: s => (<span className="suggestion">{s}</span>),
    onSuggestionSelected: () => {},
    alwaysRenderSuggestions: true
  },
  inputProps: {
    value: '',
    onChange: () => {}
  }
});

describe('Autosuggest', () => {
  let spy;

  beforeEach(() => {
    spy = jest.spyOn(global.console, 'error');
  });

  afterEach(() => {
    spy.mockRestore();
  });

  it('should render with simple props', () => {
    const wrapper = render(<Autosuggest {...getAutosuggestProps()} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with suggestions', () => {
    const wrapper = render(<Autosuggest {...getAutosuggestProps(['test', 'test 2'])} />);
    const suggestions = wrapper.find('.suggestionsContainer').find('li');
    expect(wrapper).toMatchSnapshot();
    expect(suggestions.length).toEqual(2);
  });

  it('should render with label', () => {
    const wrapper = render(<Autosuggest {...getAutosuggestProps()} id="Foo" label="Foo" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with mobile backdrop', () => {
    const props = getAutosuggestProps();
    props.labelProps = {
      className: 'LABEL_TEST_CLASS'
    };

    const wrapper = render(<Autosuggest {...props} id="Foo" label="Foo" showMobileBackdrop />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should error if `suggestionsContainerClassName` is not a string', () => {
    const expectedError = expect.stringMatching(/Invalid prop `suggestionsContainerClassName` of type `boolean` supplied to `Autosuggest`, expected `string/);
    render(<Autosuggest {...getAutosuggestProps()} suggestionsContainerClassName={true} />);

    expect(spy).toBeCalledWith(expectedError);
  });

  it('should error if `suggestionsContainerClassName` and theme with class `suggestionsContainer` are both specified', () => {
    const props = getAutosuggestProps();
    props.autosuggestProps.theme = {
      suggestionsContainer: 'TEST'
    };
    const expectedError = expect.stringMatching(/`suggestionsContainerClassName` will be overridden by the `suggestionsContainer` class in autosuggestProps `theme`. Please remove it./);

    render(<Autosuggest {...props} suggestionsContainerClassName="TEST 2" />);
    expect(spy).toBeCalledWith(expectedError);
  });

  it('should focus field when suggestion is clicked', () => {
    const wrapper = mount(<Autosuggest {...getAutosuggestProps(['test', 'test 2'])} />);
    const firstSuggestion = wrapper.find('li').first();
    const input = wrapper.find('input').html();
    firstSuggestion.simulate('click');
    expect(global.document.activeElement.outerHTML).toEqual(input);
  });
});
