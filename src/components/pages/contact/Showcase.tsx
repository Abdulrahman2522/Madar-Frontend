"use client";

import AnimatedDiv from "@/components/ui/AnimatedWrapper";
import ContactForm from "./components/ContactForm";
import SectionHeader from "@/components/ui/SectionHeader";
import SocialLinks from "./components/SocialLinks";
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
        <div className="w-full flex flex-col items-center gap-10 mb-6">
          {/* Title and socials */}
          <div className="flex flex-col gap-6">
            <SectionHeader
              label="Contact Us"
              title="Ready to start your project?"
              desc="Have a project in mind or need a quote? Our team is ready to assist you with expert advice and tailored solutions."
              color="text-white"
            />

            <SocialLinks />
          </div>
        </div>

        {/* Form */}
        <ContactForm lang={lang} />
      </AnimatedDiv>
    </section>
  );
};

export default Showcase;
