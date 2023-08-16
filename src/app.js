// this is server file - which means this is the starting point of the development !!

import express from "express";
import cors from "cors"; // communicate with backend application (backend specificly work with one front-end application and restric all other reqs !!)
import dotenv from "dotenv"; // use for access environmental variables (Not Public urls configaration)
//dotenv.config(); - 1st way
import 'dotenv/config';
import {connect} from "./utils/db_connection";
import logger from "./utils/logger";  


const app = express();
const PORT = process.env.PORT || "8090"  // check PORT or(||) use 8090 PORT

app.use(cors()); // defalt access all requests
app.use(express.json({limit: "20mb"}));

app.get("/", (req, res, next) =>{
    res.send("<h2> just go men")
    next();
})

app.listen(PORT, () => {

    logger.info(('Server is running now on PORT ')+(PORT));
      
    // logger.error("this is testing");
    // logger.warn("this is testing");
    //console.log(('🛰️  Server is running now on PORT ')+(PORT));
    connect();
});



