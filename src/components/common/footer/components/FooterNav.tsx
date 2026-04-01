import AnimatedDiv from "@/components/ui/AnimatedWrapper";
import { FOOTER_LINKS } from "@/lib/constants";
import Link from "next/link";
import { t } from "@/lib/utils";

interface FooterNavProps {
  lang: "ar" | "en";
}

const FooterNav = ({ lang }: FooterNavProps) => (
  <div className="w-full hidden md:flex flex-1 items-start justify-between gap-4 md:gap-8 lg:gap-20">
    {FOOTER_LINKS.map((section) => (
      <div key={section.mainTitle.en} className="flex flex-col gap-3">
        <h4 className="text-lg md:text-xl font-semibold">
          {t(section.mainTitle, lang)}
        </h4>
        <ul className="flex flex-col gap-2 text-sm md:text-sm lg:text-base font-normal">
          {section.links.map((link) => (
            <li key={link.href}>
              <AnimatedDiv
                whileHover={{ x: lang === "ar" ? 10 : -10 }}
                transition={{ duration: 0.3 }}
              >
                <Link href={link.href}>{t(link.title, lang)}</Link>
              </AnimatedDiv>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

export default FooterNav;
