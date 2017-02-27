import styles from './Button.less';
import classnames from 'classnames';

export default {
  initialProps: {
    children: 'Hello world',
    color: 'pink'
  },
  options: [
    {
      label: 'States',
      type: 'checklist',
      states: [
        {
          label: 'Hover',
          reduceProps: ({ className, ...restProps }) => ({
            className: classnames(className, styles.rootHover),
            ...restProps
          })
        },
        {
          label: 'Active',
          reduceProps: ({ className, ...restProps }) => ({
            className: classnames(className, styles.rootActive),
            ...restProps
          })
        },
        {
          label: 'Focus',
          reduceProps: ({ className, ...restProps }) => ({
            className: classnames(className, styles.rootFocus),
            ...restProps
          })
        },
        {
          label: 'Loading',
          reduceProps: props => ({
            ...props,
            loading: true
          })
        }
      ]
    }
  ]
};
