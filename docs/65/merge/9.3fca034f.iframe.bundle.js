(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{1780:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"gds_accordion",(function(){return GdsAccordion}));__webpack_require__(30);var _index_7c554ec1_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(284);function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var idCounter=0,GdsAccordion=function(){function GdsAccordion(hostRef){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,GdsAccordion),Object(_index_7c554ec1_js__WEBPACK_IMPORTED_MODULE_1__.g)(this,hostRef),this.openOnHover=!1,this.contentFloats=!1,this.expanded=!1}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(GdsAccordion,[{key:"handleKeyDown",value:function handleKeyDown(event){switch(event.key){case"Escape":this.expanded&&(this.expanded=!1)}}},{key:"componentWillLoad",value:function componentWillLoad(){++idCounter,this.contentId="gds-accordion-content-".concat(idCounter),this.titleId="gds-accordion-title-".concat(idCounter)}},{key:"render",value:function render(){var _this=this;return Object(_index_7c554ec1_js__WEBPACK_IMPORTED_MODULE_1__.e)(_index_7c554ec1_js__WEBPACK_IMPORTED_MODULE_1__.a,null,Object(_index_7c554ec1_js__WEBPACK_IMPORTED_MODULE_1__.e)("div",{class:{accordion:!0,expanded:this.expanded,openOnHover:this.openOnHover}},Object(_index_7c554ec1_js__WEBPACK_IMPORTED_MODULE_1__.e)("button",{class:"header",onClick:function onClick(){return _this.expanded=!_this.expanded},"aria-controls":this.contentId,"aria-expanded":this.expanded?"true":"false"},Object(_index_7c554ec1_js__WEBPACK_IMPORTED_MODULE_1__.e)("div",{class:"heading",id:this.titleId},Object(_index_7c554ec1_js__WEBPACK_IMPORTED_MODULE_1__.e)("slot",{name:"label"})),Object(_index_7c554ec1_js__WEBPACK_IMPORTED_MODULE_1__.e)("div",{class:"iconCollapse"},Object(_index_7c554ec1_js__WEBPACK_IMPORTED_MODULE_1__.e)("slot",{name:"icon-collapse"})),Object(_index_7c554ec1_js__WEBPACK_IMPORTED_MODULE_1__.e)("div",{class:"iconExpand"},Object(_index_7c554ec1_js__WEBPACK_IMPORTED_MODULE_1__.e)("slot",{name:"icon-expand"}))),Object(_index_7c554ec1_js__WEBPACK_IMPORTED_MODULE_1__.e)("div",{id:this.contentId,"aria-labelledby":this.titleId,role:"region",class:{content:!0,contentFloats:this.contentFloats}},Object(_index_7c554ec1_js__WEBPACK_IMPORTED_MODULE_1__.e)("slot",{name:"content"}))))}}]),GdsAccordion}();GdsAccordion.style=".accordion{color:var(--gds-accordion-color, inherit);background:var(--gds-accordion-background, var(--gds-color-white));border:var(--gds-accordion-border);border-radius:var(--gds-accordion-border-radius);box-shadow:var(--gds-accordion-box-shadow);position:relative;display:flex;flex-direction:column}.accordion .content{box-sizing:border-box;display:none;background:var(--gds-accordion-content-background, var(--gds-color-white));padding:var(--gds-accordion-padding, var(--gds-spacing-s));border-bottom-right-radius:var(--gds-accordion-border-radius);border-bottom-left-radius:var(--gds-accordion-border-radius)}.accordion .contentFloats{position:absolute;width:100%;top:100%;z-index:10;box-shadow:var(--gds-accordion-box-shadow)}.accordion .header{all:unset;flex:1 1 auto;outline:none;position:relative;display:flex;justify-content:var(--gds-accordion-justify-content, space-between);align-items:center;cursor:pointer;padding:var(--gds-accordion-header-padding, var(--gds-accordion-padding));outline:none;border-top-right-radius:var(--gds-accordion-border-radius);border-top-left-radius:var(--gds-accordion-border-radius)}.accordion .header:focus{outline:var(--gds-accordion-outline-focus);z-index:1}.accordion .header:focus:not(:focus-visible){outline:none}.accordion .heading{margin-right:var(--gds-accordion-heading-margin-left, var(--gds-spacing-2xs))}.accordion .iconCollapse{display:none}.accordion .iconExpand{display:block;flex-shrink:0}.accordion.expanded .iconCollapse{display:block}.accordion.expanded .iconExpand{display:none}.accordion.expanded .header{background:var(--gds-accordion-expanded-header-background, var(--gds-color-white))}.accordion.expanded .content{display:block}@media (min-width: 1024px){.accordion.openOnHover:hover .iconCollapse{display:block}.accordion.openOnHover:hover .iconExpand{display:none}.accordion.openOnHover:hover .header{background:var(--gds-accordion-expanded-header-background, var(--gds-color-white))}.accordion.openOnHover:hover .content{display:block}}"}}]);