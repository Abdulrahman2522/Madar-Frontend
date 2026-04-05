"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";

import AnimatedDiv from "@/components/ui/AnimatedWrapper";
import { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
  lang?: "ar" | "en";
}

export default function FAQItem({
  question,
  answer,
  lang = "ar",
}: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      dir={lang === "ar" ? "rtl" : "ltr"}
      onClick={() => setIsOpen((prev) => !prev)}
      className="w-full bg-[#EBF7FB] border border-[#D9D9D9] rounded-2xl px-5 py-4 cursor-pointer select-none"
    >
      {/* Header row */}
      <div className="flex items-center justify-between gap-4">
        {/* Question */}
        <span
          className={`text-text-primary font-semibold text-base ${lang === "ar" ? "text-right" : "text-left"} flex-1`}
        >
          {question}
        </span>

        {/* Icon */}
        <AnimatedDiv
          animate={{ rotate: isOpen ? 0 : 0 }}
          className="shrink-0 w-7 h-7 rounded-full border-2 border-text-primary flex items-center justify-center text-text-primary"
        >
          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.span
                key="minus"
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                transition={{ duration: 0.15 }}
              >
                <Minus size={14} strokeWidth={2.5} />
              </motion.span>
            ) : (
              <motion.span
                key="plus"
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                transition={{ duration: 0.15 }}
              >
                <Plus size={14} strokeWidth={2.5} />
              </motion.span>
            )}
          </AnimatePresence>
        </AnimatedDiv>
      </div>

      {/* Answer */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <AnimatedDiv
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden pt-3"
          >
            <p
              className={`text-black text-sm ${lang === "ar" ? "text-right" : "text-left"} mt-3 leading-relaxed`}
            >
              {answer}
            </p>
          </AnimatedDiv>
        )}
      </AnimatePresence>
    </div>
  );
}
