import { JobsRepository } from "../repositories";
import { cannotGetAllJobs } from "../errors";
import { Job } from "../models";

async function getAllJobs(): Promise<Job[]> {
  const jobsList = JobsRepository.getAllJobs();

  if (!jobsList) {
    throw cannotGetAllJobs;
  }

  return jobsList;
}

export const JobsService = {
  getAllJobs,
};
