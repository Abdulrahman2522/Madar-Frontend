"use client";

import { useRef } from "react";
import { useInView, Variants } from "framer-motion";
import AnimatedNumber from "@/components/ui/AnimatedNumber";
import AnimatedDiv from "@/components/ui/AnimatedWrapper";
import { Montserrat } from "next/font/google";
import { StatsSection } from "@/lib/types/about-types";

const montserrat = Montserrat({ subsets: ["latin"] });

// interface StatItem {
//   value: string;
//   label: string;
// }

// const statsData: Record<string, StatItem[]> = {
//   ar: [
//     { value: "+5", label: "سنوات خبرة" },
//     { value: "+120", label: "عملاء سعداء" },
//     { value: "+50", label: "مشروع ناجح" },
//     { value: "95%", label: "رضا العملاء" },
//   ],
//   en: [
//     { value: "95%", label: "Client Satisfaction" },
//     { value: "+50", label: "Successful Projects" },
//     { value: "+120", label: "Happy Clients" },
//     { value: "+5", label: "Years of Experience" },
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
  stats,
}: {
  lang: string;
  stats: StatsSection;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, amount: 0.3 });
  const isAr = lang === "ar";

  return (
    <>
      <style>{`
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        @media (min-width: 768px) {
          .stats-grid {
            grid-template-columns: repeat(${stats.items.length}, minmax(0, 1fr));
          }
        }
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
        <div className="relative z-10 stats-grid gap-y-10 md:gap-y-0">
          {stats.items.map((stat, i) => (
            <div key={i} className="relative flex items-stretch">
              {/* Vertical divider — hidden on mobile, visible md+ */}
              {i < stats.items.length - 1 && (
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
                className="group flex w-full flex-col items-center justify-start gap-3 px-6 py-2"
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                {/* Animated number */}
                <div className="stat-value-gradient text-2xl font-bold leading-none tracking-tight lg:text-4xl">
                  <AnimatedNumber value={stat.title} />
                </div>

                {/* Arabic label */}
                <p
                  className={`text-center text-base md:text-xl font-medium tracking-wide text-text-secondary ${montserrat.className}`}
                >
                  {stat.content}
                </p>
              </AnimatedDiv>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
