import React from 'react';
import { Button, HeartIcon, StarIcon } from 'seek-style-guide/react';
import styles from './Button.less';
import classnames from 'classnames';

export default {
  component: Button,
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
          transformProps: ({ className, ...props }) => ({
            ...props,
            className: classnames(className, styles.rootHover)
          })
        },
        {
          label: 'Active',
          transformProps: ({ className, ...props }) => ({
            ...props,
            className: classnames(className, styles.rootActive)
          })
        },
        {
          label: 'Focus',
          transformProps: ({ className, ...props }) => ({
            ...props,
            className: classnames(className, styles.rootFocus)
          })
        },
        {
          label: 'Loading',
          transformProps: props => ({
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
          transformProps: props => ({
            ...props,
            component: 'button'
          })
        },
        {
          label: 'As Link',
          transformProps: props => ({
            ...props,
            component: 'a',
            href: '#'
          })
        },
        {
          label: 'As Div',
          transformProps: props => ({
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
          transformProps: props => ({
            ...props,
            color: 'pink'
          })
        },
        {
          label: 'Blue',
          transformProps: props => ({
            ...props,
            color: 'blue'
          })
        },
        {
          label: 'Gray',
          transformProps: props => ({
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
          transformProps: props => props
        },
        {
          label: 'Heart Icon',
          transformProps: props => ({
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
          transformProps: props => ({
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
