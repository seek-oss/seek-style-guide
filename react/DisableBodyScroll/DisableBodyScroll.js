import PropTypes from 'prop-types';
import withSideEffect from 'react-side-effect';

const DisableBodyScroll = props => props.children;

DisableBodyScroll.defaultProps = {
  isDisabled: false
};

DisableBodyScroll.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  isDisabled: PropTypes.bool
};

function reducePropsToState(propsList) {
  let isDisabled;

  propsList.forEach(props => {
    isDisabled = props.isDisabled;
  });

  return isDisabled;
}

const handleStateChangeOnClient = isDisabled => {
  Object.assign(document.body.style, { overflow: isDisabled ? 'hidden' : 'auto' });
};

export default withSideEffect(
  reducePropsToState,
  handleStateChangeOnClient
)(DisableBodyScroll);
