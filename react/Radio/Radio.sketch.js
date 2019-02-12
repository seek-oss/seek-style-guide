import React from 'react';
import PropTypes from 'prop-types';
import Radio from './Radio';
import styles from './Radio.demo.less';

const Container = ({ children }) => (
  <div className={styles.root}>{children}</div>
);
Container.propTypes = {
  children: PropTypes.node.isRequired
};

const noop = () => {};

export const symbols = {
  'Radio/Checked': (
    <Container>
      <Radio id="radio2" label="Radio" checked={true} onChange={noop} />
    </Container>
  ),
  'Radio/Unchecked': (
    <Container>
      <Radio id="radio1" label="Radio" checked={false} onChange={noop} />
    </Container>
  )
};
