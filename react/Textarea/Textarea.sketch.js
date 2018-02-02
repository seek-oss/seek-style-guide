import React from 'react';
import PropTypes from 'prop-types';
import Textarea from './Textarea';
import styles from './Textarea.sketch.less';

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
  inputProps: {
    value: ''
  },
  countFeedback: () => ({ count: 500 })
};

export const symbols = {
  'Textarea/Standard': (
    <Container>
      <Textarea {...commonProps} id="textarea1" message={false} />
    </Container>
  ),
  'Textarea/With Help Text': (
    <Container>
      <Textarea {...commonProps} id="textarea2" message="Help text" />
    </Container>
  ),
  'Textarea/With Critical Text': (
    <Container>
      <Textarea {...commonProps} id="textarea3" message="Critical text" valid={false} countFeedback={() => ({ count: -20 })} />
    </Container>
  ),
  'Textarea/With Positive Text': (
    <Container>
      <Textarea {...commonProps} id="textarea4" message="Positive text" valid={true} />
    </Container>
  )
};
