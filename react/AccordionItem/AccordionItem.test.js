import React from 'react';
import { shallow } from 'enzyme';
import AccordionItem from './AccordionItem';

const defaultProps = {
  title: () => <span>Hello world</span>,
  children: <span>Hell from the inside</span>,
  id: 'abc123'
}
const renderAccordion = props => shallow(<AccordionItem {...props}>Hello world</AccordionItem>);

test('should render AccordionItem', () => {
  const accordion = renderAccordion({ ...defaultProps });
  expect(accordion).toMatchSnapshot();
})
