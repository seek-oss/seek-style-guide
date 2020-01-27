import styles from './Footer.less';

import tools, { seekSites, seekApps } from './data/tools';
import company, { partners, services } from './data/company';
import connect, { social } from './data/connect';
import employers from './data/employers';
import copyright from './data/copyright';

import classnames from 'classnames';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FooterLink from './FooterLink/FooterLink';
import FooterNav from './FooterNav/FooterNav';
import Hidden from '../Hidden/Hidden';
import ToggleContainer from './ToggleContainer/ToggleContainer';
import {
  AUTHENTICATED,
  UNAUTHENTICATED,
  AUTH_PENDING
} from '../private/authStatusTypes';

const defaultLinkRenderer = props => <a {...props} />;

export default class Footer extends Component {
  static propTypes = {
    locale: PropTypes.oneOf(['AU', 'NZ']),
    promo: PropTypes.bool,
    linkRenderer: PropTypes.func,
    authenticationStatus: PropTypes.oneOf([
      AUTHENTICATED,
      UNAUTHENTICATED,
      AUTH_PENDING
    ])
  };

  static defaultProps = {
    locale: 'AU',
    promo: false,
    linkRenderer: defaultLinkRenderer,
    authenticationStatus: AUTH_PENDING
  };

  constructor() {
    super();

    this.renderLink = this.renderLink.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return (
      this.props.locale !== nextProps.locale ||
      this.props.promo !== nextProps.promo ||
      this.props.authenticationStatus !== nextProps.authenticationStatus
    );
  }

  renderLink({ name, specificLocale, secondary, ...restProps }, i) {
    const { locale, linkRenderer, authenticationStatus, promo } = this.props;

    return !specificLocale || specificLocale === locale ? (
      <FooterLink
        secondary={secondary}
        linkRenderer={linkRenderer}
        promo={promo}
        authenticationStatus={authenticationStatus}
        key={i}
        {...restProps}
      >
        {name}
      </FooterLink>
    ) : null;
  }

  render() {
    const { linkRenderer, promo } = this.props;

    return (
      <footer
        role="contentinfo"
        className={classnames({
          [styles.root]: true,
          [styles.promo]: promo
        })}
      >
        <Hidden print>
          <div className={styles.content}>
            <div className={styles.columns}>
              <FooterNav label="Tools">
                {tools.map(this.renderLink)}
                <ToggleContainer
                  promo={promo}
                  name="DownloadAppsToggle"
                  label="Download apps"
                >
                  {seekApps.map(this.renderLink)}
                </ToggleContainer>
                <ToggleContainer
                  promo={promo}
                  name="PartnerSitesToggle"
                  label="SEEK sites"
                >
                  {seekSites.map(this.renderLink)}
                </ToggleContainer>
              </FooterNav>

              <FooterNav secondary label="Company">
                {company.map(this.renderLink)}
                <ToggleContainer
                  promo={promo}
                  secondary
                  name="InternationalPartnersToggle"
                  label="International partners"
                >
                  {partners.map(this.renderLink)}
                </ToggleContainer>
                <ToggleContainer
                  promo={promo}
                  secondary
                  name="PartnerServicesToggle"
                  label="Partner services"
                  data-automation="partner-services-toggle"
                >
                  {services.map(this.renderLink)}
                </ToggleContainer>
              </FooterNav>

              <FooterNav label="Connect">
                {connect.map(this.renderLink)}
                <ToggleContainer
                  name="SocialToggle"
                  label="Social"
                  promo={promo}
                >
                  {social.map(this.renderLink)}
                </ToggleContainer>
              </FooterNav>

              <FooterNav secondary label="Employers">
                {employers.map(this.renderLink)}
              </FooterNav>
            </div>

            <div className={styles.copyright}>
              {copyright.map(({ name, analytics, href, rel, secondary }, key) =>
                linkRenderer({
                  children: name,
                  href,
                  rel,
                  'data-analytics': analytics,
                  key,
                  className: classnames({
                    [styles.copyrightLink]: true,
                    [styles.secondaryLink]: secondary,
                    [styles.promoText]: promo
                  })
                })
              )}
              <p
                className={classnames({
                  [styles.copyrightMessage]: true,
                  [styles.promoText]: promo
                })}
              >
                {'\u00A9 SEEK. All rights reserved.'}
              </p>
            </div>
          </div>
        </Hidden>
      </footer>
    );
  }
}
