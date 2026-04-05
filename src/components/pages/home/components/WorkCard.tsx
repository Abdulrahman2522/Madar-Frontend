"use client";

import { ArrowLeft, ChevronRight } from "lucide-react";

import { useState } from "react";
import AnimatedDiv from "@/components/ui/AnimatedWrapper";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface WorkCardProps {
  image: string;
  logoSrc?: string;
  logoAlt?: string;
  title: string;
  description: string;
  href?: string;
  brandColor?: string;
  lang: string;
}

export default function WorkCard({
  image = "/assets/placeholder.png",
  logoSrc,
  logoAlt = "logo",
  title = "موقع تيكتس للسفر والسياحة",
  description = "منصة سياحية متكاملة لحجز الجولات السياحية والفنادق والأنشطة بكل سهولة. تتيح للمستخدمين استكشاف الوجهات، مقارنة الخيارات، وإتمام الحجز والدفع الإلكتروني بخطوات بسيطة وآمنة.",
  href = "#",
  lang,
}: WorkCardProps) {
  const [imgSrc, setImgSrc] = useState(image);
  return (
    <AnimatedDiv
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="card-font relative flex flex-col-reverse md:flex-row h-full w-full overflow-hidden rounded-2xl bg-white shadow-[0_2px_12px_0px_rgba(0,0,0,0.18)] p-2 md:p-4 border border-[#E5E7EB] items-stretch gap-4 md:gap-8 min-h-100"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
    >
      {/* Content section */}
      <div className="flex flex-col gap-4 flex-1 justify-center px-4 py-4 md:px-6 md:py-8 text-start">
        {/* Top: logo + title + description */}
        <div className="flex flex-col h-full gap-6 md:gap-8">
          {logoSrc && (
            <AnimatedDiv
              className="mb-2 md:mb-4"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <Image
                src={logoSrc}
                alt={logoAlt}
                width={50}
                height={50}
                className="object-contain"
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
            </AnimatedDiv>
          )}

          <motion.h2
            className="text-2xl font-bold leading-snug text-text-primary md:text-3xl"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.45 }}
          >
            {title}
          </motion.h2>

          <motion.p
            className="text-base font-normal leading-relaxed text-[#676A6E] md:text-lg md:leading-loose line-clamp-4"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.45 }}
          >
            {description}
          </motion.p>
        </div>

        {/* Learn more link */}
        <Link
          href={href}
          className="group mt-auto pt-6 text-base md:text-lg font-semibold text-[#369EC7]"
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
                <ArrowLeft size={20} />
              ) : (
                <ChevronRight size={20} />
              )}
            </motion.span>
          </AnimatedDiv>
        </Link>
      </div>

      {/* Image section */}
      <AnimatedDiv className="relative w-full md:w-[45%] h-65 md:h-auto overflow-hidden shrink-0 rounded-2xl">
        <AnimatedDiv
          className="w-full h-full relative rounded-2xl"
          variants={{ hover: { scale: 1.04 } }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={imgSrc}
            alt={title}
            fill
            className="object-cover rounded-xl"
            priority
            onError={() => setImgSrc("/assets/images/placeholder.png")}
          />
        </AnimatedDiv>
      </AnimatedDiv>
    </AnimatedDiv>
  );
}
