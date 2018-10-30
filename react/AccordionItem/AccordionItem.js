// @flow

import React, { Component } from 'react';
import classnames from 'classnames';
import styles from './AccordionItem.less';
import { ChevronIcon } from '../';

type Props = {
  children: React$Node,
  title: React$Node,
  id: string | number,
  expanded: boolean,
  onClick?: Function,
  className: string
};

type State = {
  expanded: boolean
};

export default class AccordionItem extends Component<Props, State> {
  static defaultProps = {
    expanded: false,
    className: ''
  }

  constructor(props: Props) {
    super(props);
    const { expanded } = props;
    this.state = {
      expanded
    };
  }

  componentWillReceiveProps(nextProps: Props) {
    if (this.props.expanded !== nextProps.expanded) {
      this.setState({
        expanded: nextProps.expanded
      });
    }
  }

  props: Props;

  handleChange = () => {
    const expanded = !this.state.expanded;

    this.setState({
      expanded
    });

    if (typeof this.props.onClick === 'function') {
      this.props.onClick({ expanded });
    }
  }

  render() {
    const { children, className, id, title } = this.props;
    const { expanded } = this.state;
    return (
      <div
        className={classnames({
          [className]: className
        })}>
        <input onChange={this.handleChange} id={id} className={styles.toggle} type="checkbox" checked={expanded} />
        <label
          htmlFor={id}
          className={classnames([styles.toggleLink], [styles.toggleLabel])}>
          {title}
          <ChevronIcon
            direction="down"
            className={styles.chevron}
            svgClassName={styles.chevronSvg}
          />
        </label>
        <div className={styles.toggleContainer}>
          {children}
        </div>
      </div>
    );
  }
}