(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{1398:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"gds_menu_item",(function(){return GdsMenuItem}));__webpack_require__(15);var _index_651d546d_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(216);function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var GdsMenuItem=function(){function GdsMenuItem(hostRef){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,GdsMenuItem),Object(_index_651d546d_js__WEBPACK_IMPORTED_MODULE_1__.g)(this,hostRef)}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(GdsMenuItem,[{key:"handleEnter",value:function handleEnter(){this.active||(this.active=!0)}},{key:"handleLeave",value:function handleLeave(){this.active&&(this.active=!1)}},{key:"render",value:function render(){return Object(_index_651d546d_js__WEBPACK_IMPORTED_MODULE_1__.e)("li",{class:{item:!0,active:this.active}},Object(_index_651d546d_js__WEBPACK_IMPORTED_MODULE_1__.e)("div",{class:"content"},Object(_index_651d546d_js__WEBPACK_IMPORTED_MODULE_1__.e)("div",{class:"item"},Object(_index_651d546d_js__WEBPACK_IMPORTED_MODULE_1__.e)("slot",null)),this.active&&Object(_index_651d546d_js__WEBPACK_IMPORTED_MODULE_1__.e)("div",{class:"underline-container"},Object(_index_651d546d_js__WEBPACK_IMPORTED_MODULE_1__.e)("div",{class:"underline"}))))}}]),GdsMenuItem}();GdsMenuItem.style="li{box-sizing:border-box;list-style:none}@media (max-width: 767px){.active{background-color:var(--menu-item-background-color-active, var(--background-color-primary))}}.content{height:var(--spacing-xxl);display:flex;flex-direction:column;justify-content:center;padding:0 var(--spacing-m)}@media (min-width: 1024px){.content{padding:0 var(--spacing-s)}}:host-context(.vertical) .content{padding:0 var(--spacing-m)}:host-context(.horizontal) .content{padding:0 var(--spacing-s)}.item{font-family:var(--gds-menu-item-font-family, var(--label-font-family));font-size:var(--gds-menu-item-font-size, var(--label-l-font-size));line-height:var(--gds-menu-item-line-height, var(--label-l-line-height));letter-spacing:var(--gds-menu-item-letter-spacing, var(--label-l-letter-spacing));font-weight:var(--gds-menu-item-font-weight, var(--label-l-font-weight));text-transform:var(--gds-menu-item-text-transform, var(--label-text-transform))}.underline-container{position:relative;width:100%;height:0;display:var(--menu-item-underline-display, block)}@media (max-width: 1023px){.underline-container{display:var(--menu-item-underline-display, none)}}.underline{position:absolute;width:100%;top:4px;border-bottom:3px solid var(--navigation-underline-color, var(--navigation-color))}.divider{margin:var(--spacing-m) 0;border-top:2px solid var(--background-color-primary)}"}}]);
//# sourceMappingURL=16.f329b7f4ae4b5a0db6ef.bundle.js.map