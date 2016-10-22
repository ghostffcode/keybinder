import chai from "chai";

require('jsdom-global')();

import keybinder from '../src/App.es6';

chai.should();

document.body.innerHTML = `<input type="text" name="name" class="name" />`;

describe('#Keybinder', function() {

  const Keybinder = keybinder('.name', ['alt', 's'], function () {
    this.value = 'I am changed';
  });

  describe('#selector', function() {
    it('should be a string', function() {
      Keybinder.tag.should.be.an('object');
    });
  });

  describe('#keys', function() {
    it('should be an object', function() {
      Keybinder.keys.should.be.an('object');
    });
  });

  describe('#callback', function() {
    it('should be a function', function() {
      Keybinder.callback.should.be.a('function');
    });
  });

});
