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
	    var keys = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];
	    var callback = arguments[2];
	    var delay = arguments.length <= 3 || arguments[3] === undefined ? 2000 : arguments[3];

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
	    this.keys = keys;
	    this.log = [];
	    this.delay = delay;

	    // set the counter
	    this.counter = 0;

	    this.startCounter();

	    // add event listener to element
	    if (document.addEventListener) {
	      tag.addEventListener("keydown", this.cbHandler.bind(this));
	    } else if (document.attachEvent) {
	      tag.attachEvent("onkeydown", this.cbHandler.bind(this));
	    }
	  }

	  // callback handler function


	  _createClass(kb, [{
	    key: 'cbHandler',
	    value: function cbHandler(e) {
	      var key = e.key;
	      var logLength = this.log.length;
	      var keyLength = this.keys.length - 1;

	      if (logLength > keyLength || this.counter > 0) {
	        this.log = [];
	        this.counter = 0;
	      }

	      this.log.push(key.toLowerCase());

	      // if (this.log[0] === this.keys[0] && this.log[1] === this.keys[1]) {
	      if (JSON.stringify(this.log) == JSON.stringify(this.keys)) {
	        e.preventDefault();
	        this.callback();
	        this.counter = 0;
	        this.log = [];
	      }
	    }

	    //counter

	  }, {
	    key: 'startCounter',
	    value: function startCounter() {
	      var _this = this;

	      setInterval(function () {
	        _this.counter += 1;
	      }, this.delay);
	    }
	  }]);

	  return kb;
	}();

	window.keybinder = function () {
	  return new kb(arguments[0], arguments[1], arguments[2], arguments[3]);
	};

/***/ }
/******/ ]);