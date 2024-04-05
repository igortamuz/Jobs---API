import { Request, Response } from "express";
import { JobsService } from "../services";
import httpStatus from "http-status";
import { Job } from "../models";

async function getAllJobs(req: Request, res: Response): Promise<void | Job[]> {
  try {
    const result = await JobsService.getAllJobs();
    res.status(httpStatus.OK).json(result);
  } catch (error) {
    if (error.name === "cannotGetAllJobs") {
      res.status(httpStatus.NOT_FOUND).send(error.message);
    }
    res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ message: error.message });
  }
}

export const JobsController = {
  getAllJobs,
};
