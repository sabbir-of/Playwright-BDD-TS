import winston from 'winston';

const logger = winston.createLogger({
  level: 'info', // Set the default logging level to 'info'
  format: winston.format.simple(),
  transports: [
    new winston.transports.Console({ format: winston.format.simple() }),
  ],
});

export default logger;