import styles from './Footer.less';

import tools from './data/tools';
import company, { partners, services } from './data/company';
import connect, { social } from './data/connect';
import employers from './data/employers';
import copyright from './data/copyright';

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

import ScreenReaderOnly from '../Accessibility/ScreenReaderOnly';
import FooterNav from './FooterNav/FooterNav';
import FooterLink from './FooterLink/FooterLink';
import ToggleContainer from './ToggleContainer/ToggleContainer';

const defaultLinkRenderer = props => (<a {...props} />);

export default class Footer extends Component {
  static propTypes = {
    locale: PropTypes.oneOf(['AU', 'NZ']),
    linkRenderer: PropTypes.func
  };

  static defaultProps = {
    locale: 'AU',
    linkRenderer: defaultLinkRenderer
  };

  constructor() {
    super();

    this.renderLink = this.renderLink.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return this.props.locale !== nextProps.locale;
  }

  renderLink({ name, specificLocale, ...restProps }, i) {
    const { locale, linkRenderer } = this.props;

    return (!specificLocale || specificLocale === locale) ?
      <FooterLink linkRenderer={linkRenderer} key={i} {...restProps}>{name}</FooterLink> :
      null;
  }

  render() {
    const { locale, linkRenderer } = this.props;
    const isAU = locale === 'AU';

    return (
      <footer aria-labelledby="FooterHeading" role="contentinfo" className={styles.root}>
        <section>
          <ScreenReaderOnly>
            <h1 id="FooterHeading">Footer</h1>
          </ScreenReaderOnly>

          <div className={styles.content}>
            <FooterNav label="Tools">
              { tools.map(this.renderLink) }
            </FooterNav>

            <FooterNav label="Company">
              { company.map(this.renderLink) }
              <ToggleContainer name="InternationalPartnersToggle" label="International partners">
                { partners.map(this.renderLink) }
              </ToggleContainer>
              {
                isAU ?
                  <ToggleContainer name="PartnerServicesToggle" label="Partner services" data-automation="partner-services-toggle">
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

            <FooterNav label="Employers">
              { employers.map(this.renderLink) }
            </FooterNav>

            <nav className={styles.copyright}>
              <ScreenReaderOnly>
                <h1>Additional Links</h1>
              </ScreenReaderOnly>

              {
                copyright.map(({ name, analytics, href, secondary }, key) => (
                  linkRenderer({
                    children: name,
                    href,
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
      </footer>
    );
  }
}
