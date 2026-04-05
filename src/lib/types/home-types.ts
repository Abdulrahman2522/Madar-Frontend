import { PageItem } from "./about-types";

// seo
export interface BaseSection {
  type: string;
}

export interface HeroSection extends BaseSection {
  type: "hero";
  title: string;
  content: string;
  items: never[];
}

export interface TextSection extends BaseSection {
  type: "text";
  subtitle: string;
  title: string;
  content: string;
  items: never[];
}

export interface StatsSection extends BaseSection {
  type: "stats";
  title: string;
  subtitle?: string;
  content?: string;
  items: PageItem[];
}

export interface HomePageSections {
  hero: HeroSection;
  services: TextSection;
  about: TextSection;
  strategy: TextSection;
  stats: StatsSection;
  work: TextSection;
  journey: StatsSection;
  partners: TextSection;
  articles: TextSection;
}

export interface HomePageData {
  _id: string;
  pageName: string;
  pageNameAr: string;
  slug: string;
  sections: HomePageSections;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface HomePageResponse {
  status: string;
  data: HomePageData;
}

// services
// types/service.ts

export interface MediaAsset {
  url: string;
  alt: string;
}

export interface Service {
  _id: string;
  title: string;
  description: string;
  icon: MediaAsset;
  image: MediaAsset;
  slug: string;
  order: number;
  isActive: boolean;
  color: string;
  createdAt: string;
  updatedAt: string;
}

export interface ServicesResponse {
  status: string;
  results: number;
  data: Service[];
}
