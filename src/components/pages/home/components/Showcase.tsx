"use client";
import { useGlobalStore } from "@/store/useGlobalStore";
import Image from "next/image";
import AnimatedDiv from "@/components/ui/AnimatedWrapper";
import LinkBtn from "@/components/ui/LinkBtn";
import { HeroSection } from "@/lib/types/home-types";

const Showcase = ({ hero }: { hero: HeroSection }) => {
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
          <div className="w-full flex flex-col gap-10">
            <h1 className="text-white font-bold text-xl md:text-5xl">
              {hero?.title ||
                (lang === "ar"
                  ? "انطلق بعلامتك إلى مدار جديد من النجاح"
                  : "Launch your brand into a new orbit of success")}
            </h1>
            <p className="text-white font-normal text-lg md:text-xl leading-relaxed text-center">
              {hero?.content ||
                (lang === "ar"
                  ? "مع مدار، نحول الأفكار إلى استراتيجيات تسويق فعّالة تبني حضورًا قويًا لعلامتك التجارية وتزيد من تفاعل عملائك."
                  : "With Madar, we turn ideas into effective marketing strategies that build a strong presence for your brand and increase customer engagement.")}
            </p>
          </div>

          {/* button */}
          <LinkBtn
            lang={lang}
            href="/contact"
            bg="bg-[#259CCB]"
            label={{ ar: "تواصل معنا", en: "Contact Us" }}
          />
        </div>
      </AnimatedDiv>

      {/* Animated Content Div */}
      <div className="relative w-full min-h-[35vh]">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full">
          <Image
            src="/assets/images/Ellipse 1.svg"
            alt="ellipse 1"
            fill
            className="w-30 md:w-15"
          />
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-[70%]">
          <Image
            src="/assets/images/Ellipse 2.svg"
            alt="ellipse 2"
            fill
            className="w-30 md:w-15"
          />
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[40%] h-[40%]">
          <Image
            src="/assets/images/Ellipse 3.svg"
            alt="ellipse 3"
            fill
            className="w-30 md:w-15"
          />
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
          <AnimatedDiv
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          >
            <Image
              src="/assets/images/madar-circle.svg"
              alt="madar circle"
              width={120}
              height={120}
              className="w-18 md:w-30"
            />
          </AnimatedDiv>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
