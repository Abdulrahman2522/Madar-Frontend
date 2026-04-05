import { useEffect, useRef } from "react";
import { useInView, animate } from "framer-motion";

export default function AnimatedNumber({ value }: { value: string }) {
  const prefix = value.startsWith("+") ? "+" : "";
  const suffix = value.endsWith("%") ? "%" : "";
  const numeric = parseInt(value.replace(/[^0-9]/g, ""), 10);

  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const controls = animate(0, numeric, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(val) {
        if (ref.current) {
          ref.current.textContent = `${prefix}${Math.floor(val)}${suffix}`;
        }
      },
    });
    return () => controls.stop();
  }, [inView, numeric, prefix, suffix]);

  return (
    <span ref={ref} className="tabular-nums text-2xl md:text-5xl">
      {prefix}0{suffix}
    </span>
  );
}
