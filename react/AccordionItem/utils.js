import { CLOSED_HEIGHT, DURATION } from './constants';

function onAnimationStart(fn) {
  requestAnimationFrame(fn, 0);
}

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
        // After the animation finishes, we change the height to auto, to account
        // for things that may change height within the content area, such as 
        // expanding text fields, etc.
        setCurrentHeight('auto');
        // We toggle overflow on and off to avoid cropping the focus state
        // on form fields
        setCssOverflow('visible');
      })
    );
  } else {
    if (onClose) {
      onClose();
    }
    setCurrentHeight(`${contentHeight}px`);
    setCssOverflow('hidden');
    setCssOpacity(0);

    onAnimationStart(() => {
      setCurrentHeight(CLOSED_HEIGHT);
    })

    setTimeoutHandle(
      onAnimationEnd(() => {
        setCssVisibility('hidden');
      })
    );
  }
}
