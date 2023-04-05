import express, { Express } from "express";
//import { getRecordsByScrap } from "./service/webScrapService";
import { fetchFlatsRecords } from "./service/fetchFlatsRecordService";
const compression = require("compression");
const helmet = require("helmet");

const getRouter = require("./router/getRecords");
const cors = require("cors");
const app: Express = express();
const port = 3000;
app.use(compression());
app.use(cors());
app.use(helmet());

//getRecordsByScrap(500);
fetchFlatsRecords(500, 100);
app.use("/getRecords", getRouter);
app.listen(port, () => {
  console.log(`[Server]: I am running at http://localhost:${port}`);
});
