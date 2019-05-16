import React, { Fragment, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { ChevronIcon, TextLink, Text } from 'seek-style-guide/react';
import classnames from 'classnames';
import styles from './AccordionItem.less';
import { toggleContent } from './utils';
import { CLOSED_HEIGHT } from './constants';

function AccordionItem({
  className,
  title,
  children,
  open,
  onOpen,
  onClose,
  ...restProps
}) {
  const initialHeight = open ? 'auto' : CLOSED_HEIGHT;
  const initialVisibility = open ? 'visible' : 'hidden';
  const initialOverflow = initialVisibility;
  const contentEl = useRef(null);
  const [currentHeight, setCurrentHeight] = useState(initialHeight);
  const [cssVisibility, setCssVisibility] = useState(initialVisibility);
  const [cssOverflow, setCssOverflow] = useState(initialOverflow);
  const [timeoutHandle, setTimeoutHandle] = useState(null);
  const [isOpen, setIsOpen] = useState(open);

  const buttonClasses = classnames(className, styles.title);

  const isAnimating = currentHeight === CLOSED_HEIGHT && isOpen;
  const expanderClasses = classnames(styles.expander, {
    [styles.expanderOpen]: isAnimating
  });
  const chevronDirection = isOpen ? 'up' : 'down';

  return (
    <Fragment>
      <button
        type="button"
        className={buttonClasses}
        onClick={() => {
          toggleContent({
            el: contentEl.current,
            setCurrentHeight,
            timeoutHandle,
            setTimeoutHandle,
            isOpen,
            setIsOpen,
            setCssVisibility,
            setCssOverflow
          });

          if (isOpen && onClose) {
            onClose();
          } else if (!isOpen && onOpen) {
            onOpen();
          }
        }}
        {...restProps}
      >
        {typeof title === 'string' ? (
          <TextLink className={styles.titleLink}>
            <Text raw subheading baseline={false}>
              {title}
            </Text>
          </TextLink>
        ) : (
          <span className="AccordionItem__titleContent">{title}</span>
        )}
        <ChevronIcon
          direction={chevronDirection}
          className={styles.chevron}
          svgClassName={styles.chevronSvg}
        />
      </button>
      <div
        className={expanderClasses}
        style={{ height: currentHeight, overflow: cssOverflow }}
      >
        <div
          className={styles.content}
          ref={contentEl}
          style={{ visibility: cssVisibility }}
        >
          {children}
        </div>
      </div>
    </Fragment>
  );
}

AccordionItem.propTypes = {
  title: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
  open: PropTypes.bool
};

AccordionItem.defaultProps = {
  className: '',
  open: false
};

export default AccordionItem;
