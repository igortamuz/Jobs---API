import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { jobsRouter } from "./routers";

dotenv.config();

const app = express();
app
  .use(cors())
  .use(express.json())
  .get("/status", (_req, res) => res.send("OK!"))
  .get("/", jobsRouter);

export default app;

//to drop port: sudo kill -9 `sudo lsof -t -i:4000`
