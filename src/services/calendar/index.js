`use strict`

module.exports = {
    // add: {
    //     SIX: 21600000,
    //     TWELVE: 43200000
    // },
    // timezone: {
    //     SP: `America/Sao_Paulo`,
    //     FL: `America/New_York`
    // },
    now: ({ moment }) => +moment.tz('America/Sao_Paulo'),
    // milliseconds: ({ moment }) => (timezone) => +moment.tz(timezone),
    // expires: ({ moment }) => (timezone, add) => +moment.tz(timezone) + add,
    // timezone: ({ services, moment }) => (country) => country === 'USA'
    //     ? +moment.tz(services.calendar.timezone.FL)
    //     : +moment.tz(services.calendar.timezone.SP)
}