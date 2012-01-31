/*!
 * core_ext - JavaScript extensions.
 * 
 * Veselin Todorov <hi@vesln.com>
 * MIT License.
 */

/**
 * Module dependencies.
 */
var mill = require('mill');
var times = require('times');

/**
 * Converts number to integer.
 * 
 * @returns {Number}
 * @api public
 */
Number.prototype.toInt = function() {
  return parseInt(this);
};

/**
 * Returns the absolute value of a specified number.
 * 
 * @returns {Number}
 * @api public
 */
Number.prototype.abs = function() {
  return Math.abs(this);
};

/**
 * Rounds a number to the nearest integer.
 * 
 * @returns {Number}
 * @api public
 */
Number.prototype.round = function() {
  return Math.round(this);
};

/**
 * Rounds a number UPWARDS to the nearest integer.
 * 
 * @returns {Number}
 * @api public
 */
Number.prototype.ceil = function() {
  return Math.ceil(this);
};

/**
 * Rounds a number DOWNWARDS to the nearest integer.
 * 
 * @returns {Number}
 * @api public
 */
Number.prototype.floor = function() {
  return Math.floor(this);
};

/**
 * Checks if number is within a range.
 * 
 * @param {Number} Min.
 * @param {Number} Max.
 * @returns {Boolean}
 * @api public
 */
Number.prototype.in = function(min, max) {
  return (this >= min && this <= max);
};

/**
 * Returns random number within supplied range.
 * 
 * @param {Number} From.
 * @param {Number} To.
 * @returns {Number}
 * @api public
 */
Number.random = function(from, to) {
  return Math.floor(Math.random() * (to - from + 1)) + from;
};