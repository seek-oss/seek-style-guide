import { mount, render } from 'enzyme';
import React from 'react';
import Autosuggest from './Autosuggest';

const getAutosuggestProps = (suggestions = []) => ({
  autosuggestProps: {
    suggestions,
    onSuggestionsFetchRequested: () => {},
    onSuggestionsClearRequested: () => {},
    getSuggestionValue: s => s,
    renderSuggestion: s => <span className="suggestion">{s}</span>,
    onSuggestionSelected: () => {},
    alwaysRenderSuggestions: true
  },
  value: '',
  onChange: () => {}
});

describe('Autosuggest', () => {
  let spy;

  beforeEach(() => {
    spy = jest.spyOn(global.console, 'error').mockImplementation(() => {}); // Swallow console errors
  });

  afterEach(() => {
    spy.mockRestore();
  });

  it('should render with simple props', () => {
    const wrapper = render(
      <Autosuggest {...getAutosuggestProps()} id="testAutosuggest" />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should pass through the type', () => {
    const wrapper = mount(
      <Autosuggest
        {...getAutosuggestProps()}
        type="search"
        id="testAutosuggest"
      />
    );
    const inputType = wrapper.find('input').prop('type');
    expect(inputType).toEqual('search');
  });

  it('should pass through the value', () => {
    const wrapper = mount(
      <Autosuggest
        {...getAutosuggestProps()}
        value="foo"
        id="testAutosuggest"
      />
    );
    const inputValue = wrapper.find('input').prop('value');
    expect(inputValue).toEqual('foo');
  });

  it('should render with suggestions', () => {
    const wrapper = render(
      <Autosuggest
        {...getAutosuggestProps(['test', 'test 2'])}
        id="testAutosuggest"
      />
    );
    const suggestions = wrapper
      .find('.Autosuggest__suggestionsContainer')
      .find('li');
    expect(wrapper).toMatchSnapshot();
    expect(suggestions.length).toEqual(2);
  });

  it('should render with label', () => {
    const wrapper = render(
      <Autosuggest
        {...getAutosuggestProps()}
        id="testAutosuggest"
        label="Foo"
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with mobile backdrop', () => {
    const props = getAutosuggestProps();
    props.labelProps = {
      className: 'LABEL_TEST_CLASS'
    };

    const wrapper = render(
      <Autosuggest
        {...props}
        id="testAutosuggest"
        label="Foo"
        showMobileBackdrop
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should error if `suggestionsContainerClassName` is not a string', () => {
    const expectedError = expect.stringMatching(
      /Invalid prop `suggestionsContainerClassName` of type `boolean` supplied to `Autosuggest`, expected `string/
    );
    render(
      <Autosuggest
        {...getAutosuggestProps()}
        id="testAutosuggest"
        suggestionsContainerClassName={true}
      />
    );

    expect(spy).toBeCalledWith(expectedError);
  });

  it('should error if `suggestionsContainerClassName` and theme with class `suggestionsContainer` are both specified', () => {
    const props = getAutosuggestProps();
    props.autosuggestProps.theme = {
      suggestionsContainer: 'TEST'
    };
    const expectedError = expect.stringMatching(
      /`suggestionsContainerClassName` will be overridden by the `suggestionsContainer` class in autosuggestProps `theme`. Please remove it./
    );

    render(
      <Autosuggest
        {...props}
        id="testAutosuggest"
        suggestionsContainerClassName="TEST 2"
      />
    );
    expect(spy).toBeCalledWith(expectedError);
  });

  it('should focus field when suggestion is clicked', () => {
    const wrapper = mount(
      <Autosuggest
        {...getAutosuggestProps(['test', 'test 2'])}
        id="testAutosuggest"
      />
    );
    const firstSuggestion = wrapper.find('li').first();
    const input = wrapper.find('input').html();
    firstSuggestion.simulate('click');
    expect(global.document.activeElement.outerHTML).toEqual(input);
  });

  it('should invoke the focus handler', () => {
    const callback = jest.fn();
    const wrapper = mount(
      <Autosuggest
        {...getAutosuggestProps()}
        onFocus={callback}
        id="testAutosuggest"
      />
    );
    wrapper.find('input').simulate('focus');
    expect(callback.mock.calls.length).toEqual(1);
  });

  it('should invoke the blur handler', () => {
    const callback = jest.fn();
    const wrapper = mount(
      <Autosuggest
        {...getAutosuggestProps()}
        onBlur={callback}
        id="testAutosuggest"
      />
    );
    wrapper.find('input').simulate('blur');
    expect(callback.mock.calls.length).toEqual(1);
  });

  it('should invoke the change handler', () => {
    const callback = jest.fn();
    const wrapper = mount(
      <Autosuggest
        {...getAutosuggestProps()}
        onChange={callback}
        id="testAutosuggest"
      />
    );
    wrapper.find('input').simulate('change', { target: { value: 'foo' } });
    expect(callback.mock.calls.length).toEqual(1);
    expect(callback.mock.calls[0][0].target.value).toEqual('foo');
  });

  describe('inputProps', () => {
    it('should pass through value', () => {
      const wrapper = mount(
        <Autosuggest
          {...getAutosuggestProps()}
          inputProps={{ value: 'input props value' }}
          id="testAutosuggest"
        />
      );
      const inputValue = wrapper.find('input').prop('value');
      expect(inputValue).toEqual('input props value');
    });

    it('should invoke the focus event', () => {
      const onFocus = jest.fn();
      const wrapper = mount(
        <Autosuggest
          {...getAutosuggestProps()}
          inputProps={{ onFocus }}
          id="testAutosuggest"
        />
      );
      wrapper.find('input').simulate('focus');
      expect(onFocus.mock.calls.length).toEqual(1);
    });

    it('should invoke the blur event', () => {
      const onBlur = jest.fn();
      const wrapper = mount(
        <Autosuggest
          {...getAutosuggestProps()}
          inputProps={{ onBlur }}
          id="testAutosuggest"
        />
      );
      wrapper.find('input').simulate('blur');
      expect(onBlur.mock.calls.length).toEqual(1);
    });

    it('should invoke the change event', () => {
      const onChange = jest.fn();
      const wrapper = mount(
        <Autosuggest
          {...getAutosuggestProps()}
          inputProps={{ onChange }}
          id="testAutosuggest"
        />
      );
      wrapper.find('input').simulate('change', { target: { value: 'foo' } });
      expect(onChange.mock.calls.length).toEqual(1);
      expect(onChange.mock.calls[0][0].target.value).toEqual('foo');
    });
  });
});
