import { PageItem } from "./about-types";

// Seo
export interface projectItem {
  coverImage: { url: string; alt: string };
  title: string;
  content: string;
  slug: string;
}

export interface ProjectsHeroSection {
  subtitle: string;
  title: string;
  content: string;
  type: "hero";
  items: PageItem[];
}

export interface ProjectsLatestProjectsSection {
  subtitle: string;
  title: string;
  content: string;
  type: "text";
  items: PageItem[];
}

export interface ProjectsPageSections {
  hero: ProjectsHeroSection;
  latestProjects: ProjectsLatestProjectsSection;
}

export interface ProjectsPageData {
  _id: string;
  pageName: string;
  pageNameAr: string;
  slug: string;
  sections: ProjectsPageSections;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface ProjectsPageResponse {
  status: string;
  data: ProjectsPageData;
}

// projects
// types/project.types.ts

export interface ProjectImage {
  url: string;
  alt: string;
}

export interface Project {
  _id: string;
  title: string;
  description: string;
  shortDescription: string;
  image: ProjectImage;
  logo: ProjectImage;
  slug: string;
  link: string;
  category: string;
  technologies: string[];
  order: number;
  isActive: boolean;
  isFeatured: boolean;
  images: ProjectImage[];
  createdAt: string;
  updatedAt: string;
}

export interface ProjectsResponse {
  status: string;
  data: Project[];
}
