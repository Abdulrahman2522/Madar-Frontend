// Seo

export interface PageItem {
  title: string;
  content: string;
}

export interface HeroSection {
  subtitle: string;
  title: string;
  content: string;
  type: "hero";
  items: PageItem[];
}

export interface FeaturesSection {
  subtitle: string;
  title: string;
  content: string;
  type: "text";
  items: PageItem[];
}

export interface StatsSection {
  title: string;
  content?: string;
  type: "stats";
  items: PageItem[];
}

export interface FaqSection {
  subtitle: string;
  title: string;
  content: string;
  type: "text";
  items: PageItem[];
}

export interface AboutPageSections {
  hero: HeroSection;
  features: FeaturesSection;
  stats: StatsSection;
  faq: FaqSection;
}

export interface AboutPageData {
  _id: string;
  pageName: string;
  pageNameAr: string;
  slug: string;
  sections: AboutPageSections;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface AboutPageResponse {
  status: string;
  data: AboutPageData;
}
