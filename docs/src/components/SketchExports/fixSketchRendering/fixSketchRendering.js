import styles from './fixSketchRendering.less';

export default rootEl => {
  // Require canvg dynamically because it can't run in a Node context
  const canvg = require('canvg-fixed');

  // Total hack until html-sketchapp supports before and after pseudo elements
  // GitHub Issue: https://github.com/brainly/html-sketchapp/issues/20
  Array.from(rootEl.querySelectorAll('*')).forEach(el => {
    const elementBeforeStyles = window.getComputedStyle(el, ':before');
    const elementAfterStyles = window.getComputedStyle(el, ':after');
    const elementBeforeContent = elementBeforeStyles.content;
    const elementAfterContent = elementAfterStyles.content;

    if (elementBeforeContent) {
      const virtualBefore = document.createElement('span');

      virtualBefore.setAttribute('style', elementBeforeStyles.cssText);
      virtualBefore.innerHTML = elementBeforeStyles.content.split('"').join('');
      el.classList.add(styles.beforeReset);
      el.prepend(virtualBefore);
    }

    if (elementAfterContent) {
      const virtualAfter = document.createElement('span');

      virtualAfter.setAttribute('style', elementAfterStyles.cssText);
      virtualAfter.innerHTML = elementAfterStyles.content.split('"').join('');
      el.classList.add(styles.afterReset);
      el.appendChild(virtualAfter);
    }
  });

  // Another hack to remove visually-hidden elements that html-sketchapp erroneously renders
  Array.from(rootEl.querySelectorAll('*')).forEach(el => {
    // Don't remove checkboxes or it breaks our custom checkbox CSS rules
    // Plus, Sketch doesn't seem to render them, anyway
    if (el.nodeName === 'INPUT' && el.type === 'checkbox') {
      return;
    }

    const style = window.getComputedStyle(el);

    if (
      (style.position === 'absolute' && style.opacity === '0') ||
      style.clip === 'rect(1px 1px 1px 1px)' // ScreenReaderOnly
    ) {
      el.parentNode.removeChild(el);
    }
  });

  // Another hack until html-sketchapp supports SVG
  // GitHub Issue: https://github.com/brainly/html-sketchapp/issues/4
  Array.from(rootEl.querySelectorAll('svg')).forEach(svg => {
    const style = window.getComputedStyle(svg);

    // Ensure cascading colours are transferred onto the SVG itself
    svg.setAttribute('fill', style.fill);
    svg.setAttribute('stroke', style.stroke);
    Array.from(svg.querySelectorAll('path')).forEach(path => {
      const pathStyle = window.getComputedStyle(path);
      path.setAttribute('fill', pathStyle.fill);
      path.setAttribute('stroke', pathStyle.stroke);
    });

    // Quadruple the SVG's size so we can maintain quality
    const scale = 4;
    const width = parseInt(style.width, 10) * scale;
    const height = parseInt(style.height, 10) * scale;
    svg.style.width = `${width}px`;
    svg.style.height = `${height}px`;

    // Parse SVG to canvas
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    canvg(canvas, svg.outerHTML);

    // Replace original SVG with an image
    const img = new Image();
    img.src = canvas.toDataURL();
    img.classList = svg.classList;
    img.style.width = `${width / scale}px`;
    img.style.height = `${height / scale}px`;
    svg.parentNode.replaceChild(img, svg);
  });
};
