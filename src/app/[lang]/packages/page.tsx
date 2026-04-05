import Hero from "@/components/common/Hero";
import Packages from "@/components/pages/packages/Packages";
import Showcase from "@/components/pages/packages/Showcase";
import { redirect } from "next/navigation";

const page = async ({ params }: { params: Promise<{ lang: string }> }) => {
  const lang = (await params).lang;
  if (lang !== "ar" && lang !== "en") redirect("/ar/packages");

  return (
    <main className="w-full">
      {/* Hero Section */}
      <Hero className="pb-15">
        <Showcase />
      </Hero>

      {/* Packages */}
      <Packages lang={lang} />
    </main>
  );
};

export default page;
