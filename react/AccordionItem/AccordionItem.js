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
  isOpen: externalIsOpen,
  onClick,
  onOpen,
  onClose,
  ...restProps
}) {
  const contentEl = useRef(null);
  const [cssHeight, setCssHeight] = useState(CLOSED_HEIGHT);
  const [cssVisibility, setCssVisibility] = useState('hidden');
  const [cssOverflow, setCssOverflow] = useState('hidden');
  const [cssOpacity, setCssOpacity] = useState(0);
  const [timeoutHandle, setTimeoutHandle] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const useInternalState = externalIsOpen === undefined;
  const finalIsOpen = useInternalState ? isOpen : externalIsOpen;
  const isMounting = useRef(true);

  useEffect(() => {
    if (isMounting.current === false) {
      toggleContent({
        el: contentEl.current,
        isOpen: finalIsOpen,
        onOpen,
        onClose,
        timeoutHandle,
        setTimeoutHandle,
        setCssHeight,
        setCssOpacity,
        setCssOverflow,
        setCssVisibility
      });
    }

    isMounting.current = false;
  }, [finalIsOpen]);

  const buttonClasses = classnames(className, styles.title);
  const chevronDirection = finalIsOpen ? 'up' : 'down';

  return (
    <Fragment>
      <button
        type="button"
        className={buttonClasses}
        onClick={() => {
          if (onClick) {
            onClick();
          }

          if (useInternalState) {
            setIsOpen(!finalIsOpen);
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
        className={styles.expander}
        style={{
          height: cssHeight,
          overflow: cssOverflow,
          opacity: cssOpacity
        }}
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
  isOpen: PropTypes.bool,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  onClick: PropTypes.func,
  children: PropTypes.element.isRequired,
  className: PropTypes.string
};

AccordionItem.defaultProps = {
  className: ''
};

export default AccordionItem;
