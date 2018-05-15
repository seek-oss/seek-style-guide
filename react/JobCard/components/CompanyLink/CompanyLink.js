import React from 'react';
import PropTypes from 'prop-types';
import styles from './CompanyLink.less';
import { getParts } from '../../jobCardHelper.js';

export const CompanyLinkPropTypes = PropTypes.shape({
  name: PropTypes.string,
  link: PropTypes.string
});

const CompanyLink = ({ company, keyword = '' }) => {
  const { name, link } = company;
  if (!name) {
    return null;
  }

  const companyParts = getParts(name, keyword);

  const companyText = (<span className={link ? styles.companyName : null}>
    {
      companyParts && companyParts.map((part, index) => {
        return (
          <span
            className={part.highlight ? styles.highlight : null}
            key={index}>
            {part.text}
          </span>
        );
      }) || name
    }
  </span>);

  if (link) {
    return (<a href={link} className={styles.companyLink}>{companyText}</a>);
  }

  return companyText;
};

export default CompanyLink;

CompanyLink.propTypes = {
  company: CompanyLinkPropTypes.isRequired,
  keyword: PropTypes.string
};
