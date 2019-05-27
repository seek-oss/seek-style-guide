import React from 'react';
import AccordionItem from './AccordionItem';
import { createRenderer } from 'react-test-renderer/shallow';
import ReactTestUtils from 'react-dom/test-utils';
import { findAllWithType } from 'react-shallow-testutils';
import { TextLink } from 'seek-style-guide/react';

describe('AccordionItem', () => {
  const renderer = createRenderer();

  describe('when title is passed a string', () => {
    it('should render the string with titleText styling', () => {
      const titleText = 'title text';
      const accordion = renderer.render(<AccordionItem title={titleText} />);
      const [item] = findAllWithType(accordion, TextLink);
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
    it('it should call the passed onOpen function', done => {
      const mockOnOpen = jest.fn();
      const element = (
        <div>
          <AccordionItem title={'title'} onOpen={mockOnOpen} />
        </div>
      );

      const renderedElement = ReactTestUtils.renderIntoDocument(element);
      const button = renderedElement.querySelector('button');

      ReactTestUtils.Simulate.click(button);

      // wait for useEffect
      requestAnimationFrame(() => {
        expect(mockOnOpen).toHaveBeenCalledTimes(1);
        done();
      });
    });
  });

  describe('onClose', () => {
    it('it should call the passed onClose function', done => {
      const mockOnClose = jest.fn();
      const element = (
        <div>
          <AccordionItem title={'title'} onClose={mockOnClose} />
        </div>
      );

      const renderedElement = ReactTestUtils.renderIntoDocument(element);
      const button = renderedElement.querySelector('button');

      ReactTestUtils.Simulate.click(button);
      ReactTestUtils.Simulate.click(button);

      // wait for useEffect
      requestAnimationFrame(() => {
        expect(mockOnClose).toHaveBeenCalledTimes(1);
        done();
      });
    });
  });
});
