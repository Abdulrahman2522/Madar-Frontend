"use client";

import { Flag, Lightbulb, Target } from "lucide-react";

import AnimatedDiv from "@/components/ui/AnimatedWrapper";
import VisionCard from "@/components/pages/about/components/VisionCard";
import { PageItem } from "@/lib/types/about-types";

const CARDS = {
  ar: [
    {
      icon: Lightbulb,
      title: "رؤيتنا",
      content:
        "أن نكون الشريك التقني الأول للشركات والمؤسسات في بناء حلول رقمية متطورة تواكب المستقبل.",
    },
    {
      icon: Flag,
      title: "مهمتنا",
      content:
        "تقديم خدمات برمجية احترافية تساعد عملاءنا على تحسين أعمالهم، وتبسيط عملياتهم، وتعزيز حضورهم الرقمي.",
    },
    {
      icon: Target,
      title: "أهدافنا",
      content:
        "نسعى إلى تحقيق تأثير رقمي حقيقي لعملائنا من خلال تطوير حلول تقنية مبتكرة تدعم نمو أعمالهم وتعزّز حضورهم في العالم الرقمي.",
    },
  ],
  en: [
    {
      icon: Lightbulb,
      title: "Our Vision",
      content:
        "To be the premier technical partner for companies and institutions in building advanced digital solutions for the future.",
    },
    {
      icon: Flag,
      title: "Our Mission",
      content:
        "Providing professional software services that help our clients improve their businesses, streamline their operations, and enhance their digital presence.",
    },
    {
      icon: Target,
      title: "Our Goals",
      content:
        "We strive to make a real digital impact for our clients by developing innovative technical solutions that support their business growth and strengthen their presence in the digital world.",
    },
  ],
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function VisionGrid({
  lang = "ar",
  items,
}: {
  lang?: "ar" | "en";
  items?: PageItem[];
}) {
  const cards = items || CARDS[lang];

  return (
    <AnimatedDiv
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="container mx-auto mt-10! grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full"
    >
      {cards.map((card) => {
        const icon =
          card.title === "رؤيتنا"
            ? Lightbulb
            : card.title === "مهمتنا"
              ? Flag
              : Target;
        return (
          <VisionCard key={card.title} icon={icon} {...card} lang={lang} />
        );
      })}
    </AnimatedDiv>
  );
}
