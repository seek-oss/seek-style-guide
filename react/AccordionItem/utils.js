import { CLOSED_HEIGHT, DURATION } from './constants';

function onAnimationEnd(fn) {
  return setTimeout(fn, DURATION);
}

export function toggleContent({
  el,
  setCurrentHeight,
  timeoutHandle,
  setTimeoutHandle,
  isOpen,
  setCssVisibility,
  setCssOverflow,
  setCssOpacity
}) {
  const contentHeight = el.offsetHeight;
  clearTimeout(timeoutHandle);

  if (isOpen) {
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
