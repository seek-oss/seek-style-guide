import styles from './SignInRegister.less';
import React from 'react';
import PropTypes from 'prop-types';
import appendReturnUrl from '../../private/appendReturnUrl';

export default function SignInRegister({ linkRenderer, returnUrl }) {
  return (
    <nav
      aria-label="Sign in or register"
      data-automation="sign-in-register"
      className={styles.root}
    >
      {linkRenderer({
        'data-analytics': 'header:sign-in',
        href: appendReturnUrl('/sign-in', returnUrl),
        rel: 'nofollow',
        className: styles.link,
        title: 'Sign in',
        children: 'Sign in'
      })}
      {' or '}
      {linkRenderer({
        'data-analytics': 'header:register',
        href: appendReturnUrl('/sign-up', returnUrl),
        rel: 'nofollow',
        className: styles.link,
        title: 'Register',
        children: 'Register'
      })}
    </nav>
  );
}

SignInRegister.propTypes = {
  linkRenderer: PropTypes.func.isRequired,
  returnUrl: PropTypes.string
};
