import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from './Checkbox';
import styles from './Checkbox.demo.less';

const Container = ({ children, width }) => (
  <div className={styles.root} style={{ width: width ? `${width}px` : 'auto' }}>
    {children}
  </div>
);
Container.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.number
};

const noop = () => {};

export const symbols = {
  'Checkbox/Standard/Checked': (
    <Container>
      <Checkbox
        id="checkbox2"
        label="Checkbox"
        checked={true}
        onChange={noop}
      />
    </Container>
  ),
  'Checkbox/Standard/Unchecked': (
    <Container>
      <Checkbox
        id="checkbox1"
        label="Checkbox"
        checked={false}
        onChange={noop}
      />
    </Container>
  ),
  'Checkbox/Button/Checked': (
    <Container>
      <Checkbox
        id="checkbox2"
        label="Checkbox"
        type="button"
        checked={true}
        onChange={noop}
      />
    </Container>
  ),
  'Checkbox/Button/Unchecked': (
    <Container>
      <Checkbox
        id="checkbox2"
        label="Checkbox"
        type="button"
        checked={false}
        onChange={noop}
      />
    </Container>
  ),
  'Checkbox/Button/LongLabel': (
    <Container width={200}>
      <Checkbox
        id="checkbox5"
        label="This is going to be a very long label that will most likely wrap"
        checked={true}
        onChange={noop}
      />
    </Container>
  )
};
