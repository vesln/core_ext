/*!
 * core_ext - JavaScript extensions.
 * 
 * Veselin Todorov <hi@vesln.com>
 * MIT License.
 */

var string = require('../lib/string');

describe('String', function() {
  describe('.at()', function() {
    it('should have .at method that returns char from specified position', function() {
      'foo'.at(1).should.eql('o')
    });
  });
  
  describe('.first()', function() {
    it('should return the first char of a string', function() {
      'foo'.first().should.eql('f')
    });
  });
  
  describe('.last()', function() {
    it('should return the first char of a string', function() {
      'foof'.last().should.eql('f');
    });
  });
  
  describe('.from()', function() {
    it('should return the part of a string from supplied index', function() {
      'foof'.from(1).should.eql('oof');
    });
  });
  
  describe('.to()', function() {
    it('should return the part of a string to supplied index', function() {
      'foof'.to(1).should.eql('fo');
    });
  });
});