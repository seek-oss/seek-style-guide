import React from 'react';
import AccordionItem from './AccordionItem';
import { createRenderer } from 'react-test-renderer/shallow';
import ReactTestUtils from 'react-dom/test-utils';
import { findAllWithClass, findAllWithType } from 'react-shallow-testutils';

describe('AccordionItem', () => {
  const renderer = createRenderer();

  describe('when title is passed a string', () => {
    it('should render the string with titleText styling', () => {
      const titleText = 'title text';
      const accordion = renderer.render(<AccordionItem title={titleText} />);

      const [item] = findAllWithClass(accordion, 'AccordionItem__titleText');
      expect(item.props.children).toBe(titleText);
    });
  });

  describe('when title is passed in a React element', () => {
    it('it should render the content with no styling', () => {
      const titleContent = <div>some jsx</div>;
      const accordion = renderer.render(<AccordionItem title={titleContent} />);
      const [item] = findAllWithType(accordion, 'span');
      expect(item).toBeDefined();
      expect(item.props.children).toBe(titleContent);
    });
  });

  describe('when restProps are passed in', () => {
    it('they should be passed in as props to the button element', () => {
      const expectedProps = ['foo', 'bar', 'baz'];
      const accordion = renderer.render(
        <AccordionItem title="title" foo bar baz />
      );
      const [button] = findAllWithType(accordion, 'button');
      expect(Object.keys(button.props)).toEqual(
        expect.arrayContaining(expectedProps)
      );
    });
  });

  describe('onOpen', () => {
    it('it should call the passed onOpen function', () => {
      const mockOnOpen = jest.fn();
      const element = (
        <div>
          <AccordionItem title={'title'} onOpen={mockOnOpen} />
        </div>
      );

      const renderedElement = ReactTestUtils.renderIntoDocument(element);
      const button = renderedElement.querySelector('button');

      ReactTestUtils.Simulate.click(button);
      expect(mockOnOpen).toHaveBeenCalledTimes(1);
    });
  });

  describe('onClose', () => {
    it('it should call the passed onClose function', () => {
      const mockOnClose = jest.fn();
      const element = (
        <div>
          <AccordionItem title={'title'} onClose={mockOnClose} open />
        </div>
      );

      const renderedElement = ReactTestUtils.renderIntoDocument(element);
      const button = renderedElement.querySelector('button');

      ReactTestUtils.Simulate.click(button);
      expect(mockOnClose).toHaveBeenCalledTimes(1);
    });
  });
});
