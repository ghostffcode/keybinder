"use strict";

class kb {
  constructor (selector, keys = [], callback, delay = 2000) {
    if (typeof selector !== 'string' || selector === 'undefined' || selector.length < 1) {
      return "selector error";
    }

    // check if the callback is valid
    if (typeof callback !== 'function' || callback === 'undefined') {
      return "Callback error";
    }

    // if everything works out with the selector, continue
    let tag = document.querySelector(selector);

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
  cbHandler (e) {
    let key = e.key;
    let logLength = this.log.length;
    let keyLength = this.keys.length - 1;

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
  startCounter () {
    setInterval(()=> {
      this.counter += 1;
    }, this.delay);
  }
}


window.keybinder = function () {
  return new kb(arguments[0], arguments[1], arguments[2], arguments[3]);
}
