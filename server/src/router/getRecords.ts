import express, { Express, Request, Response } from "express";
import { loadRecord, getCount } from "../service/dbservice";
const router = express.Router();

router.get("/", async (req: Request, res: Response): Promise<void> => {
  const page: number = parseInt(req.query.page as string);
  const limit: number = parseInt(req.query.limit as string);
  if (page && limit) {
    const results = await loadRecord(page, limit);
    res.send(results);
  } else {
    res.sendStatus(400).end();
  }
});
router.get(
  "/countOfRecords",
  async (req: Request, res: Response): Promise<void> => {
    const countOfRecords = await getCount();
    res.send({ countOfRecords });
  }
);
module.exports = router;
