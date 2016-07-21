// Based on the `fontLoader` demo in fontoptim:
// https://github.com/sapegin/fontoptim/blob/master/demo/js/fontloader.js
// Also includes woff2-feature-test:
// https://github.com/filamentgroup/woff2-feature-test/blob/master/woff2.js

// Wrap everything in a try/catch so failures are silent
try {
  (function (fontName, fontUrlBase) {
    // 1. Many unsupported browsers should stop here
    var ua = navigator.userAgent;
    var noSupport = (
      ua.match(/(Android (2|3|4.0|4.1|4.2|4.3))|(Opera (Mini|Mobi))/) &&
      !ua.match(/Chrome/)
    ); // Android Stock Browser below 4.4 and Opera Mini

    if (noSupport) return;

    var localStorageCssKey = 'font-' + fontName + '-css';
    var storedFontCss = localStorage.getItem(localStorageCssKey);

    // 2. Checking whether the font data is already in localStorage and up-to-date
    if (storedFontCss) {
      // the css is still in the localStorage

      // 3. Setting up the <style> element, that we are using to apply the base64 encoded font data
      var styleElement = document.createElement('style');
      styleElement.rel = 'stylesheet';
      document.head.appendChild(styleElement);
      // Setting styleElement.textContent must be after this line, because of IE9 errors

      // 4. Applying the font style sheet
      styleElement.textContent = storedFontCss;
    }
    else {
      // The data was not present, so we have to load it again

      // 5. Checking for WOFF2 support to know which URL we should use
      var url = fontUrlBase + '.woff' + (hasWoff2() ? '2' : '') + '.css';

      // 6. Fetching the font data from the server
      var request = new XMLHttpRequest();
      request.open('GET', url);
      request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
          // 7. Updating localStorage with the fresh data and applying the font data
          localStorage.setItem(localStorageCssKey, request.responseText);
        }
      };
      request.send();
    }

    function hasWoff2() {
      // Source: https://github.com/filamentgroup/woff2-feature-test/blob/master/woff2.js
      if( !( "FontFace" in window ) ) {
        return false;
      }

      var f = new FontFace('t', 'url( "data:application/font-woff2;base64,d09GMgABAAAAAAIkAAoAAAAABVwAAAHcAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAABlYAgloKLEoBNgIkAxgLDgAEIAWDcgc1G7IEyB6SJAFID5YA3nAHC6h4+H7s27nP1kTyOoQkGuJWtNGIJKYznRI3VEL7IaHq985ZUuKryZKcAtJsi5eULwUybm9KzajBBhywZ5ZwoJNuwDX5C/xBjvz5DbsoNsvG1NGQiqp0NMLZ7JlnW+5MaM3HwcHheUQeiVokekHkn/FRdefvJaTp2PczN+I1Sc3k9VuX51Tb0Tqqf1deVXGdJsDOhz0/EffMOPOzHNH06pYkDDjs+P8fb/z/8n9Iq8ITzWywkP6PBMMN9L/O7vY2FNoTAkp5PpD6g1nV9WmyQnM5uPpAMHR2fe06jbfvzPriekVTQxC6lpKr43oDtRZfCATl5OVAUKykqwm9o8R/kg37cxa6eZikS7cjK4aIwoyh6jOFplhFrz2b833G3Jii9AjDUiAZ9AxZtxdEYV6imvRF0+0Nej3wu6nPZrTLh81AVcV3kmMVdQj6Qbe9qetzbuDZ7vXOlRrqooFSxCv6SfrDICA6rnHZXQPVcUHJYGcoqa3jVH7ATrjWBNYYkEqF3RFpVIl0q2JvMOJd7/TyjXHw2NyAuJpNaEbz8RTEVtCbSH7JrwQQOqwGl7sTUOtdBZIY2DKqKlvOmPvUxJaURAZZcviTT0SKHCXqzwc=" ) format( "woff2" )', {});
      f.load()['catch'](function() {});

      return f.status == 'loading' || f.status == 'loaded';
    }
  }('{{FONT_NAME}}', '{{FONT_URL}}'))
} catch (err){ }
