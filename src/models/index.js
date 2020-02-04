'use strict'

const mongoose = require('mongoose')
    , int32 = require(`mongoose-int32`)

module.exports = {
    report: require('./report')({ mongoose }),
}