"use client";

import FAQItem from "@/components/shared/Faq";
import { PageItem } from "@/lib/types/about-types";
import { useGlobalStore } from "@/store/useGlobalStore";

interface FaqGridProps {
  faqs: PageItem[];
}

const FaqGrid = ({ faqs }: FaqGridProps) => {
  const { lang } = useGlobalStore();
  return (
    <div className="w-full flex flex-col gap-y-6">
      {faqs.map((faq, index) => (
        <FAQItem
          key={index}
          question={faq.title}
          answer={faq.content}
          lang={lang}
        />
      ))}
    </div>
  );
};

export default FaqGrid;
