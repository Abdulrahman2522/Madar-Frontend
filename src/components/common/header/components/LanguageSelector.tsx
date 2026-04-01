import { redirect, usePathname } from "next/navigation";

import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { LANGUAGES } from "@/lib/constants";
import { useState } from "react";

interface LanguageSelectorProps {
  lang: "ar" | "en";
  setLang: (lang: "ar" | "en") => void;
}

const LanguageSelector = ({ lang, setLang }: LanguageSelectorProps) => {
  const [langOpen, setLangOpen] = useState(false);
  const pathname = usePathname();

  const currentFlag =
    LANGUAGES.find((l) => l.code === lang)?.flag ||
    "/assets/icons/saudi-arabia.png";

  return (
    <div className="relative">
      <button
        onClick={() => setLangOpen((p) => !p)}
        className="flex items-center gap-1.5 text-white text-sm bg-transparent hover:bg-white/15 transition px-4 py-3 rounded-full"
      >
        <ChevronDown
          size={14}
          className={`transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`}
        />
        <span className="text-base">
          <Image
            src={currentFlag}
            alt={`${lang} flag`}
            width={30}
            height={30}
          />
        </span>
      </button>

      {langOpen && (
        <ul className="absolute top-full mt-2 bg-[#1a1e2e] border border-white/10 rounded-xl overflow-hidden shadow-xl z-50 min-w-25">
          {LANGUAGES.map((l) => (
            <li key={l.code}>
              <button
                onClick={() => {
                  setLang(l.code as "ar" | "en");
                  setLangOpen(false);
                  redirect(pathname.replace(/^\/(ar|en)/, `/${l.code}`));
                }}
                className={`w-full flex items-center gap-4 px-4 py-2 text-sm transition-colors ${
                  lang === l.code
                    ? "text-[#6a8fff] bg-white/5"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
              >
                <Image
                  src={l.flag}
                  alt={`${l.code} flag`}
                  width={30}
                  height={30}
                />
                <span>{l.label}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSelector;
