import AnimatedDiv from "@/components/ui/AnimatedWrapper";
import { FOOTER_CONTENT } from "@/lib/constants";
import Image from "next/image";
import madarImg from "@/../public/assets/images/madar.svg";
import { t } from "@/lib/utils";

interface FooterBrandProps {
  lang: "ar" | "en";
}

const FooterBrand = ({ lang }: FooterBrandProps) => (
  <div className="flex flex-col gap-5 w-full lg:w-auto justify-center items-center lg:items-start">
    <AnimatedDiv
      className="cursor-pointer"
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.3 }}
    >
      <Image src={madarImg} alt="Madar Logo" width={161} height={60} />
    </AnimatedDiv>
    <p className="text-base md:text-lg max-w-90 leading-loose text-gray-300 text-center lg:text-start">
      {t(FOOTER_CONTENT.description, lang)}
    </p>
  </div>
);

export default FooterBrand;
