import React, { Component } from 'react';
import PropTypes from 'prop-types';
import JsxParser from 'react-jsx-parser';
import Frame from 'react-frame-component';
import CollectStyles from './CollectStyles/CollectStyles';
import FadeIn from './FadeIn/FadeIn';
import CatchErrors from './CatchErrors/CatchErrors';
import * as styleGuideComponents from 'seek-style-guide/react';
import styles from './Preview.less';

const { StyleGuideProvider } = styleGuideComponents;

const widths = [320, 414, 740, 1024, 1280];

export default class Preview extends Component {
  static propTypes = {
    code: PropTypes.string.isRequired
  };

  render() {
    const { code } = this.props;

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
                      <StyleGuideProvider title="SEEK Style Guide Sandbox">
                        <CatchErrors key={code}>
                          <JsxParser jsx={code} components={styleGuideComponents} />
                        </CatchErrors>
                      </StyleGuideProvider>
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
