// this is server file - which means this is the starting point of the development !!

import express from "express";
import cors from "cors"; // communicate with backend application (backend specificly work with one front-end application and restric all other reqs !!)
import dotenv from "dotenv"; // use for access environmental variables (Not Public urls configaration)
//dotenv.config(); - 1st way
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || "8090"  // check PORT or(||) use 8090 PORT

app.use(cors()); // defalt access all requests
app.use(express.json({limit: "20mb"}));

app.get("/", (req, res, next) =>{
    res.send("<h2> jsu go men")
})

app.listen(PORT, () => {

    console.log(('🛰️  Server is running now on PORT ')+(PORT));
});



 