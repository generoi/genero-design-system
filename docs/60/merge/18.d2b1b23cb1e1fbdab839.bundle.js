(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{1612:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"gds_menu",(function(){return GdsMenu}));__webpack_require__(31),__webpack_require__(25),__webpack_require__(35),__webpack_require__(19),__webpack_require__(76),__webpack_require__(15);var _index_7c554ec1_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(243);function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var GdsMenu=function(){function GdsMenu(hostRef){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,GdsMenu),Object(_index_7c554ec1_js__WEBPACK_IMPORTED_MODULE_6__.g)(this,hostRef)}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(GdsMenu,[{key:"markMenuItems",value:function markMenuItems(){Array.from(this.host.children).filter((function(child){return"A"===child.tagName})).map((function(child){return child.setAttribute("role","menuitem")}))}},{key:"componentWillLoad",value:function componentWillLoad(){["menu","menubar"].includes(this.role)&&this.markMenuItems()}},{key:"render",value:function render(){return Object(_index_7c554ec1_js__WEBPACK_IMPORTED_MODULE_6__.e)(_index_7c554ec1_js__WEBPACK_IMPORTED_MODULE_6__.a,{role:this.role,class:this.direction},Object(_index_7c554ec1_js__WEBPACK_IMPORTED_MODULE_6__.e)("slot",{name:"item"}))}},{key:"host",get:function get(){return Object(_index_7c554ec1_js__WEBPACK_IMPORTED_MODULE_6__.d)(this)}}]),GdsMenu}();GdsMenu.style=":host{padding:0;margin:0;display:flex;text-align:var(--gds-menu-text-align, left);list-style-type:none;justify-content:var(--gds-menu-justify-content);flex-direction:column}@media (min-width: 1024px){:host{flex-direction:row}}:host([direction=vertical]){flex-direction:column}:host([direction=horizontal]){flex-direction:row}::slotted(a){color:unset;text-decoration:none;display:inline-block}::slotted(a:focus){outline:var(--gds-menu-link-outline-focus);z-index:1}::slotted(a:focus:not(:focus-visible)){outline:none}"}}]);
//# sourceMappingURL=18.d2b1b23cb1e1fbdab839.bundle.js.map