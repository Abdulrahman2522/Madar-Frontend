"use client";
import AnimatedDiv from "@/components/ui/AnimatedWrapper";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useGlobalStore } from "@/store/useGlobalStore";

interface NavLinksProps {
  isRtl: boolean;
}

const NavLinks = ({ isRtl }: NavLinksProps) => {
  const pathname = usePathname();
  const { lang } = useGlobalStore((state) => state);

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
      active: pathname === `/${lang}/projects`,
      path: `/${lang}/projects`,
    },
    {
      key: "services",
      ar: "خدماتنا",
      en: "Services",
      active: pathname === `/${lang}/services`,
      path: `/${lang}/services`,
    },
    {
      key: "packages",
      ar: "الباقات",
      en: "Packages",
      active: pathname === `/${lang}/packages`,
      path: `/${lang}/packages`,
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
    <ul className="hidden lg:flex items-center gap-6">
      {NAV_LINKS.map((link) => (
        <li key={link.key}>
          <Link
            href={link.path}
            className="text-base md:text-lg font-normal relative"
          >
            <AnimatedDiv
              initial={false}
              animate={link.active ? "active" : "idle"}
              whileHover={{ color: "#3baedb", transition: { duration: 0.2 } }}
              variants={{
                idle: { color: "rgba(255,255,255,0.8)" },
                hover: { color: "rgba(255,255,255,1)" },
                active: {
                  color: "#3BAEDB",
                  borderBottom: "2px solid #3BAEDB",
                  paddingBottom: "4px",
                },
              }}
              transition={{ duration: 0.2 }}
            >
              {isRtl ? link.ar : link.en}
            </AnimatedDiv>
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default NavLinks;
