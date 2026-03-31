"use client";

import { useGlobalStore } from "@/store/useGlobalStore";
import Image from "next/image";
import madarImg from "@/../public/assets/images/madar.svg";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { ChevronDown } from "lucide-react";

const NAV_LINKS = [
  { key: "home", ar: "الرئيسية", en: "Home", active: true },
  { key: "about", ar: "نبذة عنا", en: "About Us" },
  { key: "works", ar: "أعمالنا", en: "Our Works" },
  { key: "services", ar: "خدماتنا", en: "Services" },
  { key: "contact", ar: "تواصل معنا", en: "Contact Us" },
];

const LANGUAGES = [
  { code: "ar", label: "AR", flag: "🇸🇦" },
  { code: "en", label: "EN", flag: "🇺🇸" },
];

const Header = () => {
  const lang = useGlobalStore((state) => state.lang) as "ar" | "en";
  const setLang = useGlobalStore((state) => state.setLang);
  const [langOpen, setLangOpen] = useState(false);
  const isRtl = lang === "ar";

  return (
    <header
      className="w-full px-4 py-3 flex justify-center"
      dir={isRtl ? "rtl" : "ltr"}
    >
      {/* Pill container */}
      <nav className="w-full max-w-275 bg-[#1a1e2e] rounded-full flex items-center justify-between px-5 py-3 shadow-lg">
        {/* Logo — right in RTL */}
        <div className="flex items-center shrink-0">
          <Image
            src={madarImg}
            alt="Madar Logo"
            width={110}
            height={40}
            priority
          />
        </div>

        {/* Nav Links — center */}
        <ul className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <li key={link.key}>
              <a
                href="#"
                className={`text-sm font-medium transition-colors duration-200 ${
                  link.active
                    ? "text-[#6a8fff] border-b border-[#6a8fff] pb-0.5"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {isRtl ? link.ar : link.en}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side — Language selector + WhatsApp CTA */}
        <div className="flex items-center gap-3">
          {/* Language Dropdown */}
          <div className="relative">
            <button
              onClick={() => setLangOpen((p) => !p)}
              className="flex items-center gap-1.5 text-white text-sm bg-white/10 hover:bg-white/15 transition px-3 py-1.5 rounded-full"
            >
              <span className="text-base">
                {LANGUAGES.find((l) => l.code === lang)?.flag}
              </span>
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`}
              />
            </button>

            {langOpen && (
              <ul className="absolute top-full mt-2 bg-[#1a1e2e] border border-white/10 rounded-xl overflow-hidden shadow-xl z-50 min-w-[100px]">
                {LANGUAGES.map((l) => (
                  <li key={l.code}>
                    <button
                      onClick={() => {
                        setLang(l.code as "ar" | "en");
                        setLangOpen(false);
                      }}
                      className={`w-full flex items-center gap-2 px-4 py-2 text-sm transition-colors ${
                        lang === l.code
                          ? "text-[#6a8fff] bg-white/5"
                          : "text-white/70 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <span>{l.flag}</span>
                      <span>{l.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/YOUR_NUMBER"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-transparent border border-white/30 hover:border-white/60 text-white text-sm px-4 py-2 rounded-full transition-all duration-200 whitespace-nowrap"
          >
            <FaWhatsapp size={18} className="text-[#25D366]" />
            {isRtl ? "تواصل واتساب" : "WhatsApp"}
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
