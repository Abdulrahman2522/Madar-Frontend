import SectionHeader from "@/components/ui/SectionHeader";
import WorkSwiper from "./components/WorkSwiper";
import { TextSection } from "@/lib/types/home-types";
import { Project } from "@/lib/types/projects-types";

const OurWorks = ({
  lang,
  works,
  projects,
}: {
  lang: string;
  works: TextSection;
  projects: Project[];
}) => {
  return (
    <section className="w-full flex flex-col items-center justify-center gap-15 py-12 px-10 md:px-0">
      {/* Header */}
      <SectionHeader
        label={works.subtitle}
        title={works.title}
        desc={works.content}
      />

      {/* Works */}
      <WorkSwiper lang={lang} projects={projects} />
    </section>
  );
};

export default OurWorks;
