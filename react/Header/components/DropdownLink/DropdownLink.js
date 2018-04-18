import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './DropdownLink.less';
import { Text, ChevronIcon, Card, Section, CardGroup, TickIcon } from 'seek-asia-style-guide/react';

const renderLinks = ({links, checked}) => {

  if (links && links.map) {

    const cards = links.map((key, index) => {
      const ItemIcon = key.ItemIcon;

      return(
        <Card key={index} onClick = { e => { window.location = key.url; } }>
          <Section className={styles.node}>
            <ItemIcon className={styles.icon} />
            <Text whispering>
              { key.title }
            </Text>
            { checked === undefined || index == checked && (<TickIcon className={classnames([styles.icon, styles.checkMark])} />) }
          </Section>
        </Card>
      );
    });

    return ( cards );
  }
  return null;
};

renderLinks.PropTypes = {
  links: PropTypes.array.isRequired,
  checked: PropTypes.bool
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
    const { links, dropdownOpen, checked } = this.props;

    const ItemIcon = links[0].ItemIcon;

    return (
      <div className={styles.root} ref={e => { this.wrapperRef = e }}>

        <div className={styles.currentLocale} show={dropdownOpen} onClick={e => this.handleDropdownToggle(e)}>
          <ItemIcon className={styles.icon} />
          <Text whispering>{links[0].title}</Text>
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

          { renderLinks({ links, checked }) }
        </CardGroup>

      </div>
    );
  }
}

DropdownLink.propTypes = {
  /* prototypes for validation */
  links: PropTypes.array.isRequired,
  checked: PropTypes.number
};
