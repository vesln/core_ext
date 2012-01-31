/*!
 * core_ext - JavaScript extensions.
 * 
 * Veselin Todorov <hi@vesln.com>
 * MIT License.
 */

/**
 * Lots of code stolen from prototype.js.
 * 
 * https://github.com/sstephenson/prototype/
 * Copyright (c) 2005-2010 Sam Stephenson
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/**
 * Clears an array.
 * 
 * @returns {Array}
 * @api public
 */
Array.prototype.clear = function() {
  this.length = 0;
  return this;
};

/**
 * Returns the first element of an array.
 * 
 * @returns {Mixed}
 * @api public
 */
Array.prototype.first = function() {
  return this[0];
};

/**
 * Returns the last element of an array.
 * 
 * @returns {Mixed}
 * @api public
 */
Array.prototype.last = function() {
  return this[this.length - 1];
};