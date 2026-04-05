import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

const LinkBtn = ({
  lang,
  href,
  bg,
  label,
}: {
  lang: string;
  href: string;
  bg: string;
  label: { ar: string; en: string };
}) => (
  <Link
    href={href}
    className={`group cursor-pointer w-fit mx-auto ${bg} text-white font-semibold text-lg md:text-xl px-8 py-3 rounded-full flex items-center gap-4`}
    dir={lang === "ar" ? "rtl" : "ltr"}
  >
    {lang === "ar" ? label.ar : label.en}
    {lang === "ar" ? (
      <ArrowLeftIcon className="w-6 h-6 group-hover:-translate-x-2 transition-all duration-300" />
    ) : (
      <ArrowRightIcon className="w-6 h-6 group-hover:translate-x-2 transition-all duration-300" />
    )}
  </Link>
);

export default LinkBtn;
