// components/sections/StatsSection.tsx
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

interface Stat {
  label: string;
  value: string;
  color: string;
  textColor: string;
  height: number;
  cubeImage: string; // path to the cube image
}

const STATS: Stat[] = [
  {
    label: "مشاريع مكتملة",
    value: "+50",
    color: "bg-[#8B7FE8]",
    textColor: "text-white",
    height: 220,
    cubeImage: "/assets/images/50.png",
  },
  {
    label: "عملاء مستمرون",
    value: "+80",
    color: "bg-[#22D3EE]",
    textColor: "text-[#0e2a44]",
    height: 300,
    cubeImage: "/assets/cubes/80.png",
  },
  {
    label: "أدوات وتقنيات",
    value: "+20",
    color: "bg-[#F59E0B]",
    textColor: "text-white",
    height: 150,
    cubeImage: "/assets/cubes/20.png",
  },
];

function IsometricBar({
  stat,
  delay,
  inView,
}: {
  stat: Stat;
  delay: number;
  inView: boolean;
}) {
  return (
    <div className="flex flex-col items-center gap-2">
      {/* Value label */}
      <motion.span
        className="text-white text-2xl font-bold"
        initial={{ opacity: 0, y: -10 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
        transition={{ duration: 0.5, delay: delay + 0.35 }}
      >
        {stat.value}
      </motion.span>

      <div
        className="relative flex flex-col items-center justify-end"
        style={{ height: 340 }}
      >
        {/* Cube image on top */}
        <motion.div
          className="relative z-10 w-[100px]"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.6, delay }}
        >
          <Image
            src={stat.cubeImage}
            alt={stat.label}
            width={100}
            height={100}
            className="w-full h-auto object-contain"
          />
        </motion.div>

        {/* Pillar — grows upward from bottom */}
        <motion.div
          className="w-[52px] relative overflow-hidden rounded-sm"
          initial={{ height: 0 }}
          animate={inView ? { height: stat.height - 100 } : { height: 0 }}
          transition={{
            duration: 0.9,
            delay,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{ marginTop: -2 }} // seamless join with cube base
        >
          {/* Dark pillar body matching the cube's pedestal */}
          <div className="absolute inset-0 bg-[#0a1628]" />
          {/* Left edge highlight */}
          <div
            className="absolute left-0 top-0 bottom-0 w-[1px] opacity-30"
            style={{ backgroundColor: "#3a5a9a" }}
          />
          {/* Right edge highlight */}
          <div
            className="absolute right-0 top-0 bottom-0 w-[1px] opacity-20"
            style={{ backgroundColor: "#1e3a6a" }}
          />
          {/* Faint inner glow from the cube's blue light */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              background:
                "linear-gradient(180deg, rgba(56,130,246,0.4) 0%, transparent 60%)",
            }}
          />
        </motion.div>

        {/* Base glow on the floor */}
        <motion.div
          className="w-[70px] h-[8px] rounded-full blur-md mt-1"
          style={{ backgroundColor: "#3b82f6", opacity: 0.35 }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={
            inView ? { scaleX: 1, opacity: 0.35 } : { scaleX: 0, opacity: 0 }
          }
          transition={{ duration: 0.6, delay: delay + 0.5 }}
        />
      </div>
    </div>
  );
}

function StatPill({
  stat,
  index,
  inView,
}: {
  stat: Stat;
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      className="flex items-center justify-between rounded-full overflow-hidden w-full"
      initial={{ opacity: 0, x: 40 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
      transition={{
        duration: 0.55,
        delay: 0.2 + index * 0.12,
        ease: [0.16, 1, 0.3, 1],
      }}
      dir="rtl"
    >
      <div className="flex-1 bg-[#1e2d5a] px-6 py-3 text-right">
        <span className="text-white font-semibold text-base">{stat.label}</span>
      </div>
      <div className={`${stat.color} px-6 py-3 min-w-[90px] text-center`}>
        <span className={`${stat.textColor} font-bold text-base`}>
          {stat.value}
        </span>
      </div>
    </motion.div>
  );
}

export default function StatsSection({ lang = "ar" }: { lang?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="w-full bg-[#0f1b40] py-16 px-6 overflow-hidden"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* LEFT — bars with cube images */}
        <div className="flex-1 flex items-end justify-center gap-8 min-h-[400px]">
          {STATS.map((stat, i) => (
            <IsometricBar
              key={stat.label}
              stat={stat}
              delay={i * 0.15}
              inView={inView}
            />
          ))}
        </div>

        {/* RIGHT — text + pills */}
        <div className="flex-1 flex flex-col gap-6 text-right" dir="rtl">
          <motion.p
            className="text-[#22D3EE] text-sm font-semibold tracking-wide"
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.45, delay: 0.1 }}
          >
            مدار يتصاعد
          </motion.p>

          <motion.h2
            className="text-white text-3xl md:text-4xl font-bold leading-tight"
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            الإحصائيات التي تروي خبرتنا
          </motion.h2>

          <motion.p
            className="text-[#9aabcc] text-base leading-relaxed"
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            كل عمود هنا يعكس إنجازاتنا في مجال التقنية والتسويق الرقمي. من
            المشاريع المنجزة إلى رضا العملاء، هذه الأرقام تظهر خبرتنا وتأثيرنا
            بطريقة واضحة وملموسة.
          </motion.p>

          <div className="flex flex-col gap-3 mt-2">
            {STATS.map((stat, i) => (
              <StatPill
                key={stat.label}
                stat={stat}
                index={i}
                inView={inView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
