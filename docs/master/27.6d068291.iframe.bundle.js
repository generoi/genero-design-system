(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{1797:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"gds_submenu",(function(){return GdsSubmenu}));__webpack_require__(23),__webpack_require__(22),__webpack_require__(138),__webpack_require__(53),__webpack_require__(32);var _index_7c554ec1_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(284);function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var GdsSubmenu=function(){function GdsSubmenu(hostRef){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,GdsSubmenu),Object(_index_7c554ec1_js__WEBPACK_IMPORTED_MODULE_5__.g)(this,hostRef),this.close=Object(_index_7c554ec1_js__WEBPACK_IMPORTED_MODULE_5__.c)(this,"close",7)}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(GdsSubmenu,[{key:"handleKeydown",value:function handleKeydown(e){switch(e.key){case"Tab":break;case"Escape":this.close.emit(this.host)}}},{key:"handleBlur",value:function handleBlur(e){var newFocusElement=e.relatedTarget;newFocusElement instanceof HTMLElement&&(this.host.contains(newFocusElement)||this.close.emit(this.host))}},{key:"markMenuItems",value:function markMenuItems(){Array.from(this.host.children).filter((function(child){return"A"===child.tagName})).map((function(child){return child.setAttribute("role","menuitem")}))}},{key:"componentWillLoad",value:function componentWillLoad(){"menu"===this.role&&this.markMenuItems()}},{key:"render",value:function render(){return Object(_index_7c554ec1_js__WEBPACK_IMPORTED_MODULE_5__.e)(_index_7c554ec1_js__WEBPACK_IMPORTED_MODULE_5__.a,{role:this.role},Object(_index_7c554ec1_js__WEBPACK_IMPORTED_MODULE_5__.e)("slot",{name:"submenu-item"}))}},{key:"host",get:function get(){return Object(_index_7c554ec1_js__WEBPACK_IMPORTED_MODULE_5__.d)(this)}}]),GdsSubmenu}();GdsSubmenu.style=":host{position:absolute;padding:var(--gds-submenu-padding, 0);margin:0;display:flex;flex-direction:column;text-align:var(--gds-menu-text-align, left);background:var(--gds-submenu-background, white);box-shadow:var(--gds-submenu-box-shadow, 0 5px 10px #0000000c);list-style-type:none;width:-webkit-max-content;width:-moz-max-content;width:max-content;min-width:min(100%, var(--gds-submenu-max-width, 200px));max-width:var(--gds-submenu-max-width, 200px)}@media (max-width: 1023px){:host{position:relative;background:var(--gds-submenu-background, transparent);box-shadow:var(--gds-submenu-box-shadow, none);width:100%;max-width:var(--gds-submenu-max-width, 100%)}}::slotted(a){color:unset;text-decoration:none;display:block}::slotted(a:focus){outline:var(--gds-submenu-a-outline-focus)}::slotted(a:focus:not(:focus-visible)){outline:none}"}}]);