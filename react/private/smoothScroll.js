const addDelay = (delay, func) => {
  if (delay) {
    setTimeout(func, delay);
  } else {
    func();
  }
};

const easeModifier = t => {
  return t > 0.5 ? 4 * Math.pow(t - 1, 3) + 1 : 4 * Math.pow(t, 3);
};

const getExpectedTime = (distance, duration, speed, minDuration) => {
  const calculatedDuration = distance / speed;
  const normalizedDuration =
    minDuration > calculatedDuration ? minDuration : calculatedDuration;

  return duration ? duration : normalizedDuration;
};

const scroll = (to, { duration, speed = 2, minDuration = 1 }, callback) => {
  const startTime = Date.now();
  const initial = window.pageYOffset;
  const total = Math.abs(to - initial);
  const expectedTime = getExpectedTime(total, duration, speed, minDuration);
  const scrollUp = initial > to;

  const smoothScroll = () => {
    requestAnimationFrame(() => {
      const timePassed = Date.now() - startTime;
      const progress = timePassed / expectedTime;
      const distance = easeModifier(progress) * total;
      const newPosition = Math.floor(
        scrollUp ? initial - distance : initial + distance
      );
      const isComplete = scrollUp ? newPosition <= to : newPosition >= to;

      if (isComplete) {
        window.scrollTo(0, to);
        callback();
      } else {
        window.scrollTo(0, newPosition);
        smoothScroll();
      }
    });
  };

  if (to !== initial) {
    smoothScroll();
  } else {
    callback();
  }
};

export default (to, { offset = 0, delay = 0, ...restOptions } = {}) =>
  new Promise(resolve => {
    addDelay(delay, () => {
      let element = to;

      if (typeof element === 'string') {
        element = document.getElementById(element);
      }

      const { top } = element.getBoundingClientRect();
      const scrollPostion = top - offset + window.pageYOffset;

      scroll(scrollPostion, restOptions, resolve);
    });
  });
