import range from 'lodash/range';

export default (min, max, ascending) => {
  const start = ascending ? min : max;
  const end = ascending ? max + 1 : min - 1;

  return range(start, end).map(value => {
    const stringValue = String(value);

    return {
      value: stringValue,
      label: stringValue
    };
  });
};
