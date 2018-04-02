import styles from './fixSketchRendering.less';

export default rootEl => {
  const parseContent = content => content === 'none' ? '' : content;

  // Total hack until html-sketchapp supports before and after pseudo elements
  // GitHub Issue: https://github.com/brainly/html-sketchapp/issues/20
  Array.from(rootEl.querySelectorAll('*')).forEach(el => {
    const elementBeforeStyles = window.getComputedStyle(el, ':before');
    const elementAfterStyles = window.getComputedStyle(el, ':after');
    const elementBeforeContent = parseContent(elementBeforeStyles.content);
    const elementAfterContent = parseContent(elementAfterStyles.content);

    if (elementBeforeContent) {
      const virtualBefore = document.createElement('span');

      virtualBefore.setAttribute('style', elementBeforeStyles.cssText);
      virtualBefore.innerHTML = elementBeforeContent.split('"').join('');
      el.classList.add(styles.beforeReset);
      el.prepend(virtualBefore);
    }

    if (elementAfterContent) {
      const virtualAfter = document.createElement('span');

      virtualAfter.setAttribute('style', elementAfterStyles.cssText);
      virtualAfter.innerHTML = elementAfterContent.split('"').join('');
      el.classList.add(styles.afterReset);
      el.appendChild(virtualAfter);
    }
  });

  // Another hack to remove visually-hidden elements that html-sketchapp erroneously renders
  Array.from(rootEl.querySelectorAll('*')).forEach(el => {
    // Don't remove checkboxes and radio buttons or it breaks our CSS
    // Plus, Sketch doesn't seem to render them, anyway
    if (el.nodeName === 'INPUT' && /checkbox|radio/.test(el.type)) {
      return;
    }

    const style = window.getComputedStyle(el);

    if (
      (style.position === 'absolute' && style.opacity === '0') ||
      style.clip === 'rect(1px, 1px, 1px, 1px)' // ScreenReaderOnly
    ) {
      el.parentNode.removeChild(el);
    }
  });

  // Another hack to fix select chevron layering issues
  Array.from(rootEl.querySelectorAll('select')).forEach(el => {
    el.style.backgroundColor = 'transparent';
  });

  // Another hack to fix massive stroke widths when SVGs have a large viewbox
  // e.g. the mobile Header chevron
  Array.from(rootEl.querySelectorAll('path')).forEach(el => {
    if (parseInt(getComputedStyle(el).strokeWidth, 10) > 40) {
      el.style.strokeWidth = '1px';
    }
  });
};
