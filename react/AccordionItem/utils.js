const DURATION = 500;
const CLOSED_HEIGHT = '0px';

function onAnimationStart(fn) {
  setTimeout(fn, 0);
}

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
  setCssOverflow
}) {
  const contentHeight = el.offsetHeight;
  const isOpening = !isOpen;
  clearTimeout(timeoutHandle);

  if (isOpening) {
    setCssVisibility('visible');
    setCurrentHeight(`${contentHeight}px`);
    setIsOpen(true);

    setTimeoutHandle(
      onAnimationEnd(() => {
        // We toggle overflow on and off to avoid cropping the focus state
        // on form fields
        setCssOverflow('visible');
        setCurrentHeight('auto');
      })
    );
  } else {
    setCurrentHeight(`${contentHeight}px`);
    setCssOverflow('hidden');

    onAnimationStart(() => {
      setCurrentHeight(CLOSED_HEIGHT);
    }, 0);

    setTimeoutHandle(
      onAnimationEnd(() => {
        setCssVisibility('hidden');
      })
    );

    setIsOpen(false);
  }
}
