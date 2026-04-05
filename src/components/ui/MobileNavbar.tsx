"use client";

import {
  AnimatePresence,
  animate,
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { Box, Code2, Home, Info, LucideIcon, Phone, Zap } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

import AnimatedDiv from "./AnimatedWrapper";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = {
  id: string;
  Icon: LucideIcon;
  label: { ar: string; en: string };
  href: string;
};

const NAV_ITEMS: NavItem[] = [
  { id: "home", Icon: Home, label: { ar: "الرئيسية", en: "Home" }, href: "/" },
  {
    id: "services",
    Icon: Zap,
    label: { ar: "الخدمات", en: "Services" },
    href: "/services",
  },
  {
    id: "works",
    Icon: Code2,
    label: { ar: "أعمالنا", en: "Works" },
    href: "/projects",
  },
  {
    id: "packages",
    Icon: Box,
    label: { ar: "الباقات", en: "Packages" },
    href: "/packages",
  },
  {
    id: "contact",
    Icon: Phone,
    label: { ar: "تواصل معنا", en: "Contact" },
    href: "/contact",
  },
  {
    id: "about",
    Icon: Info,
    label: { ar: "نبذة عنا", en: "About Us" },
    href: "/about",
  },
];

const BAR_H = 64;
const BALL_D = 60;
const BALL_LIFT = 16;
const NOTCH_R = 34;
const NOTCH_D = 28;
const CR = 22;

function buildPath(w: number, h: number, cx: number): string {
  const t = NOTCH_R * 0.52;
  return [
    `M ${CR} 0`,
    `H ${cx - NOTCH_R - t}`,
    `C ${cx - t} 0 ${cx - NOTCH_R * 0.9} ${NOTCH_D} ${cx} ${NOTCH_D}`,
    `C ${cx + NOTCH_R * 0.9} ${NOTCH_D} ${cx + t} 0 ${cx + NOTCH_R + t} 0`,
    `H ${w - CR}`,
    `Q ${w} 0 ${w} ${CR}`,
    `V ${h}`,
    `H 0`,
    `V ${CR}`,
    `Q 0 0 ${CR} 0`,
    `Z`,
  ].join(" ");
}

export default function BottomNav() {
  const pathname = usePathname();
  const lang = (pathname?.split("/")[1] || "ar") as "ar" | "en"; // derive language from URL

  const [width, setWidth] = useState(0);
  const wrapRef = useRef<HTMLDivElement>(null);
  const widthRef = useRef(0);

  // Determine active item based on current URL
  const currentActiveId = useMemo(() => {
    if (!pathname) return "home";
    for (const item of NAV_ITEMS) {
      if (item.id !== "home" && pathname.includes(item.href)) {
        return item.id;
      }
    }
    if (pathname === `/${lang}` || pathname === `/${lang}/`) {
      return "home";
    }
    return "home";
  }, [pathname, lang]);

  const [active, setActive] = useState(currentActiveId);

  useEffect(() => {
    setActive(currentActiveId);
  }, [currentActiveId]);

  // Measure container width
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const update = (w: number) => {
      setWidth(w);
      widthRef.current = w;
    };
    update(el.offsetWidth);
    const ro = new ResizeObserver(([e]) => update(e.contentRect.width));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Shared MotionValue driving both the SVG notch and the ball
  const notchX = useMotionValue(0);

  // Initialise on first width measurement
  const initialised = useRef(false);
  useEffect(() => {
    if (width === 0) return;
    const idx = NAV_ITEMS.findIndex((n) => n.id === active);
    const rtlIdx = NAV_ITEMS.length - 1 - idx; // Account for RTL
    const target = (width / NAV_ITEMS.length) * (rtlIdx + 0.5);
    if (!initialised.current) {
      notchX.set(target);
      initialised.current = true;
    }
  }, [width, notchX, active]);

  // Spring-animate the notch when active changes
  useEffect(() => {
    if (width === 0) return;
    const idx = NAV_ITEMS.findIndex((n) => n.id === active);
    const rtlIdx = NAV_ITEMS.length - 1 - idx; // Account for RTL
    const target = (width / NAV_ITEMS.length) * (rtlIdx + 0.5);
    animate(notchX, target, { type: "spring", stiffness: 370, damping: 30 });
  }, [active, width, notchX]);

  // Derived MotionValues
  const svgPath = useTransform(notchX, (cx) =>
    widthRef.current > 0 ? buildPath(widthRef.current, BAR_H, cx) : "",
  );
  const ballLeft = useTransform(notchX, (cx) => cx - BALL_D / 2);

  return (
    <div
      ref={wrapRef}
      className="w-full fixed bottom-0 z-30 md:hidden"
      style={{ height: BAR_H + BALL_LIFT, direction: "rtl" }}
    >
      {/* SVG bar with notch */}
      {width > 0 && (
        <svg
          width={width}
          height={BAR_H}
          viewBox={`0 0 ${width} ${BAR_H}`}
          style={{ position: "absolute", bottom: 0, left: 0 }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path d={svgPath} fill="rgba(24, 45, 98, 1)" />
        </svg>
      )}

      {/* Nav buttons */}
      <nav
        className="absolute bottom-0 left-0 right-0"
        style={{ height: BAR_H }}
      >
        <ul className="flex items-center w-full h-full m-0 p-0 list-none">
          {NAV_ITEMS.map((item) => {
            const isActive = active === item.id;
            const fullHref =
              item.href === "/" ? `/${lang}` : `/${lang}${item.href}`;
            return (
              <li key={item.id} className="flex-1 h-full">
                <Link
                  href={fullHref}
                  onClick={() => setActive(item.id)}
                  className="w-full h-full flex flex-col items-center justify-center gap-1 relative z-10"
                  style={{
                    outline: "none",
                    background: "transparent",
                  }}
                >
                  <AnimatedDiv
                    className="flex flex-col items-center gap-1"
                    animate={{ opacity: isActive ? 0 : 1, y: isActive ? 3 : 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    <item.Icon
                      size={20}
                      strokeWidth={1.6}
                      color="rgba(192, 192, 192, 1)"
                    />
                    <span
                      style={{
                        fontSize: 12,
                        color: "rgba(192, 192, 192, 1)",
                        userSelect: "none",
                      }}
                    >
                      {item.label[lang] || item.label.ar}
                    </span>
                  </AnimatedDiv>

                  {/* Active item label */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.span
                        key={item.id + "-lbl"}
                        initial={{ opacity: 0, y: 3 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2, delay: 0.08 }}
                        style={{
                          position: "absolute",
                          bottom: 8,
                          fontSize: 14,
                          color: "rgba(255, 255, 255, 1)",
                          userSelect: "none",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {item.label[lang] || item.label.ar}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Floating ball (driven by same notchX) */}
      <AnimatedDiv
        className="absolute flex items-center justify-center rounded-full -top-6"
        style={{
          width: BALL_D,
          height: BALL_D,
          left: ballLeft,
          background:
            "linear-gradient(145deg, rgba(14, 26, 57, 1) 0%, rgba(14, 26, 57, 1) 55%, rgba(24, 45, 98, 1) 100%)",
          boxShadow:
            "0 6px 15px rgba(14, 26, 57, 1), 0 2px 5px rgba(0,0,0,0.35)",
          zIndex: 20,
        }}
      >
        <AnimatePresence mode="wait">
          <AnimatedDiv
            key={active}
            initial={{ scale: 0.45, opacity: 0, rotate: -20 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0.45, opacity: 0, rotate: 20 }}
            transition={{
              duration: 0.22,
              type: "spring",
              stiffness: 420,
              damping: 26,
            }}
          >
            {(() => {
              const item = NAV_ITEMS.find((n) => n.id === active);
              return item ? (
                <item.Icon size={24} strokeWidth={1.85} color="white" />
              ) : null;
            })()}
          </AnimatedDiv>
        </AnimatePresence>
      </AnimatedDiv>
    </div>
  );
}
