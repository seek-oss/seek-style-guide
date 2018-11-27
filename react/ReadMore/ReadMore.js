// @flow
import React, { PureComponent } from 'react';
import Button from '../Button/Button';
import TextLink from '../TextLink/TextLink';

type Props = {|
  id: string,
  children: React$Element<*>,
  moreLabel: string,
  lessLabel: string,
  onShowMore?: Function
|};

type State = {|
  showMore: boolean
|};

class ReadMore extends PureComponent<Props, State> {
  static defaultProps = {
    moreLabel: 'More',
    lessLabel: 'Less'
  };

  constructor(props: Props) {
    super(props);

    this.state = {
      showMore: false
    };
  }

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
      id,
      children,
      moreLabel,
      lessLabel
    } = this.props;
    const { showMore } = this.state;

    return (
      <div id={id}>
        <TextLink
          strong
          color="transparent"
          chevron={showMore ? 'up' : 'down'}
          component={Button}
          onClick={this.handleShowMore}
          aria-expanded={showMore}
          aria-controls={`${id}-content`} >
          {showMore ? lessLabel : moreLabel}
        </TextLink>

        <div id={`${id}-content`} style={!showMore ? { display: 'none' } : {}}>
          {children}
        </div>
      </div>
    );
  }
}

export default ReadMore;
