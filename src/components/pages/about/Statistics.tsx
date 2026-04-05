import SectionHeader from "@/components/ui/SectionHeader";
import StatisticsData from "./components/StatisticsData";
import { StatsSection } from "@/lib/types/about-types";

const Statistics = ({
  lang,
  stats,
}: {
  lang: "ar" | "en";
  stats?: StatsSection;
}) => {
  return (
    <section className="w-full flex items-center justify-center py-18 px-3 md:px-0">
      <div className="container mx-auto flex flex-col items-center justify-center gap-10">
        {/* Section Header */}
        <SectionHeader title={stats?.title} desc={stats?.content} />

        {/* Statistics */}
        <StatisticsData lang={lang} items={stats?.items} />
      </div>
    </section>
  );
};

export default Statistics;
