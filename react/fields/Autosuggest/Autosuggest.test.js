import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import React from 'react';
import {
  createRenderer,
  renderIntoDocument,
  scryRenderedDOMComponentsWithClass,
  findRenderedDOMComponentWithClass,
  Simulate
} from 'react-addons-test-utils';
import Autosuggest from './Autosuggest';

chai.use(sinonChai);

const renderer = createRenderer();

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
  let element, autosuggest, errors, suggestions, suggestionsContainer, input;

  beforeEach(() => {
    errors = [];

    sinon.stub(console, 'error', errorMessage => {
      errors.push(errorMessage);
    });
  });

  afterEach(() => {
    console.error.restore();
  });

  function render(jsx) {
    element = jsx;
    autosuggest = renderer.render(element);
  }

  function renderToDom(jsx) {
    element = jsx;
    autosuggest = renderIntoDocument(element);
    suggestions = scryRenderedDOMComponentsWithClass(autosuggest, 'suggestion');
    suggestionsContainer = scryRenderedDOMComponentsWithClass(autosuggest, 'suggestionsContainer')[0];
    input = findRenderedDOMComponentWithClass(autosuggest, 'input');
  }

  it('should have a displayName', () => {
    render(<Autosuggest {...getAutosuggestProps()} />);
    expect(element.type.displayName).to.equal('Autosuggest');
  });

  it('should render suggestions', () => {
    renderToDom(<Autosuggest {...getAutosuggestProps(['test', 'test 2'])} />);
    expect(suggestions).to.have.length(2);
  });

  it('should render suggestions list below input field when a label is supplied', () => {
    renderToDom(<Autosuggest {...getAutosuggestProps()} id="Foo" label="Foo" />);
    expect(suggestionsContainer.className).to.contain('suggestionsContainer_withLabel');
  });

  it('should render suggestions list below input field when a label is not supplied', () => {
    renderToDom(<Autosuggest {...getAutosuggestProps()} />);
    expect(suggestionsContainer.className).to.not.contain('suggestionsContainer_withLabel');
  });

  it('should error if `suggestionsContainerClassName` is not a string', () => {
    render(<Autosuggest {...getAutosuggestProps()} suggestionsContainerClassName={true} />);
    expect(errors[0]).to.match(/Invalid prop `suggestionsContainerClassName` of type `boolean` supplied to `Autosuggest`, expected `string/);
  });

  it('should error if `suggestionsContainerClassName` and theme with class `suggestionsContainer` are both specified', () => {
    const props = getAutosuggestProps();
    props.autosuggestProps.theme = {
      suggestionsContainer: 'TEST'
    };
    render(<Autosuggest {...props} suggestionsContainerClassName="TEST 2" />);
    expect(errors[0]).to.match(/`suggestionsContainerClassName` will be overridden by the `suggestionsContainer` class in autosuggestProps `theme`. Please remove it./);
  });

  it('should focus field when suggestion is clicked', () => {
    renderToDom(<Autosuggest {...getAutosuggestProps(['test', 'test 2'])} />);
    Simulate.click(suggestions[0]);
    expect(global.document.activeElement).to.equal(input);
  });
});
