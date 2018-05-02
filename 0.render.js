exports.ids=[0],exports.modules={328:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(['\n  <Header activeTab="Job Search" authenticationStatus="authenticated" userName="Olivia" />\n\n  <PageBlock>\n    <Section header>\n      <Text hero>Style Guide Sandbox</Text>\n    </Section>\n  </PageBlock>\n\n  <Footer />\n'],['\n  <Header activeTab="Job Search" authenticationStatus="authenticated" userName="Olivia" />\n\n  <PageBlock>\n    <Section header>\n      <Text hero>Style Guide Sandbox</Text>\n    </Section>\n  </PageBlock>\n\n  <Footer />\n']),c=n(0),f=r(c),s=n(329),d=r(s),p=n(132),y=r(p),h=n(330),b=r(h),m=n(331),v=n(337),_=r(v);n(343),n(344);var g=n(345),w=r(g),C="undefined"==typeof window?null:function(){var e=n(335);return n(336),e}(),O=(0,d.default)(l)+"\n",E=b.default.createInstance({name:"sandbox",version:1}),j=function(e){function t(){var e,n,r,i;o(this,t);for(var u=arguments.length,l=Array(u),c=0;c<u;c++)l[c]=arguments[c];return n=r=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),r.state={codeReady:!1,code:null,renderCode:null},r.storeCodeMirrorRef=function(e){r.cmRef=e},r.initialiseCode=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O;r.setState({codeReady:!0,code:e,renderCode:e})},r.updateCode=function(e){r.setState({code:e}),E.setItem("code",e),r.validateCode(e)},r.revertCode=function(){r.updateCode(r.state.renderCode);var e=r.cmRef.codeMirror.getDoc();e.setValue(r.state.renderCode),e.setCursor(r.state.cursor)},r.validateCode=function(e){var t=r.cmRef.codeMirror;t.clearGutter(w.default.gutter);try{new m.Parser({plugins:{jsx:!0}},"<div>"+e+"</div>").parse();var n=t.getDoc().getCursor();r.setState({renderCode:e,cursor:n})}catch(e){var o=e&&(e.message||""),a=o.match(/\(([0-9]+):/),i=a&&a.length>=2&&a[1]&&parseInt(a[1],10)-1;if(!i)return;var u=document.createElement("div");u.classList.add(w.default.marker),u.setAttribute("title",e.message),u.addEventListener("click",r.revertCode),t.setGutterMarker(i,w.default.gutter,u)}},r.handleChange=(0,y.default)(r.updateCode,200),i=n,a(r,i)}return i(t,e),u(t,[{key:"componentDidMount",value:function(){var e=this;E.getItem("code").then(function(t){var n=t||O;e.initialiseCode(n),e.validateCode(n)})}},{key:"render",value:function(){var e=this.state,t=e.codeReady,n=e.code,r=e.renderCode;return t?f.default.createElement("div",null,f.default.createElement("div",{className:w.default.previewContainer},f.default.createElement(_.default,{code:r})),f.default.createElement("div",{className:w.default.editorContainer},f.default.createElement(C,{ref:this.storeCodeMirrorRef,value:n,onChange:this.handleChange,options:{mode:"jsx",theme:"material",lineNumbers:!0,gutters:[w.default.gutter]}}))):null}}]),t}(c.Component);j.displayName="Sandbox",t.default=j},337:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(0),c=r(l),f=n(1),s=r(f),d=n(332),p=r(d),y=n(333),h=r(y),b=n(338),m=r(b),v=n(339),_=r(v),g=n(340),w=r(g),C=n(3),O=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(C),E=n(342),j=r(E),P=O.StyleGuideProvider,S=[320,414,740,1024,1280],k=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),u(t,[{key:"render",value:function(){var e=this.props.code;return c.default.createElement("div",{className:j.default.root},c.default.createElement(m.default,{baseHref:"/seek-style-guide/"},function(t){return S.map(function(n,r){return c.default.createElement("div",{key:n,className:j.default.frameContainer},c.default.createElement(h.default,{head:c.default.createElement("base",{href:"/seek-style-guide/"}),className:j.default.frame,style:{width:n}},c.default.createElement("div",{className:j.default.frameContents},t,t&&c.default.createElement(_.default,{delay:50*(r+1)},c.default.createElement(P,{title:"SEEK Style Guide Sandbox"},c.default.createElement(w.default,{key:e},c.default.createElement(p.default,{jsx:e,components:O})))))))})}))}}]),t}(l.Component);k.propTypes={code:s.default.string.isRequired},k.displayName="Preview",t.default=k},338:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(0),c=r(l),f=n(1),s=r(f),d=n(334),p=r(d),y=function(e){var t=document.querySelectorAll('style, link[rel="stylesheet"]'),n=Array.from(t).map(function(t){if("STYLE"===t.nodeName)return Promise.resolve(t.innerHTML);var n=t.getAttribute("href"),r=(0,p.default)(e,n);return fetch(r).then(function(e){return e.text()}).catch(function(e){return console.error("Failed to load CSS from "+r,e),""})});return Promise.all(n).then(function(e){return e.join("\n")})},h=function(e){function t(){var e,n,r,i;o(this,t);for(var u=arguments.length,l=Array(u),c=0;c<u;c++)l[c]=arguments[c];return n=r=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),r.state={styleContent:""},i=n,a(r,i)}return i(t,e),u(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.baseHref;y(t).then(function(t){e.setState({styleContent:t})})}},{key:"render",value:function(){var e=this.state.styleContent;return e?this.props.children(c.default.createElement("style",{type:"text/css"},e)):this.props.children(null)}}]),t}(l.Component);h.propTypes={baseHref:s.default.string,children:s.default.func.isRequired},h.defaultProps={baseHref:"/"},h.displayName="CollectStyles",t.default=h},339:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(0),c=r(l),f=n(1),s=r(f),d=function(e){function t(){var e,n,r,i;o(this,t);for(var u=arguments.length,l=Array(u),c=0;c<u;c++)l[c]=arguments[c];return n=r=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),r.state={visible:!1},i=n,a(r,i)}return i(t,e),u(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){return e.setState({visible:!0})},0)}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.delay,r=this.state.visible,o={transition:"opacity 200ms ease",transitionDelay:n+"ms",opacity:r?1:0};return c.default.createElement("div",{style:o},t)}}]),t}(l.Component);d.propTypes={children:s.default.node.isRequired,delay:s.default.number},d.defaultProps={delay:0},d.displayName="Fade",t.default=d},340:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(0),c=r(l),f=n(1),s=r(f),d=n(3),p=n(341),y=r(p),h=function(e){function t(){var e,n,r,i;o(this,t);for(var u=arguments.length,l=Array(u),c=0;c<u;c++)l[c]=arguments[c];return n=r=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),r.state={error:null,info:null},i=n,a(r,i)}return i(t,e),u(t,[{key:"componentDidCatch",value:function(e,t){this.setState({error:e,info:t})}},{key:"render",value:function(){var e=this.state,t=e.error,n=e.info,r=this.props.children;if(!t)return r;var o=n.componentStack.split("\n").filter(function(e){return/JsxParser/.test(e)}).map(function(e){return e.replace(/ \(created by .*/g,"")}),a=o.slice(0,o.length-2);return c.default.createElement("div",{className:y.default.root},c.default.createElement(d.Section,null,c.default.createElement(d.Alert,{level:"primary",tone:"critical",message:c.default.createElement(l.Fragment,null,c.default.createElement(d.Strong,null,t.message),a.map(function(e,t){return c.default.createElement("div",{key:t},e)}))})))}}]),t}(l.Component);h.propTypes={children:s.default.node.isRequired},h.displayName="CatchErrors",t.default=h},341:function(e,t){e.exports={root:"CatchErrors__root___pWG_d"}},342:function(e,t){e.exports={root:"Preview__root___3YBFl",frameContainer:"Preview__frameContainer___3D1uZ",frame:"Preview__frame___3U0HN",frameContents:"Preview__frameContents___8Etlt"}},343:function(e,t){},344:function(e,t){},345:function(e,t){e.exports={previewContainer:"Sandbox__previewContainer___1j1gL",editorContainer:"Sandbox__editorContainer___2ayaD",gutter:"Sandbox__gutter___1o76I",marker:"Sandbox__marker___21uq_"}}};