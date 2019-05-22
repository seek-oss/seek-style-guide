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
  setIsOpen,
  setCssVisibility,
  setCssOverflow,
  setCssOpacity
}) {
  const contentHeight = el.offsetHeight;
  const isOpening = !isOpen;
  console.log('isOpening', isOpening);
  clearTimeout(timeoutHandle);

  if (isOpening) {
    setCssVisibility('visible');
    setCurrentHeight(`${contentHeight}px`);
    setIsOpen(true);
    setCssOpacity(1);

    setTimeoutHandle(
      onAnimationEnd(() => {
        // We toggle overflow on and off to avoid cropping the focus state
        // on form fields
        setCssOverflow('visible');
      })
    );
  } else {
    console.log('contentHeight', contentHeight);
    setCurrentHeight(CLOSED_HEIGHT);
    setCssOverflow('hidden');
    setIsOpen(false);
    setCssOpacity(0);

    setTimeoutHandle(
      onAnimationEnd(() => {
        setCssVisibility('hidden');
      })
    );
  }
}
