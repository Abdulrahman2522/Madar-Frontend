import Hero from "@/components/common/Hero";
import { redirect } from "next/navigation";
import Services from "@/components/pages/home/Services";
import About from "@/components/pages/home/About";
import OurWorks from "@/components/pages/home/OurWorks";
import Showcase from "@/components/pages/home/components/Showcase";
// import StatsSection from "@/components/pages/home/StatsSection";
import Stats from "@/components/pages/home/Stats";
import { getSeoHome, getServices } from "@/lib/api/home";
import { getProjects } from "@/lib/api/projects";
import Partners from "@/components/pages/home/Partners";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = (await params).lang;
  if (lang !== "ar" && lang !== "en") redirect("/ar");
  const data = await getSeoHome(lang);
  return {
    title:
      lang === "ar"
        ? `مدار | ${data.data.pageNameAr}`
        : `Madar | ${data.data.pageName}`,
    description: "",
  };
}

const page = async ({ params }: { params: Promise<{ lang: string }> }) => {
  const lang = (await params).lang;
  if (lang !== "ar" && lang !== "en") redirect("/ar");

  const { data } = await getSeoHome(lang);
  const { data: services } = await getServices(lang);
  const { data: projects } = await getProjects(lang);

  return (
    <main className="w-full">
      {/* Hero Section */}
      <Hero>
        <Showcase hero={data?.sections?.hero} />
      </Hero>

      {/* Services */}
      <Services
        lang={lang}
        servicesData={data?.sections?.services}
        services={services}
      />

      {/* About */}
      <About
        lang={lang}
        about={data?.sections?.about}
        madar={data?.sections?.strategy}
        stats={data?.sections?.stats}
      />

      {/* Our works */}
      <OurWorks lang={lang} works={data?.sections?.work} projects={projects} />

      {/* Stats */}
      <Stats stats={data?.sections?.journey} />

      {/* Partners */}
      <Partners partnersData={data?.sections?.partners} />
    </main>
  );
};

export default page;
