import styles from './StyleGuideProvider.less';

import React from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';
import Helmet from 'react-helmet';
import ScreenReaderOnly from '../ScreenReaderOnly/ScreenReaderOnly';

const defaultPageTitleAU =
  "SEEK - Australia's no. 1 jobs, employment, career and recruitment site";
const defaultPageTitleNZ =
  "Jobs on SEEK - New Zealand's no. 1 Employment, Career and Recruitment site";

const getLocalisedPageTitle = locale =>
  locale === 'AU' ? defaultPageTitleAU : defaultPageTitleNZ;

export default function StyleGuideProvider({
  fullScreen,
  children,
  meta,
  link,
  title,
  locale
}) {
  const className = classnames({
    [styles.root]: true,
    [styles.fullScreen]: fullScreen
  });

  const pageTitle = title || getLocalisedPageTitle(locale);

  return (
    <div className={className}>
      <Helmet title={pageTitle} meta={meta} link={link} />

      <ScreenReaderOnly component="div">
        <h1>{pageTitle}</h1>
      </ScreenReaderOnly>

      {children}
    </div>
  );
}

StyleGuideProvider.propTypes = {
  fullScreen: PropTypes.bool,
  children: PropTypes.node,
  title: PropTypes.string,
  meta: PropTypes.array,
  link: PropTypes.array,
  locale: PropTypes.oneOf(['AU', 'NZ'])
};

StyleGuideProvider.defaultProps = {
  fullScreen: false,
  meta: [],
  link: [],
  locale: 'AU'
};
