"use client";

import AnimatedDiv from "@/components/ui/AnimatedWrapper";
import Image from "next/image";
import Link from "next/link";
import { Service } from "@/lib/types/home-types";
import { useState } from "react";

interface ServiceCardProps {
  service: Service;
  index: number;
  lang: string;
}

const ServiceCard = ({ service, index, lang }: ServiceCardProps) => {
  const {
    title,
    description,
    icon: { url: iconUrl, alt: iconAlt },
    image: { url: imageUrl, alt: imageAlt },
    color,
    slug,
  } = service;

  const [imgSrc, setImageSrc] = useState(imageUrl);

  return (
    <AnimatedDiv
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.4 }}
      viewport={{ once: true, margin: "-80px", amount: 0.4 }}
      className="relative group overflow-hidden cursor-pointer min-h-80 rounded-3xl"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <div className="absolute inset-0">
        <Image
          src={imgSrc}
          alt={imageAlt || title || ""}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          onError={() => setImageSrc("/assets/images/service-image.jpg")}
        />
        <div
          className="absolute inset-0"
          style={{ backgroundColor: color, opacity: 0.7 }}
        />
      </div>

      <div className="relative z-10 p-6 flex flex-col justify-between items-start text-start gap-5 min-h-80 w-full">
        <div className="flex flex-col items-start gap-6">
          {iconUrl && (
            <Image
              src={iconUrl}
              alt={iconAlt || title || ""}
              width={80}
              height={80}
              onError={(e) => (e.currentTarget.style.display = "none")}
            />
          )}

          <h3 className="text-white font-bold text-3xl mt-2">{title}</h3>

          <p className="text-white/90 text-base">{description}</p>
        </div>

        <Link
          href={slug}
          className="group/link w-fit text-white font-semibold text-xl relative"
        >
          {lang === "ar" ? "أعرف المزيد" : "Learn More"}
          <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover/link:w-full transition-all duration-300" />
        </Link>
      </div>
    </AnimatedDiv>
  );
};

export default ServiceCard;
