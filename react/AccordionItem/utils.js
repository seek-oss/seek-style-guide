import { CLOSED_HEIGHT, DURATION } from './constants';

function onAnimationStart(fn) {
  // 20ms is just enough to delay by a single frame
  // since 1000ms / 60fps = 16.66ms
  setTimeout(fn, 20);
}

function onAnimationEnd(fn) {
  return setTimeout(fn, DURATION);
}

export function toggleContent({
  el,
  onOpen,
  onClose,
  setCssHeight,
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
    setCssHeight(`${contentHeight}px`);
    setCssOpacity(1);

    setTimeoutHandle(
      onAnimationEnd(() => {
        // After the animation finishes, we change the height to auto, to account
        // for things that may change height within the content area, such as
        // expanding text fields, and also browser resizing etc.
        setCssHeight('auto');
        // We toggle overflow on and off to avoid cropping the focus state
        // on form fields
        setCssOverflow('visible');
      })
    );
  } else {
    if (onClose) {
      onClose();
    }
    setCssHeight(`${contentHeight}px`);
    setCssOverflow('hidden');
    setCssOpacity(0);

    onAnimationStart(() => {
      setCssHeight(CLOSED_HEIGHT);
    });

    setTimeoutHandle(
      onAnimationEnd(() => {
        setCssVisibility('hidden');
      })
    );
  }
}
