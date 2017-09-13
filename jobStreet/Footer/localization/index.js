import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import id from 'react-intl/locale-data/id';
import vi from 'react-intl/locale-data/vi';

import enMyLocalisation from './en-my';
import enSgLocalisation from './en-sg';
import enPhLocalisation from './en-ph';
import enIdLocalisation from './en-id';
import enVnLocalisation from './en-vn';
import idIdLocalisation from './id-id';
import viVnLocalisation from './vi-vn';

addLocaleData([...en, ...id, ...vi]);

export default {
  'en-my': enMyLocalisation,
  'en-sg': enSgLocalisation,
  'en-ph': enPhLocalisation,
  'en-id': enIdLocalisation,
  'en-vn': enVnLocalisation,
  'id-id': idIdLocalisation,
  'vi-vn': viVnLocalisation
};
