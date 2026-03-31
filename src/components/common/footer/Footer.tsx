// components/Footer.tsx
"use client";
import { useGlobalStore } from "@/store/useGlobalStore";
import Image from "next/image";
import Link from "next/link";
import {
  footerLinks,
  paymentWays,
  socialMedia,
  info,
  footerContent,
} from "@/lib/constants";
import madarImg from "@/../public/assets/images/madar.svg";
import footerLine from "@/../public/assets/images/footer-line.svg";
import AnimatedDiv from "@/components/ui/AnimatedWrapper";
import { t } from "@/lib/utils";

const Footer = () => {
  const lang = useGlobalStore((state) => state.lang) as "ar" | "en";

  return (
    <footer
      className="bg-[#16295A] text-white w-full px-13 py-15"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <div className="container mx-auto! flex flex-col gap-10">
        <div className="flex flex-col gap-20">
          {/* Logo and Links */}
          <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-50">
            <div className="flex flex-col gap-5 w-full lg:w-auto justify-center items-center lg:items-start">
              <AnimatedDiv
                className="cursor-pointer"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={madarImg}
                  alt="Madar Logo"
                  width={161}
                  height={60}
                />
              </AnimatedDiv>

              <p className="text-base md:text-lg max-w-90 leading-loose text-gray-300 text-center lg:text-start">
                {t(footerContent.description, lang)}
              </p>
            </div>

            <div className="hidden lg:flex flex-1 items-start justify-between gap-30">
              {footerLinks.map((section) => (
                <div key={section.mainTitle.en} className="flex flex-col gap-5">
                  <h4 className="text-xl font-semibold">
                    {t(section.mainTitle, lang)}
                  </h4>
                  <ul className="flex flex-col gap-2 text-lg font-normal">
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
          </div>

          {/* Social Media and Payments */}
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
            {/* Payments */}
            <div className="grid grid-cols-4 gap-4">
              {paymentWays.map((paymentWay, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-1"
                >
                  <Image
                    src={paymentWay.image}
                    alt="payment way"
                    width={40}
                    height={40}
                    className="object-contain transition-transform duration-300 hover:scale-110"
                  />
                </div>
              ))}
            </div>

            {/* Social Media */}
            <ul className="flex justify-between items-start gap-5">
              {socialMedia.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.url}
                    className="group flex items-center gap-3 text-gray-300 transition-all duration-300"
                  >
                    <span className="transition-transform duration-300 group-hover:scale-110">
                      <Image
                        src={link.image}
                        alt={link.alt}
                        width={40}
                        height={40}
                      />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Separator */}
        <div className="w-full flex items-center justify-center">
          <Image src={footerLine} alt="Footer Line" width={1265} height={4} />
        </div>

        {/* Info */}
        <div className="flex flex-wrap items-center justify-between gap-5 gap-y-10">
          {info.map((item, index) => (
            <div
              key={index}
              className="md:w-[30%] w-full flex flex-col md:flex-row items-center gap-5 bg-[#E6ECF914] border border-[#FFFFFF1A] p-6 rounded-2xl"
            >
              <Image
                src={item.icon}
                alt={t(item.title, lang)}
                width={60}
                height={60}
                className="w-10 h-10 md:w-15 md:h-15"
              />
              <div>
                <p className="text-base md:text-lg text-gray-300 font-normal">
                  {t(item.title, lang)}
                </p>
                <h5 className="text-base md:text-lg font-semibold pt-1">
                  {typeof item.value === "object"
                    ? t(item.value, lang)
                    : item.value}
                </h5>
              </div>
            </div>
          ))}
        </div>

        {/* Separator */}
        <div className="w-full flex items-center justify-center">
          <Image src={footerLine} alt="Footer Line" width={1265} height={4} />
        </div>

        {/* Copyright */}
        <div className="text-center w-full mt-4">
          <p className="text-base text-gray-300 font-normal">
            {t(footerContent.copyright, lang)} &copy; {new Date().getFullYear()}{" "}
            {t(footerContent.companyName, lang)}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
