"use client";

import { useRef } from "react";
import { useInView, Variants } from "framer-motion";
import AnimatedNumber from "@/components/ui/AnimatedNumber";
import AnimatedDiv from "@/components/ui/AnimatedWrapper";
import { Montserrat } from "next/font/google";
import { PageItem } from "@/lib/types/about-types";

const montserrat = Montserrat({ subsets: ["latin"] });

// interface StatItem {
//   value: string;
//   label: string;
//   sub: string;
// }

// const statsData: Record<string, StatItem[]> = {
//   ar: [
//     {
//       value: "+50",
//       label: "مشروع ناجح",
//       sub: "قدّمنا حلول رقمية مبتكرة لأعمال متنوعة.",
//     },
//     {
//       value: "+5",
//       label: "سنوات خبرة",
//       sub: "خبرتنا الطويلة تضمن تقديم حلول عالية الجودة.",
//     },
//     {
//       value: "95%",
//       label: "رضا العملاء",
//       sub: "نحرص على تقديم تجربة مميزة لكل عميل.",
//     },
//   ],
//   en: [
//     {
//       value: "+50",
//       label: "Successful Projects",
//       sub: "We delivered innovative digital solutions across diverse industries.",
//     },
//     {
//       value: "+5",
//       label: "Years of Experience",
//       sub: "Our long track record ensures high-quality solutions every time.",
//     },
//     {
//       value: "95%",
//       label: "Client Satisfaction",
//       sub: "We're committed to delivering an outstanding experience for every client.",
//     },
//   ],
// };

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.13, ease: [0.16, 1, 0.3, 1] },
  }),
};

const dividerVariants: Variants = {
  hidden: { scaleY: 0, opacity: 0 },
  visible: (i: number) => ({
    scaleY: 1,
    opacity: 1,
    transition: { duration: 0.5, delay: i * 0.13 + 0.2, ease: "easeOut" },
  }),
};

export default function StatsBar({
  lang,
  items,
}: {
  lang: "ar" | "en";
  items?: PageItem[];
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, amount: 0.3 });
  const isAr = lang === "ar";

  return (
    <>
      <style>{`
        .stat-value-gradient {
          font-family: ${montserrat.style.fontFamily};
          background: #112046;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-size: 3rem;
        }
      `}</style>

      <div
        ref={containerRef}
        dir={isAr ? "rtl" : "ltr"}
        className="relative w-full overflow-hidden bg-transparent px-4 py-12 md:px-8"
        style={{
          fontFamily: isAr ? "'Cairo', sans-serif" : "inherit",
        }}
      >
        {/* Grid */}
        <div className="relative z-10 grid grid-cols-1 gap-y-10 md:grid-cols-3 md:gap-y-0">
          {items?.map((stat, i) => {
            const title = stat.title?.split(" ");
            const value = title?.[0];
            const label = title?.slice(1).join(" ");
            return (
              <div key={i} className="relative flex items-stretch">
                {/* Vertical divider */}
                {i < items.length - 1 && (
                  <AnimatedDiv
                    className={`absolute top-[10%] hidden h-[80%] w-1.5 origin-top md:block ${isAr ? "left-0" : "right-0"}`}
                    style={{
                      background:
                        "linear-gradient(to bottom, transparent, #a2d5eb 50%, transparent)",
                    }}
                    custom={i}
                    variants={dividerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                  />
                )}

                {/* Stat card */}
                <AnimatedDiv
                  className="group flex w-full flex-col items-center justify-center gap-3 px-6 py-2"
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                >
                  {/* Animated number */}

                  {/* Label */}
                  <div className="flex items-center gap-4">
                    <div className="stat-value-gradient text-4xl font-bold leading-none tracking-tight md:text-5xl">
                      <AnimatedNumber value={value} />
                    </div>
                    <p
                      className={`text-center text-xl font-bold tracking-wide text-text-primary ${montserrat.className}`}
                    >
                      {label}
                    </p>
                  </div>

                  {/* Subtitle */}
                  <p className="text-center text-xl text-[rgba(0, 0, 0, 1)] max-w-45">
                    {stat.content}
                  </p>
                </AnimatedDiv>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
