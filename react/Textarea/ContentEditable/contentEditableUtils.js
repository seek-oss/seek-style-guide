// @flow
type CaretData = {
  node?: HTMLElement,
  position: number
};

export const normalizeHtml = (str: string): string => {
  return str && str.replace(/&nbsp;|\u202F|\u00A0/g, ' ');
};

export const getAllTextnodes = (el: HTMLElement): Array<HTMLElement> => {
  let n;
  const a = [];
  // $FlowFixMe
  const walk = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null, false);

  while ((n = walk.nextNode())) {
    a.push(n);
  }

  return a;
};

export const getCaretData = (el: HTMLElement, position: number): CaretData => {
  let node;
  let newPosition: number = position;
  const nodes = getAllTextnodes(el);
  for (let n = 0; n < nodes.length; n++) {
    if (position > nodes[n].nodeValue.length && nodes[n + 1]) {
      // remove amount from the position, go to next node
      newPosition -= nodes[n].nodeValue.length;
    } else {
      node = nodes[n];
      break;
    }
  }

  // you'll need the node and the position (offset) to set the caret
  return {
    node,
    position: newPosition
  };
};

export const setCaretPosition = (d: CaretData) => {
  const sel = window.getSelection();
  const range = document.createRange();

  if (d.node && d.position) {
    range.setStart(d.node, d.position);
    range.collapse(true);
    sel.removeAllRanges();
    sel.addRange(range);
  }
};

const stripErrorTags = (html: string): string =>
  html.replace(/<em[^>]*>|<\/em>/g, '');

export const formatInvalidText = (value: string, invalidText: string, style: string): string => {
  if (invalidText && value.indexOf(invalidText) !== -1) {
    let formattedText = '';
    const textInError = stripErrorTags(value).split(invalidText);
    formattedText = textInError
      .map(
        (text, i) =>
          i !== textInError.length - 1 ?
            `${text}<em class="${style}">${invalidText}</em>` :
            text
      )
      .join('');

    return formattedText;
  }

  return stripErrorTags(value);
};
