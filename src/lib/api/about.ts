import { getData } from "./client";
import { AboutPageResponse } from "../types/about-types";

export async function getSeoAbout(lang: string): Promise<AboutPageResponse> {
  return await getData(`seo-pages/about?lang=${lang}`);
}
