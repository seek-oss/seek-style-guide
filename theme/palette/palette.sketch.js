import lessToJs from 'less-vars-to-js';
import omitBy from 'lodash/omitBy';

import brand from '!!raw-loader!./brand.less';
import elements from '!!raw-loader!./elements.less';
import grays from '!!raw-loader!./grays.less';
import partners from '!!raw-loader!./partners.less';

const omitVariables = styles => omitBy(styles, value => /^@/.test(value));

const palette = omitVariables({
  ...lessToJs(brand),
  ...lessToJs(elements),
  ...lessToJs(grays),
  ...lessToJs(partners)
});

export const colors = palette;
