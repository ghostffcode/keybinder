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
    this.log = {};
    this.delay = delay;
    this.keys = {};

    let x = this.keys;

    // create keys object
    keys.map(function (v) {
      x[v.toLowerCase()] = 1;
      return;
    });

    // add event listener to element
    if (document.addEventListener) {
      tag.addEventListener("keydown", this.cbHandler.bind(this));
      tag.addEventListener("keyup", this.rmkey.bind(this));
    } else if (document.attachEvent) {
      tag.attachEvent("onkeydown", this.cbHandler.bind(this));
      tag.attachEvent("onkeyup", this.rmkey.bind(this));
    }
  }

  // callback handler function
  cbHandler (e) {
    let key = e.key;

    this.log[key.toLowerCase()] = 1;

    if (JSON.stringify(this.log) == JSON.stringify(this.keys)) {
      e.preventDefault();
      this.callback();
    }
  }

  rmkey(e) {
    let key = e.key;
    delete this.log[key.toLowerCase()];
  }

}


window.keybinder = function () {
  return new kb(arguments[0], arguments[1], arguments[2], arguments[3]);
}
