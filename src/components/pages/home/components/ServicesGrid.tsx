import ServiceCard from "@/components/pages/home/components/ServiceCard";
import { Service } from "@/lib/types/home-types";

interface ServicesGridProps {
  services: Service[];
  lang: string;
}

const ServicesGrid = ({ services, lang }: ServicesGridProps) => {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      {services.map((service, index) => (
        <ServiceCard key={index} service={service} index={index} lang={lang} />
      ))}
    </div>
  );
};

export default ServicesGrid;
