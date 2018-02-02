import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from './Dropdown';
import styles from './Dropdown.sketch.less';

const Container = ({ children }) => (
  <div style={{ maxWidth: '520px' }}>
    { children }
  </div>
);
Container.propTypes = {
  children: PropTypes.node.isRequired
};

const commonProps = {
  className: styles.root,
  label: 'Label',
  placeholder: 'Placeholder text',
  options: [],
  inputProps: {
    value: '',
    onChange: () => {}
  }
};

export const symbols = {
  'Dropdown/Standard': (
    <Container>
      <Dropdown {...commonProps} id="dropdown1" message={false} />
    </Container>
  ),
  'Dropdown/With Help Text': (
    <Container>
      <Dropdown {...commonProps} id="dropdown2" message="Help text" />
    </Container>
  ),
  'Dropdown/With Critical Text': (
    <Container>
      <Dropdown {...commonProps} id="dropdown3" message="Critical text" valid={false} />
    </Container>
  ),
  'Dropdown/With Positive Text': (
    <Container>
      <Dropdown {...commonProps} id="dropdown4" message="Positive text" valid={true} />
    </Container>
  )
};
