import Hero from "@/components/common/Hero";
import Principles from "@/components/pages/about/Principles";
import Showcase from "@/components/pages/about/Showcase";
import VisionGrid from "@/components/pages/about/VisionGrid";
import { redirect } from "next/navigation";
import Statistics from "@/components/pages/about/Statistics";
import FaqSection from "@/components/shared/FaqSection";
import { getSeoAbout } from "@/lib/api/about";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const lang = (await params).lang;
  if (lang !== "ar" && lang !== "en") redirect("/ar/about");

  const { data } = await getSeoAbout(lang);

  return {
    title:
      lang === "ar" ? `مدار | ${data.pageNameAr}` : `Madar | ${data.pageName}`,
    description: "",
  };
}

const page = async ({ params }: { params: Promise<{ lang: string }> }) => {
  const lang = (await params).lang;
  if (lang !== "ar" && lang !== "en") redirect("/ar/about");

  const { data } = await getSeoAbout(lang);

  return (
    <main className="w-full">
      {/* Hero Section */}
      <Hero className="pb-15">
        <div className="w-full flex flex-col items-center gap-10">
          <Showcase hero={data?.sections?.hero} />
          <VisionGrid
            lang={lang as "ar" | "en"}
            items={data?.sections?.hero?.items}
          />
        </div>
      </Hero>

      {/* Principles */}
      {data?.sections?.features?.items?.length > 0 && (
        <Principles
          lang={lang as "ar" | "en"}
          features={data?.sections?.features}
        />
      )}
      {/* Statistics */}
      {data?.sections?.stats?.items?.length > 0 && (
        <Statistics lang={lang as "ar" | "en"} stats={data?.sections?.stats} />
      )}

      {/* Faq */}
      {data?.sections?.faq?.items?.length > 0 && (
        <FaqSection
          label={data?.sections?.faq?.subtitle}
          title={data?.sections?.faq?.title}
          desc={data?.sections?.faq?.content}
          faqs={data?.sections?.faq?.items || []}
        />
      )}
    </main>
  );
};

export default page;
