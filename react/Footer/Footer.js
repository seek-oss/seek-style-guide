import styles from './Footer.less';

import tools, { seekSites } from './data/tools';
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
import ScreenReaderOnly from '../ScreenReaderOnly/ScreenReaderOnly';
import ToggleContainer from './ToggleContainer/ToggleContainer';
import { AUTHENTICATED, UNAUTHENTICATED, AUTH_PENDING } from '../private/authStatusTypes';

const defaultLinkRenderer = props => (<a {...props} />);

export default class Footer extends Component {
  static propTypes = {
    locale: PropTypes.oneOf(['AU', 'NZ']),
    linkRenderer: PropTypes.func,
    authenticationStatus: PropTypes.oneOf([
      AUTHENTICATED,
      UNAUTHENTICATED,
      AUTH_PENDING
    ])
  };

  static defaultProps = {
    locale: 'AU',
    linkRenderer: defaultLinkRenderer,
    authenticationStatus: AUTH_PENDING
  };

  constructor() {
    super();

    this.renderLink = this.renderLink.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return this.props.locale !== nextProps.locale || this.props.authenticationStatus !== nextProps.authenticationStatus;
  }

  renderLink({ name, specificLocale, secondary, ...restProps }, i) {
    const { locale, linkRenderer, authenticationStatus } = this.props;

    return (!specificLocale || specificLocale === locale) ?
      <FooterLink secondary={secondary} linkRenderer={linkRenderer} authenticationStatus={authenticationStatus} key={i} {...restProps}>{name}</FooterLink> :
      null;
  }

  render() {
    const { locale, linkRenderer } = this.props;
    const isAU = locale === 'AU';

    return (
      <footer aria-labelledby="FooterHeading" role="contentinfo" className={styles.root}>
        <Hidden print>
          <section>
            <ScreenReaderOnly>
              <h1 id="FooterHeading">Footer</h1>
            </ScreenReaderOnly>

            <div className={styles.content}>
              <div className={styles.columns}>
                <FooterNav label="Tools">
                  { tools.map(this.renderLink) }
                  <ToggleContainer name="PartnerSitesToggle" label="SEEK sites">
                    { seekSites.map(this.renderLink) }
                  </ToggleContainer>
                </FooterNav>

                <FooterNav secondary label="Company">
                  { company.map(this.renderLink) }
                  <ToggleContainer secondary name="InternationalPartnersToggle" label="International partners">
                    { partners.map(this.renderLink) }
                  </ToggleContainer>
                  {
                    isAU ?
                      <ToggleContainer secondary name="PartnerServicesToggle" label="Partner services" data-automation="partner-services-toggle">
                        { services.map(this.renderLink) }
                      </ToggleContainer> :
                      null
                  }
                </FooterNav>

                <FooterNav label="Connect">
                  { connect.map(this.renderLink) }
                  <ToggleContainer name="SocialToggle" label="Social">
                    { social.map(this.renderLink) }
                  </ToggleContainer>
                </FooterNav>

                <FooterNav secondary label="Employers">
                  { employers.map(this.renderLink) }
                </FooterNav>
              </div>

              <nav className={styles.copyright}>
                <ScreenReaderOnly>
                  <h1>Additional Links</h1>
                </ScreenReaderOnly>

                {
                  copyright.map(({ name, analytics, href, rel, secondary }, key) => (
                    linkRenderer({
                      children: name,
                      href,
                      rel,
                      'data-analytics': analytics,
                      key,
                      className: classnames({
                        [styles.copyrightLink]: true,
                        [styles.secondaryLink]: secondary
                      })
                    })
                  ))
                }
                <p className={styles.copyrightMessage}>{'\u00A9 SEEK. All rights reserved.'}</p>
              </nav>
            </div>
          </section>
        </Hidden>
      </footer>
    );
  }
}
