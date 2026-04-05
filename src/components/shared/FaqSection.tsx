import FaqGrid from "@/components/pages/contact/components/FaqGrid";
import SectionHeader from "@/components/ui/SectionHeader";
import { PageItem } from "@/lib/types/about-types";

interface FaqSectionProps {
  label: string;
  title: string;
  desc: string;
  faqs: PageItem[];
}

const FaqSection = ({ label, title, desc, faqs }: FaqSectionProps) => {
  return (
    <section className="w-full flex items-center justify-center py-8 md:py-12 px-3 md:px-0">
      <div className="container mx-auto flex flex-col items-center justify-center gap-10">
        <SectionHeader label={label} title={title} desc={desc} />

        {/* Faq Questions */}
        <FaqGrid faqs={faqs} />
      </div>
    </section>
  );
};

export default FaqSection;
