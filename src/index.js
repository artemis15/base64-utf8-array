const { atob, btoa } = (function () {
  const isNode = typeof window === 'undefined' && typeof Buffer === 'function'

  const atob = isNode
    ? (sBase64) => Buffer.from(sBase64, 'base64').toString('binary')
    : window.atob
  const btoa = isNode
    ? (sBinary) => Buffer.from(sBinary, 'binary').toString('base64')
    : window.btoa

  return { atob, btoa }
})()

/**
 * converts a string to an Uint8Array
 * @private
 */
function stringToUint8Array (str) {
  const array = new Uint8Array(str.length)
  Array.prototype.forEach.call(array, (el, idx, arr) => {
    arr[idx] = str.charCodeAt(idx)
  })
  return array
}

/**
 * decodes a base64 encoded string to an Uint8Array of UTF8 chars/values
 * @param {string} sBase64
 * @returns {Uint8Array}
 * @example
 * const { base64Decode, utf8ArrayToString } = require('base64-utf8-array')
 * const aUtf8 = base64Decode('YWJj')
 * const str = utf8ArrayToString(aUtf8)
 * //> str = 'abc'
 */
function base64Decode (sBase64) {
  const sBinary = atob(sBase64)
  const arrUint8 = stringToUint8Array(sBinary)
  return arrUint8
}

/**
 * encodes a Uint8Array of UTF8 chars/values to a base64 encoded string
 * @param {Uint8Array} arrUint8
 * @returns {string}
 * @example
 * const { stringToUtf8Array, base64Encode } = require('base64-utf8-array')
 * const aUtf8 = stringToUtf8Array('abc')
 * const sbase64 = base64Encode(aUtf8)
 * //> sbase64 = 'YWJj'
 */
function base64Encode (arrUint8) {
  return btoa(String.fromCharCode.apply(null, arrUint8))
}

/**
 * converts a Uint8Array of UTF8 chars/values to a UTF16 string
 * @param {Uint8Array}
 * @returns {string} UTF16 string
 */
function utf8ArrayToString (aUtf8) {
  const sUtf8 = String.fromCharCode.apply(null, aUtf8)
  return decodeURIComponent(escape(sUtf8))
}

/**
 * converts a UTF16 string to a Uint8Array of UTF8 chars/values
 * @param {string} str UTF16 string
 * @returns {Uint8Array}
 */
function stringToUtf8Array (str) {
  const sUtf8 = unescape(encodeURIComponent(str))
  return stringToUint8Array(sUtf8)
}

module.exports = {
  base64Decode,
  base64Encode,
  utf8ArrayToString,
  stringToUtf8Array
}
