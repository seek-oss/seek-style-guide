import { styles } from "ansi-colors";

const DURATION = 500;
const CLOSED_HEIGHT = '0px';

function onAnimationStart(fn) {
  console.log('onAnimationStart');
  setTimeout(fn, 0);
}

function onAnimationEnd(fn) {
  console.log('onAnimationEnd');
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
}) {
  const contentHeight = el.offsetHeight;
  const isOpening = !isOpen;
  clearTimeout(timeoutHandle)

  if (isOpening) {
    console.log('isOpening');
    setCssVisibility('visible');
    setCurrentHeight(`${contentHeight}px`);
    setIsOpen(true);

    setTimeoutHandle(
      onAnimationEnd(() => {
        setCurrentHeight('auto');
        setCssOverflow('visible');
      }),
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
      }),
    );

    setIsOpen(false);
  }
}
