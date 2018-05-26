import React from 'react';
import PropTypes from 'prop-types';
import Section from '../../../Section/Section';
import Text from '../../../Text/Text';
import Button from '../../../Button/Button';
import ButtonGroup from '../../../ButtonGroup/ButtonGroup';
import defaultLink from '../Link/Link';
import styles from './ShelfSection.less';

export const ShelfSectionPropTypes = PropTypes.shape({
  shelfLinks: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      link: PropTypes.string,
      children: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        link: PropTypes.string
      }))
    }))
  })),
  tagLinks: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    link: PropTypes.string
  }))
});

const ShelfSection = ({ shelf, LinkComponent = defaultLink }) => {
  const { shelfLinks, tagLinks } = shelf;
  if (!shelfLinks && !tagLinks) {
    return null;
  }
  return (<Section className={styles.root}>
    <div className={styles.shelfDivider} />
    {shelfLinks &&
      <Text intimate className={styles.shelfLinksContainer}>
        {shelfLinks.map((shelfItem, i) => (
          <div key={i}>
            {`${shelfItem.label}: `}
            {
              shelfItem.items.map((item, j) => {
                const link = (<LinkComponent link={item.link} className={styles.shelfLink} key={j} >{item.name}</LinkComponent>);
                if (item.children && item.children.length) {
                  return [
                    link,
                    ' > ',
                    item.children.map((child, k) => (
                      <LinkComponent link={child.link} className={styles.shelfLink} key={`${j}${k}`} >{child.name}</LinkComponent>
                    )).reduce((prev, curr) => [prev, ' | ', curr])
                  ];
                }
                return [link];
              }).reduce((prev, curr) => [prev, ', ', curr])
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
  shelf: ShelfSectionPropTypes,
  LinkComponent: PropTypes.func
};
