"use client";

import AnimatedDiv from "@/components/ui/AnimatedWrapper";
import { type LucideIcon } from "lucide-react";
import Image from "next/image";

interface VisionCardProps {
  icon: LucideIcon;
  title: string;
  content?: string;
  center?: boolean;
  lang?: "ar" | "en";
}

export default function VisionCard({
  icon: Icon,
  title,
  content,
  center = false,
  lang = "ar",
}: VisionCardProps) {
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
      className={`flex flex-col gap-5 bg-[#5B7ED71F] rounded-2xl px-6 py-8 shadow-[inset_0_0_20px_0_rgba(255,255,255,0.1)] ${center ? "items-center text-center" : "items-start text-start"}`}
    >
      {/* Icon box */}
      <div className="overflow-hidden rounded-lg relative w-14 h-14 bg-[#03061B33] flex items-center justify-center shrink-0">
        {Icon && <Icon size={26} className="text-white" strokeWidth={1.5} />}

        {/* Glow Effect Top Left */}
        <div className="absolute top-0 left-0 z-10">
          <Image
            src="/assets/images/vision-glow-top.png"
            alt="glow"
            width={40}
            height={40}
          />
        </div>

        {/* Glow Effect bottom right */}
        <div className="absolute bottom-0 right-0 z-10">
          <Image
            src="/assets/images/vision-glow-bottom.png"
            alt="glow"
            width={40}
            height={40}
          />
        </div>
      </div>

      {/* Title */}
      <h3 className="text-white font-bold text-2xl">{title}</h3>

      {/* Description */}
      <p className="text-white/70 text-lg leading-8">{content}</p>
    </AnimatedDiv>
  );
}
