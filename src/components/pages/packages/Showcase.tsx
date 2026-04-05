"use client";

import AnimatedDiv from "@/components/ui/AnimatedWrapper";
import LinkBtn from "@/components/ui/LinkBtn";
import SectionHeader from "@/components/ui/SectionHeader";
import { useGlobalStore } from "@/store/useGlobalStore";

const Showcase = () => {
  const { lang } = useGlobalStore();
  return (
    <section
      className="w-full flex items-center justify-center flex-col gap-12"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <AnimatedDiv
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto text-center"
      >
        <div className="w-full flex flex-col items-center gap-10">
          {/* Title */}
          <SectionHeader
            label="Packages"
            title="ُEverything Your Business Needs... In One Package"
            desc="At Madar, we offer comprehensive packages that include digital marketing, website and app development, and technical services, making it easier for you to manage your business and achieve the best results with minimal effort."
            color="text-white"
          />

          {/* button */}
          <LinkBtn
            lang={lang}
            href="/contact"
            bg="bg-[#259CCB]"
            label={{
              ar: "ابدأ رحلتك الرقمية معنا",
              en: "Start your digital journey with us",
            }}
          />
        </div>
      </AnimatedDiv>
    </section>
  );
};

export default Showcase;
