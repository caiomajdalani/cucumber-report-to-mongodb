'use strict'

module.exports = {
    create: ({ joi }) => joi.object({
        body: joi.object({
            project: joi.string().required(),
            platform: joi.string().required(),
            executionDate: joi.string().required(),
            report: joi.array().required()
        }).required()
    })
}