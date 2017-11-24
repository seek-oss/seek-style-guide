import Page from 'html-sketchapp/html2asketch/page.js';
import Document from 'html-sketchapp/html2asketch/document.js';
import Text from 'html-sketchapp/html2asketch/text.js';
import SymbolMaster from 'html-sketchapp/html2asketch/symbolMaster.js';
import nodeToSketchLayers from 'html-sketchapp/html2asketch/nodeToSketchLayers.js';

const getAllLayers = async item => {
  const parentAndChildren = [item, ...item.querySelectorAll('*')];

  const layerPromises = Array.from(parentAndChildren)
    .map(async node => await nodeToSketchLayers(node));

  const layers = await Promise.all(layerPromises);

  return layers.reduce((prev, current) => prev.concat(current), []);
};

export async function getASketchDocument() {
  const doc = new Document();

  await Array.from(document.querySelectorAll('[data-sketch-text]'))
    .forEach(async item => {
      const layers = await getAllLayers(item);

      layers.reduce((prev, current) => prev.concat(current), [])
        .filter(layer => layer instanceof Text)
        .forEach(layer => {
          const styleName = item.dataset.sketchText;

          layer.setName(styleName);
          doc.addTextStyle(layer);
        });
    });

  return doc.toJSON();
}

export async function getASketchPage() {
  const page = new Page({
    width: document.body.offsetWidth,
    height: document.body.offsetHeight
  });

  page.setName('SEEK Style Guide Symbols');

  const symbolPromises = Array.from(document.querySelectorAll('[data-sketch-symbol]'))
    .map(async item => {
      const name = item.dataset.sketchSymbol;
      const { left: x, top: y } = item.getBoundingClientRect();
      const symbol = new SymbolMaster({ x, y });

      symbol.setName(name);

      const layers = await getAllLayers(item);

      layers
        .filter(layer => layer !== null)
        .forEach(layer => symbol.addLayer(layer));

      return symbol;
    });

  const symbols = await Promise.all(symbolPromises);

  symbols.forEach(obj => page.addLayer(obj));

  return page.toJSON();
}
