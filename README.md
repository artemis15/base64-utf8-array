# base64-utf8-array

Base64 en- and decoding for Uint8Arrays.

Runs on node and browsers.

## Table of contents

<!-- !toc (minlevel=2 omit="Table of contents") -->

* [Api](#api)
  * [base64Decode](#base64decode)
  * [base64Encode](#base64encode)
  * [utf8ArrayToString](#utf8arraytostring)
  * [stringToUtf8Array](#stringtoutf8array)
* [Installation](#installation)
* [Tests](#tests)
* [License](#license)

<!-- toc! -->

## Api

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### base64Decode

decodes a base64 encoded string to an Uint8Array of UTF8 chars/values

#### Parameters

- `sBase64` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**

#### Examples

```javascript
const { base64Decode, utf8ArrayToString } = require('base64-utf8-array')
const aUtf8 = base64Decode('YWJj')
const str = utf8ArrayToString(aUtf8)
//> str = 'abc'
```

Returns **[Uint8Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)**

### base64Encode

encodes a Uint8Array of UTF8 chars/values to a base64 encoded string

#### Parameters

- `arrUint8` **[Uint8Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)**

#### Examples

```javascript
const { stringToUtf8Array, base64Encode } = require('base64-utf8-array')
const aUtf8 = stringToUtf8Array('abc')
const sbase64 = base64Encode(aUtf8)
//> sbase64 = 'YWJj'
```

Returns **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**

### utf8ArrayToString

converts a Uint8Array of UTF8 chars/values to a UTF16 string

#### Parameters

- `aUtf8`  
- `Uint8Array`  

Returns **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** UTF16 string

### stringToUtf8Array

converts a UTF16 string to a Uint8Array of UTF8 chars/values

#### Parameters

- `str` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** UTF16 string

Returns **[Uint8Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)**

## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install --save base64-utf8-array
```

## Tests

```sh
$ npm test
```

## License

MIT licensed
