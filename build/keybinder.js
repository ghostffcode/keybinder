/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var kb = function () {
	  function kb(selector) {
	    var keys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

	    var _this = this;

	    var callback = arguments[2];
	    var delay = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 2000;

	    _classCallCheck(this, kb);

	    if (typeof selector !== 'string' || selector === 'undefined' || selector.length < 1) {
	      return "selector error";
	    }

	    // check if the callback is valid
	    if (typeof callback !== 'function' || callback === 'undefined') {
	      return "Callback error";
	    }

	    // if everything works out with the selector, continue
	    var tag = document.querySelector(selector);

	    // specify callback
	    this.callback = callback.bind(tag);
	    this.log = {};
	    this.delay = delay;
	    this.keys = {};

	    var x = this.keys;

	    // create keys object
	    keys.map(function (v) {
	      x[v.toLowerCase()] = 1;
	      return;
	    });

	    // add event listener to element
	    if (document.addEventListener) {
	      tag.addEventListener("keydown", this.cbHandler.bind(this));
	      tag.addEventListener("keyup", this.rmkey.bind(this));

	      // add event listener for when out of focus
	      tag.addEventListener("blur", function () {
	        _this.log = {};
	      });
	    }
	  }

	  // callback handler function


	  _createClass(kb, [{
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

	  return kb;
	}();

	window.keybinder = function () {
	  return new kb(arguments[0], arguments[1], arguments[2], arguments[3]);
	};

/***/ }
/******/ ]);