'use strict'

module.exports = {
    create: ({ joi }) => joi.object({
        body: joi.object({
            project: joi.string().required(),
            platform: joi.string().required(),
            executionDate: joi.date().iso().required(),
            report: joi.array().required()
        }).required()
    })
}