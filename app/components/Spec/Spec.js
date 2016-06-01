import styles from './Spec.less';

import React, { PropTypes } from 'react';

export default function Spec({ spec }) {
  return (
    <table className={styles.root}>
      <tbody>
        {
          Object.keys(spec).map(property =>
            <tr key={property}>
              <td className={styles.property}>{property}</td>
              <td>{spec[property]}</td>
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
