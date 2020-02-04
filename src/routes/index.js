'use strict'

const _paths = [
    `./reports`
]

module.exports = utils => dependencies => _paths.map(path => require(path)(utils)(dependencies))

