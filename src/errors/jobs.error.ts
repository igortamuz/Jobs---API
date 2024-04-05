import { ApplicationError } from "../models";

export function cannotGetAllJobs(): ApplicationError {
  return {
    name: "cannotGetAllJobs",
    message: "Cannot get jobs!",
  };
}
