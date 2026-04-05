// components/pages/packages/components/Package.tsx
"use client";

import { GiCheckMark } from "react-icons/gi";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import checkmarkIcon from "@/../public/assets/icons/checkmark.svg";

interface PackageProps {
  lang?: "ar" | "en";
  icon?: string | React.ReactNode;
  title: string;
  desc?: string;
  inclusions?: string[] | [] | null;
  price?: string | number;
  badgeText?: string;
  isSelected?: boolean;
  onSelect?: () => void;
}

const Package = ({
  lang = "ar",
  icon,
  title,
  desc,
  inclusions,
  price,
  badgeText,
  isSelected = false,
  onSelect,
}: PackageProps) => {
  const isAr = lang === "ar";

  return (
    <div
      onClick={onSelect}
      dir={isAr ? "rtl" : "ltr"}
      className={`relative flex flex-col rounded-2xl cursor-pointer transition-all duration-300 mt-10 ${isSelected ? "border-l-2 border-r-2 border-[#ebf7fb]" : "border-0"}`}
    >
      {/* Teal background — absolutely positioned, grows upward behind the card */}
      {isSelected && (
        <div className="absolute inset-0 -top-12 bg-[#ebf7fb] rounded-2xl" />
      )}

      {/* Badge — sits in the teal area above the card */}
      {isSelected && badgeText && (
        <div className="absolute -top-8 -left-2 -right-2 flex items-center justify-center z-10">
          <span className="text-[#259ccb] text-base font-semibold text-center px-4">
            {badgeText}
          </span>
        </div>
      )}

      {/* Card — never moves, always at the same level */}
      <div
        className={`
          relative z-10 bg-white rounded-2xl px-4 py-6 flex flex-col gap-4 md:gap-6 transition-all duration-300
          ${
            isSelected
              ? "shadow-none"
              : "shadow-[0_2px_12px_0_rgba(0,0,0,0.18)] hover:shadow-[0_2px_16px_0_rgba(0,0,0,0.22)]"
          }
        `}
      >
        <div className="flex flex-col gap-2">
          <h3 className="flex items-center gap-2 text-[rgba(24,45,98,1)] text-2xl font-bold">
            {typeof icon === "string" ? (
              <Image
                src={icon}
                alt={`icon of ${title}`}
                width={50}
                height={50}
              />
            ) : (
              icon
            )}
            {title}
          </h3>
          <p className="font-normal text-lg">{desc}</p>
        </div>

        <div className="w-full h-px bg-gray-300" />

        {inclusions && inclusions.length > 0 && (
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold">
              {isAr ? "تشمل" : "Includes"}
            </h3>
            <ul className="flex flex-col gap-3">
              {inclusions.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  {checkmarkIcon ? (
                    <Image
                      src={checkmarkIcon}
                      alt={`checkmark icon for ${item}`}
                      width={25}
                      height={25}
                    />
                  ) : (
                    <GiCheckMark color="green" size={25} />
                  )}
                  <p className="font-normal text-lg text-[rgba(26,26,26,1)]">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="w-full h-px bg-gray-300" />

        <div className="flex items-center gap-2">
          <span className="text-4xl font-bold text-[rgba(48,51,57,1)]">
            {price}$
          </span>
          <small className="text-xl font-normal text-[rgba(103,106,110,1)]">
            {isAr ? "/شهريا" : "/month"}
          </small>
        </div>

        {/* WhatsApp button */}
        <Link
          href="https://wa.me/"
          onClick={(e) => e.stopPropagation()}
          className={`
            w-full px-3 py-3 text-lg md:text-2xl font-semibold rounded-full flex items-center justify-center gap-4 transition-colors duration-300
            ${
              isSelected
                ? "bg-[#259ccb] text-white border-none"
                : "bg-white text-[rgba(15,18,25,1)] border border-gray-400"
            }
          `}
        >
          <Image
            src="/assets/icons/whatsapp.svg"
            alt="whatsapp icon"
            width={30}
            height={30}
          />
          {isAr ? "تواصل واتساب" : "Contact via WhatsApp"}
        </Link>
      </div>
    </div>
  );
};

export default Package;
