import express from "express";
import { JobsController } from "../controllers";

const jobsRouter = express.Router();

jobsRouter.get("/", JobsController.getAllJobs);

export { jobsRouter };
