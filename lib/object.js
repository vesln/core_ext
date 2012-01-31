/*!
 * core_ext - JavaScript extensions.
 * 
 * Veselin Todorov <hi@vesln.com>
 * MIT License.
 */

/**
 * Module dependencies.
 */
var events = require('events');

/**
 * Returns an object clone.
 * 
 * @returns {Object}
 * @api public
 */
Object.prototype.clone = function() {
  if (Array.isArray(this)) return this.slice();
  var obj = {};
  for (var prop in obj) obj[prop] = this[prop];
  return obj;
};

/**
 * Extends an object.
 * 
 * @param {Object} Other object.
 * @returns {Object}
 * @api public
 */
Object.prototype.extend = function(obj) {
  obj || (obj = {});
  for (var prop in obj) this[prop] = obj[prop];
  return this;
};

/**
 * Checks if object is blank.
 * 
 * @returns {Boolean}
 * @api public
 */
Object.prototype.blank = function() {
  return !Object.keys(this).length;
};

/**
 * Merges an object with event emitter instance.
 * 
 * @returns {Object}
 * @api public
 */
Object.prototype.eventilize = function() {
  return this.extend(new events.EventEmitter);
};