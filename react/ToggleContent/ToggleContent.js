// @flow
import React, { PureComponent } from 'react';
import Button from '../Button/Button';
import TextLink from '../TextLink/TextLink';

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
    const { id, children, expandLabel, collapseLabel } = this.props;
    const { showMore } = this.state;

    return (
      <div id={id}>
        <TextLink
          strong
          color="transparent"
          chevron={showMore ? 'up' : 'down'}
          component={Button}
          type="button"
          onClick={this.handleShowMore}
          aria-expanded={showMore}
          aria-controls={`${id}-content`}
        >
          {showMore ? collapseLabel : expandLabel}
        </TextLink>

        <div id={`${id}-content`} style={!showMore ? { display: 'none' } : {}}>
          {children}
        </div>
      </div>
    );
  }
}

export default ToggleContent;
