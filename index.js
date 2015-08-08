'use strict'

var request = require('micro-req')
var lobKey  = "test_0dc8d51e0acffcb1880e0f19c79b2f5b0cc" // test api key

module.exports = function verify (address, callback) {
  request.post('https://api.lob.com/v1/verify', {
      json: true,
      headers: {
        Authorization: "Basic " +
          new Buffer(lobKey + ":").toString('base64')
      },
      body: address
    }, function (err, response) {
      callback(err, {
        valid: err ? false: true,
        address: response.body.address,
        message: response.body.message
      })
    })
}
