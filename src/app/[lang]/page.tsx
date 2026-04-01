import Hero from "@/components/sections/home/Hero";
import { redirect } from "next/navigation";

const page = async ({ params }: { params: Promise<{ lang: string }> }) => {
  const lang = (await params).lang;
  if (lang !== "ar" && lang !== "en") redirect("/ar");

  return (
    <main className="w-full">
      {/* Hero Section */}
      <Hero />
    </main>
  );
};

export default page;
