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
  onClick,
  onOpen,
  onClose,
  ...restProps
}) {
  const contentEl = useRef(null);
  const [currentHeight, setCurrentHeight] = useState(CLOSED_HEIGHT);
  const [cssVisibility, setCssVisibility] = useState('visible');
  const [cssOverflow, setCssOverflow] = useState('visible');
  const [cssOpacity, setCssOpacity] = useState(0);
  const [timeoutHandle, setTimeoutHandle] = useState(null);
  const [isOpen, setIsOpen] = useState(open);
  const useInternalState = externalIsOpen === undefined;
  const finalIsOpen = useInternalState ? isOpen : !externalIsOpen;
  const finalSetIsOpen = useInternalState ? setIsOpen : () => {};

  const toggleContentWrapper = () => {
    toggleContent({
      el: contentEl.current,
      setCurrentHeight,
      timeoutHandle,
      setTimeoutHandle,
      isOpen: finalIsOpen,
      setIsOpen: finalSetIsOpen,
      setCssVisibility,
      setCssOverflow,
      setCssOpacity,
    });
  }

  useEffect(() => {
    if (!useInternalState) {
      toggleContentWrapper()
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
            toggleContentWrapper()
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
        style={{ height: currentHeight, overflow: cssOverflow, opacity: cssOpacity }}
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
