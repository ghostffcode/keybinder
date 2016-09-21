"use strict";

class kb {
  constructor (selector, keys = [], callback) {
    if (typeof selector !== 'string' || selector === 'undefined' || selector.length < 1) {
      return "selector error";
    }

    // check if the callback is valid
    if (typeof callback !== 'function' || callback === 'undefined') {
      return "Callback error";
    }

    // specify callback
    this.callback = callback;

    // if everything works out with the selector, continue
    let tag = document.querySelector(selector);

    // add event listener to element
    if (document.addEventListener) {
      tag.addEventListener("keyup", this.cbHandler.bind(this));
    } else if (document.attachEvent) {
      tag.attachEvent("onkeyup", this.cbHandler.bind(this));
    }
  }

  // callback handler function
  cbHandler (e) {
    e.preventDefault();
    this.callback();
  }
}


window.keybinder = function () {
  return new kb(arguments[0], arguments[1], arguments[2]);
}
