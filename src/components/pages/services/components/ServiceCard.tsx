"use client";

import AnimatedDiv from "@/components/ui/AnimatedWrapper";
import { type LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  content: string;
  lang: string;
}

export default function ServiceCard({
  icon: Icon,
  title,
  content,
  lang,
}: ServiceCardProps) {
  return (
    <AnimatedDiv
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: "easeOut" },
        },
      }}
      dir={lang === "ar" ? "rtl" : "ltr"}
      className={`flex flex-col ${lang === "ar" ? "text-right items-start" : "text-left items-start"} gap-5 bg-[#182D62]/60 rounded-2xl px-6 py-8 border border-white/10 shadow-[inset_0_0_20px_0_rgba(255,255,255,0.05)]`}
    >
      {/* Icon box */}
      <div className="overflow-hidden rounded-full relative w-16 h-16 bg-[rgba(50, 95, 205, 0.2)] border border-white/40 flex items-center justify-center shrink-0">
        <Icon size={28} className="text-white" strokeWidth={1.5} />
      </div>

      {/* Title */}
      <h3 className="text-white font-bold text-2xl">{title}</h3>

      {/* Description */}
      <p className="text-white/70 text-lg leading-8">{content}</p>
    </AnimatedDiv>
  );
}
