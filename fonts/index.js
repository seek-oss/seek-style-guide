import fontSnippet from './fontSnippet.raw.js';

const ensureTrailingSlash = s => s[s.length - 1] !== '/' ? `${s}/` : s;

export const renderFontSnippet = ({ baseHref, evaluate = false }) => {
  const src = fontSnippet
    .replace('{{FONT_NAME}}', 'Seek-Style-Guide.Roboto.v1')
    .replace('{{FONT_URL}}', `${ensureTrailingSlash(baseHref)}roboto`);

  return evaluate ? eval(src) : `<script>${src}</script>`;
};
