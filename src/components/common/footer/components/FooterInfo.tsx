import { INFO } from "@/lib/constants";
import Image from "next/image";
import { t } from "@/lib/utils";

interface FooterInfoProps {
  lang: "ar" | "en";
}

const FooterInfo = ({ lang }: FooterInfoProps) => (
  <div className="flex flex-wrap items-stretch justify-between gap-5 gap-y-10">
    {INFO.map((item, index) => (
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
          <h5 className="text-sm md:text-lg font-semibold pt-1">
            {typeof item.value === "object" ? t(item.value, lang) : item.value}
          </h5>
        </div>
      </div>
    ))}
  </div>
);

export default FooterInfo;
