import styles from './SignInRegister.less';
import React from 'react';
import PropTypes from 'prop-types';
import ScreenReaderOnly from '../../ScreenReaderOnly/ScreenReaderOnly';
import appendReturnUrl from '../../private/appendReturnUrl';

export default function SignInRegister({ linkRenderer, returnUrl }) {
  return (
    <nav
      aria-labelledby="SignInOrRegister"
      data-automation="sign-in-register"
      className={styles.root}>

      <ScreenReaderOnly>
        <h1 id="SignInOrRegister">Sign in or register</h1>
      </ScreenReaderOnly>
      {
        linkRenderer({
          'data-analytics': 'header:sign-in',
          href: appendReturnUrl('/sign-in', returnUrl),
          rel: 'nofollow',
          className: styles.link,
          title: 'Sign in',
          children: 'Sign in'
        })
      }
      {' or '}
      {
        linkRenderer({
          'data-analytics': 'header:register',
          href: appendReturnUrl('/sign-up', returnUrl),
          rel: 'nofollow',
          className: styles.link,
          title: 'Register',
          children: 'Register'
        })
      }
    </nav>
  );
}

SignInRegister.propTypes = {
  linkRenderer: PropTypes.func.isRequired,
  returnUrl: PropTypes.string
};
