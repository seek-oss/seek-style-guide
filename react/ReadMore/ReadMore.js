// @flow
import styles from './ReadMore.less';

import React, { PureComponent } from 'react';

import themeVars from '../private/themeVars';
import Button from '../Button/Button';
import ChevronIcon from '../ChevronIcon/ChevronIcon';

const { rowHeight, standardTypeRowSpan, interactionTypeRowSpan } = themeVars;
const buttonHeight = rowHeight * interactionTypeRowSpan;

const getMaxHeight = (maxLines?: number, maxRows?: number) => {
  if (maxLines) {
    return maxLines * rowHeight * standardTypeRowSpan;
  }

  if (maxRows) {
    return maxRows * rowHeight;
  }

  return 0;
};

type Props = {|
  children: React$Element<*>,
  maxLines?: number,
  maxRows?: number,
  moreLabel: string,
  lessLabel: string
|};
type State = {|
  showMore: boolean,
  tooLong: boolean,
  mounted: boolean
|};
class ReadMore extends PureComponent<Props, State> {
  static defaultProps = {
    moreLabel: 'More',
    lessLabel: 'Less'
  };

  constructor(props: Props) {
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

  contentRef: ?HTMLDivElement;

  update = () => {
    const { maxLines, maxRows } = this.props;

    if (this.contentRef) {
      const { scrollHeight } = this.contentRef;

      const tooLong =
        scrollHeight > getMaxHeight(maxLines, maxRows) + buttonHeight;

      this.setState({ tooLong, mounted: true }); // eslint-disable-line
    }
  };

  setTextRef = (element: ?HTMLDivElement) => {
    this.contentRef = element;
  };

  handleShowMore = () => {
    this.setState({
      showMore: !this.state.showMore
    });
  };

  render() {
    const { children, maxLines, maxRows, moreLabel, lessLabel } = this.props;
    const { tooLong, showMore, mounted } = this.state;

    const truncate = mounted ? !showMore && tooLong : true;
    const showFade = truncate && mounted;
    const showMoreLessButton = tooLong && mounted;

    const contentStyle = truncate ? {
      maxHeight: getMaxHeight(maxLines, maxRows),
      overflow: 'hidden'
    } : {};

    return (
      <div>
        <div className={styles.content} style={contentStyle}>
          <div ref={this.setTextRef}>{children}</div>
          {showFade ? <div className={styles.fadeOut} /> : null}
        </div>
        {showMoreLessButton ? (
          <Button color="transparent" onClick={this.handleShowMore}>
            {showMore ? lessLabel : moreLabel}
            <ChevronIcon
              direction={showMore ? 'up' : 'down'}
              size="standard"
              className={styles.chevron}
            />
          </Button>
        ) : null}
      </div>
    );
  }
}

export default ReadMore;
