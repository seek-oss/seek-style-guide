import styles from './SignInRegister.less';
import React, { PropTypes } from 'react';
import ScreenReaderOnly from '../../ScreenReaderOnly/ScreenReaderOnly';
import appendReturnUrl from '../appendReturnUrl';

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
          'data-analytics': 'sign-in',
          href: appendReturnUrl('/Login/Standalone', returnUrl),
          className: styles.link,
          title: 'Sign in',
          children: 'Sign in'
        })
      }
      {' or '}
      {
        linkRenderer({
          'data-analytics': 'register',
          href: appendReturnUrl('/Register/Standalone', returnUrl),
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
