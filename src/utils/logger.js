import pino from "pino"; // 'pino' dependance use for crearte LOG

const logger = pino({
    transport:{
        target: "pino-pretty",
        
        options: {
            colorize: true  ,
            translateTime:'SYS:yyyy-mm-dd HH:MM:ss',
            ignore: "pid,hostname"
        }

        
    },
});

//logger.info("this is testing");

export default logger;