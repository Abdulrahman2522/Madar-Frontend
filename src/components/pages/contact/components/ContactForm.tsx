"use client";

import { Variants, motion } from "framer-motion";

import AnimatedDiv from "@/components/ui/AnimatedWrapper";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";

type Lang = "ar" | "en";

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  projectType: string;
  message: string;
};

const translations: Record<
  Lang,
  {
    fullName: string;
    email: string;
    phone: string;
    companyName: string;
    projectType: string;
    message: string;
    submit: string;
  }
> = {
  ar: {
    fullName: "الاسم الكامل",
    email: "البريد الإلكتروني",
    phone: "رقم الجوال",
    companyName: "اسم الشركة",
    projectType: "نوع المشروع",
    message: "رسالتك",
    submit: "أرسل طلبك الآن",
  },
  en: {
    fullName: "Full Name",
    email: "Email Address",
    phone: "Phone Number",
    companyName: "Company Name",
    projectType: "Project Type",
    message: "Your Message",
    submit: "Send Your Request",
  },
};

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.08 },
  },
};

const fieldVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const inputBase =
  "w-full bg-[#B5C5ED1F] text-white rounded-xl px-5 py-4 placeholder-white/40 text-lg font-medium outline-none transition-all duration-200 focus:border-cyan-400/60 focus:bg-[#1e3a6e]/80 focus:ring-1 focus:ring-cyan-400/30";

interface ContactFormProps {
  lang?: Lang;
}

export default function ContactForm({ lang = "ar" }: ContactFormProps) {
  const t = translations[lang];
  const isRtl = lang === "ar";

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 1000));
    console.log(data);
  };

  return (
    <div
      dir={isRtl ? "rtl" : "ltr"}
      className="min-h-screen flex items-center justify-center px-4 py-12"
    >
      <AnimatedDiv
        className="w-full bg-white/5 border border-[#5B7ED71F] rounded-2xl px-[42px] py-[45px]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Full Name */}
          <AnimatedDiv variants={fieldVariants}>
            <input
              {...register("fullName", { required: true })}
              placeholder={t.fullName}
              className={`${inputBase} ${isRtl ? "text-right" : "text-left"} ${errors.fullName ? "border-red-400/60" : ""}`}
            />
          </AnimatedDiv>

          {/* Email + Phone */}
          <AnimatedDiv
            variants={fieldVariants}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <input
              {...register("email", { required: true })}
              placeholder={t.email}
              type="email"
              className={`${inputBase} ${isRtl ? "text-right" : "text-left"} ${errors.email ? "border-red-400/60" : ""}`}
            />
            <input
              {...register("phone", { required: true })}
              placeholder={t.phone}
              type="tel"
              className={`${inputBase} ${isRtl ? "text-right" : "text-left"} ${errors.phone ? "border-red-400/60" : ""}`}
            />
          </AnimatedDiv>

          {/* Company + Project Type */}
          <AnimatedDiv
            variants={fieldVariants}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <input
              {...register("companyName", { required: true })}
              placeholder={t.companyName}
              className={`${inputBase} ${isRtl ? "text-right" : "text-left"} ${errors.companyName ? "border-red-400/60" : ""}`}
            />
            <input
              {...register("projectType", { required: true })}
              placeholder={t.projectType}
              className={`${inputBase} ${isRtl ? "text-right" : "text-left"} ${errors.projectType ? "border-red-400/60" : ""}`}
            />
          </AnimatedDiv>

          {/* Message */}
          <AnimatedDiv variants={fieldVariants}>
            <textarea
              {...register("message", { required: true })}
              placeholder={t.message}
              rows={6}
              className={`${inputBase} resize-none ${isRtl ? "text-right" : "text-left"} ${errors.message ? "border-red-400/60" : ""}`}
            />
          </AnimatedDiv>

          {/* Submit */}
          <AnimatedDiv variants={fieldVariants} className="flex justify-end">
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="cursor-pointer flex items-center gap-2 disabled:opacity-60 bg-[#259CCB] text-white font-bold text-sm px-7 py-3.5 rounded-full transition-colors duration-200"
            >
              {isSubmitting ? (
                <span className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
              ) : (
                <Send size={16} className={isRtl ? "rotate-180" : ""} />
              )}
              {t.submit}
            </motion.button>
          </AnimatedDiv>
        </motion.form>
      </AnimatedDiv>
    </div>
  );
}
