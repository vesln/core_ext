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
});