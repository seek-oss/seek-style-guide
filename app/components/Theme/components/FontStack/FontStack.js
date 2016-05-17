import styles from './FontStack.less';
import theme from '!!raw!seek-style-guide/theme/type/type.less';

import React from 'react';
import lessToJs from 'less-vars-to-js';

const themeVars = lessToJs(theme);

const fonts = themeVars['@base-font-stack']
  .split(/,\s*/)
  .map(font => font.replace(/"/g, ''));

export default function FontStack() {
  return (
    <div>
      <h1 className={styles.heading}>Font Stack</h1>
      <div className={styles.content}>
        {
          fonts.map(font => (
            <p className={styles.item} style={{ fontFamily: font }} key={font}>
              {font}
            </p>
          ))
        }
      </div>
    </div>
  );
}
