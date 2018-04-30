import React, { Component } from 'react';
import PropTypes from 'prop-types';
import JsxParser from 'react-jsx-parser';
import Frame from 'react-frame-component';
import CollectStyles from './CollectStyles/CollectStyles';
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
          {collectedStyles => !collectedStyles ? null : widths.map((width, i) => (
            <div key={i} className={styles.frameContainer}>
              <Frame head={<base href={process.env.BASE_HREF || '/'} />} className={styles.frame} style={{ width }}>
                {collectedStyles}
                <JsxParser jsx={jsx} components={styleGuideComponents} />
              </Frame>
            </div>
          ))}
        </CollectStyles>
      </div>
    );
  }
}
