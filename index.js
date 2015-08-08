'use strict'

var request = require('micro-req')
var base64Encode = require('Base64').btoa
var lobKey = 'test_0dc8d51e0acffcb1880e0f19c79b2f5b0cc'// test api key

module.exports = function verify (address, callback) {
  request.post('https://api.lob.com/v1/verify', {
    json: true,
    headers: {
      Authorization: 'Basic ' + base64Encode(lobKey + ':')
    },
    body: address
  }, function (err, response) {
    callback(err, {
      valid: !err,
      address: response.body.address,
      message: response.body.message
    })
  })
}
