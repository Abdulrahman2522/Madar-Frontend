import { getData } from "./client";
import {
  ProjectsPageResponse,
  ProjectsResponse,
} from "../types/projects-types";

export async function getSeoProjects(
  lang: string,
): Promise<ProjectsPageResponse> {
  return await getData(`seo-pages/projects?lang=${lang}`);
}

export async function getProjects(lang: string): Promise<ProjectsResponse> {
  return await getData(`projects?lang=${lang}`);
}
