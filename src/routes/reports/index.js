'use strict'

module.exports = ({ router, services, schemas }) => ({ controllers, passport, moment, joi }) => {

    router
        .route('/reports')
        .post([services.validations.verify({ services, moment, joi }, `report`, `create`), controllers.reports.create({ services, schemas, moment })])

    return router
}