import SectionHeader from "@/components/ui/SectionHeader";
import ProjectsGrid from "./components/ProjectsGrid";
import {
  Project,
  ProjectsLatestProjectsSection,
} from "@/lib/types/projects-types";
import { FolderOpen } from "lucide-react";

const Projects = ({
  lang,
  projectsHeader,
  projects,
}: {
  lang: string;
  projectsHeader: ProjectsLatestProjectsSection;
  projects: Project[];
}) => {
  return (
    <section className="w-full flex items-center justify-center py-18 px-3 md:px-0">
      <div className="container mx-auto flex flex-col items-center justify-center gap-10">
        {/* Section Header */}
        <SectionHeader
          label={projectsHeader?.subtitle}
          title={projectsHeader?.title}
          desc={projectsHeader?.content}
        />

        {/* Projects */}
        {projects?.length > 0 ? (
          <ProjectsGrid lang={lang} projects={projects} />
        ) : (
          <div className="flex flex-col items-center justify-center gap-4 py-20 text-center">
            <FolderOpen
              className="text-[#2e9ac9]"
              size={64}
              strokeWidth={1.2}
            />
            <p className="text-text-primary text-lg md:text-2xl font-semibold">
              {lang === "ar" ? "لا توجد مشاريع حالياً" : "No projects found"}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
