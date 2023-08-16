import mongoose from "mongoose";
import config from "../config";
import logger from "./logger";

let database;

// async function connect(){
                                    //normal function (1st-way)
// }

const connect = async () => {   //arrow function (2 nd way)
  const MONGODB_URL = config.DB_CONNECTION_STRING;

  if (database) return;

 mongoose.connect(MONGODB_URL)
   .then((connection)=>{
     database = connection;
     logger.info("Database woeking Properly");

   })
   .catch((err) => {
    logger.error(err.massage);
   });
};

export { connect }; // used '{}' cuz it is a function

