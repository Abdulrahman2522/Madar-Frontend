import { PageItem } from "./about-types";

export type ServiceItem = {
  image: string;
  icon: string;
  imageAlt: string;
  title: string;
  description: string;
  overlayColor: string;
  ctaHref?: string;
};

export type LocalizedServices = {
  ar: ServiceItem[];
  en: ServiceItem[];
};

// seo
export interface ServicesHeroSection {
  subtitle?: string;
  title?: string;
  content?: string;
  type: "hero";
  items: [];
}

export interface ServicesCoreServicesSection {
  subtitle?: string;
  title?: string;
  content?: string;
  type: "text";
  items: PageItem[];
}

export interface ServicesTechFieldsSection {
  subtitle?: string;
  title?: string;
  content?: string;
  type: "text";
  items: PageItem[];
}

export interface ServicesFaqSection {
  subtitle?: string;
  title?: string;
  content?: string;
  type: "text";
  items: PageItem[];
}

export interface ServicesPageSections {
  hero: ServicesHeroSection;
  coreServices: ServicesCoreServicesSection;
  techFields: ServicesTechFieldsSection;
  faq: ServicesFaqSection;
}

export interface ServicesPageData {
  _id: string;
  pageName: string;
  pageNameAr: string;
  slug: string;
  sections: ServicesPageSections;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface ServicesPageResponse {
  status: string;
  data: ServicesPageData;
}
