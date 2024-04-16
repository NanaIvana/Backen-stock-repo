import * as express from "express";
import * as dotenv from "dotenv";

import { Request, Response } from "express";

import "reflect-metadata";
dotenv.config();

const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

//app.set('PORT', process.env.PORT||3000)
//app.listen( (port) => {
    //console.log("Server is running on http://localhost:" + port);
  //});





  
