/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Keybinder = function () {
	  function Keybinder(selector) {
	    var _this = this;
	
	    var keys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
	    var callback = arguments[2];
	
	    _classCallCheck(this, Keybinder);
	
	    if (typeof selector !== 'string' || selector === 'undefined' || selector.length < 1) {
	      return "selector error";
	    }
	
	    // check if the callback is valid
	    if (typeof callback !== 'function' || callback === 'undefined') {
	      return "Callback error";
	    }
	
	    this.document = document;
	
	    // if everything works out with the selector, continue
	    this.tag = this.document.querySelector(selector);
	
	    // specify callback
	    this.callback = callback.bind(this.tag);
	    this.log = {};
	    this.keys = {};
	
	    var x = this.keys;
	
	    // create keys object
	    keys.map(function (v) {
	      x[v.toLowerCase()] = 1;
	      return;
	    });
	
	    // add event listener to element
	    if (this.document.addEventListener) {
	      this.tag.addEventListener("keydown", this.cbHandler.bind(this));
	      this.tag.addEventListener("keyup", this.rmkey.bind(this));
	
	      // add event listener for when out of focus
	      this.tag.addEventListener("blur", function () {
	        _this.log = {};
	      });
	    }
	  }
	
	  // callback handler function
	
	
	  _createClass(Keybinder, [{
	    key: 'cbHandler',
	    value: function cbHandler(e) {
	      var key = e.key.toLowerCase();
	
	      this.log[key] = 1;
	
	      if (JSON.stringify(this.log) == JSON.stringify(this.keys)) {
	        e.preventDefault();
	        this.callback();
	      }
	    }
	  }, {
	    key: 'rmkey',
	    value: function rmkey(e) {
	      var key = e.key;
	      delete this.log[key.toLowerCase()];
	    }
	  }]);
	
	  return Keybinder;
	}();
	
	function keybinder() {
	  return new Keybinder(arguments[0], arguments[1], arguments[2]);
	}
	
	window.keybinder = keybinder;
	
	exports.default = keybinder;

/***/ }
/******/ ]);
//# sourceMappingURL=keybinder.js.map