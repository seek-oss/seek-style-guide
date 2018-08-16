// @flow
type Range = {
  start: number,
  end: number
}

type InvalidText = string | Range | Array<Range>;

const formatText = (text, style) => `<mark class="${style}">${text}</mark>`;

export const formatInvalidText = (value: string, invalidText: InvalidText, style: string): string => {
  if (invalidText && value) {
    const textToHighlight: Array<string> = [];
    let splitText: Array<string> = [];

    if (typeof invalidText !== 'string') {
      const highlightRanges: Array<Range> = Array.isArray(invalidText) ? invalidText : [invalidText];
      highlightRanges.forEach((range, i) => {
        const { start, end } = range;
        const highlightedText: string = value.slice(start, end);
        if (highlightedText) {
          textToHighlight.push(highlightedText);
        }
        if (i === 0) {
          splitText.push(value.slice(0, start));
        }
        if (highlightRanges[i + 1]) {
          splitText.push(end ? value.slice(end, highlightRanges[i + 1].start) : '');
        } else {
          splitText.push(end ? value.slice(end, value.length) : '');
        }
      });
    } else {
      textToHighlight.push(invalidText);
      splitText = value.split(invalidText);
    }

    return splitText.map((text, i) => {
      if (i !== splitText.length - 1) {
        if (typeof invalidText !== 'string') {
          if (textToHighlight[i]) {
            return `${text}${formatText(textToHighlight[i], style)}`;
          }
          return null;
        }
        return `${text}${formatText(textToHighlight[0], style)}`;
      }
      return text;
    }).join('');
  }

  return value;
};
