import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import React from 'react';
import {
  createRenderer,
  Simulate,
  renderIntoDocument,
  findRenderedDOMComponentWithClass,
  scryRenderedDOMComponentsWithClass
} from 'react-addons-test-utils';
import SyntheticEvent from 'react/lib/SyntheticEvent';
import { findAllWithClass } from 'react-shallow-testutils';
import Autosuggest from './Autosuggest';

chai.use(sinonChai);

const eventMatcher = sinon.match.instanceOf(SyntheticEvent);

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
  let element, autosuggest, rootElement, label, input, help, message, messageIcon, clearField, errors, suggestion;

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
    label = findAllWithClass(autosuggest, 'label')[0] || null;
    input = findAllWithClass(autosuggest, 'input')[0] || null;
    help = findAllWithClass(autosuggest, 'help')[0] || null;
    message = findAllWithClass(autosuggest, 'message')[0] || null;
    messageIcon = findAllWithClass(autosuggest, 'messageIcon')[0] || null;
  }

  function renderToDom(jsx) {
    element = jsx;
    autosuggest = renderIntoDocument(element);
    rootElement = scryRenderedDOMComponentsWithClass(autosuggest, 'root')[0];
    input = findRenderedDOMComponentWithClass(autosuggest, 'input');
    clearField = findRenderedDOMComponentWithClass(autosuggest, 'clearField');
    suggestion = scryRenderedDOMComponentsWithClass(autosuggest, 'suggestion');
  }

  function helpText() {
    return help.props.children;
  }

  function messageText() {
    return message.props.children[1];
  }

  function isClearButtonVisible() {
    return /\bcanClear\b/.test(rootElement.className);
  }

  it('should have a displayName', () => {
    render(<Autosuggest {...getAutosuggestProps()} />);
    expect(element.type.displayName).to.equal('Autosuggest');
  });

  describe('id', () => {
    it('should error if `id` is not a string', () => {
      render(<Autosuggest {...getAutosuggestProps()} id={true} />);
      expect(errors[0]).to.match(/Invalid prop `id`/);
    });
  });

  describe('label', () => {
    it('should not be rendered by default', () => {
      render(<Autosuggest {...getAutosuggestProps()} />);
      expect(label).to.equal(null);
    });

    it('should have `htmlFor` equal to `id` when `label` is specified', () => {
      render(<Autosuggest {...getAutosuggestProps()} id="firstName" label="First Name" />);
      expect(label.props).to.contain.keys({ htmlFor: 'firstName' });
    });

    it('should have the right text when `label` is specified', () => {
      render(<Autosuggest {...getAutosuggestProps()} id="firstName" label="First Name" />);
      expect(label.props.children).to.equal('First Name');
    });

    it('should error if `id` is not specified but `label` is', () => {
      render(<Autosuggest {...getAutosuggestProps()} label="First Name" />);
      expect(errors[0]).to.match(/have an `id`/);
    });
  });

  describe('labelProps', () => {
    it('should error if `labelProps` is not an object', () => {
      render(<Autosuggest {...getAutosuggestProps()} id="firstName" label="First Name" labelProps="data-automation=first-name" />);
      expect(errors[0]).to.match(/Invalid prop `labelProps`/);
    });

    it('should error if `labelProps` is specified but `label` is not', () => {
      render(<Autosuggest {...getAutosuggestProps()} labelProps={{ 'data-automation': 'first-name' }} />);
      expect(errors[0]).to.match(/Specifying `labelProps` is redundant/);
    });

    it('should error if `labelProps`\'s `htmlFor` is specified', () => {
      render(<Autosuggest {...getAutosuggestProps()} id="firstName" label="First Name" labelProps={{ htmlFor: 'ignored' }} />);
      expect(errors[0]).to.match(/`labelProps.htmlFor` will be overridden by `id`/);
    });

    it('should pass through className to the label', () => {
      render(<Autosuggest {...getAutosuggestProps()} id="firstName" label="First Name" labelProps={{ className: 'first-name-label' }} />);
      expect(label.props.className).to.match(/first-name-label$/);
    });

    it('should pass through other props to the label', () => {
      render(<Autosuggest {...getAutosuggestProps()} id="firstName" label="First Name" labelProps={{ 'data-automation': 'first-name-label' }} />);
      expect(label.props['data-automation']).to.equal('first-name-label');
    });
  });

  describe('inputProps', () => {
    it('should error if `inputProps` is not an object', () => {
      render(<Autosuggest {...getAutosuggestProps()} inputProps="hey" />);
      expect(errors[0]).to.match(/Invalid prop `inputProps`/);
    });

    it('should error if `inputProps`\'s `id` is specified', () => {
      render(<Autosuggest {...getAutosuggestProps()} id="firstName" inputProps={{ id: 'ignored' }} />);
      expect(errors[0]).to.match(/`inputProps.id` will be overridden by `id`/);
    });
  });

  describe('help', () => {
    it('should not be rendered by default', () => {
      render(<Autosuggest {...getAutosuggestProps()} />);
      expect(help).to.equal(null);
    });

    it('should not be rendered when message exists', () => {
      render(<Autosuggest {...getAutosuggestProps()} help="e.g. David" message="Something went wrong" />);
      expect(help).to.equal(null);
    });

    it('should have the right text when `help` is specified', () => {
      render(<Autosuggest {...getAutosuggestProps()} help="e.g. David" />);
      expect(helpText()).to.equal('e.g. David');
    });

    it('should pass through className to the help text', () => {
      render(<Autosuggest {...getAutosuggestProps()} help="e.g. David" helpProps={{ className: 'first-name-help' }} />);
      expect(help.props.className).to.match(/first-name-help$/);
    });

    it('should pass through other props to the help text', () => {
      render(<Autosuggest {...getAutosuggestProps()} help="e.g. David" helpProps={{ 'data-automation': 'first-name-help' }} />);
      expect(help.props['data-automation']).to.equal('first-name-help');
    });
  });

  describe('message', () => {
    it('should not be rendered by default', () => {
      render(<Autosuggest {...getAutosuggestProps()} />);
      expect(message).to.equal(null);
    });

    it('should have the right text when `message` is specified', () => {
      render(<Autosuggest {...getAutosuggestProps()} message="Something went wrong" />);
      expect(messageText()).to.equal('Something went wrong');
    });

    it('should not render the message icon when `message` is specified and autosuggest is valid', () => {
      render(<Autosuggest {...getAutosuggestProps()} message="Something went wrong" />);
      expect(messageIcon).to.equal(null);
    });

    it('should pass through className to the message', () => {
      render(<Autosuggest {...getAutosuggestProps()} message="Something went wrong" messageProps={{ className: 'first-name-message' }} />);
      expect(message.props.className).to.match(/first-name-message$/);
    });

    it('should pass through other props to the message', () => {
      render(<Autosuggest {...getAutosuggestProps()} message="Something went wrong" messageProps={{ 'data-automation': 'first-name-message' }} />);
      expect(message.props['data-automation']).to.equal('first-name-message');
    });
  });

  describe('invalid', () => {
    it('should have the invalid className', () => {
      render(<Autosuggest {...getAutosuggestProps()} invalid={true} />);
      expect(autosuggest.props.className).to.contain('invalid');
    });

    it('should render a message icon', () => {
      render(<Autosuggest {...getAutosuggestProps()} invalid={true} message="Something went wrong" />);
      expect(messageIcon).not.to.equal(null);
    });
  });

  describe('clear button', () => {
    const handleBlur = sinon.spy();
    const handleClear = sinon.spy();

    const clickClear = () => {
      Simulate.mouseDown(clearField);
      Simulate.mouseUp(clearField);
      Simulate.click(clearField);
    };

    beforeEach(() => {
      handleBlur.reset();
      handleClear.reset();
    });

    it('should not be visible when value is empty', () => {
      renderToDom(<Autosuggest {...getAutosuggestProps()} inputProps={{ value: '' }} onClear={handleClear} />);
      expect(isClearButtonVisible()).to.equal(false);
    });

    it('should be visible when value is provided', () => {
      renderToDom(<Autosuggest {...getAutosuggestProps()} inputProps={{ value: 'abc' }} onClear={handleClear} />);
      expect(isClearButtonVisible()).to.equal(true);
    });

    it('should be visible when value has white spaces only', () => {
      renderToDom(<Autosuggest {...getAutosuggestProps()} inputProps={{ value: '  ' }} onClear={handleClear} />);
      expect(isClearButtonVisible()).to.equal(true);
    });

    it('should not be visible when value is provided but no clear handler', () => {
      renderToDom(<Autosuggest {...getAutosuggestProps()} inputProps={{ value: 'abc' }} />);
      expect(isClearButtonVisible()).to.equal(false);
    });

    it('should invoke the clear handler when clicked', () => {
      renderToDom(<Autosuggest {...getAutosuggestProps()} onClear={handleClear} />);
      clickClear();
      expect(handleClear.calledOnce).to.equal(true);
      expect(handleClear).to.be.calledWith(eventMatcher);
    });

    it('should invoke the clear handler when touched', () => {
      renderToDom(<Autosuggest {...getAutosuggestProps()} onClear={handleClear} />);
      Simulate.touchStart(clearField);
      expect(handleClear.calledOnce).to.equal(true);
      expect(handleClear).to.be.calledWith(eventMatcher);
    });

    it('should focus the input when clicked', () => {
      renderToDom(<Autosuggest {...getAutosuggestProps()} onClear={handleClear} />);
      clickClear();
      expect(global.document.activeElement).to.equal(input);
    });
  });

  describe('autosuggest', () => {
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

    it('should render suggestions', () => {
      renderToDom(<Autosuggest {...getAutosuggestProps(['test', 'test 2'])} />);
      expect(suggestion).to.have.length(2);
    });
  });
});
