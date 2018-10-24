import React from 'react';
import { shallow } from 'enzyme';
import AccordionItem from './AccordionItem';

const defaultProps = {
  title: () => <span>Living Style Guide</span>,
  children: <span>This is the content inside an Accordion Item</span>,
  id: 'abc123'
}
const renderAccordion = (props = defaultProps) => shallow(<AccordionItem {...props}>Hello world</AccordionItem>);

test('should render AccordionItem', () => {
  const accordion = renderAccordion();
  expect(accordion).toMatchSnapshot();
});

test('should render with expanded prop', () => {
  const accordion = renderAccordion({ ...defaultProps, expanded: true });
  expect(accordion).toMatchSnapshot();
});

test('should render with className', () => {
  const accordion = renderAccordion({ ...defaultProps, className: 'foobar' });
  expect(accordion).toMatchSnapshot();
});

test('should render expanded when prop changes', () => {
  jest.spyOn(AccordionItem.prototype, 'componentWillReceiveProps');
  const accordion = renderAccordion();
  accordion.setProps({ expanded: true });
  expect(AccordionItem.prototype.componentWillReceiveProps.mock.calls.length).toBe(1);
  expect(accordion.find({ type: 'checkbox' }).props().checked).toBe(true);
  expect(accordion).toMatchSnapshot();
});
