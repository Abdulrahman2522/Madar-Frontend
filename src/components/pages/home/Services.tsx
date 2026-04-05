import SectionHeader from "@/components/ui/SectionHeader";
import ServicesGrid from "@/components/pages/home/components/ServicesGrid";
import { Service, TextSection } from "@/lib/types/home-types";

const Services = ({
  lang,
  servicesData,
  services,
}: {
  lang: string;
  servicesData: TextSection;
  services: Service[];
}) => {
  return (
    <section className="w-full flex items-center justify-center py-12 px-3 md:px-0">
      <div className="container mx-auto flex flex-col items-center justify-center gap-10">
        <SectionHeader
          label={
            servicesData?.subtitle ||
            (lang === "ar" ? "خدماتنا" : "Our Services")
          }
          title={
            servicesData?.title ||
            (lang === "ar"
              ? "كل ما تحتاجه علامتك في مدار واحد"
              : "Everything your brand needs in one place")
          }
          desc={
            servicesData?.content ||
            (lang === "ar"
              ? "نقدّم في مدار مجموعة متكاملة من خدمات التسويق الرقمي المصممة لمساعدتك على الوصول إلى جمهورك المستهدف، وتعزيز حضورك الرقمي، وتحقيق نتائج قابلة للقياس."
              : "At Madar, we offer a comprehensive suite of digital marketing services designed to help you reach your target audience, enhance your digital presence, and achieve measurable results.")
          }
        />

        <ServicesGrid services={services} lang={lang} />
      </div>
    </section>
  );
};

export default Services;
