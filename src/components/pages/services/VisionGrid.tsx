"use client";

import {
  BarChart2,
  GitFork,
  Monitor,
  Search,
  ShoppingBag,
  Smartphone,
} from "lucide-react";

import AnimatedDiv from "@/components/ui/AnimatedWrapper";
import ServiceCard from "./components/ServiceCard";
import { PageItem } from "@/lib/types/about-types";

const CARDS = {
  ar: [
    {
      icon: Monitor,
      title: "تصميم وتطوير المواقع",
      description:
        "تصميم مواقع احترافية وسهلة الاستخدام، متجاوبة مع كل الأجهزة، مع واجهات جذابة وتجربة مستخدم سلسة تزيد تفاعل العملاء.",
    },
    {
      icon: Smartphone,
      title: "تطوير التطبيقات الذكية",
      description:
        "تطبيقات iOS وAndroid ذكية وسهلة الاستخدام، تتيح الحجز، متابعة العروض، وإدارة الخدمات بشكل مريح وسريع.",
    },
    {
      icon: BarChart2,
      title: "لوحات إدارة",
      description:
        "لوحات تحكم متكاملة لإدارة العملاء، الحجوزات، وتحليل البيانات بسهولة، مع واجهة منظمة تركز على تجربة المستخدم.",
    },
    {
      icon: ShoppingBag,
      title: "حلول التجارة الإلكترونية",
      description:
        "متاجر إلكترونية كاملة مع ربط المدفوعات والشحن، وتصميم تجربة مستخدم تزيد المبيعات وتسهّل عملية التسوق.",
    },
    {
      icon: GitFork,
      title: "التسويق الرقمي",
      description:
        "نقدم استراتيجيات تسويق فعالة لزيادة الوعي بعلامتك التجارية وتحقيق نمو مستمر.",
    },
    {
      icon: Search,
      title: "تحسين محركات البحث",
      description:
        "ندير حملات إعلانية ونحسن ظهورك في نتائج البحث مما يساعدك على زيادة الزيارات وجذب عملاء جدد بشكل مستمر.",
    },
  ],
  en: [
    {
      icon: Monitor,
      title: "Website Design & Development",
      description:
        "Professional, user-friendly websites that are fully responsive across all devices, with attractive interfaces and smooth user experiences that boost engagement.",
    },
    {
      icon: Smartphone,
      title: "Smart App Development",
      description:
        "iOS and Android apps that are intuitive and powerful — enabling bookings, offer tracking, and service management in a seamless and fast way.",
    },
    {
      icon: BarChart2,
      title: "Admin Dashboards",
      description:
        "Comprehensive control panels for managing clients, reservations, and data analytics with ease, built around a clean and organized user experience.",
    },
    {
      icon: ShoppingBag,
      title: "E-Commerce Solutions",
      description:
        "Full-featured online stores with payment and shipping integrations, designed to maximize sales and simplify the shopping experience.",
    },
    {
      icon: GitFork,
      title: "Digital Marketing",
      description:
        "Effective marketing strategies that grow brand awareness and drive consistent, measurable business growth.",
    },
    {
      icon: Search,
      title: "Search Engine Optimization",
      description:
        "We run ad campaigns and improve your search rankings to drive more traffic and attract new customers continuously.",
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
  services,
}: {
  lang?: "ar" | "en";
  services: PageItem[];
}) {
  const cardsIcon = CARDS[lang];

  return (
    <AnimatedDiv
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="container mx-auto mt-10! grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full"
    >
      {services.map((card, index) => {
        const icon =
          cardsIcon.find((c) => c.title === card.title)?.icon || Monitor;

        return (
          <ServiceCard
            key={index}
            title={card.title || ""}
            content={card.content || ""}
            lang={lang}
            icon={icon}
          />
        );
      })}
    </AnimatedDiv>
  );
}
