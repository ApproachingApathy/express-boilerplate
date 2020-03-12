const winston = require("winston");

module.exports = function createLogger() {
	return winston.createLogger({
		level: appConfig.LOGGER_LEVEL,
		transports: [
			new winston.transports.Console({
				level: "debug",
				format: winston.format.cli()
			}),
			new winston.transports.File({
				filename: "logs/info.log",
				level: "info",
				format: winston.format.json()
			}),
			new winston.transports.File({
				filename: "logs/error.log",
				level: "error",
				format: winston.format.json()
			})
		]
	});
};
