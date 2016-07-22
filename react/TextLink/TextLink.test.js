import { expect } from 'chai';
import React from 'react';
import { createRenderer } from 'react-addons-test-utils';
import TextLink from './TextLink';

const renderer = createRenderer();

describe('TextLink', () => {
  let element, link;

  function render(jsx) {
    element = jsx;
    link = renderer.render(element);
  }

  function linkText() {
    return link.props.children[0];
  }

  function chevronName() {
    const chevronComponent = link.props.children[1];

    return chevronComponent === null ? null : chevronComponent.type.displayName;
  }

  it('should have a displayName', () => {
    render(<TextLink>Google</TextLink>);
    expect(element.type.displayName).to.equal('TextLink');
  });

  it('should render link text', () => {
    render(<TextLink>Google</TextLink>);
    expect(linkText()).to.equal('Google');
  });

  it('should not render a chevron by default', () => {
    render(<TextLink>Google</TextLink>);
    expect(chevronName()).to.equal(null);
  });

  it('should render a chevron when `chevron` is specified', () => {
    render(<TextLink chevron="right">Google</TextLink>);
    expect(chevronName()).to.equal('ChevronIcon');
  });
});
