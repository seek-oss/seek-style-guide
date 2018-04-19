import styles from './UserAccountMenu.less';

import React from 'react';
import PropTypes from 'prop-types';

export default function UserAccountMenu({ rightLinks, linkRenderer }) {

  return(
      <ul className={styles.root}>
        {rightLinks.map((key, index) => {
          if (key.children && key.children.map) {
              const renderer = key.children.map((key, index) => {
                return(<li key={index} >{linkRenderer(key)}</li>);
              });
            return (renderer);
          }
          return null;
        })}
      </ul>
  );
}

UserAccountMenu.propTypes = {
  rightLinks: PropTypes.array.isRequired,
  linkRenderer: PropTypes.func.isRequired
};
