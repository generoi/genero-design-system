(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{1469:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"gds_slider",(function(){return GdsSlider}));__webpack_require__(11);var _index_3f64d46d_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(217);function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var GdsSlider=function(){function GdsSlider(hostRef){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,GdsSlider),Object(_index_3f64d46d_js__WEBPACK_IMPORTED_MODULE_1__.g)(this,hostRef),this.valueChanged=Object(_index_3f64d46d_js__WEBPACK_IMPORTED_MODULE_1__.c)(this,"value-changed",7)}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(GdsSlider,[{key:"valueChangedHandler",value:function valueChangedHandler(event){this.valueChanged.emit(event.target.value)}},{key:"render",value:function render(){var _this=this;return Object(_index_3f64d46d_js__WEBPACK_IMPORTED_MODULE_1__.e)(_index_3f64d46d_js__WEBPACK_IMPORTED_MODULE_1__.a,null,Object(_index_3f64d46d_js__WEBPACK_IMPORTED_MODULE_1__.e)("input",{type:"range",min:this.min,max:this.max,value:this.value,class:"slider",onChange:function onChange(event){return _this.valueChangedHandler(event)}}))}}]),GdsSlider}();GdsSlider.style=":host{width:100%}.slider{-webkit-appearance:none;appearance:none;outline:none;width:100%;height:var(--gds-slider-height, 5px);border-radius:var(--gds-slider-border-radius, 0);background-color:var(--gds-slider-background-color, #d4d4d4)}.slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:var(--gds-slider-thumb-size, 25px);height:var(--gds-slider-thumb-size, 25px);background:var(--gds-slider-thumb-background, white);box-shadow:var(--gds-slider-thumb-box-shadow, 0px 0px 8px #0000001f);border:var(--gds-slider-thumb-box-shadow, 1px solid #ccc);border-radius:50%}.slider::-moz-range-thumb{-webkit-appearance:none;appearance:none;width:var(--gds-slider-thumb-size, 25px);height:var(--gds-slider-thumb-size, 25px);background:var(--gds-slider-thumb-background, white);box-shadow:var(--gds-slider-thumb-box-shadow, 0px 0px 8px #0000001f);border:var(--gds-slider-thumb-box-shadow, 1px solid #ccc);border-radius:50%}"}}]);
//# sourceMappingURL=18.5dddc2c6443cf7677595.bundle.js.map