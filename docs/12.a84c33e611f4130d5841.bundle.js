(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{1455:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"gds_media_card",(function(){return GdsMediaCard}));__webpack_require__(1),__webpack_require__(9),__webpack_require__(21),__webpack_require__(33),__webpack_require__(85),__webpack_require__(66),__webpack_require__(20);var _index_b353fd06_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(216);function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var GdsMediaCard=function(){function GdsMediaCard(hostRef){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,GdsMediaCard),Object(_index_b353fd06_js__WEBPACK_IMPORTED_MODULE_7__.e)(this,hostRef)}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(GdsMediaCard,[{key:"validateOverlayEffect",value:function validateOverlayEffect(newValue){if(newValue&&!["blur"].includes(newValue))throw new Error("overlay-effect: invalid effect")}},{key:"render",value:function render(){var card=Object(_index_b353fd06_js__WEBPACK_IMPORTED_MODULE_7__.d)("gds-card",null,Object(_index_b353fd06_js__WEBPACK_IMPORTED_MODULE_7__.d)("div",{class:{media:!0,"has-overlay":this.overlay},style:{marginBottom:this.superimposedBottom&&"".concat(this.superimposedBottom,"px")}},Object(_index_b353fd06_js__WEBPACK_IMPORTED_MODULE_7__.d)("img",{src:this.imageUrl,class:["image",this.overlayEffect?"has-".concat(this.overlayEffect,"-effect"):""].filter(Boolean).join(" ")})),Object(_index_b353fd06_js__WEBPACK_IMPORTED_MODULE_7__.d)("div",{class:"content"},Object(_index_b353fd06_js__WEBPACK_IMPORTED_MODULE_7__.d)("slot",{name:"headline"},this.headline&&Object(_index_b353fd06_js__WEBPACK_IMPORTED_MODULE_7__.d)("gds-heading",{size:"s",class:"headline"},this.headline)),Object(_index_b353fd06_js__WEBPACK_IMPORTED_MODULE_7__.d)("slot",{name:"description"},this.description&&Object(_index_b353fd06_js__WEBPACK_IMPORTED_MODULE_7__.d)("gds-paragraph",{size:"l",class:"description"},this.description)),Object(_index_b353fd06_js__WEBPACK_IMPORTED_MODULE_7__.d)("slot",{name:"tags"}),Object(_index_b353fd06_js__WEBPACK_IMPORTED_MODULE_7__.d)("slot",{name:"content"}))),isNumeric=function isNumeric(x){return!isNaN(x)&&isFinite(x)},objectFitX=isNumeric(this.superimposedLeft)&&isNumeric(this.superimposedRight)?"center":isNumeric(this.superimposedLeft)?"left":isNumeric(this.superimposedRight)?"right":"center",objectFitY=isNumeric(this.superimposedTop)&&isNumeric(this.superimposedBottom)?"center":isNumeric(this.superimposedTop)?"top":isNumeric(this.superimposedBottom)?"bottom":"center",superimposed=this.superimposedUrl&&Object(_index_b353fd06_js__WEBPACK_IMPORTED_MODULE_7__.d)("div",{class:"superimposed"},Object(_index_b353fd06_js__WEBPACK_IMPORTED_MODULE_7__.d)("div",{class:"superimposed-image",style:{top:this.superimposedTop&&"".concat(-1*this.superimposedTop,"px"),bottom:this.superimposedBottom&&"".concat(-1*this.superimposedBottom,"px"),left:this.superimposedLeft&&"".concat(-1*this.superimposedLeft,"px"),right:this.superimposedRight&&"".concat(-1*this.superimposedRight,"px")}},Object(_index_b353fd06_js__WEBPACK_IMPORTED_MODULE_7__.d)("img",{src:this.superimposedUrl,style:{"object-position":"".concat(objectFitY," ").concat(objectFitX)}}))),mediaCard=Object(_index_b353fd06_js__WEBPACK_IMPORTED_MODULE_7__.d)("div",{class:"media-card",style:{paddingTop:this.superimposedTop&&"".concat(this.superimposedTop,"px")}},superimposed,card);return this.href?Object(_index_b353fd06_js__WEBPACK_IMPORTED_MODULE_7__.d)("gds-link",{href:this.href,target:this.target},mediaCard):mediaCard}}],[{key:"watchers",get:function get(){return{overlayEffect:["validateOverlayEffect"]}}}]),GdsMediaCard}();GdsMediaCard.style=".media-card{position:relative;display:inline-block}.media{position:relative;width:100%;height:var(--media-card-media-height, 300px);overflow:hidden}.image{width:100%;height:var(--media-card-media-height);display:block;-o-object-fit:var(--media-card-object-fit, cover);object-fit:var(--media-card-object-fit, cover)}.image.has-blur-effect{-webkit-filter:opacity(var(--media-card-blur-opacity, 0.5)) blur(var(--media-card-blur-radius));filter:opacity(var(--media-card-blur-opacity, 0.5)) blur(var(--media-card-blur-radius));width:calc(100% + var(--media-card-blur-radius) * 2);height:calc(var(--media-card-media-height, 300px) + var(--media-card-blur-radius) * 2);margin:calc(var(--media-card-blur-radius) * -1)}.has-overlay{background-color:var(--media-card-overlay-color)}.has-overlay>img{mix-blend-mode:multiply}.superimposed{width:100%;height:var(--media-card-media-height);position:absolute;z-index:1}.superimposed>.superimposed-image{position:absolute;top:0;bottom:0;left:0;right:0}.superimposed>.superimposed-image>img{display:block;position:relative;height:100%;width:100%;-o-object-fit:contain;object-fit:contain}.headline,::slotted([slot=headline]){display:block;margin-top:0;margin-bottom:var(--media-card-paragraph-gutter)}.description,::slotted([slot=description]){display:block;margin-top:var(--media-card-paragraph-gutter);margin-bottom:0}::slotted([slot=tags]){display:block;margin-top:var(--spacing-s)}.content{--paragraph-gutter:var(--media-card-paragraph-gutter);padding:var(--media-card-content-padding)}"}}]);
//# sourceMappingURL=12.a84c33e611f4130d5841.bundle.js.map