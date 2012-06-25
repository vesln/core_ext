/*!
 * core_ext - JavaScript extensions.
 *
 * Veselin Todorov <hi@vesln.com>
 * MIT License.
 */

var should = require('chai').should();

var array = require('../lib/array');

describe('Array', function() {
  describe('.clear()', function() {
    it('should clear an array', function() {
      var arr = ['foo', 'bar'];
      arr.clear().should.eql([]);
    });
  });

  describe('.first()', function() {
    it('should return the first element of an array', function() {
      var arr = ['foo', 'bar'];
      arr.first().should.eql('foo');
    });
  });

  describe('.last()', function() {
    it('should return the first element of an array', function() {
      var arr = ['foo', 'bar'];
      arr.last().should.eql('bar');
    });
  });

  describe('.toSentence()', function() {
    it('should return sentence from array', function() {
      ['foo', 'bar', 'baz'].toSentence().should.eql('Foo, bar and baz.');
    });
  });
});
