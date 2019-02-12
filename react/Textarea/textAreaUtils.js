// @flow
import React from 'react';
import Highlight from '../Highlight/Highlight';
import flatten from 'lodash/flatten';

type Range = {
  start: number,
  end: number
};

type InvalidText = string | Range | Array<Range>;

const formatText = (text: string, style: string, key: number) => (
  <Highlight tone="critical" className={style} key={key}>
    {text}
  </Highlight>
);

export const formatInvalidText = (
  value: string,
  invalidText: InvalidText,
  style: string
): [Node | string] => {
  if (invalidText && value) {
    const textToHighlight: Array<string> = [];
    let splitText: Array<string> = [];

    if (typeof invalidText !== 'string') {
      const highlightRanges: Array<Range> = Array.isArray(invalidText)
        ? invalidText
        : [invalidText];
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
          splitText.push(
            end ? value.slice(end, highlightRanges[i + 1].start) : ''
          );
        } else {
          splitText.push(end ? value.slice(end, value.length) : '');
        }
      });
    } else {
      textToHighlight.push(invalidText);
      splitText = value.split(invalidText);
    }

    return flatten(
      splitText.map((text, i) => {
        if (i !== splitText.length - 1) {
          if (typeof invalidText !== 'string') {
            if (textToHighlight[i]) {
              return [text, formatText(textToHighlight[i], style, i)];
            }
            return [text];
          }
          return [text, formatText(textToHighlight[0], style, i)];
        }
        return text;
      })
    ).filter(item => item !== null && item !== '');
  }

  return [value];
};
