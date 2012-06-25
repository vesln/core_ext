/*!
 * core_ext - JavaScript extensions.
 *
 * Veselin Todorov <hi@vesln.com>
 * MIT License.
 */

var string = require('../lib/string');
var should = require('chai').should();

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

  describe('.toNumber()', function() {
    it('converts string to Number', function() {
      '2'.toNumber().should.eql(2);
    });
  });

  describe('.pluralize()', function() {
    it('should pluralize a word', function() {
      'cat'.pluralize().should.eql('cats');
    });
  });

  describe('.constantize()', function() {
    it('should constantize a word', function() {
      'foo'.constantize().should.eql('FOO');
    });
  });

  describe('.camelize()', function() {
    it('should constantize a word', function() {
      'foo bar'.camelize().should.eql('FooBar');
      'foo bar'.camelize(false).should.eql('fooBar');
    });
  });

  describe('.titleize()', function() {
    it('should titleize a word', function() {
      'foo bar'.titleize().should.eql('Foo Bar');
    });
  });

  describe('.underscore()', function() {
    it('should underscore a word', function() {
      'FooBar'.underscore().should.eql('foo_bar');
    });
  });

  describe('.dasherize()', function() {
    it('should dasherize a word', function() {
      'FooBar'.dasherize().should.eql('foo-bar');
    });
  });

  describe('.tableize()', function() {
    it('should tableize a word', function() {
      'FooBar'.tableize().should.eql('foo_bars');
    });
  });

  describe('.classify()', function() {
    it('should classify a word', function() {
      'foo_bar'.classify().should.eql('FooBar');
      'foo-bar'.classify().should.eql('FooBar');
      'foo bar'.classify().should.eql('FooBar');
    });
  });

  describe('.humanize()', function() {
    it('should humanize a word', function() {
      'foo_bar'.humanize().should.eql('Foo bar');
      'foo-Bar'.humanize().should.eql('Foo bar');
      'foo Bar'.humanize().should.eql('Foo bar');
      'foo bar'.humanize().should.eql('Foo bar');
    });
  });

  describe('.repeat()', function() {
    it('should repeat string n times', function() {
      'foo'.repeat(2).should.eql('foofoo');
    });
  });

  describe('.in()', function() {
    it('should check if number is within a given range', function() {
      (5).in(3, 6).should.be.true;
      (5).in(8, 9).should.be.false;
    });
  });
});
