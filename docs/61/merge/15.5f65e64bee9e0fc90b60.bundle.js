(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{1619:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"gds_media_card",(function(){return GdsMediaCard}));__webpack_require__(76),__webpack_require__(131),__webpack_require__(25),__webpack_require__(2),__webpack_require__(13),__webpack_require__(18);var _index_7c554ec1_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(245);function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var isNumeric=function isNumeric(x){return!isNaN(x)&&isFinite(x)},GdsMediaCard=function(){function GdsMediaCard(hostRef){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,GdsMediaCard),Object(_index_7c554ec1_js__WEBPACK_IMPORTED_MODULE_6__.g)(this,hostRef),this.imageAlt=""}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(GdsMediaCard,[{key:"validateOverlayEffect",value:function validateOverlayEffect(newValue){if(newValue&&!["blur"].includes(newValue))throw new Error("overlay-effect: invalid effect")}},{key:"componentWillLoad",value:function componentWillLoad(){this.headlineSlot=this.host.querySelector(':scope > [slot="headline"]'),this.accessibleLabel||(this.accessibleLabel=this.headline||this.headlineSlot.textContent.trim())}},{key:"render",value:function render(){var obj,key,value,objectFitX=isNumeric(this.superimposedLeft)&&isNumeric(this.superimposedRight)?"center":isNumeric(this.superimposedLeft)?"left":isNumeric(this.superimposedRight)?"right":"center",objectFitY=isNumeric(this.superimposedTop)&&isNumeric(this.superimposedBottom)?"center":isNumeric(this.superimposedTop)?"top":isNumeric(this.superimposedBottom)?"bottom":"center",superimposed=this.superimposedUrl&&Object(_index_7c554ec1_js__WEBPACK_IMPORTED_MODULE_6__.e)("div",{class:"superimposed"},Object(_index_7c554ec1_js__WEBPACK_IMPORTED_MODULE_6__.e)("div",{class:"superimposed-image"},Object(_index_7c554ec1_js__WEBPACK_IMPORTED_MODULE_6__.e)("img",{src:this.superimposedUrl,alt:this.imageAlt,"aria-hidden":"true",style:{"object-position":"".concat(objectFitY," ").concat(objectFitX)}}))),card=Object(_index_7c554ec1_js__WEBPACK_IMPORTED_MODULE_6__.e)("gds-card",null,superimposed,Object(_index_7c554ec1_js__WEBPACK_IMPORTED_MODULE_6__.e)("div",{class:{media:!0,"has-overlay":this.overlay}},Object(_index_7c554ec1_js__WEBPACK_IMPORTED_MODULE_6__.e)("img",{src:this.imageUrl,alt:this.superimposedUrl?"":this.imageAlt,"aria-hidden":"true",class:(obj={image:!0},key="has-".concat(this.overlayEffect,"-effect"),value=!!this.overlayEffect,key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj)})),Object(_index_7c554ec1_js__WEBPACK_IMPORTED_MODULE_6__.e)("div",{class:"content"},Object(_index_7c554ec1_js__WEBPACK_IMPORTED_MODULE_6__.e)("slot",{name:"headline"},this.headline&&Object(_index_7c554ec1_js__WEBPACK_IMPORTED_MODULE_6__.e)("gds-heading",{size:"s",class:"headline"},this.headline)),Object(_index_7c554ec1_js__WEBPACK_IMPORTED_MODULE_6__.e)("slot",{name:"description"},this.description&&Object(_index_7c554ec1_js__WEBPACK_IMPORTED_MODULE_6__.e)("gds-paragraph",{size:"l",class:"description"},this.description)),Object(_index_7c554ec1_js__WEBPACK_IMPORTED_MODULE_6__.e)("slot",{name:"tags"}),Object(_index_7c554ec1_js__WEBPACK_IMPORTED_MODULE_6__.e)("slot",{name:"content"})),this.href&&Object(_index_7c554ec1_js__WEBPACK_IMPORTED_MODULE_6__.e)("gds-link",{href:this.href,target:this.target,full:!0,"accessible-label":this.accessibleLabel}));return Object(_index_7c554ec1_js__WEBPACK_IMPORTED_MODULE_6__.e)("div",{class:"media-card",style:{"--superimposed-top":this.superimposedTop?"".concat(this.superimposedTop,"px"):"0px","--superimposed-bottom":this.superimposedBottom?"".concat(this.superimposedBottom,"px"):"0px","--superimposed-left":this.superimposedLeft?"".concat(this.superimposedLeft,"px"):"0px","--superimposed-right":this.superimposedRight?"".concat(this.superimposedRight,"px"):"0px"}},card)}},{key:"host",get:function get(){return Object(_index_7c554ec1_js__WEBPACK_IMPORTED_MODULE_6__.d)(this)}}],[{key:"watchers",get:function get(){return{overlayEffect:["validateOverlayEffect"]}}}]),GdsMediaCard}();GdsMediaCard.style=":host{display:block;height:var(--gds-media-card-height, auto)}.media-card{position:relative;display:var(--gds-media-card-display, inline-block);height:var(--gds-media-card-height, auto);width:var(--gds-media-card-width, auto);max-width:100%;margin-top:max(0px, var(--superimposed-top))}.media{position:relative;height:0;padding-bottom:var(--gds-media-card-media-height);margin:var(--gds-media-card-media-padding);overflow:hidden}.image{position:absolute;width:100%;height:100%;display:block;-o-object-fit:var(--gds-media-card-object-fit, cover);object-fit:var(--gds-media-card-object-fit, cover)}.image.has-blur-effect{filter:opacity(var(--gds-media-card-blur-opacity, 0.5)) blur(var(--gds-media-card-blur-radius));width:calc(100% + var(--gds-media-card-blur-radius) * 2);height:calc(100% + var(--gds-media-card-blur-radius) * 2);margin:calc(var(--gds-media-card-blur-radius) * -1)}.has-overlay{background-color:var(--gds-media-card-overlay-color)}.has-overlay>img{mix-blend-mode:multiply}.superimposed{width:100%;height:0;padding-bottom:var(--gds-media-card-media-height);margin:var(--gds-media-card-media-padding);position:absolute;z-index:1}.superimposed>.superimposed-image{position:absolute;top:calc(var(--superimposed-top, 0) * -1);bottom:calc(var(--superimposed-bottom, 0) * -1);left:calc(var(--superimposed-left, 0) * -1);right:calc(var(--superimposed-right, 0) * -1)}.superimposed>.superimposed-image>img{display:block;position:relative;height:100%;width:100%;-o-object-fit:contain;object-fit:contain}.headline,::slotted([slot=headline]){display:block;margin-top:0;margin-bottom:var(--gds-media-card-paragraph-gutter)}.description,::slotted([slot=description]){display:block;margin-top:var(--gds-media-card-paragraph-gutter);margin-bottom:0}::slotted([slot=tags]){display:block;position:relative;z-index:2;margin-top:var(--gds-spacing-s)}.content{--gds-paragraph-gutter:var(--gds-media-card-paragraph-gutter);margin-top:max(0px, var(--superimposed-bottom));padding:var(--gds-media-card-content-padding)}"}}]);
//# sourceMappingURL=15.5f65e64bee9e0fc90b60.bundle.js.map