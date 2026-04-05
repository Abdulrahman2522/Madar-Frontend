import SectionHeader from "@/components/ui/SectionHeader";
import AboutContent from "./components/AboutContent";
import AboutData from "./components/AboutData";
import { StatsSection, TextSection } from "@/lib/types/home-types";

const About = ({
  lang,
  about,
  madar,
  stats,
}: {
  lang: string;
  about: TextSection;
  madar: TextSection;
  stats: StatsSection;
}) => {
  return (
    <section className="w-full flex flex-col items-center justify-center gap-15 py-12 px-10 md:px-0">
      {/* Header */}
      <SectionHeader
        label={about.subtitle}
        title={about.title}
        desc={about.content}
      />

      {/* Content */}
      <AboutContent
        lang={lang}
        subtitle={madar.subtitle}
        title={madar.title}
        desc={madar.content}
      />

      {/* Data */}
      <AboutData lang={lang} stats={stats} />
    </section>
  );
};

export default About;
