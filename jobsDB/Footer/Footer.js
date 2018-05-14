import React from 'react';
import styles from './footer.less';
import PropTypes from 'prop-types';
import classnames from 'classnames';
// import FooterLinks from './components/FooterLinks/FooterLinks';
import localization from './localization';

const Footer = ({ language, country, baseUrl, mbaseUrl, contentUrl }) => {
  const year = new Date().getFullYear();
  const messages = localization[`${language}-${country}`];
  const footerbackground = `${contentUrl}/images/Shared/v8Revamp2/logo_ftr_blue.png`;
  const footerbackgroundimage = `${contentUrl}/images/Shared/v8Revamp2/logo_ftr_blue.svg`;
  const socialbackgroundimage = `${contentUrl}/images/Shared/v8Revamp2/icon_footer-social-all.svg`;
  const backgroudstyle = {
    background: `url(${footerbackground}), `,
    backgroundImage: `url(${footerbackgroundimage}), none`
  };

  const socialbackgroundimagestyle = {
    backgroundImage: `url(${socialbackgroundimage})`
  };

  return (
    <footer className={styles['is-full']}>
      <div className={styles['footer--full']}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles['col-md-4']}>
              <div className={styles.row}>
                <div className={classnames(styles['col-sm-6'], styles['col-md-12'])}>
                  <h2 className={classnames(styles['footer-logo'], styles['hidden-xs'])}><a style={backgroudstyle} href="#">jobsDB.com</a></h2>
                </div>
                <div className={classnames(styles['col-sm-6'], styles['col-md-12'])}>
                  <div className={styles['footer-contact-info']}>
                    <div>{messages['footer.jobpostingenquiry']}</div>
                    <div>{messages['footer.cshotline']} <em>{messages['footer.officehour']}</em></div>
                    <div>{messages['footer.csemailtext']}<a href={messages['footer.csemailLink']}>{messages['footer.csemail']}</a></div>
                    <ul className={classnames(styles['footer-social'], styles['footer-social-icons'])}>
                      <li><a className={classnames(styles['social-icon'], styles['social-facebook'])} style={socialbackgroundimagestyle} href={messages['footer.facebookLink']} target="_blank">Facebook</a></li>
                      <li><a className={classnames(styles['social-icon'], styles['social-googleplus'])} style={socialbackgroundimagestyle} href={messages['footer.googleplusLink']} target="_blank">Google+</a></li>
                      <li><a className={classnames(styles['social-icon'], styles['social-weibo'])} style={socialbackgroundimagestyle} href={messages['footer.weiboLink']} target="_blank">Weibo</a></li>
                      <li><a className={classnames(styles['social-icon'], styles['social-twitter'])} style={socialbackgroundimagestyle} href={messages['footer.twitterLink']} target="_blank">Twitter</a></li>
                      <li><a className={classnames(styles['social-icon'], styles['social-feed'])} style={socialbackgroundimagestyle} href={messages['footer.rssLink']} target="_blank">RSS Feed</a></li>
                    </ul>
                    <p>&nbsp;</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={classnames(styles['col-sm-6'], styles['col-md-4'])}>
              <div className={styles.row}>
                <div className={styles['col-xs-6']}>
                  <dl className={classnames(styles['footer-list'], styles.first)}>
                    <dt>{messages['footer.jobseekers']}</dt>
                    <dd><a href={baseUrl + messages['footer.browsejobsLink']}>{messages['footer.browsejobs']}</a></dd>
                    <dd><a href={baseUrl + messages['footer.postajobLink']}>{messages['footer.postresumes']}</a></dd>
                    <dd><a href={baseUrl + messages['footer.jobalertsLink']}>{messages['footer.jobalerts']}</a></dd>
                    <dd><a href={baseUrl + messages['footer.myjobsdbLink']}>{messages['footer.myjobsdb']}</a></dd>
                    <dd><a href={baseUrl + messages['footer.careerinsightsLink']}>{messages['footer.careerinsights']}</a></dd>
                  </dl>
                </div>
                <div className={styles['col-xs-6']}>
                  <dl className={styles['footer-list']}>
                    <dt>{messages['footer.employers']}</dt>
                    <dd><a href={baseUrl + messages['footer.postajobLink']}>{messages['footer.postajob']}</a></dd>
                    <dd><a href={baseUrl + messages['footer.searchcandidatesLink']}>{messages['footer.searchcandidates']}</a></dd>
                    <dd><a href={baseUrl + messages['footer.advertisewithusLink']}>{messages['footer.advertisewithus']}</a></dd>
                  </dl>
                </div>
              </div>
            </div>
            <div className={classnames(styles['col-sm-6'], styles['col-md-4'])}>
              <div className={styles.row}>
                <div className={styles['col-xs-6']}>
                  <dl className={styles['footer-list']}>
                    <dt>{messages['footer.aboutus']}</dt>
                    <dd><a href={baseUrl + messages['footer.aboutjobsdbLink']}>{messages['footer.aboutjobsdb']}</a></dd>
                    <dd><a href={baseUrl + messages['footer.faqLink']}>{messages['footer.faq']}</a></dd>
                    <dd><a href={baseUrl + messages['footer.careenatjobsdbLink']}>{messages['footer.careenatjobsdb']}</a></dd>
                    <dd><a href={baseUrl + messages['footer.contactusLink']}>{messages['footer.contactus']}</a></dd>
                  </dl>
                </div>
                <div className={styles['col-xs-6']}>
                  <dl className={styles['footer-list']}>
                    <dt>{messages['footer.tools']}</dt>
                    <dd><a href={mbaseUrl + messages['footer.mobileversionLink']} target="_blank">{messages['footer.mobileversion']}</a></dd>
                    <dd><a href={baseUrl + messages['footer.rssLink']}>{messages['footer.rss']}</a></dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.row}>
            <div className={classnames(styles['col-md-10'], styles['col-md-offset-1'], styles['text-center'])}>
              <dl className={classnames(styles['footer-list'], styles['footer-list-horizontal'], styles.first)}>
                <dt>{messages['footer.internationalpartners']}</dt>
                <dd><a href={messages['footer.babajobindiaLink']}>{messages['footer.babajobindia']}</a></dd>
                <dd><a href={messages['footer.bdjobsbandladeshLink']}>{messages['footer.bdjobsbandladesh']}</a></dd>
                <dd><a href={messages['footer.brightermondayeastafricaLink']}>{messages['footer.brightermondayeastafrica']}</a></dd>
                <dd><a href={messages['footer.cathobrazilLink']}>{messages['footer.cathobrazil']}</a></dd>
                <dd><a href={messages['footer.jobbermanwestafricaLink']}>{messages['footer.jobbermanwestafrica']}</a></dd>
                <dd><a href={messages['footer.jobstreetseasiaLink']}>{messages['footer.jobstreetseasia']}</a></dd>
                <dd><a href={messages['footer.jorahongkongLink']}>{messages['footer.jorahongkong']}</a></dd>
                <dd><a href={messages['footer.managerbrazilLink']}>{messages['footer.managerbrazil']}</a></dd>
                <dd><a href={messages['footer.occmundialmexicoLink']}>{messages['footer.occmundialmexico']}</a></dd>
                <dd><a href={messages['footer.seamanjobsitephilippinesLink']}>{messages['footer.seamanjobsitephilippines']}</a></dd>
                <dd><a href={messages['footer.seekaustraliaLink']}>{messages['footer.seekaustralia']}</a></dd>
                <dd><a href={messages['footer.workabroadphilippinesLink']}>{messages['footer.workabroadphilippines']}</a></dd>
                <dd><a href={messages['footer.workanaLink']}>{messages['footer.workana']}</a></dd>
                <dd><a href={messages['footer.zhaopinchinaLink']}>{messages['footer.zhaopinchina']}</a></dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.copyright}>{messages['footer.copyright'].replace('{year}', year)}{messages['footer.rightReserved']}</div>
          <div className={styles['base-links']}><a href={baseUrl + messages['footer.privacyLink']} target="_blank">{messages['footer.privacyLinkText']}</a><a href={baseUrl + messages['footer.termsLink']} target="_blank">{messages['footer.termsLinkText']}</a><a href={baseUrl + messages['footer.siteMapLink']}>{messages['footer.siteMapLinkText']}</a></div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  language: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  baseUrl: PropTypes.string.isRequired,
  mbaseUrl: PropTypes.string,
  contentUrl: PropTypes.string
};

Footer.defaultProps = {
  mbaseUrl: 'https://m.jobsdb.com',
  contentUrl: 'https://content.jobsdbcdn.com/Content/d0416'
};

export default Footer;
