(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{1400:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"gds_navigation",(function(){return GdsNavigation}));__webpack_require__(15),__webpack_require__(100),__webpack_require__(14),__webpack_require__(130);var _index_651d546d_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(216);function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var GdsNavigation=function(){function GdsNavigation(hostRef){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,GdsNavigation),Object(_index_651d546d_js__WEBPACK_IMPORTED_MODULE_4__.g)(this,hostRef),this.menuIcon="☰",this.open=!1}var _closeMenu;return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(GdsNavigation,[{key:"componentWillRender",value:function componentWillRender(){this.hasMenuIconSlot=!!this.hostElement.querySelector('[slot="menu-icon"]'),this.hasMobileExtensionsSlot=!!this.hostElement.querySelector('[slot="mobile-extensions"]'),this.hasDesktopExtensionsSlot=!!this.hostElement.querySelector('[slot="desktop-extensions"]')}},{key:"closeHamburgerMenu",value:function closeHamburgerMenu(){this.content.style.display="none",this.menuIcon="☰",this.open=!1}},{key:"openHamburgerMenu",value:function openHamburgerMenu(){this.content.style.display="block",this.menuIcon="✕",this.open=!0}},{key:"render",value:function render(){var _this=this;return Object(_index_651d546d_js__WEBPACK_IMPORTED_MODULE_4__.e)(_index_651d546d_js__WEBPACK_IMPORTED_MODULE_4__.a,null,Object(_index_651d546d_js__WEBPACK_IMPORTED_MODULE_4__.e)("header",{class:{"gds-navigation-header":!0,open:this.open,close:!this.open}},Object(_index_651d546d_js__WEBPACK_IMPORTED_MODULE_4__.e)("div",{class:"gds-navigation-container"},Object(_index_651d546d_js__WEBPACK_IMPORTED_MODULE_4__.e)("div",{class:"gds-navigation-logo"},Object(_index_651d546d_js__WEBPACK_IMPORTED_MODULE_4__.e)("slot",{name:"logo"})),Object(_index_651d546d_js__WEBPACK_IMPORTED_MODULE_4__.e)("div",{class:"gds-navigation-content",ref:function ref(el){return _this.content=el}},Object(_index_651d546d_js__WEBPACK_IMPORTED_MODULE_4__.e)("nav",{class:"gds-navigation-nav"},Object(_index_651d546d_js__WEBPACK_IMPORTED_MODULE_4__.e)("slot",{name:"menu"})),this.hasMobileExtensionsSlot&&Object(_index_651d546d_js__WEBPACK_IMPORTED_MODULE_4__.e)("div",{class:"gds-navigation-mobile-extensions"},Object(_index_651d546d_js__WEBPACK_IMPORTED_MODULE_4__.e)("slot",{name:"mobile-extensions"}))),this.hasDesktopExtensionsSlot&&Object(_index_651d546d_js__WEBPACK_IMPORTED_MODULE_4__.e)("div",{class:"gds-navigation-desktop-extensions"},Object(_index_651d546d_js__WEBPACK_IMPORTED_MODULE_4__.e)("slot",{name:"desktop-extensions"})),Object(_index_651d546d_js__WEBPACK_IMPORTED_MODULE_4__.e)("div",{class:"gds-navigation-hamburger",onClick:function onHamburgerClick(){"none"===window.getComputedStyle(_this.content).display?_this.openHamburgerMenu():_this.closeHamburgerMenu()}},Object(_index_651d546d_js__WEBPACK_IMPORTED_MODULE_4__.e)("slot",{name:"menu-icon"}),Object(_index_651d546d_js__WEBPACK_IMPORTED_MODULE_4__.e)("slot",{name:"close-menu-icon"}),!this.hasMenuIconSlot&&Object(_index_651d546d_js__WEBPACK_IMPORTED_MODULE_4__.e)("gds-text-button",{size:"l"},this.menuIcon)))))}},{key:"closeMenu",value:(_closeMenu=function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}(regeneratorRuntime.mark((function _callee(){return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:this.closeHamburgerMenu();case 1:case"end":return _context.stop()}}),_callee,this)}))),function closeMenu(){return _closeMenu.apply(this,arguments)})},{key:"hostElement",get:function get(){return Object(_index_651d546d_js__WEBPACK_IMPORTED_MODULE_4__.d)(this)}}]),GdsNavigation}();GdsNavigation.style="header.gds-navigation-header{background:var(--navigation-background, transparent)}.gds-navigation-container{position:relative;display:flex;flex-direction:row;align-items:center;justify-content:space-between;padding-right:0;height:var(--navigation-mobile-height)}@media (min-width: 1024px){.gds-navigation-container{padding-right:var(--spacing-xs);height:var(--navigation-desktop-height)}}.gds-navigation-container a{color:var(--navigation-color)}.gds-navigation-content{display:flex;flex-grow:1;justify-content:var(--navigation-content-justify-content, center);background:var(--navigation-content-background, transparent)}@media (max-width: 1023px){.gds-navigation-content{display:none;position:absolute;background:var(--navigation-content-background, white);padding-top:var(--navigation-mobile-height);top:0;left:0;right:0;z-index:100}}.gds-navigation-mobile-extensions{display:block;border-top:var(--navigation-mobile-extensions-border-top, 2px solid var(--body-background-color));padding:var(--spacing-l) 0}@media (min-width: 1024px){.gds-navigation-mobile-extensions{display:none}}.gds-navigation-desktop-extensions{min-width:100px}@media (max-width: 1023px){.gds-navigation-desktop-extensions{display:none}}@media (max-width: 1023px){nav.gds-navigation-nav{margin:var(--spacing-l) 0}}.gds-navigation-hamburger{--text-button-l-font-size:30px;--text-button-l-padding:var(--spacing-s);z-index:101;position:relative}@media (min-width: 1024px){.gds-navigation-hamburger{display:none}}[slot=menu-icon],[slot=close-menu-icon]{padding-right:var(--spacing-s)}.close [slot=menu-icon]{display:block}.close [slot=close-menu-icon]{display:none}.open{z-index:1000;position:relative}.open [slot=menu-icon]{display:none}.open [slot=close-menu-icon]{display:block}.gds-navigation-logo{display:flex;align-items:center;padding:var(--navigation-logo-padding, 0 0 0 var(--spacing-s));z-index:101;position:relative;height:var(--navigation-mobile-height)}.gds-navigation-logo img{width:var(--navigation-logo-width);height:var(--navigation-logo-height, 32px)}@media (min-width: 1024px){.gds-navigation-logo{flex-grow:0;padding:var(--navigation-logo-padding, 0 0 0 var(--spacing-l));height:var(--navigation-desktop-height)}.gds-navigation-logo img{height:var(--navigation-logo-height, 48px)}}"}}]);
//# sourceMappingURL=18.ca7e85635beff384d2f7.bundle.js.map