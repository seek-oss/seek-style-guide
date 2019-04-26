import React, { Fragment, useRef, useState } from 'react';
import styles from './AccordionItem.less';
import { toggleContent } from './utils';
import { ChevronIcon } from 'seek-style-guide/react';
import classnames from 'classnames';

function AccordionItem({
  className = '',
  titleText,
  titleContent,
  children,
  open = false,
  onOpen,
  onClose,
  ...restProps
}) {
  if (titleText && titleContent) {
    throw new Error(
      'AccordionItem can only accept either titleText or titleContent'
    );
  }

  const initialHeight = open ? 'auto' : '0px';
  const initialVisibility = open ? 'visible' : 'hidden';
  const initialOverflow = initialVisibility;
  const contentEl = useRef(null);
  const [currentHeight, setCurrentHeight] = useState(initialHeight);
  const [cssVisibility, setCssVisibility] = useState(initialVisibility);
  const [cssOverflow, setCssOverflow] = useState(initialOverflow);
  const [timeoutHandle, setTimeoutHandle] = useState(null);
  const [isOpen, setIsOpen] = useState(open);

  const buttonClasses = classnames(className, styles.title);

  const isAnimating = currentHeight === '0px' && isOpen;
  const expanderClasses = classnames(styles.expander, {
    [styles.expanderOpen]: isAnimating
  });

  const chevronClasses = classnames(styles.chevron, {
    [styles.chevronOpen]: isOpen
  });

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
        {titleContent ? (
          <span className="AccordionItem__titleContent">{titleContent}</span>
        ) : (
          <span className={styles.text}>{titleText}</span>
        )}
        <ChevronIcon
          direction="down"
          className={chevronClasses}
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

export default AccordionItem;
