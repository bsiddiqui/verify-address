# verify-address
[![Build Status](https://travis-ci.org/bsiddiqui/verify-address.svg?branch=master)](https://travis-ci.org/bsiddiqui/verify-address) [![Code Climate](https://codeclimate.com/github/bsiddiqui/verify-address/badges/gpa.svg)](https://codeclimate.com/github/bsiddiqui/verify-address) [![Test Coverage](https://codeclimate.com/github/bsiddiqui/verify-address/badges/coverage.svg)](https://codeclimate.com/github/bsiddiqui/verify-address) [![Version](https://badge.fury.io/js/verify-address.svg)](http://badge.fury.io/js/verify-address) [![Downloads](http://img.shields.io/npm/dm/verify-address.svg)](https://www.npmjs.com/package/verify-address)

Super lightweight address verification courtesy of [Lob](https://lob.com).

## Install
```
$ npm install --save verify-address
```

## Usage
```js
var verify = require('address-verify')

verify({
  address_line1: '255 King St',
  address_line2: '414',
  address_city: 'San Francisco',
  address_state: 'CA',
  address_zip: '94107',
  address_country: 'US'
}, console.log)
// => { valid: true, address: {...}}
```

## API

#### `verify(address, callback)` -> `undefined`

##### address
*Required*
Type: `object`

The address to verify
* address_line1: *optional*
* address_line2: *optional*
* address_city: *optional*
* address_state:*optional*
* address_zip: *optional*
* address_country: *optional* (2 letter country short-name code (ISO 3316))

##### callback
*Required*
Type: `function`
Arguments: `err, response`

The `response` contains:

###### valid

Type: `boolean`

Whether the address is valid or not

###### address

Type: `object`

Validated address object if address is found

###### message

Type: `string`

Details if only a partial match is found and more information is needed
