/*!
 * core_ext - JavaScript extensions.
 * 
 * Veselin Todorov <hi@vesln.com>
 * MIT License.
 */

/**
 * Module dependencies.
 */
var lingo = require('lingo');
var en = lingo.en;

/**
 * Adds separator instead of spaces. Also converts
 * string to lower case and replaces upper chars with 
 * `sepoarator`-`char`.
 * 
 * Underscore.string
 * 
 * (c) 2010 Esa-Matti Suuronen <esa-matti aet suuronen dot org>
 * Underscore.strings is freely distributable under the terms of the MIT license.
 * 
 * @param {String} String to be formatted.
 * @param {String} Separator.
 * @returns {String}
 * @api private
 */
function toSep(str, separator) {
  return str.trim()
    .replace(/([a-z\d])([A-Z]+)/g, '$1' + separator + '$2')
    .replace(/\-|\s+/g, separator)
    .toLowerCase();
};
 
/**
 * Returns char at specified position.
 * 
 * @param {Number} Index.
 * @returns {String} Char.
 * @api public
 */
String.prototype.at = function(i) {
  return this[i];
};

/**
 * Returns the first char of a string.
 * 
 * @returns {String} Char.
 * @api public
 */
String.prototype.first = function() {
  return this[0];
};

/**
 * Returns the last char of a string.
 * 
 * @returns {String} Char.
 * @api public
 */
String.prototype.last = function() {
  return this[this.length - 1];
};

/**
 * Returns the last char of a string.
 * 
 * @param {Number} Index.
 * @returns {String} Char.
 * @api public
 */
String.prototype.from = function(i) {
  return this.substring(i, this.length);
};

/**
 * Returns the last char of a string.
 * 
 * @param {Number} Index.
 * @returns {String} Char.
 * @api public
 */
String.prototype.to = function(i) {
  return this.substring(0, this.length - i - 1);
};

/**
 * Converts string to number.
 * 
 * @returns {Number}
 * @api public
 */
String.prototype.toNumber = function() {
  return +this;
};

/**
 * Pluralizes a word.
 * 
 * @returns {String}
 * @api public
 */
String.prototype.pluralize = function() {
  return en.pluralize(this)
};

/**
 * Constantize a word.
 * 
 * @returns {String}
 * @api public
 */
String.prototype.constantize = function() {
  return this.toUpperCase();
};

/**
 * Camelizes a word.
 * 
 * @param {Boolean} Uppercase the first char flag.
 * @returns {String}
 * @api public
 */
String.prototype.camelize = function(first) {
  first === undefined && (first = true);
  return lingo.camelcase(this, first)
};

/**
 * Titleizes a string.
 * 
 * @returns {String}
 * @api public
 */
String.prototype.titleize = function() {
  return this.capitalize(true);
};

/**
 * Underscores a string.
 * 
 * @returns {String}
 * @api public
 */
String.prototype.underscore = function() {
  return toSep(this, '_');
};

/**
 * Dasherizes a string.
 * 
 * @returns {String}
 * @api public
 */
String.prototype.dasherize = function() {
  return toSep(this, '-');
};

/**
 * Tableize a word.
 * 
 * @returns {String}
 * @api public
 */
String.prototype.tableize = function() {
  return this.pluralize().underscore();
};

/**
 * Classifies a word.
 * 
 * @returns {String}
 * @api public
 */
String.prototype.classify = function() {
  return this.replace(/[_\-]/g, ' ').camelize();
};

/**
 * Capitalizes a word.
 * 
 * @param {Boolean} All words flag.
 * @returns {String}
 * @api public
 */
String.prototype.capitalize = function(all) {
  all === undefined && (all = false);
  return lingo.capitalize(this, all)
};

/**
 * Humanizes a word.
 * 
 * @returns {String}
 * @api public
 */
String.prototype.humanize = function() {
  return this.replace(/[_\-]/g, ' ').toLowerCase().capitalize(false);
};