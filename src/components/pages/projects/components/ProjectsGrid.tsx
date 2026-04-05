// import { PROJECTS } from "@/lib/constants";
import ProjectCard from "./ProjectCard";
import { Project } from "@/lib/types/projects-types";

const ProjectsGrid = ({
  lang,
  projects,
}: {
  lang: string;
  projects: Project[];
}) => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 items-stretch">
      {projects &&
        projects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project?.image?.url}
            imageAlt={project?.image?.alt}
            logoSrc={project?.logo?.url}
            logoAlt={project?.logo?.alt}
            title={project?.title}
            description={project?.shortDescription}
            href={project?.slug}
            lang={lang}
          />
        ))}
    </div>
  );
};

export default ProjectsGrid;
