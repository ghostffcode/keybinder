"use strict";

class Keybinder {
  constructor (selector, keys = [], callback) {
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

    let x = this.keys;

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
      this.tag.addEventListener("blur", ()=> {
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

function keybinder () {
  return new Keybinder(arguments[0], arguments[1], arguments[2]);
}

window.keybinder = keybinder;

export default keybinder;
