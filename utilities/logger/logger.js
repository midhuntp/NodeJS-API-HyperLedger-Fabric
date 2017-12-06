'use strict';
const winston = require('winston');
const tsFormat = () => (new Date()).toLocaleTimeString();

module.exports = {
        logger: new (winston.Logger)({
            transports: [
                // colorize the output to the console
                new (winston.transports.Console)({
                    timestamp: tsFormat,
                    colorize: true,
                })
            ]
        })
    }