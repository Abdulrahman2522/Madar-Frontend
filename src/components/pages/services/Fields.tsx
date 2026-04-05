"use client";

import { Code, Code2, Database, PenTool } from "lucide-react";

import { LucideIcon } from "lucide-react";
import FieldCard from "@/components/pages/services/components/FieldCard";
import SectionHeader from "@/components/ui/SectionHeader";
import { ServicesTechFieldsSection } from "@/lib/types/services-types";

interface Feature {
  icon: LucideIcon;
  title: { ar: string; en: string };
  description: { ar: string; en: string };
}

const featuresData: Feature[] = [
  {
    icon: Code2,
    title: {
      ar: "تطوير الواجهة الأمامية",
      en: "Frontend Development",
    },
    description: {
      ar: "نصمم ونطوّر واجهات تفاعلية سريعة الاستجابة تضمن تجربة مستخدم سلسة على جميع الأجهزة.",
      en: "We design and develop responsive, interactive interfaces that ensure a smooth user experience across all devices.",
    },
  },
  {
    icon: Database,
    title: {
      ar: "تطوير الواجهة الخلفية",
      en: "Backend Development",
    },
    description: {
      ar: "نبني أنظمة قوية وآمنة تدير البيانات والعمليات بكفاءة عالية وأداء مستقر.",
      en: "We build robust and secure systems that manage data and operations with high efficiency and stable performance.",
    },
  },
  {
    icon: Code,
    title: {
      ar: "تطوير تطبيقات Flutter",
      en: "Flutter App Development",
    },
    description: {
      ar: "ننشئ تطبيقات موبايل متعددة المنصات بأداء عالي وتجربة استخدام متكاملة.",
      en: "We build cross-platform mobile apps with high performance and a seamless user experience.",
    },
  },
  {
    icon: PenTool,
    title: {
      ar: "تصميم UI/UX",
      en: "UI/UX Design",
    },
    description: {
      ar: "نصمم تجارب رقمية مدروسة تركز على احتياجات المستخدم وتحقق أهداف العمل.",
      en: "We design thoughtful digital experiences focused on user needs and business goals.",
    },
  },
];

const Fields = ({
  lang,
  techFields,
}: {
  lang: string;
  techFields: ServicesTechFieldsSection;
}) => {
  return (
    <section className="w-full flex items-center justify-center py-18 px-3 md:px-0">
      <div className="container mx-auto flex flex-col items-center justify-center gap-10">
        {/* Section Header */}
        <SectionHeader
          label={techFields?.subtitle}
          title={techFields?.title}
          desc={techFields?.content}
        />

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-15!">
          {techFields?.items?.map((feature, index) => {
            // get icon
            const icon = featuresData[index].icon;
            return (
              <FieldCard
                key={index}
                icon={icon}
                title={feature.title}
                description={feature.content}
                lang={lang}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Fields;
