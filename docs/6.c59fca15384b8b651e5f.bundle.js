(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{1456:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"gds_google_maps",(function(){return GdsGoogleMaps}));__webpack_require__(28),__webpack_require__(13),__webpack_require__(11),__webpack_require__(132),__webpack_require__(160);var _index_004159a5_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(217);function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var GdsGoogleMaps=function(){function GdsGoogleMaps(hostRef){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,GdsGoogleMaps),Object(_index_004159a5_js__WEBPACK_IMPORTED_MODULE_5__.g)(this,hostRef),this.ready=Object(_index_004159a5_js__WEBPACK_IMPORTED_MODULE_5__.c)(this,"ready",7),this.lat="60.169281",this.lng="24.941480",this.zoom=15,this.initialMarker=!1,this.markers=[]}var _addMarker,_componentDidLoad;return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(GdsGoogleMaps,[{key:"render",value:function render(){var _this=this;return Object(_index_004159a5_js__WEBPACK_IMPORTED_MODULE_5__.e)(_index_004159a5_js__WEBPACK_IMPORTED_MODULE_5__.a,null,Object(_index_004159a5_js__WEBPACK_IMPORTED_MODULE_5__.e)("div",{ref:function ref(el){return _this.container=el},class:"container"}))}},{key:"componentDidLoad",value:(_componentDidLoad=_asyncToGenerator(regeneratorRuntime.mark((function _callee(){return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:if(_context.prev=0,this.google){_context.next=6;break}return _context.next=4,this.loadGoogleMapsSdk();case 4:this.initMap(),this.ready.emit(this.google);case 6:_context.next=11;break;case 8:_context.prev=8,_context.t0=_context.catch(0),console.log(_context.t0);case 11:case"end":return _context.stop()}}),_callee,this,[[0,8]])}))),function componentDidLoad(){return _componentDidLoad.apply(this,arguments)})},{key:"loadGoogleMapsSdk",value:function loadGoogleMapsSdk(){var _this2=this;return new Promise((function(resolve){window.mapInit=function(){console.log("Google Maps SDK loaded."),resolve(!0)};var script=document.createElement("script");_this2.apiKey?script.src="https://maps.googleapis.com/maps/api/js?key="+_this2.apiKey+"&callback=mapInit":script.src="https://maps.googleapis.com/maps/api/js?callback=mapInit",document.body.appendChild(script)}))}},{key:"initMap",value:function initMap(){if(window.google){this.google=window.google;var mapOptions={center:new this.google.maps.LatLng(this.lat,this.lng),zoom:this.zoom};this.map=new this.google.maps.Map(this.container,mapOptions),this.initialMarker&&this.addMarker(this.lat,this.lng)}else console.error("Failed to initialize google map, sdk not available.")}},{key:"addMarker",value:(_addMarker=_asyncToGenerator(regeneratorRuntime.mark((function _callee2(lat,lng){var latLng,marker;return regeneratorRuntime.wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:latLng=new this.google.maps.LatLng(lat,lng),marker=new this.google.maps.Marker({map:this.map,animation:this.google.maps.Animation.DROP,position:latLng}),this.markers.push(marker);case 3:case"end":return _context2.stop()}}),_callee2,this)}))),function addMarker(_x,_x2){return _addMarker.apply(this,arguments)})}]),GdsGoogleMaps}();GdsGoogleMaps.style=":host{display:block;position:relative;width:100%;height:400px}.container{width:100%;height:100%}"}}]);
//# sourceMappingURL=6.c59fca15384b8b651e5f.bundle.js.map