import { FlagHKIcon, FlagIDIcon, FlagSGIcon, FlagTHIcon } from 'seek-asia-style-guide/react';

import enHkLocalization from './en-hk';
import enSgLocalization from './en-sg';
import enIdLocalization from './en-id';
import idIdLocalization from './id-id';
import enThLocalization from './en-th';
import thThLocalization from './th-th';

const localization = {
  'en-hk': enHkLocalization,
  'en-sg': enSgLocalization,
  'en-id': enIdLocalization,
  'id-id': idIdLocalization,
  'en-th': enThLocalization,
  'th-th': thThLocalization
};

export const getLocalization = ({ language, country }) => {
  return localization[`${language.toLowerCase()}-${country.toLowerCase()}`] ?
    localization[`${language.toLowerCase()}-${country.toLowerCase()}`] : {};
};

export const locales = [
  {
    title: 'Hong Kong (English)',
    ItemIcon: FlagHKIcon,
    url: 'https://hk.jobsdb.com/hk',
    language: 'en',
    country: 'hk'
  }, {
    title: 'Indonesia (English)',
    ItemIcon: FlagIDIcon,
    url: 'https://id.jobsdb.com/id',
    language: 'en',
    country: 'id'
  }, {
    title: 'Indonesia (Bahasa)',
    ItemIcon: FlagIDIcon,
    url: 'https://id.jobsdb.com/id/id',
    language: 'id',
    country: 'id'
  }, {
    title: 'Singapore (English)',
    ItemIcon: FlagSGIcon,
    url: 'https://sg.jobsdb.com/sg',
    language: 'en',
    country: 'sg'
  }, {
    title: 'Thailand (English)',
    ItemIcon: FlagTHIcon,
    url: 'https://th.jobsdb.com/th',
    language: 'en',
    country: 'th'
  }, {
    title: 'ไทย (ภาษาไทย)',
    ItemIcon: FlagTHIcon,
    url: 'https://th.jobsdb.com/th/th',
    language: 'th',
    country: 'th'
  }
];

export default localization;
