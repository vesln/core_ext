/*!
 * core_ext - JavaScript extensions.
 * 
 * Veselin Todorov <hi@vesln.com>
 * MIT License.
 */

var object = require('../lib/object');

describe('Object', function() {
  describe('.clone()', function() {
    it('should clone an object', function() {
      var obj = { foo: 3 };
      var obj2 = obj.clone();
      obj2.foo = 4;
      obj2.foo.should.not.equal(obj.foo);
    });
  });
  
  describe('.extend()', function() {
    it('should merge two objects.', function() {
      var obj = { foo: 3 };
      obj.extend({ bar: 3 });
      obj.bar.should.eql(3);
    });
  });
  
  describe('.blank()', function() {
    it('should check if object is blank', function() {
      ({}).blank().should.be.true;
      ({foo: 'bar'}).blank().should.be.false;
    });
  });
  
  describe('.eventilize()', function() {
    it('should add event emitter abillities to an object', function() {
      var obj = { foo: 3 };
      obj.eventilize();
      obj.on.should.be.ok;
    });
  });
});