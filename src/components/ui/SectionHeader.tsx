import AnimatedDiv from "@/components/ui/AnimatedWrapper";

const SectionHeader = ({
  label,
  title,
  desc,
  color,
  className,
}: {
  label?: string;
  title?: string;
  desc?: string | React.ReactNode;
  color?: string;
  className?: string;
}) => {
  return (
    <AnimatedDiv
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      viewport={{ once: true, margin: "-80px", amount: 0.4 }}
      className={`text-center space-y-6 mt-5 px-1 sm:px-0 flex flex-col items-center justify-center gap-7 ${className}`}
    >
      {label && (
        <div className="text-2xl sm:text-2xl md:text-3xl font-semibold text-[#1aa1ed]">
          {label}
        </div>
      )}
      {title && (
        <h2
          className={`text-4xl sm:text-3xl md:text-5xl font-bold ${color ? color : "text-text-secondary"}`}
        >
          {title}
        </h2>
      )}
      {desc && (
        <p
          className={`${color ? color : "text-text-secondary"} text-base sm:text-lg md:text-xl w-full sm:w-[85%] md:w-[80%] mx-auto`}
        >
          {desc}
        </p>
      )}
    </AnimatedDiv>
  );
};

export default SectionHeader;
