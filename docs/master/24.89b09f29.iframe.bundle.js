(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{1796:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"gds_menu_item",(function(){return GdsMenuItem}));__webpack_require__(30);var _index_7c554ec1_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(284);function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var GdsMenuItem=function(){function GdsMenuItem(hostRef){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,GdsMenuItem),Object(_index_7c554ec1_js__WEBPACK_IMPORTED_MODULE_1__.g)(this,hostRef)}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(GdsMenuItem,[{key:"handleEnter",value:function handleEnter(){this.active||(this.active=!0)}},{key:"handleLeave",value:function handleLeave(){this.active&&(this.active=!1)}},{key:"render",value:function render(){return Object(_index_7c554ec1_js__WEBPACK_IMPORTED_MODULE_1__.e)(_index_7c554ec1_js__WEBPACK_IMPORTED_MODULE_1__.a,null,Object(_index_7c554ec1_js__WEBPACK_IMPORTED_MODULE_1__.e)("div",{class:"content"},Object(_index_7c554ec1_js__WEBPACK_IMPORTED_MODULE_1__.e)("slot",null)))}}]),GdsMenuItem}();GdsMenuItem.style=":host{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;position:relative;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;padding:var(--gds-menu-item-padding-vertical, var(--gds-spacing-s) var(--gds-spacing-m));font-family:var(--gds-menu-item-font-family, var(--gds-label-font-family));font-size:var(--gds-menu-item-font-size, var(--gds-label-l-font-size));line-height:var(--gds-menu-item-line-height, var(--gds-label-l-line-height));letter-spacing:var(--gds-menu-item-letter-spacing, var(--gds-label-l-letter-spacing));font-weight:var(--gds-menu-item-font-weight, var(--gds-label-l-font-weight));text-transform:var(--gds-menu-item-text-transform, var(--gds-label-text-transform))}@media (min-width: 1024px){:host{padding:var(--gds-menu-item-padding-horizontal, var(--gds-spacing-s) var(--gds-spacing-s))}}:host .content{-webkit-text-decoration:var(--gds-menu-item-underline, none);text-decoration:var(--gds-menu-item-underline, none);text-decoration-thickness:var(--gds-menu-item-underline-thickness, auto);-webkit-text-decoration-color:var(--gds-menu-item-underline-color, currentColor);text-decoration-color:var(--gds-menu-item-underline-color, currentColor);text-underline-offset:var(--gds-menu-item-underline-offset, auto)}:host:hover .content{-webkit-text-decoration:var(--gds-menu-item-underline-hover, none);text-decoration:var(--gds-menu-item-underline-hover, none);text-decoration-thickness:var(--gds-menu-item-underline-thickness-hover, auto);-webkit-text-decoration-color:var(--gds-menu-item-underline-color-hover, currentColor);text-decoration-color:var(--gds-menu-item-underline-color-hover, currentColor);text-underline-offset:var(--gds-menu-item-underline-offset-hover, auto)}:host([active]) .content{-webkit-text-decoration:var(--gds-menu-item-underline-active, underline);text-decoration:var(--gds-menu-item-underline-active, underline);text-decoration-thickness:var(--gds-menu-item-underline-thickness-active, 3px);-webkit-text-decoration-color:var(--gds-menu-item-underline-color-active, currentColor);text-decoration-color:var(--gds-menu-item-underline-color-active, currentColor);text-underline-offset:var(--gds-menu-item-underline-offset-active, 5px)}@media (max-width: 1023px){:host([active]){background-color:var(--gds-menu-item-background-color-active, var(--gds-color-ui-background-01))}:host([active]) .content{-webkit-text-decoration:var(--gds-menu-item-underline-active, none);text-decoration:var(--gds-menu-item-underline-active, none)}}:host-context([direction=vertical]){padding:var(--gds-menu-item-padding-vertical, var(--gds-spacing-s) var(--gds-spacing-m))}:host-context([direction=horizontal]){padding:var(--gds-menu-item-padding-horizontal, var(--gds-spacing-s) var(--gds-spacing-m))}"}}]);