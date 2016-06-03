import styles from './Spec.less';

import React, { PropTypes } from 'react';
import Droplet from 'Droplet/Droplet';
import lessToJs from 'less-vars-to-js';

import brand from '!!raw!seek-style-guide/theme/palette/brand.less';
import elements from '!!raw!seek-style-guide/theme/palette/elements.less';
import greys from '!!raw!seek-style-guide/theme/palette/grays.less';
import partners from '!!raw!seek-style-guide/theme/palette/partners.less';

const brandsJs = lessToJs(brand);
const elementsJs = lessToJs(elements);
const greysJs = lessToJs(greys);
const partnersJs = lessToJs(partners);

const dictionary = {
  ...brandsJs,
  ...partnersJs,
  ...greysJs,
  ...elementsJs
};

const renderer = (spec, property) => {
  const value = spec[property];

  switch (property) {
    case 'Background colour':
    case 'Text colour':
      return (
        <Droplet
          colour={dictionary[value]}
          variableName={value}
          sizeInRows={4}
          showHex={true}
          showVariable={true}
        />
      );

    default:
      return value;
  }
};

export default function Spec({ spec }) {
  return (
    <table className={styles.root}>
      <tbody>
        {
          Object.keys(spec).map(property =>
            <tr key={property}>
              <td className={styles.property}>{property}</td>
              <td className={styles.property}>{renderer(spec, property)}</td>
            </tr>
          )
        }
      </tbody>
    </table>
  );
}

Spec.propTypes = {
  spec: PropTypes.object.isRequired
};
