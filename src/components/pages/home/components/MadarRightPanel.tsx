"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { User } from "lucide-react";
import { Variants } from "framer-motion";

// Variants

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.15 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, x: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const numberVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: 0.4, ease: "easeOut" },
  },
};

const badgeVariants: Variants = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, delay: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

// Avatar Stack

const avatarColors = ["bg-amber-400", "bg-sky-400", "bg-rose-400"];

function AvatarStack() {
  return (
    <div className="flex items-center mb-4">
      {avatarColors.map((color, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25 + i * 0.08, duration: 0.3 }}
          className={`
            w-9 h-9 rounded-full border-2 border-[#1a2d50]
            flex items-center justify-center ${color}
            ${i !== 0 ? "-ml-3" : ""}
          `}
          style={{ zIndex: avatarColors.length - i }}
        >
          <User size={15} className="text-white" strokeWidth={2.5} />
        </motion.div>
      ))}
    </div>
  );
}

// Growth Chart SVG

function GrowthChart() {
  return (
    <svg
      viewBox="0 0 120 90"
      className="w-24 h-20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0"
        y="60"
        width="30"
        height="30"
        rx="3"
        fill="#6366f1"
        opacity="0.5"
      />
      <rect
        x="32"
        y="40"
        width="30"
        height="50"
        rx="3"
        fill="#818cf8"
        opacity="0.65"
      />
      <rect
        x="64"
        y="18"
        width="30"
        height="72"
        rx="3"
        fill="#a5b4fc"
        opacity="0.8"
      />

      <motion.path
        d="M8 62 Q38 30 88 12"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.7, ease: "easeInOut" }}
      />
      <motion.path
        d="M80 8 L92 12 L84 21"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 1.5 }}
      />
    </svg>
  );
}

// Circular Badge

function CircularBadge() {
  const radius = 44;
  const text = "MADAR SOLUTIONS · MADAR SOLUTIONS · ";

  return (
    <motion.div
      variants={badgeVariants}
      className="absolute bottom-1/2 translate-y-1/2 -right-15 w-22 h-22 z-30"
    >
      <motion.svg
        viewBox="0 0 100 100"
        className="w-full h-full drop-shadow-xl"
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      >
        <defs>
          <path
            id="circlePath"
            d={`M 50,50 m -${radius},0 a ${radius},${radius} 0 1,1 ${radius * 2},0 a ${radius},${radius} 0 1,1 -${radius * 2},0`}
          />
        </defs>
        <circle
          cx="50"
          cy="50"
          r="49"
          fill="#0f1e36"
          stroke="#2a3f6a"
          strokeWidth="1"
        />
        <text
          fontSize="8.5"
          fill="#7dd3fc"
          letterSpacing="1.6"
          fontFamily="monospace"
        >
          <textPath href="#circlePath">{text}</textPath>
        </text>
      </motion.svg>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-5 h-5 rounded-full bg-sky-400 shadow-lg shadow-sky-500/50 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-white" />
        </div>
      </div>
    </motion.div>
  );
}

// Main Export

export default function MadarAboutSection() {
  return (
    <div className="w-full min-h-105 lg:min-h-120 flex items-center justify-end gap-5">
      {/* Right Panel — floats over the right portion of the image */}
      <motion.div
        className="relative flex flex-col gap-4 w-55 sm:w-60 lg:w-65 z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Top Card: Users Reached */}
        <motion.div
          variants={cardVariants}
          className="
            relative rounded-2xl p-5 overflow-hidden
            bg-[#1a2d50]/90 backdrop-blur-md
            border border-[#2a3f6a]/60
            shadow-2xl shadow-black/50
          "
        >
          {/* Subtle top-edge glow */}
          <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-sky-400/40 to-transparent" />

          <AvatarStack />

          <motion.div variants={numberVariants} className="text-right">
            <p className="text-4xl font-extrabold text-white tracking-tight leading-none">
              +10,000
            </p>
            <p
              className="mt-2 text-sm text-slate-300 leading-snug"
              style={{
                fontFamily: "'Noto Sans Arabic', sans-serif",
                direction: "rtl",
              }}
            >
              مستخدم تم الوصول إليهم
            </p>
          </motion.div>
        </motion.div>

        {/* Bottom Card: Effective Strategies */}
        <motion.div
          variants={cardVariants}
          className="
            relative rounded-2xl p-5 overflow-hidden
            bg-[#1a2d50]/90 backdrop-blur-md
            border border-[#2a3f6a]/60
            shadow-2xl shadow-black/50
          "
        >
          <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-indigo-400/40 to-transparent" />

          <div className="flex items-end justify-between gap-2">
            <GrowthChart />
            <p
              className="text-lg font-bold text-white text-right leading-tight"
              style={{
                fontFamily: "'Noto Sans Arabic', sans-serif",
                direction: "rtl",
              }}
            >
              استراتيجيات
              <br />
              فعالة
            </p>
          </div>
        </motion.div>

        {/* Circular rotating badge */}
        <CircularBadge />
      </motion.div>

      {/* Office Image */}
      <div className="w-full h-full">
        <Image
          src="/assets/images/madar-office.png"
          alt="Madar office"
          width={500}
          height={500}
          priority
          className="object-cover rounded-2xl"
        />
      </div>
    </div>
  );
}
