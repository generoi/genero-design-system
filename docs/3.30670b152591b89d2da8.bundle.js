(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{1451:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"gds_accordion",(function(){return GdsAccordion}));__webpack_require__(14);var _index_5a7ba7ec_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(216);function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var GdsAccordion=function(){function GdsAccordion(hostRef){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,GdsAccordion),Object(_index_5a7ba7ec_js__WEBPACK_IMPORTED_MODULE_1__.f)(this,hostRef),this.contentFloats=!1,this.expanded=!1}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(GdsAccordion,[{key:"render",value:function render(){var _this=this;return Object(_index_5a7ba7ec_js__WEBPACK_IMPORTED_MODULE_1__.d)(_index_5a7ba7ec_js__WEBPACK_IMPORTED_MODULE_1__.a,null,Object(_index_5a7ba7ec_js__WEBPACK_IMPORTED_MODULE_1__.d)("div",{class:{accordion:!0,expanded:this.expanded,openOnHover:this.openOnHover}},Object(_index_5a7ba7ec_js__WEBPACK_IMPORTED_MODULE_1__.d)("div",{class:"header",onClick:function onClick(){return _this.expanded=!_this.expanded}},Object(_index_5a7ba7ec_js__WEBPACK_IMPORTED_MODULE_1__.d)("div",{class:"heading"},Object(_index_5a7ba7ec_js__WEBPACK_IMPORTED_MODULE_1__.d)("slot",{name:"label"})),Object(_index_5a7ba7ec_js__WEBPACK_IMPORTED_MODULE_1__.d)("div",{class:"iconCollapse"},Object(_index_5a7ba7ec_js__WEBPACK_IMPORTED_MODULE_1__.d)("slot",{name:"icon-collapse"})),Object(_index_5a7ba7ec_js__WEBPACK_IMPORTED_MODULE_1__.d)("div",{class:"iconExpand"},Object(_index_5a7ba7ec_js__WEBPACK_IMPORTED_MODULE_1__.d)("slot",{name:"icon-expand"}))),Object(_index_5a7ba7ec_js__WEBPACK_IMPORTED_MODULE_1__.d)("div",{class:{content:!0,contentFloats:this.contentFloats}},Object(_index_5a7ba7ec_js__WEBPACK_IMPORTED_MODULE_1__.d)("slot",{name:"content"}))))}}]),GdsAccordion}();GdsAccordion.style=".accordion{color:var(--accordion-color, inherit);background:var(--accordion-background, var(--color-white));border:var(--accordion-border);border-radius:var(--accordion-border-radius);box-shadow:var(--accordion-box-shadow);position:relative}.accordion .content{box-sizing:border-box;display:none;background:var(--accordion-content-background, var(--color-white));padding:var(--accordion-padding, var(--spacing-s));border-bottom-right-radius:var(--accordion-border-radius);border-bottom-left-radius:var(--accordion-border-radius)}.accordion .contentFloats{position:absolute;width:100%;z-index:10;box-shadow:var(--accordion-box-shadow)}.accordion .header{display:flex;justify-content:space-between;align-items:center;cursor:pointer;padding:var(--accordion-padding, var(--spacing-s));border-top-right-radius:var(--accordion-border-radius);border-top-left-radius:var(--accordion-border-radius)}.accordion .iconCollapse{display:none}.accordion .iconExpand{display:block;flex-shrink:0}.accordion.expanded .iconCollapse{display:block}.accordion.expanded .iconExpand{display:none}.accordion.expanded .header{background:var(--accordion-expanded-header-background, var(--color-white))}.accordion.expanded .content{display:block}@media (min-width: 1024px){.accordion.openOnHover:hover .iconCollapse{display:block}.accordion.openOnHover:hover .iconExpand{display:none}.accordion.openOnHover:hover .header{background:var(--accordion-expanded-header-background, var(--color-white))}.accordion.openOnHover:hover .content{display:block}}"}}]);
//# sourceMappingURL=3.30670b152591b89d2da8.bundle.js.map