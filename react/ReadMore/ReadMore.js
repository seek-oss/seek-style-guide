/* eslint-disable react/prop-types */
import styles from './ReadMore.less';

import React, { PureComponent } from 'react';
import classnames from 'classnames';

import themeVars from '../private/themeVars';
import Text from '../Text/Text';
import TextLink from '../TextLink/TextLink';

const { rowHeight, standardTypeRowSpan, interactionTypeRowSpan } = themeVars;
const buttonHeight = rowHeight * interactionTypeRowSpan;

const getMaxHeight = (maxLines, maxRows) => {
  if (maxLines) {
    return maxLines * rowHeight * standardTypeRowSpan;
  }

  if (maxRows) {
    return maxRows * rowHeight;
  }

  return 0;
};

class ReadMore extends PureComponent {
  static defaultProps = {
    moreLabel: 'More',
    lessLabel: 'Less',
    backgroundComponentName: 'card'
  };

  constructor(props) {
    super(props);

    this.contentRef = null;

    this.state = {
      showMore: false,
      tooLong: false,
      mounted: false
    };
  }

  componentDidMount() {
    this.update();
  }

  componentDidUpdate() {
    this.update();
  }

  update = () => {
    const { maxLines, maxRows, onMoreButtonVisibilityChange } = this.props;

    if (this.contentRef) {
      const { scrollHeight } = this.contentRef;

      const tooLong =
        scrollHeight > getMaxHeight(maxLines, maxRows) + buttonHeight;

      this.setState({ tooLong, mounted: true }); // eslint-disable-line

      if (onMoreButtonVisibilityChange && tooLong !== this.state.tooLong) {
        onMoreButtonVisibilityChange(tooLong);
      }
    }
  };

  setTextRef = element => {
    this.contentRef = element;
  };

  handleShowMore = () => {
    const { onShowMore } = this.props;

    this.setState(
      {
        showMore: !this.state.showMore
      },
      () => {
        if (onShowMore) {
          onShowMore(this.state.showMore);
        }
      }
    );
  };

  render() {
    const {
      children,
      maxLines,
      maxRows,
      moreLabel,
      lessLabel,
      backgroundComponentName
    } = this.props;
    const { tooLong, showMore, mounted } = this.state;

    const truncate = mounted ? !showMore && tooLong : true;
    const showFade = truncate && mounted;
    const fadeColor = styles[backgroundComponentName];
    const showMoreLessButton = tooLong && mounted;

    const contentStyle = truncate
      ? {
          maxHeight: getMaxHeight(maxLines, maxRows),
          overflow: 'hidden'
        }
      : {};

    return (
      <div>
        <div className={styles.content} style={contentStyle}>
          <div ref={this.setTextRef}>{children}</div>
          {showFade ? (
            <div className={classnames(styles.fadeOut, fadeColor)} />
          ) : null}
        </div>
        {showMoreLessButton && (
          <Text
            chevron={showMore ? 'up' : 'down'}
            className={styles.showMore}
            component={TextLink}
            onClick={this.handleShowMore}
          >
            {showMore ? lessLabel : moreLabel}
          </Text>
        )}
      </div>
    );
  }
}

export default ReadMore;
