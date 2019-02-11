import React, { Fragment } from 'react';
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
  { name: 'Brand', variables: lessToJs(brand) },
  { name: 'Grays', variables: lessToJs(grays) },
  { name: 'Elements', variables: lessToJs(elements) },
  { name: 'Partners', variables: lessToJs(partners) },
  { name: 'Accessible Variants', variables: lessToJs(accessibleVariants) }
];

const renderSwatch = hexValue => (
  <div className={styles.swatch} style={{ backgroundColor: hexValue }} />
);

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
        <Fragment key={`palette-${index}`}>
          <Section>
            <Text headline>{palette.name}</Text>
          </Section>
          <Card>
            <Section className={styles.container}>
              {Object.keys(palette.variables).map((pvars, i) => {
                const hexValue = palette.variables[pvars];
                return (
                  <div key={`palette-variable-${i}`} className={styles.item}>
                    <Section>
                      {renderSwatch(hexValue)}
                      <Text secondary>{hexValue}</Text>
                      <Text>{pvars}</Text>
                    </Section>
                  </div>
                );
              })}
            </Section>
          </Card>
        </Fragment>
      ))}
    </PageBlock>
  </div>
);
