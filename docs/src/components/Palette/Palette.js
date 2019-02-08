import React from 'react';
import {
  PageBlock,
  Card,
  Section,
  Text,
  Paragraph
} from 'seek-style-guide/react';
import lessToJs from 'less-vars-to-js';

import brand from '!!raw-loader!../../../../theme/palette/brand.less';
import elements from '!!raw-loader!../../../../theme/palette/elements.less';
import grays from '!!raw-loader!../../../../theme/palette/grays.less';
import partners from '!!raw-loader!../../../../theme/palette/partners.less';
import accessibleVariants from '!!raw-loader!../../../../theme/palette/accessible-variants.less';

import styles from './Palette.less';

const palettes = [
  { name: 'brand.less', variables: lessToJs(brand) },
  { name: 'grays.less', variables: lessToJs(grays) },
  { name: 'elements.less', variables: lessToJs(elements) },
  { name: 'partners.less', variables: lessToJs(partners) },
  { name: 'accessible-variants.less', variables: lessToJs(accessibleVariants) }
];

export default () => (
  <div>
    <PageBlock>
      <Section header>
        <Text hero>Palette</Text>
      </Section>
      <Card transparent style={{ maxWidth: 720 }}>
        <Section>
          <Paragraph>
            <Text>
              Below are all the colours included in the style guide grouped by
              the file they reside in.
            </Text>
          </Paragraph>
        </Section>
      </Card>
      {palettes.map((palette, index) => (
        <Card transparent key={`palette-${index}`}>
          <Section>
            <Text heading>{palette.name}</Text>
          </Section>
          <div className={styles.container}>
            {Object.keys(palette.variables).map((pvars, i) => {
              const hexValue = palette.variables[pvars];
              return (
                <div key={`palette-variable-${i}`} className={styles.item}>
                  <Section>
                    <div
                      className={styles.swatch}
                      style={{ backgroundColor: hexValue }}
                    />
                    <Text secondary>{hexValue}</Text>
                    <Text>{pvars}</Text>
                  </Section>
                </div>
              );
            })}
          </div>
        </Card>
      ))}
    </PageBlock>
  </div>
);
