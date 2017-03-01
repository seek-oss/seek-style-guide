import TextField from './TextField';
import styles from './TextField.less';
import classnames from 'classnames';

export default {
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
        },
        {
          label: 'Secondary message',
          transformProps: props => ({
            ...props,
            messageProps: { secondary: true }
          })
        }
      ]
    },
    {
      label: 'Message',
      type: 'radio',
      states: [
        {
          label: 'Help text',
          transformProps: props => props
        },
        {
          label: 'Critical message',
          transformProps: props => ({
            ...props,
            valid: false,
            message: 'Something went wrong'
          })
        },
        {
          label: 'Positive message',
          transformProps: props => ({
            ...props,
            valid: true,
            message: 'Looking good!'
          })
        },
        {
          label: 'No message',
          transformProps: props => ({
            ...props,
            message: false
          })
        }
      ]
    }
  ]
};
