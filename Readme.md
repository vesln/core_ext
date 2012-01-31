[![Build Status](https://secure.travis-ci.org/vesln/core_ext.png)](http://travis-ci.org/vesln/core_ext)

# JavaScript prototype extensions.

## Description

core_ext is fun little project that adds additional functionality to your JS core objects.

# Notice

Extending JavaScript natives is not great. Do it only if you are pretty sure about it.
This is experimental project and it's created just for fun. You should use it only for fun too.

## Synopsis

```js
Array
    .clear()
      ✓ should clear an array  
    .first()
      ✓ should return the first element of an array  
    .last()
      ✓ should return the first element of an array  
    .toSentence()
      ✓ should return sentence from array  

  Number
    ✓ should have all mill methods  
    .toInt()
      ✓ should convert number to integer  
    .abs()
      ✓ should return the abs value of a number  
    .round()
      ✓ should rounds a number to the nearest integer  
    .ceil()
      ✓ should rounds a number to the nearest integer  
    .floor()
      ✓ should rounds a number to the nearest integer  
    .times()
      ✓ should be sane  
    .random()
      ✓ should return random number within a range  

  Object
    .clone()
      ✓ should clone an object  
    .extend()
      ✓ should merge two objects.  
    .blank()
      ✓ should check if object is blank  
    .eventilize()
      ✓ should add event emitter abillities to an object  

  String
    .at()
      ✓ should have .at method that returns char from specified position  
    .first()
      ✓ should return the first char of a string  
    .last()
      ✓ should return the first char of a string  
    .from()
      ✓ should return the part of a string from supplied index  
    .to()
      ✓ should return the part of a string to supplied index  
    .toNumber()
      ✓ converts string to Number  
    .pluralize()
      ✓ should pluralize a word  
    .constantize()
      ✓ should constantize a word  
    .camelize()
      ✓ should constantize a word  
    .titleize()
      ✓ should titleize a word  
    .underscore()
      ✓ should underscore a word  
    .dasherize()
      ✓ should dasherize a word  
    .tableize()
      ✓ should tableize a word  
    .classify()
      ✓ should classify a word  
    .humanize()
      ✓ should humanize a word  
    .repeat()
      ✓ should repeat string n times  
    .in()
      ✓ should check if number is within a given range
```

## Requirements

- NPM (http://npmjs.org/)
- Node.js 0.6 (http://nodejs.org/)

## Install

```
$ npm install core_ext
```

## Tests

```
$ npm install
$ make test
```

## License

MIT License

Copyright (C) 2012 Veselin Todorov

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.