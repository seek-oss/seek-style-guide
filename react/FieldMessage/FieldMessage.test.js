import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';
import { findAllWithClass } from 'react-shallow-testutils';
import FieldMessage from './FieldMessage';

chai.use(sinonChai);

const renderer = createRenderer();

describe('FieldMessage', () => {
  let element, fieldMessage, message, messageIcon, errors;

  beforeEach(() => {
    errors = [];

    sinon.stub(console, 'error').callsFake(errorMessage => {
      errors.push(errorMessage);
    });
  });

  afterEach(() => {
    console.error.restore();
  });

  function render(jsx) {
    element = jsx;
    fieldMessage = renderer.render(element);
    message = findAllWithClass(fieldMessage, 'message')[0] || null;
    messageIcon = findAllWithClass(fieldMessage, 'messageIcon')[0] || null;
  }

  function messageText() {
    return message.props.children[1];
  }

  describe('message', () => {
    it('should not be rendered by default', () => {
      render(<FieldMessage messageProps={{ className: 'message' }} />);
      expect(message).to.equal(null);
    });

    it('should have the right text when `message` is specified and no icon by default', () => {
      render(<FieldMessage message="Something went wrong" messageProps={{ className: 'message' }} />);
      expect(messageText()).to.equal('Something went wrong');
      expect(messageIcon).to.equal(null);
    });

    it('should pass through className to the message', () => {
      render(<FieldMessage message="Something went wrong" messageProps={{ className: 'message first-name-message' }} />);
      expect(message.props.className).to.match(/first-name-message$/);
    });

    it('should default to secondary text', () => {
      render(<FieldMessage message="Something went wrong" messageProps={{ className: 'message' }} />);
      expect(message.props.secondary).to.equal(true);
    });

    it('should have the noMarginBottom className if passed a string', () => {
      render(<FieldMessage message="Something went wrong" />);
      expect(fieldMessage.props.className).to.contain('noMarginBottom');
    });

    it('should have the noMarginBottom className if false', () => {
      render(<FieldMessage message={false} />);
      expect(fieldMessage.props.className).to.contain('noMarginBottom');
    });

    describe('messageProps', () => {
      it('should pass through other props to the message', () => {
        render(<FieldMessage message="Something went wrong" messageProps={{ className: 'message', 'data-automation': 'first-name-message' }} />);
        expect(message.props['data-automation']).to.equal('first-name-message');
      });
    });

    describe('valid', () => {
      describe('set to false', () => {
        it('FieldMessage should have a icon and set text as critical', () => {
          render(<FieldMessage valid={false} message="Something went wrong" messageProps={{ className: 'message' }} />);
          expect(messageIcon).not.to.equal(null);
          expect(message.props.critical).to.equal(true);
        });
      });

      describe('set to true', () => {
        it('Message should have a icon and set text as positive', () => {
          render(<FieldMessage valid={true} message="Something went right" messageProps={{ className: 'message' }} />);
          expect(messageIcon).not.to.equal(null);
          expect(message.props.positive).to.equal(true);
        });
      });
    });

    describe('valid & messageProps secondary', () => {
      it('secondary messageProps trumps valid = true but still have icon', () => {
        render(<FieldMessage valid={true} message="Something went right" messageProps={{ className: 'message', secondary: true }} />);
        expect(messageIcon).not.to.equal(null);
        expect(message.props.positive).not.to.equal(true);
        expect(message.props.secondary).to.equal(true);
      });

      it('secondary messageProps trumps valid = false but still have icon', () => {
        render(<FieldMessage valid={false} message="Something went wrong" messageProps={{ className: 'message', secondary: true }} />);
        expect(messageIcon).not.to.equal(null);
        expect(message.props.critical).not.to.equal(true);
        expect(message.props.secondary).to.equal(true);
      });
    });
  });
});
