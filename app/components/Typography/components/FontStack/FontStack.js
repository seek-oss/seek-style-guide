import styles from './FontStack.less';

import React from 'react';
import lessToJs from 'less-vars-to-js';
import Section from 'Section/Section';
import Heading from 'Heading/Heading';
import theme from '!!raw!seek-style-guide/theme/type/type.less';

const themeVars = lessToJs(theme);

const fonts = themeVars['@base-font-stack']
  .split(/,\s*/)
  .map(font => font.replace(/"/g, ''));

export default function FontStack() {
  return (
    <Section>
      <Heading>Font Stack</Heading>
      {
        fonts.map(font => (
          <p className={styles.item} style={{ fontFamily: font }} key={font}>
            {font}
          </p>
        ))
      }
    </Section>
  );
}
