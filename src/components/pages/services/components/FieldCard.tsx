"use client";

import AnimatedDiv from "@/components/ui/AnimatedWrapper";
import { type LucideIcon } from "lucide-react";

interface FieldCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  lang: string;
}

export default function FieldCard({
  icon: Icon,
  title,
  description,
  lang,
}: FieldCardProps) {
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
      className="flex flex-col gap-5 bg-white rounded-2xl px-6 py-8 shadow-[0px_2px_12px_0px_rgba(0,0,0,0.12)]"
    >
      {/* Icon box */}
      <div className="overflow-hidden rounded-xl w-14 h-14 bg-gradient-to-r from-[#647296] to-[#182D62] flex items-center justify-center shrink-0">
        <Icon size={26} className="text-white" strokeWidth={1.5} />
      </div>

      {/* Title */}
      <h3 className="text-black font-bold text-2xl">{title}</h3>

      {/* Description */}
      <p className="text-black text-lg leading-8">{description}</p>
    </AnimatedDiv>
  );
}
