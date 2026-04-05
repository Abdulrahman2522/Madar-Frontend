"use client";

import {
  Atom,
  BadgeCheck,
  ShieldCheck,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";

import { LucideIcon } from "lucide-react";
import PrincipleCard from "@/components/pages/about/components/PrincipleCard";
import SectionHeader from "@/components/ui/SectionHeader";
import { FeaturesSection } from "@/lib/types/about-types";

interface Feature {
  icon: LucideIcon;
  title: { ar: string; en: string };
}

const featuresData: Feature[] = [
  {
    icon: Sparkles,
    title: {
      ar: "حلول مخصصة لأعمالك",
      en: "Custom Solutions for Your Business",
    },
  },
  {
    icon: Zap,
    title: {
      ar: "أداء عالي وسرعة ممتازة",
      en: "High Performance & Exceptional Speed",
    },
  },
  {
    icon: ShieldCheck,
    title: { ar: "أمان كامل للبيانات", en: "Complete Data Security" },
  },
  {
    icon: Users,
    title: { ar: "فريق خبراء متمرس", en: "Experienced Expert Team" },
  },
  {
    icon: Atom,
    title: { ar: "ابتكار مستمر", en: "Continuous Innovation" },
  },
  {
    icon: BadgeCheck,
    title: { ar: "تجربة مستخدم سلسة", en: "Smooth User Experience" },
  },
];

const Principles = ({
  lang,
  features,
}: {
  lang: "ar" | "en";
  features?: FeaturesSection;
}) => {
  return (
    <section className="w-full flex items-center justify-center py-18 px-3 md:px-0">
      <div className="container mx-auto flex flex-col items-center justify-center gap-10">
        {/* Section Header */}
        <SectionHeader
          label={features?.subtitle}
          title={features?.title}
          desc={features?.content}
        />

        {/* Principles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-15!">
          {features?.items?.map((feature, index) => {
            const icon =
              featuresData.find((f) => f.title[lang] === feature.title)?.icon ||
              Sparkles;

            return (
              <PrincipleCard
                key={index}
                icon={icon}
                title={feature.title}
                description={feature.content || ""}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Principles;
