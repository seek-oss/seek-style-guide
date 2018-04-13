import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './DropdownLink.less';
import { Text, ChevronIcon, Card, Section, CardGroup, TickIcon } from 'seek-asia-style-guide/react';

const renderLocales = ({localeList}) => {
  // <Card>
  //   <Section className={styles.node}>
  //     <ItemIcon className={styles.icon} />
  //     <Text whispering>
  //       Living Style Guide
  //     </Text>
  //     <TickIcon className={classnames([styles.icon, styles.checkMark])} />
  //   </Section>
  // </Card>
  // <Card>
  //   <Section className={styles.node}>
  //     <ItemIcon className={styles.icon} />
  //     <Text whispering>
  //       Living Style Guide
  //     </Text>
  //   </Section>
  // </Card>
  if (localeList && localeList.map) {

    const cards = localeList.map((key, index) => {
      const ItemIcon = key.ItemIcon;

      return(
        <Card onClick = { e => { window.location = key.url; } }>
          <Section className={styles.node}>
            <ItemIcon className={styles.icon} />
            <Text whispering>
              { key.title }
            </Text>
            { index == 0 && (<TickIcon className={classnames([styles.icon, styles.checkMark])} />) }
          </Section>
        </Card>
      );
    });

    return ( cards );
  }
  return null;
};

renderLocales.PropTypes = {
  localeList: PropTypes.array.isRequired
}

export default class DropdownLink extends Component {
  constructor() {
    super();

    this.handleDropdownToggle = this.handleDropdownToggle.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleDropdownToggle = event => {
    this.setState({ dropdownOpen: !this.state.dropdownOpen });
    event.currentTarget.parentNode.setAttribute("show", !this.state.dropdownOpen);
  };

  handleClickOutside = event => {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.wrapperRef.setAttribute("show", false);
      this.setState({ dropdownOpen: false });
    }
  };

  render() {
    const { localeList, dropdownOpen } = this.props;

    const ItemIcon = localeList[0].ItemIcon;

    return (
      <div className={styles.root} ref={e => { this.wrapperRef = e }}>

        <div className={styles.currentLocale} show={dropdownOpen} onClick={e => this.handleDropdownToggle(e)}>
          <ItemIcon className={styles.icon} />
          <Text whispering>{localeList[0].title}</Text>
          <div className={styles.chevron}>
            <ChevronIcon svgClassName={styles.chevronSvg} direction="down" />
          </div>
        </div>

        <CardGroup className={styles.dropdown}>
          <Card>
            <Section className={classnames([styles.node, styles.placeholder])}>
              <Text secondary whispering>
                Select your country:
              </Text>
            </Section>
          </Card>

          { renderLocales({ localeList }) }
        </CardGroup>

      </div>
    );
  }
}

DropdownLink.propTypes = {
  /* prototypes for validation */
  localeList: PropTypes.array.isRequired
};
