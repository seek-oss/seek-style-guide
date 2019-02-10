import React from 'react';
import { shallow } from 'enzyme';
import Section from './Section';
import { TONE } from '../private/tone';
import { LEVEL } from '../private/level';

const renderSection = props =>
  shallow(<Section {...props}>Test content</Section>);

describe('Section:', () => {
  describe('types:', () => {
    it('should render positive sections', () => {
      const section = renderSection({ tone: TONE.POSITIVE });
      expect(section).toMatchSnapshot();
    });

    it('should render info sections', () => {
      const section = renderSection({ tone: TONE.INFO });
      expect(section).toMatchSnapshot();
    });

    it('should render critical sections', () => {
      const section = renderSection({ tone: TONE.CRITICAL });
      expect(section).toMatchSnapshot();
    });

    it('should render help sections', () => {
      const section = renderSection({ tone: TONE.HELP });
      expect(section).toMatchSnapshot();
    });
  });

  describe('levels:', () => {
    it('should render primary sections', () => {
      const section = renderSection({ level: LEVEL.PRIMARY });
      expect(section).toMatchSnapshot();
    });

    it('should render secondary sections', () => {
      const section = renderSection({ level: LEVEL.SECONDARY });
      expect(section).toMatchSnapshot();
    });
  });

  it('should render the pullout style', () => {
    const section = renderSection({ pullout: true });
    expect(section).toMatchSnapshot();
  });

  it('should render the slim style', () => {
    const section = renderSection({ slim: true });
    expect(section).toMatchSnapshot();
  });

  it('should render the header style', () => {
    const section = renderSection({ header: true });
    expect(section).toMatchSnapshot();
  });

  it('should accept additional classnames and place them on the root', () => {
    const section = renderSection({
      level: LEVEL.SECONDARY,
      className: 'testClass'
    });
    expect(section).toMatchSnapshot();
  });

  it('should accept additional props', () => {
    const section = renderSection({ testProp: true });
    expect(section).toMatchSnapshot();
  });

  it('should render multiple classes together', () => {
    const section = renderSection({
      level: LEVEL.SECONDARY,
      tone: TONE.INFO,
      slim: true
    });
    expect(section).toMatchSnapshot();
  });
});
