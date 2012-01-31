/*!
 * core_ext - JavaScript extensions.
 * 
 * Veselin Todorov <hi@vesln.com>
 * MIT License.
 */
 
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