import { AUTHENTICATED } from './authStatusTypes';
import appendReturnUrl from './appendReturnUrl';

export default (authenticationStatus, url) =>
  authenticationStatus !== AUTHENTICATED
    ? appendReturnUrl('/sign-in', url)
    : url;
