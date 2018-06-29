// @flow
import styles from './SeeMore.less';

import React, { PureComponent } from 'react';

import Button from '../Button/Button';
import ChevronIcon from '../ChevronIcon/ChevronIcon';

const rowHeight = 6;
const buttonHeight = rowHeight * 8;

const getMaxHeight = (maxRows: number) => maxRows * rowHeight;

type Props = {|
  children: React$Element<*>,
  maxRows: number
|};
type State = {|
  showMore: boolean,
  tooLong: boolean,
  mounted: boolean
|};
class SeeMore extends PureComponent<Props, State> {
  static defaultProps = {
    maxRows: 15
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
    if (this.contentRef) {
      const { scrollHeight } = this.contentRef;

      const tooLong =
        scrollHeight > getMaxHeight(this.props.maxRows) + buttonHeight;

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
    const { children, maxRows } = this.props;
    const { tooLong, showMore, mounted } = this.state;

    const truncate = mounted ? !showMore && tooLong : true;
    const showFade = truncate && mounted;
    const showMoreLessButton = tooLong && mounted;

    const contentStyle = truncate ? {
      maxHeight: getMaxHeight(maxRows),
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
            {showMore ? 'Less' : 'More'}
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

export default SeeMore;
