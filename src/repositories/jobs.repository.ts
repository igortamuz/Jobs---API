import { prisma } from "../db/db";
import { Job } from "../models";

async function getAllJobs(): Promise<Job[]> {
  const jobs = await prisma.jobs.findMany({});
  return jobs;
}

export const JobsRepository = {
  getAllJobs,
};
