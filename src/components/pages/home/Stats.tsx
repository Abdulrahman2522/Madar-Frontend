"use client";

import { motion, useInView } from "framer-motion";

import AnimatedDiv from "@/components/ui/AnimatedWrapper";
import Image from "next/image";
import { useRef } from "react";
import { StatsSection } from "@/lib/types/home-types";
import { PageItem } from "@/lib/types/about-types";
import { useGlobalStore } from "@/store/useGlobalStore";

interface StatItem {
  label: string;
  value: string;
  color: string;
  badgeText: string;
  height: number;
  image: string;
}

// Cube Column

function CubeColumn({
  stat,
  delay,
}: {
  stat: StatItem;
  delay: number;
  lang: "en" | "ar";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="flex flex-col items-center justify-center">
      {/* Value label above cube */}
      <motion.span
        initial={{ opacity: 0, y: -10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: delay + 0.4 }}
        className="text-white font-bold text-4xl tracking-wide mb-2"
      >
        {stat.value}
      </motion.span>

      {/* Image-based Pillar — grows up from bottom */}
      <AnimatedDiv
        initial={{ opacity: 0, scaleY: 0, originY: 1 }}
        animate={isInView ? { opacity: 1, scaleY: 1 } : {}}
        transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: "bottom" }}
        className="overflow-visible"
      >
        <Image
          src={stat.image}
          alt={stat.label}
          width={100}
          height={stat.height}
          style={{ height: stat.height, width: "auto", objectFit: "fill" }}
          className="drop-shadow-2xl overflow-visible"
        />
      </AnimatedDiv>
    </div>
  );
}

// Stat Bar

function StatBar({ stat, lang }: { stat: PageItem; lang: "en" | "ar" }) {
  const color =
    stat.title === "+50"
      ? "bg-indigo-500"
      : stat.title === "+80"
        ? "bg-cyan-400"
        : "bg-amber-400";
  const colorMap: Record<string, string> = {
    "bg-indigo-500": "#6366f1",
    "bg-cyan-400": "#22d3ee",
    "bg-amber-400": "#fbbf24",
  };
  const accent = colorMap[color] ?? "#6366f1";

  // Bar width proportional to value: 20→40%, 50→65%, 80→100%
  const numericValue = parseInt(stat.title.replace(/\D/g, ""), 10) || 50;
  const barWidth = `${Math.round(35 + (numericValue / 80) * 65)}%`;

  return (
    <div
      className="w-full flex"
      style={{ justifyContent: lang === "ar" ? "flex-start" : "flex-end" }}
    >
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: barWidth, opacity: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center justify-between rounded-xl px-4 py-3 overflow-hidden min-w-0"
        style={{
          background: accent,
          direction: lang === "ar" ? "rtl" : "ltr",
        }}
      >
        <span className="text-white font-semibold text-sm whitespace-nowrap">
          {stat.title}
        </span>
        <span className="font-bold text-base whitespace-nowrap text-white ms-4">
          {stat.content}
        </span>
      </motion.div>
    </div>
  );
}

// Main Section

export default function Stats({ stats }: { stats: StatsSection }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const { lang } = useGlobalStore();
  const isRTL = lang === "ar";

  const STATS: StatItem[] = [
    {
      label: stats.items[0].content,
      value: stats.items[0].title,
      color: "bg-indigo-500",
      badgeText: stats.items[0].title,
      height: 300,
      image: "/assets/images/bar-2.png",
    },
    {
      label: stats.items[1].content,
      value: stats.items[1].title,
      color: "bg-cyan-400",
      badgeText: stats.items[1].title,
      height: 400,
      image: "/assets/images/bar-2.png",
    },
    {
      label: stats.items[2].content,
      value: stats.items[2].title,
      color: "bg-amber-400",
      badgeText: stats.items[2].title,
      height: 200,
      image: "/assets/images/bar-3.png",
    },
  ];

  // Visual order left→right: +20 (short), +80 (tallest), +50 (medium)
  const COLUMNS = [
    { stat: STATS[0], order: 2 }, // +50 — medium, rightmost
    { stat: STATS[1], order: 1 }, // +80 — tallest, center
    { stat: STATS[2], order: 0 }, // +20 — shortest, leftmost
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full"
      style={{
        background: "rgba(24, 45, 98, 1)",
        direction: isRTL ? "rtl" : "ltr",
      }}
    >
      <div className="relative z-10 w-full flex items-center justify-center mx-auto px-6 lg:px-10 py-20">
        <div className="container flex flex-col lg:flex-row items-start gap-16 lg:gap-24">
          {/* Right: Text + Stat Bars */}
          <div
            className={`flex-1 w-full flex flex-col gap-6 ${isRTL ? "text-right" : "text-left"}`}
          >
            {/* Eyebrow */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-cyan-400 text-xl font-semibold tracking-widest"
            >
              {stats?.subtitle}
            </motion.p>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="text-white font-bold text-3xl lg:text-4xl leading-tight"
            >
              {stats?.title}
            </motion.h2>

            {/* Body */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="text-slate-300 text-base lg:text-lg leading-8"
            >
              {stats?.content}
            </motion.p>

            {/* Stat Bars */}
            <div className="flex flex-col gap-3 mt-4 w-full">
              {stats?.items.map((stat, i) => (
                <StatBar key={i} stat={stat} lang={lang} />
              ))}
            </div>
          </div>

          {/* Left: Cube Columns */}
          <div className="flex-1 flex items-end justify-center">
            {COLUMNS.map(({ stat, order }) => (
              <CubeColumn
                key={stat.label}
                stat={stat}
                delay={0.1 + order * 0.15}
                lang={lang}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
