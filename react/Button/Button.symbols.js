import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

export default class ButtonSymbols extends Component {
  propTypes = {
    SketchSymbol: PropTypes.func.isRequired
  };

  render() {
    const { SketchSymbol } = this.props;

    return (
      <div>
        <SketchSymbol name="Button/pink">
          <Button color="pink">Button</Button>
        </SketchSymbol>

        <SketchSymbol name="Button/blue">
          <Button color="blue">Button</Button>
        </SketchSymbol>

        <SketchSymbol name="Button/transparent">
          <Button color="transparent">Button</Button>
        </SketchSymbol>
      </div>
    );
  }
}
