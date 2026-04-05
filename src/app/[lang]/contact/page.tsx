// import { FAQS } from "@/lib/constants";
import Hero from "@/components/common/Hero";
import Showcase from "@/components/pages/contact/Showcase";
import { redirect } from "next/navigation";
// import FaqSection from "@/components/shared/FaqSection";

const page = async ({ params }: { params: Promise<{ lang: string }> }) => {
  const lang = (await params).lang;
  if (lang !== "ar" && lang !== "en") redirect("/ar/contact");

  return (
    <main className="w-full">
      {/* Hero Section */}
      <Hero className="pb-15">
        <Showcase />
      </Hero>

      {/* FAQ */}
      {/* <FaqSection
        label={{
          ar: "الأسئلة الشائعة",
          en: "Frequently Asked Questions",
        }}
        title={{
          ar: "كل ما تحتاج معرفته عن خدماتنا",
          en: "Get Clear Answers to Your Most Common Questions",
        }}
        desc={{
          ar: "نفهم أن عملك يحتاج حلول سريعة وفعّالة، وأنك قد يكون عندك الكثير من التساؤلات حول خدماتنا. جمعنا لك أهم الأسئلة مع إجابات واضحة لتسهيل اختيار الحل الأنسب لك ولأعمالك.",
          en: "We understand that your business needs fast and effective solutions, and you may have many questions about our services. We have compiled the most important questions with clear answers to make it easier to choose the right solution for you and your business.",
        }}
        faqs={FAQS}
      /> */}
    </main>
  );
};

export default page;
