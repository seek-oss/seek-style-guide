import TextField from './TextField';
import styles from './TextField.less';
import classnames from 'classnames';
import fieldMessageOptions from '../private/FieldMessage/FieldMessage.demo';
import fieldLabelOptions from '../private/FieldLabel/FieldLabel.demo';

export default {
  route: '/textfields',
  title: 'Textfields',
  component: TextField,
  initialProps: {
    id: 'firstName',
    label: 'First Name',
    message: 'e.g. Olivia'
  },
  options: [
    {
      label: 'States',
      type: 'checklist',
      states: [
        {
          label: 'Focus',
          transformProps: ({ className, ...props }) => ({
            ...props,
            className: classnames(className, styles.rootFocus)
          })
        }
      ]
    },
    ...fieldMessageOptions,
    ...fieldLabelOptions
  ]
};
