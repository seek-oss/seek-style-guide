import Page from 'html-sketchapp/html2asketch/page.js';
import Document from 'html-sketchapp/html2asketch/document.js';
import Text from 'html-sketchapp/html2asketch/text.js';
import SymbolMaster from 'html-sketchapp/html2asketch/symbolMaster.js';
import nodeToSketchLayers from 'html-sketchapp/html2asketch/nodeToSketchLayers.js';

const getAllLayers = async item => {
  const itemAndChildren = [item, ...item.querySelectorAll('*')];

  const layerPromises = Array.from(itemAndChildren)
    .map(async node => {
      // Workaround until this PR is merged: https://github.com/brainly/html-sketchapp/pull/33
      if (node.offsetParent === null) {
        return [];
      }

      return await nodeToSketchLayers(node);
    });

  const layers = await Promise.all(layerPromises);

  return layers.reduce((prev, current) => prev.concat(current), []);
};

let doc;

export function setupStyles() {
  doc = new Document();
}

export function snapshotColorStyles() {
  Array.from(document.querySelectorAll('[data-sketch-color]'))
    .forEach(item => {
      const color = item.dataset.sketchColor;

      doc.addColor(color);
    });
}

export async function snapshotTextStyles({ suffix = '' }) {
  await Array.from(document.querySelectorAll('[data-sketch-text]'))
    .forEach(async item => {
      const layers = await getAllLayers(item);

      layers.reduce((prev, current) => prev.concat(current), [])
        .filter(layer => layer instanceof Text)
        .forEach(layer => {
          const name = item.dataset.sketchText;

          layer.setName(`${name}${suffix}`);
          doc.addTextStyle(layer);
        });
    });
}

export function getStylesJSON() {
  return doc.toJSON();
}

let page;

export function setupSymbols({ name }) {
  page = new Page({
    width: document.body.offsetWidth,
    height: document.body.offsetHeight
  });

  page.setName(name);
}

export async function snapshotSymbols({ suffix = '' }) {
  const symbolPromises = Array.from(document.querySelectorAll('[data-sketch-symbol]'))
    .map(async item => {
      const name = item.dataset.sketchSymbol;
      const { left: x, top: y } = item.getBoundingClientRect();
      const symbol = new SymbolMaster({ x, y });

      symbol.setName(`${name}${suffix}`);

      const layers = await getAllLayers(item);

      layers
        .filter(layer => layer !== null)
        .forEach(layer => symbol.addLayer(layer));

      return symbol;
    });

  const symbols = await Promise.all(symbolPromises);

  symbols.forEach(obj => page.addLayer(obj));
}

export function getSymbolsJSON() {
  return page.toJSON();
}
