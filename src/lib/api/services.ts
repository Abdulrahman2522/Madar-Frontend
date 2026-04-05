import { getData } from "./client";
import { ServicesPageResponse } from "../types/services-types";

export async function getSeoServices(
  lang: string,
): Promise<ServicesPageResponse> {
  return await getData(`seo-pages/services?lang=${lang}`);
}
