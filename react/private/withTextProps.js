import has from 'lodash/has';
import some from 'lodash/some';
import includes from 'lodash/includes';
import booleanPropsToEnums from './booleanPropsToEnums';

export const sizes = [
  'small',
  'standard',
  'large',
  'subheading',
  'heading',
  'headline',
  'hero'
];

export const SizePropTypes = {
  size: (props, propName, componentName) => { // eslint-disable-line consistent-return
    if (props.size && !includes(sizes, props.size)) {
      return new Error(`Invalid prop size='${props.size}' supplied to ${componentName}`);
    }

    if (props.size && some(sizes, size => has(props, size))) {
      return new Error(`Seems that you've accidentially supplied boolean size along with size='${props.size}' to ${componentName}, please remove one of them. Otherwise boolean prop will overwrite the 'size' prop.`);
    }
  }
};

export default booleanPropsToEnums({ size: sizes });
