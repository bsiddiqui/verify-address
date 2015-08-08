'use strict'

/* global describe, it */

var verify = require('./index')
var chai = require('chai')
var expect = chai.expect

describe('verify', function () {
  it('can verify a complete address', function (done) {
    verify({
      address_line1: '255 King St',
      address_line2: '414',
      address_city: 'San Francisco',
      address_state: 'CA',
      address_zip: '94107',
      address_country: 'US'
    }, function (err, response) {
      expect(response.valid).to.eql(true)
      return done()
    })
  })

  it('can verify an incomplete address', function (done) {
    verify({
      address_line1: '255 King St',
      address_line2: '414',
      address_city: 'San Francisco',
      address_zip: '94107'
    }, function (err, response) {
      expect(response.valid).to.eql(true)
      expect(response.address.address_country).to.eql('US')
      expect(response.address.address_state).to.eql('CA')
      return done()
    })
  })

  it('will provide message if partial match', function (done) {
    verify({
      address_line1: '255 King St',
      address_city: 'San Francisco',
      address_zip: '94107'
    }, function (err, response) {
      expect(response.valid).to.eql(true)
      expect(response.message).to
        .contain('The address you entered was found but more information is needed')
      return done()
    })
  })

  it('will error with invalid address', function (done) {
    verify({
      address_line1: '123 Hacker Rd',
      address_city: 'San Francisco',
      address_zip: '94107'
    }, function (err, response) {
      expect(err).to.be.instanceof(Object)
      expect(response.valid).to.eql(false)
      return done()
    })
  })
})
