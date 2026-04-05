import Hero from "@/components/common/Hero";
import { redirect } from "next/navigation";
import FaqSection from "@/components/shared/FaqSection";
// import { FAQS } from "@/lib/constants";
import Showcase from "@/components/pages/services/Showcase";
import ServicesGrid from "@/components/pages/services/VisionGrid";
import Fields from "@/components/pages/services/Fields";
import { getSeoServices } from "@/lib/api/services";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = (await params).lang;
  if (lang !== "ar" && lang !== "en") redirect("/ar/services");

  const { data } = await getSeoServices(lang);

  return {
    title:
      lang === "ar" ? `مدار | ${data.pageNameAr}` : `Madar | ${data.pageName}`,
    description: "",
  };
}

const page = async ({ params }: { params: Promise<{ lang: string }> }) => {
  const lang = (await params).lang;
  if (lang !== "ar" && lang !== "en") redirect("/ar/services");

  const { data } = await getSeoServices(lang);

  return (
    <main className="w-full">
      {/* Hero Section */}
      <Hero className="pb-15">
        <div className="w-full flex flex-col items-center gap-10">
          <Showcase hero={data?.sections?.hero} />
          <ServicesGrid
            lang={lang as "ar" | "en"}
            services={data?.sections?.coreServices?.items}
          />
        </div>
      </Hero>

      {/* Fields */}
      <Fields
        lang={lang as "ar" | "en"}
        techFields={data?.sections?.techFields}
      />

      {/* FAQ */}
      <FaqSection
        label={data?.sections?.faq?.subtitle || ""}
        title={data?.sections?.faq?.title || ""}
        desc={data?.sections?.faq?.content || ""}
        faqs={data?.sections?.faq?.items || []}
      />
    </main>
  );
};

export default page;
