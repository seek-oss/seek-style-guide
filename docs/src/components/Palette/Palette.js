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

const brandJsVars = lessToJs(brand);
const grayJsVars = lessToJs(grays);
const elementsJsVars = lessToJs(elements);
const partnersJsVars = lessToJs(partners);
const accessibleVariantsJsVars = lessToJs(accessibleVariants);

const paletteVariables = {
  ...brandJsVars,
  ...grayJsVars,
  ...elementsJsVars,
  ...partnersJsVars,
  ...accessibleVariantsJsVars
};

const palettes = [
  { name: 'Brand', variables: brandJsVars },
  { name: 'Grays', variables: grayJsVars },
  { name: 'Elements', variables: elementsJsVars },
  { name: 'Partners', variables: partnersJsVars },
  { name: 'Accessible Variants', variables: accessibleVariantsJsVars }
];

const renderSwatch = swatchValue => {
  const backgroundColor = !/^#/.test(swatchValue)
    ? paletteVariables[swatchValue]
    : swatchValue;

  return <div className={styles.swatch} style={{ backgroundColor }} />;
};

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
                const variableValue = palette.variables[pvars];
                return (
                  <Section
                    key={`palette-variable-${i}`}
                    className={styles.item}
                  >
                    {renderSwatch(variableValue)}
                    <Text secondary>{variableValue}</Text>
                    <Text>{pvars}</Text>
                  </Section>
                );
              })}
            </Section>
          </Card>
        </Fragment>
      ))}
    </PageBlock>
  </div>
);
