import React from 'react';
import { HeartIcon, StarIcon } from 'seek-style-guide/react';
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
    },
    {
      label: 'Component',
      type: 'radio',
      states: [
        {
          label: 'As Button',
          reduceProps: props => ({
            ...props,
            component: 'button'
          })
        },
        {
          label: 'As Link',
          reduceProps: props => ({
            ...props,
            component: 'a',
            href: '#'
          })
        },
        {
          label: 'As Div',
          reduceProps: props => ({
            ...props,
            component: 'div'
          })
        }
      ]
    },
    {
      label: 'Colour',
      type: 'radio',
      states: [
        {
          label: 'Pink',
          reduceProps: props => ({
            ...props,
            color: 'pink'
          })
        },
        {
          label: 'Blue',
          reduceProps: props => ({
            ...props,
            color: 'blue'
          })
        },
        {
          label: 'Gray',
          reduceProps: props => ({
            ...props,
            color: 'gray'
          })
        }
      ]
    },
    {
      label: 'Icon',
      type: 'radio',
      states: [
        {
          label: 'No Icon',
          reduceProps: props => props
        },
        {
          label: 'Heart Icon',
          reduceProps: props => ({
            ...props,
            children: (
              <span>
                <HeartIcon filled={true} />
                &nbsp;Click here
              </span>
            )
          })
        },
        {
          label: 'Star Icon',
          reduceProps: props => ({
            ...props,
            children: (
              <span>
                <StarIcon filled={true} />
                &nbsp;Click here
              </span>
            )
          })
        }
      ]
    }
  ]
};
