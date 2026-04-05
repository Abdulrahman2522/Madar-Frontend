"use client";

import Image from "next/image";
import LanguageSelector from "./components/LanguageSelector";
import Link from "next/link";
import NavLinks from "./components/NavLinks";
import WhatsAppCTA from "./components/WhatsAppCTA";
import madarImg from "@/../public/assets/images/madar.svg";
import { useGlobalStore } from "@/store/useGlobalStore";
import ResponsiveMenu from "./components/ResponsiveMenu";

const Header = () => {
  const { lang, setLang } = useGlobalStore((state) => state);
  const isRtl = lang === "ar";

  return (
    <header
      className="w-full px-6 py-3 flex justify-center"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="container mx-auto">
        <nav className="w-full bg-[#5373da]/15 rounded-full flex items-center justify-between px-5 py-3 md:px-8 md:py-4 shadow-lg">
          <Link href={`/${lang}`} className="flex items-center shrink-0">
            <Image
              src={madarImg}
              alt="Madar Logo"
              width={160}
              height={60}
              priority
              className="w-22 h-auto md:w-40"
            />
          </Link>

          <NavLinks isRtl={isRtl} />

          <div className="flex items-center gap-3">
            <div className="max-md:hidden">
              <LanguageSelector lang={lang} setLang={setLang} />
            </div>
            <div className="max-md:hidden">
              <WhatsAppCTA isRtl={isRtl} phone="YOUR_NUMBER" />
            </div>
          </div>

          <ResponsiveMenu />
        </nav>
      </div>
    </header>
  );
};

export default Header;
