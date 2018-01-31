import React from 'react';
import { Button, HeartIcon, StarIcon } from 'seek-asia-style-guide/react';
import * as sketch from './Button.sketch';
import styles from './Button.less';
import classnames from 'classnames';

export default {
  route: '/button',
  title: 'Button',
  component: Button,
  sketch,
  initialProps: {
    children: 'Hello world',
    color: 'callToAction'
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
        },
        {
          label: 'Full width',
          transformProps: props => ({
            ...props,
            fullWidth: true
          })
        },
        {
          label: 'Ghost',
          transformProps: props => ({
            ...props,
            ghost: true
          })
        },
        {
          label: 'Inverse',
          transformProps: props => ({
            ...props,
            inverse: true
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
          label: 'Call To Action',
          transformProps: props => ({
            ...props,
            color: 'callToAction'
          })
        },
        {
          label: 'Hyperlink',
          transformProps: props => ({
            ...props,
            color: 'hyperlink'
          })
        },
        {
          label: 'Completion',
          transformProps: props => ({
            ...props,
            color: 'completion'
          })
        },
        {
          label: 'Alert',
          transformProps: props => ({
            ...props,
            color: 'alert'
          })
        },
        {
          label: 'Highlight',
          transformProps: props => ({
            ...props,
            color: 'highlight'
          })
        },
        {
          label: 'Transparent',
          transformProps: props => ({
            ...props,
            color: 'transparent'
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
