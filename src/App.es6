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
      
      // add event listener for when out of focus
      tag.addEventListener("blur", ()=> {
        this.log = {};
      });
    }
  }

  // callback handler function
  cbHandler (e) {
    let key = e.key.toLowerCase();

    this.log[key] = 1;

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
