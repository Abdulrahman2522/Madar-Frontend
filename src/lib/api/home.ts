import { getData } from "./client";
import { HomePageResponse, ServicesResponse } from "../types/home-types";

export async function getSeoHome(lang: string): Promise<HomePageResponse> {
  return await getData(`seo-pages/home?lang=${lang}`);
}

export async function getServices(lang: string): Promise<ServicesResponse> {
  return await getData(`services?lang=${lang}`);
}
