import React from 'react';
import AccordionItem from './AccordionItem';
import { createRenderer } from 'react-test-renderer/shallow';
import ReactTestUtils from 'react-dom/test-utils';
import { findAllWithClass, findAllWithType } from 'react-shallow-testutils';

describe('AccordionItem', () => {
  const renderer = createRenderer();

  describe('when titleContent is passed in', () => {
    it('should show titleText', () => {
      const titleText = 'title text';
      const accordion = renderer.render(
        <AccordionItem titleText={titleText} />
      );

      const [item] = findAllWithClass(accordion, 'AccordionItem__text');
      expect(item.props.children).toBe(titleText);
    });
  });

  describe('when titleContent is passed in', () => {
    it('it should not render titleText', () => {
      const titleContent = <div>some jsx</div>;
      const accordion = renderer.render(
        <AccordionItem titleContent={titleContent} />
      );

      const [item] = findAllWithClass(accordion, 'AccordionItem__text');

      expect(item).toBeUndefined();
    });

    it('it should render titleContent', () => {
      const titleContent = <div>some jsx</div>;
      const accordion = renderer.render(
        <AccordionItem titleContent={titleContent} />
      );
      const [item] = findAllWithClass(accordion, 'AccordionItem__titleContent');
      expect(item).toBeDefined();
      expect(item.props.children).toBe(titleContent);
    });
  });

  describe('when restProps are passed in', () => {
    it('they should be passed in as props to the button element', () => {
      const expectedProps = ['foo', 'bar', 'baz'];
      const accordion = renderer.render(
        <AccordionItem titleText="title" foo bar baz />
      );
      const [button] = findAllWithType(accordion, 'button');
      expect(Object.keys(button.props)).toEqual(
        expect.arrayContaining(expectedProps)
      );
    });
  });

  describe('when both titleContent and titleText are passed in', () => {
    it('it should throw an error', () => {
      const titleContent = <div>some jsx</div>;

      expect(() => {
        renderer.render(
          <AccordionItem titleText="Example text" titleContent={titleContent} />
        );
      }).toThrow();
    });
  });

  describe('onOpen', () => {
    it('it should call the passed onOpen function', () => {
      const mockOnOpen = jest.fn();
      const element = (
        <div>
          <AccordionItem titleText={'title'} onOpen={mockOnOpen} />
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
          <AccordionItem titleText={'title'} onClose={mockOnClose} open />
        </div>
      );

      const renderedElement = ReactTestUtils.renderIntoDocument(element);
      const button = renderedElement.querySelector('button');

      ReactTestUtils.Simulate.click(button);
      expect(mockOnClose).toHaveBeenCalledTimes(1);
    });
  });
});
