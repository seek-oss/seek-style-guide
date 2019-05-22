import React, { Fragment, useRef, useState, useEffect } from 'react';
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
  isOpen: externalIsOpen,
  setIsOpen: externalSetIsOpen,
  onClick,
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
  const useInternalState = externalIsOpen === undefined;
  const finalIsOpen = useInternalState ? isOpen : !externalIsOpen;

  useEffect(() => {
    if (!useInternalState) {
      toggleContent({
        el: contentEl.current,
        setCurrentHeight,
        timeoutHandle,
        setTimeoutHandle,
        isOpen: finalIsOpen,
        setIsOpen: () => {},
        setCssVisibility,
        setCssOverflow
      });
    }
  }, [finalIsOpen]);

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
          if (useInternalState) {
            toggleContent({
              el: contentEl.current,
              setCurrentHeight,
              timeoutHandle,
              setTimeoutHandle,
              isOpen: finalIsOpen,
              setIsOpen,
              setCssVisibility,
              setCssOverflow
            });
          }

          if (onClick) {
            onClick();
          }

          if (isOpen && onClose) {
            onClose();
          } else if (!isOpen && onOpen) {
            onOpen();
          }
        }}
        {...restProps}
      >
        {typeof title === 'string' ? (
          <Text raw baseline={false} className={styles.titleText}>
            <TextLink>{title}</TextLink>
          </Text>
        ) : (
          <span>{title}</span>
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

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
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
