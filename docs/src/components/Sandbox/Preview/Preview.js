import React, { Component } from 'react';
import PropTypes from 'prop-types';
import JsxParser from 'react-jsx-parser';
import Frame from 'react-frame-component';
import CollectStyles from './CollectStyles/CollectStyles';
import FadeIn from './FadeIn/FadeIn';
import * as styleGuideComponents from 'seek-style-guide/react';
import styles from './Preview.less';

const widths = [320, 414, 740, 1024, 1280];

export default class Preview extends Component {
  static propTypes = {
    code: PropTypes.string.isRequired
  };

  render() {
    const { code } = this.props;

    const jsx = `
      <StyleGuideProvider title="SEEK Style Guide Sandbox">
        ${code}
      </StyleGuideProvider>
    `;

    return (
      <div className={styles.root}>
        <CollectStyles baseHref={process.env.BASE_HREF}>
          {collectedStyles => widths.map((width, i) => (
            <div key={width} className={styles.frameContainer}>
              <Frame head={<base href={process.env.BASE_HREF || '/'} />} className={styles.frame} style={{ width }}>
                <div className={styles.frameContents}>
                  {collectedStyles}
                  {collectedStyles && (
                    <FadeIn delay={(i + 1) * 50}>
                      <JsxParser jsx={jsx} components={styleGuideComponents} />
                    </FadeIn>
                  )}
                </div>
              </Frame>
            </div>
          ))}
        </CollectStyles>
      </div>
    );
  }
}
