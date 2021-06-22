(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{1796:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"gds_search_form",(function(){return GdsSearch}));__webpack_require__(31);var _index_7c554ec1_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(284);function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var GdsSearch=function(){function GdsSearch(hostRef){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,GdsSearch),Object(_index_7c554ec1_js__WEBPACK_IMPORTED_MODULE_1__.g)(this,hostRef),this.collapsed=!1,this.floating=!1,this.accessibleSubmitLabel="Search",this.accessibleInputLabel="Search",this.placeholder="Search",this.query="s"}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(GdsSearch,[{key:"handleMediaQuery",value:function handleMediaQuery(matches){this.collapsed=matches}},{key:"componentWillLoad",value:function componentWillLoad(){var _this=this;this.collapseOn&&(this.mediaQuery=window.matchMedia(this.collapseOn),this.mediaQuery.addEventListener("change",(function(event){return _this.handleMediaQuery(event.matches)})),this.handleMediaQuery(this.mediaQuery.matches))}},{key:"render",value:function render(){return Object(_index_7c554ec1_js__WEBPACK_IMPORTED_MODULE_1__.e)(_index_7c554ec1_js__WEBPACK_IMPORTED_MODULE_1__.a,null,Object(_index_7c554ec1_js__WEBPACK_IMPORTED_MODULE_1__.e)("slot",null),Object(_index_7c554ec1_js__WEBPACK_IMPORTED_MODULE_1__.e)("form",{action:this.action,method:"get",role:"search"},Object(_index_7c554ec1_js__WEBPACK_IMPORTED_MODULE_1__.e)("gds-input-wrapper",{label:this.accessibleInputLabel,"hide-label-visually":!0},Object(_index_7c554ec1_js__WEBPACK_IMPORTED_MODULE_1__.e)("input",{slot:"input",type:"search",name:this.query,placeholder:this.placeholder,autocomplete:"off"})),Object(_index_7c554ec1_js__WEBPACK_IMPORTED_MODULE_1__.e)("button",{type:"submit","aria-label":this.accessibleSubmitLabel},Object(_index_7c554ec1_js__WEBPACK_IMPORTED_MODULE_1__.e)("slot",{name:"search-icon"},Object(_index_7c554ec1_js__WEBPACK_IMPORTED_MODULE_1__.e)("div",{innerHTML:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!-- Font Awesome Pro 5.15.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --\x3e<path d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"/></svg>\n'})))))}},{key:"host",get:function get(){return Object(_index_7c554ec1_js__WEBPACK_IMPORTED_MODULE_1__.d)(this)}}]),GdsSearch}();GdsSearch.style=":host{display:flex;justify-content:flex-end}form{display:inline-flex;position:relative;background:var(--gds-search-form-background);border:var(--gds-search-form-border);border-radius:var(--gds-search-form-border-radius)}form:focus-within [type=search]{max-width:var(--gds-search-form-input-width-focus);border:var(--gds-search-form-input-border)}form:focus-within [type=submit]{z-index:1}form:not(:focus-within) [type=search]{--gds-input-placeholder-color:var(--gds-search-form-color)}:host [type=search]{box-sizing:border-box;display:block;font-family:var(--gds-search-form-input-font-family);border:0;padding:var(--gds-search-form-input-padding);border-radius:var(--gds-search-form-input-border-radius);color:var(--gds-search-form-input-color);background:transparent;font-size:var(--gds-search-form-input-font-size);font-weight:var(--gds-search-form-input-font-weight);max-width:var(--gds-search-form-input-width);z-index:1;position:relative;min-width:auto;min-height:auto;padding-right:var(--gds-search-form-button-width)}@media (prefers-reduced-motion: no-preference){:host [type=search]{transition:max-width 0.2s ease-out}}:host [type=search]:focus{outline:var(--gds-search-form-outline-focus)}:host [type=search]::-webkit-search-decoration,:host [type=search]::-webkit-search-cancel-button,:host [type=search]::-webkit-search-results-button,:host [type=search]::-webkit-search-results-decoration{display:none}[type=submit]{all:unset;position:absolute;right:0;top:0;bottom:0;z-index:0;cursor:pointer;color:currentColor;padding:var(--gds-search-form-button-padding);width:var(--gds-search-form-button-width);box-sizing:border-box;transition-property:z-index;transition-delay:0.1s;display:flex;align-items:center;justify-content:center}[type=submit] ::slotted(*){display:flex}[type=submit] svg{fill:currentColor;width:1em;height:1em;display:block}[type=submit]:focus{outline:var(--gds-search-form-outline-focus);z-index:1}[type=submit]:focus:not(:focus-visible){outline:none}:host([collapsed]) form{position:relative;max-width:var(--gds-search-form-button-width)}:host([collapsed]) [type=search]{opacity:0;cursor:pointer;z-index:1;box-sizing:border-box}@media (prefers-reduced-motion: no-preference){:host([collapsed]) [type=search]{transition:all 200ms ease-out}}:host([collapsed]) form:focus-within{max-width:100%}:host([collapsed]) form:focus-within [type=search]{max-width:var(--gds-search-form-input-width-focus);opacity:1;right:0;cursor:initial;position:relative}:host([collapsed]) form:focus-within [type=submit]{z-index:2;color:var(--gds-search-form-icon-color);padding-right:var(--gds-spacing-2xs)}:host([floating]:not([collapsed])){position:relative;width:calc( var(--gds-search-form-input-width) + var(--gds-search-form-button-width) + 1em )}:host([floating]:not([collapsed])) form{position:absolute;right:0;box-sizing:border-box;width:100%}@media (prefers-reduced-motion: no-preference){:host([floating]:not([collapsed])) form{transition:width 0.2s ease-out}}:host([floating]:not([collapsed])) form:focus-within{width:calc( var(--gds-search-form-input-width-focus) + var(--gds-search-form-button-width) + 1em )}:host([floating]:not([collapsed])) form:focus-within [type=search]{transition:none;width:100%;max-width:none;box-sizing:border-box}:host([floating]){margin-top:-1em}:host([floating][collapsed]){position:relative;width:calc( var(--gds-search-form-button-width) + 1em )}:host([floating][collapsed]) form{position:absolute;right:0;box-sizing:border-box;width:100%}@media (prefers-reduced-motion: no-preference){:host([floating][collapsed]) form{transition:width 0.2s ease-out}}:host([floating][collapsed]) form:focus-within{width:calc( var(--gds-search-form-input-width-focus) + var(--gds-search-form-button-width) + 1em );max-width:none;z-index:1}:host([floating][collapsed]) form:focus-within [type=search]{transition:none;width:100%;max-width:none;box-sizing:border-box}"}}]);