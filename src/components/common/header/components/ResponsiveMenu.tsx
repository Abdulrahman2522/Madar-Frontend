"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useGlobalStore } from "@/store/useGlobalStore";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LanguageSelector from "./LanguageSelector";
import WhatsAppCTA from "./WhatsAppCTA";

const ResponsiveMenu = () => {
  const [open, setOpen] = useState(false);
  const { lang, setLang } = useGlobalStore((state) => state);
  const isRtl = lang === "ar";
  const pathname = usePathname();

  const [lockedRtl, setLockedRtl] = useState(isRtl);
  const handleOpen = () => {
    setLockedRtl(isRtl);
    setOpen(true);
  };

  const side = lockedRtl ? "right-0" : "left-0";
  const hiddenTranslate = lockedRtl ? "translate-x-full" : "-translate-x-full";

  const NAV_LINKS = [
    {
      key: "home",
      ar: "الرئيسية",
      en: "Home",
      active: pathname === `/${lang}`,
      path: `/${lang}`,
    },
    {
      key: "about",
      ar: "نبذة عنا",
      en: "About Us",
      active: pathname === `/${lang}/about`,
      path: `/${lang}/about`,
    },
    {
      key: "works",
      ar: "أعمالنا",
      en: "Our Works",
      active: pathname === `/${lang}/works`,
      path: `/${lang}/works`,
    },
    {
      key: "services",
      ar: "خدماتنا",
      en: "Services",
      active: pathname === `/${lang}/services`,
      path: `/${lang}/services`,
    },
    {
      key: "contact",
      ar: "تواصل معنا",
      en: "Contact Us",
      active: pathname === `/${lang}/contact`,
      path: `/${lang}/contact`,
    },
  ];

  return (
    <>
      <button className="md:hidden" onClick={handleOpen}>
        <Menu className="text-white cursor-pointer" size={25} />
      </button>

      <nav
        dir={isRtl ? "rtl" : "ltr"}
        className={`flex flex-col gap-6 md:hidden fixed w-[80%] top-0 ${side} rounded-l-lg bg-white h-full px-5 py-6 md:px-8 md:py-4 shadow-lg transition-transform duration-300 ease-in-out z-50 ${
          open ? "translate-x-0" : hiddenTranslate
        }`}
      >
        {/* header */}
        <div className="flex items-center justify-between border-b border-[#5373da]/40 pb-4">
          <span className="text-[#5373da] font-bold text-lg">
            {isRtl ? "القائمة" : "Menu"}
          </span>
          <button onClick={() => setOpen(false)}>
            <X className="text-[#5373da] cursor-pointer" size={25} />
          </button>
        </div>

        {/* nav links */}
        <div className="flex flex-col gap-8 mt-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.key}
              href={link.path}
              onClick={() => setOpen(false)}
              className={`text-[#5373da] font-bold text-lg ${
                link.active
                  ? "bg-[#5373da] text-white px-2 py-1 rounded-md"
                  : ""
              }`}
            >
              {isRtl ? link.ar : link.en}
            </Link>
          ))}
        </div>

        {/* bottom bar */}
        <div className="absolute bottom-0 left-0 bg-[#5373da] w-full flex flex-col justify-around items-center gap-3 py-1 px-5 min-h-45">
          <div className="flex items-center justify-between w-full gap-2">
            <span className="text-white font-bold text-lg">
              {isRtl ? "اللغة" : "Language"}
            </span>
            <LanguageSelector lang={lang} setLang={setLang} />
          </div>
          <WhatsAppCTA isRtl={isRtl} phone="YOUR_NUMBER" />
        </div>
      </nav>

      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
};

export default ResponsiveMenu;
