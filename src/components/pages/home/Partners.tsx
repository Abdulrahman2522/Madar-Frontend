"use client";

// import Image from "next/image";
import LinkBtn from "@/components/ui/LinkBtn";
import SectionHeader from "@/components/ui/SectionHeader";
import { useGlobalStore } from "@/store/useGlobalStore";
import { TextSection } from "@/lib/types/home-types";

// Partners Images
function PartnersLogos() {
  return <div className="grid grid-cols-4 gap-4"></div>;
}

const Partners = ({ partnersData }: { partnersData: TextSection }) => {
  const { lang } = useGlobalStore();
  return (
    <section className="flex items-center justify-center w-full py-12 bg-[rgb(24,45,98)]">
      <div className="container mx-auto relative flex flex-col items-center justify-center gap-15">
        <SectionHeader
          label={partnersData?.subtitle}
          title={partnersData?.title}
          desc={partnersData?.content}
          color="text-white!"
        />

        {/* Partners */}

        <LinkBtn
          lang={lang}
          href="/contact"
          bg="bg-[#259CCB]"
          label={{ ar: "تواصل معنا", en: "Contact Us" }}
        />

        {/* Circle */}
        {/* <Image
          src="/assets/images/circle.png"
          alt="Partners circle"
          width={200}
          height={200}
          className="absolute inset-0 object-contain w-full h-full"
        /> */}
      </div>
    </section>
  );
};

export default Partners;
