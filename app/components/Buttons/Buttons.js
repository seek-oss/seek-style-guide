import React, { Component } from 'react';
import classnames from 'classnames';

import Heading from 'Heading/Heading';
import Subheading from 'Subheading/Subheading';
import { PinkButton } from 'seek-style-guide/react';
import { PinkButton as pinkButtonStyles } from 'seek-style-guide/react/styles';

const defaultSpec = {
  'Height': '5 grid rows',
  'Padding left': '1 gutter width',
  'Padding right': '1 gutter width',
  'Font size': '18px',
  'Text color': '@sk-white',
  'Background color': '@sk-pink',
  'Border radius': '2px',
  'Shadow': '0 1px rgba(33, 33, 33, 0.7)'
};
const hoverSpec = {
  'Background color': 'lighten(@sk-pink, 5%)'
};
const activeSpec = {
  'Background color': 'darken(@sk-pink, 5%)',
  'Box shadow': 'none',
  'Transform': 'scale(0.95)'
};

export default class Buttons extends Component {
  constructor() {
    super();

    this.state = {
      hover: false,
      focus: false,
      active: false,
      loading: false
    };

    this.toggleHover = this.toggleHover.bind(this);
    this.toggleFocus = this.toggleFocus.bind(this);
    this.toggleActive = this.toggleActive.bind(this);
    this.toggleLoading = this.toggleLoading.bind(this);
  }

  toggleHover(event) {
    this.setState({
      hover: event.target.checked
    });
  }

  toggleFocus(event) {
    this.setState({
      focus: event.target.checked
    });
  }

  toggleActive(event) {
    this.setState({
      active: event.target.checked
    });
  }

  toggleLoading(event) {
    this.setState({
      loading: event.target.checked
    });
  }

  render() {
    const { hover, focus, active, loading } = this.state;
    const className = classnames({
      [pinkButtonStyles.rootHover]: hover,
      [pinkButtonStyles.rootFocus]: focus,
      [pinkButtonStyles.rootActive]: active
    });

    return (
      <div>
        <Heading>Pink button</Heading>

        <Subheading>
          <p>
            <label>
              <input type="checkbox" checked={hover} onChange={this.toggleHover} /> hover
            </label>
          </p>
          <p>
            <label>
              <input type="checkbox" checked={focus} onChange={this.toggleFocus} /> focus
            </label>
          </p>
          <p>
            <label>
              <input type="checkbox" checked={active} onChange={this.toggleActive} /> active
            </label>
          </p>
          <p>
            <label>
              <input type="checkbox" checked={loading} onChange={this.toggleLoading} /> loading
            </label>
          </p>
        </Subheading>

        <PinkButton className={className} loading={loading}>
          Button
        </PinkButton>
{/*
        <Subheading>
          <table>
            <tbody>
              {
                spec.map(({ property, value }) =>
                  <tr key={property}>
                    <td>{property}</td>
                    <td>{value}</td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </Subheading>
*/}
      </div>
    );
  }
}

