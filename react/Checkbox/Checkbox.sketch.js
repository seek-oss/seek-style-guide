import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from './Checkbox';
import styles from './Checkbox.demo.less';

const Container = ({ children }) => <div className={styles.root}>{ children }</div>;
Container.propTypes = {
  children: PropTypes.node.isRequired
};

const noop = () => {};

export const symbols = {
  'Checkbox/Standard/Checked': (
    <Container>
      <Checkbox id="checkbox2" label="Checkbox" inputProps={{ checked: true, onChange: noop }} />
    </Container>
  ),
  'Checkbox/Standard/Unchecked': (
    <Container>
      <Checkbox id="checkbox1" label="Checkbox" inputProps={{ checked: false, onChange: noop }} />
    </Container>
  ),
  'Checkbox/Button/Checked': (
    <Container>
      <Checkbox id="checkbox2" label="Checkbox" type="button" inputProps={{ checked: true, onChange: noop }} />
    </Container>
  ),
  'Checkbox/Button/Unchecked': (
    <Container>
      <Checkbox id="checkbox2" label="Checkbox" type="button" inputProps={{ checked: false, onChange: noop }} />
    </Container>
  )
};
