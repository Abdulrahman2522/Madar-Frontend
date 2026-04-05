import MadarRightPanel from "./MadarRightPanel";

const AboutContent = ({
  lang,
  subtitle,
  title,
  desc,
}: {
  lang: string;
  subtitle?: string;
  title: string;
  desc: string;
}) => {
  return (
    <div dir={lang === "ar" ? "rtl" : "ltr"}>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-50 items-center">
        <div className="flex flex-col gap-8">
          {subtitle && (
            <h4 className="text-2xl sm:text-2xl md:text-3xl font-semibold text-[#1aa1ed]">
              {subtitle}
            </h4>
          )}
          <h3 className="text-4xl font-bold text-text-primary">{title}</h3>
          <p className="text-xl leading-10">{desc}</p>
        </div>
        <div className="w-full min-h-100">
          {/* <Image
            src="/assets/images/madar-office.png"
            alt="About"
            width={500}
            height={500}
            priority
            className="object-cover rounded-lg"
          /> */}
          <MadarRightPanel />
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
