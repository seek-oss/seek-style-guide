// @flow
// Based on https://github.com/lovasoa/react-contenteditable
import React from 'react';
import deepEqual from 'fast-deep-equal';
import { normalizeHtml, getCaretData, setCaretPosition } from './contentEditableUtils';

type Props = {
  html: string,
  onChange: Function,
  onBlur?: Function,
  disabled?: boolean,
  tagName?: string,
  className?: string,
  style?: Object,
  children?: any
}

/**
 * A simple component for an html element with editable contents.
 */
export default class ContentEditable extends React.Component<Props> {
  constructor(props: Props) {
    super();

    this.lastHtml = props.html;
  }

  shouldComponentUpdate(nextProps: Props): boolean {
    const { props, htmlEl } = this;

    // We need not rerender if the change of props simply reflects the user's edits.
    // Rerendering in this case would make the cursor/caret jump
    // Rerender if there is no element yet... (somehow?)
    if (!htmlEl) {
      return true;
    }

    // ...or if html really changed... (programmatically, not by user edit)
    if (
      normalizeHtml(nextProps.html) !== normalizeHtml(htmlEl.innerHTML) &&
      nextProps.html !== props.html
    ) {
      return true;
    }

    // Handle additional properties
    return (
      props.disabled !== nextProps.disabled ||
      props.tagName !== nextProps.tagName ||
      props.className !== nextProps.className ||
      !deepEqual(props.style, nextProps.style)
    );
  }

  getSnapshotBeforeUpdate() {
    if (typeof window.getSelection !== 'undefined') {
      const range = window.getSelection().getRangeAt(0);
      const selected = range.toString().length;
      const preCaretRange = range.cloneRange();
      preCaretRange.selectNodeContents(this.htmlEl);
      preCaretRange.setEnd(range.endContainer, range.endOffset);
      this.position = preCaretRange.toString().length - selected;
    }

    return null;
  }

  componentDidUpdate() {
    if (this.htmlEl && this.props.html !== this.htmlEl.innerHTML) {
      // Perhaps React (whose VDOM gets outdated because we often prevent
      // rerendering) did not update the DOM. So we update it manually now.
      this.htmlEl.innerHTML = this.lastHtml = this.props.html;
    }

    // Set cursor position
    if (this.position && this.htmlEl) {
      const data = getCaretData(this.htmlEl, this.position);
      setCaretPosition(data);
    }
  }

  lastHtml: string;
  htmlEl: HTMLElement | null = null;
  position: number;

  emitChange = (originalEvt: SyntheticInputEvent<HTMLInputElement>) => {
    if (!this.htmlEl) {
      return;
    }

    const html = this.htmlEl.innerHTML;

    if (this.props.onChange && html !== this.lastHtml) {
      // Clone event with Object.assign to avoid
      // "Cannot assign to read only property 'target' of object"
      const evt = Object.assign({}, originalEvt, {
        target: {
          value: html
        }
      });

      this.props.onChange(evt);
    }

    this.lastHtml = html;
  }

  render() {
    const { tagName, html, ...props } = this.props;

    return React.createElement(
      tagName || 'div',
      {
        ...props,
        ref: e => (this.htmlEl = e),
        onInput: this.emitChange,
        onBlur: this.props.onBlur || this.emitChange,
        contentEditable: !this.props.disabled,
        dangerouslySetInnerHTML: { __html: html }
      },
      this.props.children
    );
  }
}
