(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{1610:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"gds_menu_item_nested",(function(){return GdsMenuItemNested}));__webpack_require__(131),__webpack_require__(15);var _index_7c554ec1_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(243);function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var idCounter=0,GdsMenuItemNested=function(){function GdsMenuItemNested(hostRef){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,GdsMenuItemNested),Object(_index_7c554ec1_js__WEBPACK_IMPORTED_MODULE_2__.g)(this,hostRef),this.expanded=!1,this.forced=!1}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(GdsMenuItemNested,[{key:"handleEnter",value:function handleEnter(){window.innerWidth<=1024||this.open()}},{key:"handleLeave",value:function handleLeave(){window.innerWidth<=1024||this.forced||this.close()}},{key:"handleClose",value:function handleClose(){var _a;this.close(),this.host.contains(document.activeElement)&&(null===(_a=this.submenuButtonEl)||void 0===_a||_a.focus())}},{key:"open",value:function open(){this.expanded||(this.expanded=!0,this.active=!0)}},{key:"close",value:function close(){this.expanded&&(this.expanded=!1,this.active=!1)}},{key:"handleToggleSubmenuClick",value:function handleToggleSubmenuClick(event){if(event.preventDefault(),event.stopPropagation(),!this.forced)return this.forced=!0,void this.open();this.close(),this.forced=!1}},{key:"componentWillLoad",value:function componentWillLoad(){++idCounter,this.submenuId="gds-menu-item-nested-submenu-".concat(idCounter),this.linkSlot=this.host.querySelector(':scope > [slot="link"]'),this.accessibleLabel||(this.accessibleLabel=this.linkSlot.textContent.trim())}},{key:"render",value:function render(){var _this=this;return Object(_index_7c554ec1_js__WEBPACK_IMPORTED_MODULE_2__.e)(_index_7c554ec1_js__WEBPACK_IMPORTED_MODULE_2__.a,null,Object(_index_7c554ec1_js__WEBPACK_IMPORTED_MODULE_2__.e)("div",{class:"menu-item"},Object(_index_7c554ec1_js__WEBPACK_IMPORTED_MODULE_2__.e)("slot",{name:"link"}),this.submenuIcon&&Object(_index_7c554ec1_js__WEBPACK_IMPORTED_MODULE_2__.e)("button",{"aria-expanded":this.expanded?"true":"false","aria-haspopup":"true","aria-controls":this.submenuId,"aria-label":this.accessibleLabel,class:"submenu-icon",onClick:function onClick(e){return _this.handleToggleSubmenuClick(e)},ref:function ref(el){return _this.submenuButtonEl=el}},Object(_index_7c554ec1_js__WEBPACK_IMPORTED_MODULE_2__.e)("span",{class:"submenu-icon-content",tabindex:"-1","aria-hidden":"true"},this.submenuIcon))),Object(_index_7c554ec1_js__WEBPACK_IMPORTED_MODULE_2__.e)("div",{id:this.submenuId,class:"submenu",role:"region","aria-label":this.accessibleLabel},Object(_index_7c554ec1_js__WEBPACK_IMPORTED_MODULE_2__.e)("slot",{name:"submenu"})))}},{key:"host",get:function get(){return Object(_index_7c554ec1_js__WEBPACK_IMPORTED_MODULE_2__.d)(this)}}]),GdsMenuItemNested}();GdsMenuItemNested.style=":host{display:block;position:relative}.menu-item{display:flex;flex-direction:row;align-items:stretch}.submenu-icon{all:unset;display:inline-block;text-align:center;cursor:pointer;padding:0;margin-left:calc(-1 * var(--gds-spacing-2xs));margin-right:var(--gds-spacing-xs)}.submenu-icon .submenu-icon-content{padding:var(--gds-spacing-3xs);width:1em;height:1em;box-sizing:content-box;display:inline-flex;align-items:center;justify-content:center;outline:none;transform:rotate(90deg)}@media (prefers-reduced-motion: no-preference){.submenu-icon .submenu-icon-content{transition:transform 0.3s ease}}.submenu-icon:focus>.submenu-icon-content{outline:var(--gds-menu-item-nested-submenu-icon-outline-focus)}.submenu{overflow:hidden;max-height:0px;visibility:hidden;position:absolute;opacity:0;display:block;width:100%}@media (prefers-reduced-motion: no-preference){.submenu{transition:opacity 0.2s ease}}:host([expanded]) .submenu{overflow:visible;visibility:visible;opacity:1}@media (max-width: 1023px){:host([active]) .menu-item{background-color:var(--gds-menu-item-background-color-active, var(--gds-color-ui-background-01))}.submenu{max-height:0px;position:relative;opacity:1}}@media (max-width: 1023px) and (prefers-reduced-motion: no-preference){.submenu{transition:max-height 0.3s ease}}@media (max-width: 1023px){:host([expanded]) .submenu-icon-content{transform:rotate(-90deg)}:host([expanded]) .submenu{max-height:300px}}::slotted(a){color:unset;text-decoration:none;flex:1 0 auto;display:block;--gds-menu-item-underline-active:var(--gds-menu-item-nested-underline-active)}::slotted(a:focus){outline:var(--gds-menu-link-outline-focus);z-index:1}::slotted(a:focus:not(:focus-visible)){outline:none}"}}]);
//# sourceMappingURL=16.8ddb6356faae18134ed6.bundle.js.map