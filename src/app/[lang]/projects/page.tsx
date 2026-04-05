import Hero from "@/components/common/Hero";
import { redirect } from "next/navigation";
import Showcase from "@/components/pages/projects/Showcase";
import Projects from "@/components/pages/projects/Projects";
import { getProjects, getSeoProjects } from "@/lib/api/projects";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = (await params).lang;
  if (lang !== "ar" && lang !== "en") redirect("/ar/projects");

  const { data } = await getSeoProjects(lang);
  return {
    title:
      lang === "ar" ? `مدار | ${data.pageNameAr}` : `Madar | ${data.pageName}`,
    description: "",
  };
}

const page = async ({ params }: { params: Promise<{ lang: string }> }) => {
  const lang = (await params).lang;
  if (lang !== "ar" && lang !== "en") redirect("/ar/projects");

  const { data } = await getSeoProjects(lang);
  const { data: projects } = await getProjects(lang);

  return (
    <main className="w-full">
      {/* Hero Section */}
      <Hero className="pb-15">
        <Showcase hero={data?.sections?.hero} />
      </Hero>

      {/* Projects */}
      <Projects
        lang={lang}
        projectsHeader={data?.sections?.latestProjects}
        projects={projects}
      />
    </main>
  );
};

export default page;
