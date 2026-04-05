import Header from "@/components/common/header/Header";

const Hero = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <section
      className={`w-full bg-[#182D62] pt-10 flex flex-col gap-10 md:gap-20 md:rounded-b-[50px] overflow-hidden ${className}`}
    >
      {/* Header */}
      <Header />

      {/* Showcase */}
      {children}
    </section>
  );
};

export default Hero;
