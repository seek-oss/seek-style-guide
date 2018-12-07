// @flow
import React, { PureComponent } from 'react';
import TextLink from '../TextLink/TextLink';
import Text from '../Text/Text';

type Props = {|
  id: string,
  children: React$Element<*>,
  expandLabel: string,
  collapseLabel: string,
  onShowMore?: Function
|};

type State = {|
  showMore: boolean
|};

class ToggleContent extends PureComponent<Props, State> {
  static defaultProps = {
    expandLabel: 'Show content',
    collapseLabel: 'Hide content'
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
      expandLabel,
      collapseLabel
    } = this.props;
    const { showMore } = this.state;

    return (
      <div id={id}>
        <Text
          strong
          component={TextLink}
          color="transparent"
          chevron={showMore ? 'up' : 'down'}
          type="button"
          onClick={this.handleShowMore}
          aria-expanded={showMore}
          aria-controls={`${id}-content`} >
          {showMore ? collapseLabel : expandLabel}
        </Text>

        <div id={`${id}-content`} style={!showMore ? { display: 'none' } : {}}>
          {children}
        </div>
      </div>
    );
  }
}

export default ToggleContent;
