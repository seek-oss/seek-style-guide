import React from 'react';
import PropTypes from 'prop-types';
import Section from '../../../Section/Section';
import Text from '../../../Text/Text';
import Button from '../../../Button/Button';
import ButtonGroup from '../../../ButtonGroup/ButtonGroup';
import styles from './ShelfSection.less';

export const ShelfSectionPropTypes = PropTypes.shape({
  shelfLinks: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    child: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      link: PropTypes.string
    }))
  })),
  tagLinks: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    link: PropTypes.string
  }))
});

const ShelfSection = ({ shelf }) => {
  const { shelfLinks, tagLinks } = shelf;
  if (!shelfLinks && !tagLinks) {
    return null;
  }
  return (<Section className={styles.root}>
    <div className={styles.shelfDivider} />
    {shelfLinks &&
      <Text intimate className={styles.shelfLinksContainer}>
        {shelfLinks.map((item, i) => (
          <div key={i}>
            {`${item.label}: `}
            {
              item.child.map((child, j) => (
                <a href={child.link} className={styles.shelfLink} key={j}>{child.name}</a>
              )).reduce((prev, curr) => [prev, ', ', curr])
            }
          </div>
        ))}
      </Text>
    }

    {tagLinks &&
      <ButtonGroup className={styles.tagLinksContainer}>
        {tagLinks.map((item, i) => (
          <Button color="primary" compact component="a" href={item.link} className={styles.tagLink} key={i}>
            {item.name}
          </Button>
        ))}
      </ButtonGroup>
    }
  </Section>);
};

export default ShelfSection;
ShelfSection.propTypes = {
  shelf: ShelfSectionPropTypes
};
