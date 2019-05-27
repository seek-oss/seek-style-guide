import { CLOSED_HEIGHT, DURATION } from './constants';

function onAnimationEnd(fn) {
  return setTimeout(fn, DURATION);
}

export function toggleContent({
  el,
  onOpen,
  onClose,
  setCurrentHeight,
  timeoutHandle,
  setTimeoutHandle,
  isOpen,
  setCssOpacity,
  setCssOverflow,
  setCssVisibility
}) {
  const contentHeight = el.offsetHeight;
  clearTimeout(timeoutHandle);

  if (isOpen) {
    if (onOpen) {
      onOpen();
    }
    setCssVisibility('visible');
    setCurrentHeight(`${contentHeight}px`);
    setCssOpacity(1);

    setTimeoutHandle(
      onAnimationEnd(() => {
        // We toggle overflow on and off to avoid cropping the focus state
        // on form fields
        setCssOverflow('visible');
      })
    );
  } else {
    if (onClose) {
      onClose();
    }
    setCurrentHeight(CLOSED_HEIGHT);
    setCssOverflow('hidden');
    setCssOpacity(0);

    setTimeoutHandle(
      onAnimationEnd(() => {
        setCssVisibility('hidden');
      })
    );
  }
}
