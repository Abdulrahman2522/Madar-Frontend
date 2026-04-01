"use client";

import { FOOTER_CONTENT } from "@/lib/constants";
import FooterBrand from "./components/FooterBrand";
import FooterInfo from "./components/FooterInfo";
import FooterNav from "./components/FooterNav";
import FooterPayments from "./components/FooterPayments";
import FooterSocials from "./components/FooterSocials";
import Image from "next/image";
import footerLine from "@/../public/assets/images/footer-line.svg";
import { t } from "@/lib/utils";
import { useGlobalStore } from "@/store/useGlobalStore";

const FooterDivider = () => (
  <div className="w-full flex items-center justify-center">
    <Image src={footerLine} alt="Footer Line" width={1265} height={4} />
  </div>
);

const Footer = () => {
  const lang = useGlobalStore((state) => state.lang) as "ar" | "en";

  return (
    <footer
      className="bg-[#16295A] text-white w-full px-13 py-15"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <div className="container mx-auto! flex flex-col gap-10">
        <div className="flex flex-col gap-20">
          <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-30">
            <FooterBrand lang={lang} />
            <FooterNav lang={lang} />
          </div>

          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
            <FooterPayments />
            <FooterSocials />
          </div>
        </div>

        <FooterDivider />
        <FooterInfo lang={lang} />
        <FooterDivider />

        <div className="text-center w-full mt-4">
          <p className="text-base text-gray-300 font-normal">
            {t(FOOTER_CONTENT.copyright, lang)} &copy;{" "}
            {new Date().getFullYear()} {t(FOOTER_CONTENT.companyName, lang)}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
