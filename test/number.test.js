/*!
 * core_ext - JavaScript extensions.
 * 
 * Veselin Todorov <hi@vesln.com>
 * MIT License.
 */

/**
 * Support.
 */
var Mill = require('mill');

var number = require('../lib/number');

describe('Number', function() {
  it('should have all mill methods', function() {
    Object.keys(Mill.prototype).forEach(function(method) {
      (1)[method].should.be.ok;
    });
  });
  
  describe('.toInt()', function() {
    it('should convert number to integer', function() {
      (5.5).toInt().should.eql(5);
    });
  });
  
  describe('.abs()', function() {
    it('should return the abs value of a number', function() {
      (-1).abs().should.eql(1);
    });
  });
  
  describe('.round()', function() {
    it('should rounds a number to the nearest integer', function() {
      (2.6).round().should.eql(3);
    });
  });
  
  describe('.ceil()', function() {
    it('should rounds a number to the nearest integer', function() {
      (2.2).ceil().should.eql(3);
    });
  });
  
  describe('.floor()', function() {
    it('should rounds a number to the nearest integer', function() {
      (2.2).floor().should.eql(2);
    });
  });
});