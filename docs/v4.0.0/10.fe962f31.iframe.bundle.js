(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{1781:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"gds_button",(function(){return GdsButton})),__webpack_require__.d(__webpack_exports__,"gds_paragraph",(function(){return GdsParagraph}));__webpack_require__(30);var _index_7c554ec1_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(284);function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}var GdsButton=function(){function GdsButton(hostRef){_classCallCheck(this,GdsButton),Object(_index_7c554ec1_js__WEBPACK_IMPORTED_MODULE_1__.g)(this,hostRef),this.disabled=!1,this.size="m"}return _createClass(GdsButton,[{key:"onClickHandler",value:function onClickHandler(event){this.disabled&&(event.preventDefault(),event.stopPropagation(),event.stopImmediatePropagation())}},{key:"componentWillRender",value:function componentWillRender(){this.hasLeftIconSlot=!!this.hostElement.querySelector('[slot="left-icon"]'),this.hasRightIconSlot=!!this.hostElement.querySelector('[slot="right-icon"]')}},{key:"render",value:function render(){var iconStyleVariables={};return this.leftIconRotate&&(iconStyleVariables["--left-icon-rotate"]="rotate(".concat(this.leftIconRotate,"deg)")),this.rightIconRotate&&(iconStyleVariables["--right-icon-rotate"]="rotate(".concat(this.rightIconRotate,"deg)")),Object(_index_7c554ec1_js__WEBPACK_IMPORTED_MODULE_1__.e)(_index_7c554ec1_js__WEBPACK_IMPORTED_MODULE_1__.a,null,Object(_index_7c554ec1_js__WEBPACK_IMPORTED_MODULE_1__.e)("button",{class:"button size-".concat(this.size),disabled:this.disabled,style:iconStyleVariables,onClick:this.onClickHandler},(this.hasLeftIconSlot||this.leftIcon)&&Object(_index_7c554ec1_js__WEBPACK_IMPORTED_MODULE_1__.e)("slot",{name:"left-icon"},this.leftIcon&&Object(_index_7c554ec1_js__WEBPACK_IMPORTED_MODULE_1__.e)("span",null,this.leftIcon)),Object(_index_7c554ec1_js__WEBPACK_IMPORTED_MODULE_1__.e)("span",null,Object(_index_7c554ec1_js__WEBPACK_IMPORTED_MODULE_1__.e)("slot",null)),(this.hasRightIconSlot||this.rightIcon)&&Object(_index_7c554ec1_js__WEBPACK_IMPORTED_MODULE_1__.e)("slot",{name:"right-icon"},this.rightIcon&&Object(_index_7c554ec1_js__WEBPACK_IMPORTED_MODULE_1__.e)("span",null,this.rightIcon))))}},{key:"hostElement",get:function get(){return Object(_index_7c554ec1_js__WEBPACK_IMPORTED_MODULE_1__.d)(this)}}]),GdsButton}();GdsButton.style=".button{position:relative;box-sizing:border-box;display:inline-flex;align-items:center;justify-content:space-between;text-align:center;outline:none;text-decoration:none;cursor:pointer;color:var(--gds-button-color, inherit);background-color:var(--gds-button-background-color, inherit);background-image:var(--gds-button-background-image);font-family:var(--gds-button-font-family);font-weight:var(--gds-button-font-weight);text-transform:var(--gds-button-text-transform);line-height:1em;font-size:var(--gds-button-m-font-size);letter-spacing:var(--gds-button-m-letter-spacing);border:var(--gds-button-border);border-radius:var(--gds-button-border-radius);box-shadow:var(--gds-button-box-shadow);padding:var(--gds-button-m-padding);outline:var(--gds-button-outline)}@media (prefers-reduced-motion: no-preference){.button{transition:var(--gds-button-transition)}}.button:hover{background-color:var(--gds-button-background-color-hover, var(--gds-button-background-color));color:var(--gds-button-color-hover);background-image:var(--gds-button-background-image-hover, var(--gds-button-background-image));outline:var(--gds-button-outline-hover, var(--gds-button-outline))}.button:active{background-color:var(--gds-button-background-color-active, var(--gds-button-background-color));background-image:var(--gds-button-background-image-active, var(--gds-button-background-image));outline:var(--gds-button-outline)}.button:disabled{background-color:var(--gds-button-background-color-disabled)}.button:focus{outline:var(--gds-button-outline-focus, var(--gds-button-outline))}.button:focus:not(:focus-visible){outline:none}.button>*+*{display:inline-block;margin-left:var(--gds-button-icon-gutter)}slot[name=left-icon]{display:inline-block;transform:var(--left-icon-rotate)}slot[name=right-icon]{display:inline-block;transform:var(--right-icon-rotate)}.size-s{font-size:var(--gds-button-s-font-size);letter-spacing:var(--gds-button-s-letter-spacing);padding:var(--gds-button-s-padding)}.size-m{font-size:var(--gds-button-m-font-size);letter-spacing:var(--gds-button-m-letter-spacing);padding:var(--gds-button-m-padding)}.size-l{font-size:var(--gds-button-l-font-size);letter-spacing:var(--gds-button-l-letter-spacing);padding:var(--gds-button-l-padding)}.inner-border{border:1px solid var(--gds-button-color, inherit);position:absolute}";var GdsParagraph=function(){function GdsParagraph(hostRef){_classCallCheck(this,GdsParagraph),Object(_index_7c554ec1_js__WEBPACK_IMPORTED_MODULE_1__.g)(this,hostRef),this.size="m"}return _createClass(GdsParagraph,[{key:"render",value:function render(){return Object(_index_7c554ec1_js__WEBPACK_IMPORTED_MODULE_1__.e)("p",{class:(obj={},key=this.class,value=!!this.class,key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj)},Object(_index_7c554ec1_js__WEBPACK_IMPORTED_MODULE_1__.e)("slot",null));var obj,key,value}}]),GdsParagraph}();GdsParagraph.style=":host{display:block;-webkit-margin-before:var(--gds-paragraph-gutter);margin-block-start:var(--gds-paragraph-gutter);-webkit-margin-after:var(--gds-paragraph-gutter);margin-block-end:var(--gds-paragraph-gutter);font-size:var(--gds-paragraph-m-font-size);line-height:var(--gds-paragraph-m-line-height);font-family:var(--gds-paragraph-m-font-family, var(--gds-body-font-family));font-weight:var(--gds-paragraph-m-font-weight, var(--gds-body-font-weight, 400));color:var(--gds-paragraph-m-color, var(--gds-body-text-color));letter-spacing:var(--gds-paragraph-m-letter-spacing, var(--gds-body-letter-spacing, 0px))}p{-webkit-margin-before:0;margin-block-start:0;-webkit-margin-after:0;margin-block-end:0}:host-context([size=l]){font-size:var(--gds-paragraph-l-font-size);line-height:var(--gds-paragraph-l-line-height);font-family:var(--gds-paragraph-l-font-family, var(--gds-body-font-family));font-weight:var(--gds-paragraph-l-font-weight, var(--gds-body-font-weight, 400));color:var(--gds-paragraph-l-color, var(--gds-body-text-color));letter-spacing:var(--gds-paragraph-l-letter-spacing, var(--gds-body-letter-spacing, 0px))}:host-context([size=s]){font-size:var(--gds-paragraph-s-font-size);line-height:var(--gds-paragraph-s-line-height);font-family:var(--gds-paragraph-s-font-family, var(--gds-body-font-family));font-weight:var(--gds-paragraph-s-font-weight, var(--gds-body-font-weight, 400));color:var(--gds-paragraph-s-color, var(--gds-body-text-color));letter-spacing:var(--gds-paragraph-s-letter-spacing, var(--gds-body-letter-spacing, 0px))}:host-context([size=xs]){font-size:var(--gds-paragraph-xs-font-size);line-height:var(--gds-paragraph-xs-line-height);font-family:var(--gds-paragraph-xs-font-family, var(--gds-body-font-family));font-weight:var(--gds-paragraph-xs-font-weight, var(--gds-body-font-weight, 400));color:var(--gds-paragraph-xs-color, var(--gds-body-text-color));letter-spacing:var(--gds-paragraph-xs-letter-spacing, var(--gds-body-letter-spacing, 0px))}"}}]);