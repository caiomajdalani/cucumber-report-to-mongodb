'use strict'


module.exports = ({ mongoose }) => {

    let _schema = new mongoose.Schema({
        project: {
            type: String,
            required: true
        },
        platform: {
            type: String,
            required: true
        },
        executionDate: {
            type: Number,
            required: true
        },
        report: {
            type: Array,
            required: true
        }
    })

    return {
        entity: _schema,
        model: mongoose.model('report', _schema)
    }
}

