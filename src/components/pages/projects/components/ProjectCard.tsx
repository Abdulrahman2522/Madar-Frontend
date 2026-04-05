"use client";

import { ArrowLeft, ChevronRight } from "lucide-react";

import AnimatedDiv from "@/components/ui/AnimatedWrapper";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

interface ProjectCardProps {
  image: string;
  imageAlt: string;
  logoSrc: string;
  logoAlt?: string;
  title: string;
  description: string;
  href?: string;
  brandColor?: string;
  lang: string;
}

export default function ProjectCard({
  image = "/assets/placeholder.png",
  imageAlt,
  logoSrc,
  logoAlt = "logo",
  title = "موقع تيكتس للسفر والسياحة",
  description = "منصة سياحية متكاملة لحجز الجولات السياحية والفنادق والأنشطة بكل سهولة. تتيح للمستخدمين استكشاف الوجهات، مقارنة الخيارات، وإتمام الحجز والدفع الإلكتروني بخطوات بسيطة وآمنة.",
  href = "#",
  lang,
}: ProjectCardProps) {
  const [imageSrc, setImageSrc] = useState(image);

  return (
    <AnimatedDiv
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="card-font relative flex flex-col h-full w-full overflow-hidden rounded-2xl bg-white shadow-lg p-3 border border-[#E5E7EB]"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4, boxShadow: "0 24px 48px rgba(0,0,0,0.12)" }}
    >
      {/* Image section */}
      {image && (
        <AnimatedDiv className="relative w-full aspect-16/10 overflow-hidden shrink-0 rounded-2xl">
          <AnimatedDiv
            className="w-full h-full relative rounded-2xl"
            variants={{ hover: { scale: 1.04 } }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={imageSrc}
              alt={imageAlt || title || ""}
              fill
              className="object-cover rounded-2xl"
              priority
              onError={() => setImageSrc("/assets/images/placeholder.png")}
            />
          </AnimatedDiv>
        </AnimatedDiv>
      )}

      {/* Content section */}
      <div className="flex flex-col gap-5 flex-1 justify-between px-6 pb-6 pt-5">
        {/* Top: logo + title + description */}
        <div className="flex flex-col gap-3">
          {logoSrc && (
            <AnimatedDiv
              className="mb-6"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <Image
                src={logoSrc}
                alt={logoAlt}
                width={30}
                height={30}
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
            </AnimatedDiv>
          )}

          <motion.h2
            className="mb-3 text-xl font-bold leading-snug text-text-primary md:text-2xl"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.45 }}
          >
            {title}
          </motion.h2>

          <motion.p
            className="text-base font-normal leading-relaxed text-[#676A6E] md:text-base"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.45 }}
          >
            {description}
          </motion.p>
        </div>

        {/* Learn more link — pushed to bottom */}
        {href && (
          <Link
            href={href}
            className="group mt-6 text-base font-semibold text-[#369EC7]"
          >
            <AnimatedDiv
              className="inline-flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.38, duration: 0.4 }}
              whileHover={{ gap: "12px" }}
            >
              {lang === "ar" ? "أعرف المزيد" : "Learn More"}
              <motion.span
                className="inline-block"
                whileHover={{ x: lang === "ar" ? -4 : 4 }}
                transition={{ duration: 0.2 }}
              >
                {lang === "ar" ? (
                  <ArrowLeft size={18} />
                ) : (
                  <ChevronRight size={18} />
                )}
              </motion.span>
            </AnimatedDiv>
          </Link>
        )}
      </div>
    </AnimatedDiv>
  );
}
