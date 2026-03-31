"use client";
import { motion } from "framer-motion";
import { ComponentProps } from "react";

type T_AnimatedDivProps = ComponentProps<typeof motion.div>;

export default function AnimatedDiv(props: T_AnimatedDivProps) {
  return <motion.div {...props} />;
}
