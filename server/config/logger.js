const winston = require('winston')
const{combine, timestamp, json} = winston.format

const logger = winston.createLogger({
    level: process.env.LOG_LEVEL || 'info',
    format: combine(timestamp({
        format: 'YYY-MM-DD hh:mm:ss.SSS A',
    }), json()),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({
            filename: `${__dirname}/../logs/server.log`
        })
    ]
})
module.exports = logger
