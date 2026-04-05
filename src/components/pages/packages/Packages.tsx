"use client";

import { BiSolidZap } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { IoRocketSharp } from "react-icons/io5";
import Package from "@/components/pages/packages/components/Package";
import SectionHeader from "@/components/ui/SectionHeader";
import { useState } from "react";

const PACKAGES = [
  {
    key: "basic",
    titleAr: "الباقة الأساسية",
    titleEn: "Basic Package",
    descAr: "حل مناسب للشركات الناشئة لبناء حضور رقمي قوي.",
    descEn:
      "A suitable solution for startups to build a strong digital presence.",
    inclusionsAr: [
      "إدارة حسابين سوشيال ميديا",
      "12 منشور شهريًا",
      "تقارير أداء شهرية",
    ],
    inclusionsEn: [
      "Manage 2 social media accounts",
      "12 posts per month",
      "Monthly performance reports",
    ],
    price: 7000,
    icon: <BiSolidZap color="rgba(24, 45, 98, 1)" size={25} />,
    badgeAr: "بداية عملية إدارة وتسويق فعال",
    badgeEn: "Start managing & marketing effectively",
  },
  {
    key: "social",
    titleAr: "باقة سوشيال ميديا",
    titleEn: "Social Media Package",
    descAr: "حل مناسب للشركات الناشئة لبناء حضور رقمي قوي.",
    descEn:
      "A suitable solution for startups to build a strong digital presence.",
    inclusionsAr: [
      "إدارة حسابين سوشيال ميديا",
      "12 منشور شهريًا",
      "تقارير أداء شهرية",
    ],
    inclusionsEn: [
      "Manage 2 social media accounts",
      "12 posts per month",
      "Monthly performance reports",
    ],
    price: 7000,
    icon: <FaStar color="rgba(234, 179, 8, 1)" size={25} />,
    badgeAr: "الأكثر طلبًا",
    badgeEn: "Most Popular",
  },
  {
    key: "growth",
    titleAr: "باقة النمو",
    titleEn: "Growth Package",
    descAr: "حل مناسب للشركات الناشئة لبناء حضور رقمي قوي.",
    descEn:
      "A suitable solution for startups to build a strong digital presence.",
    inclusionsAr: [
      "إدارة حسابين سوشيال ميديا",
      "12 منشور شهريًا",
      "تقارير أداء شهرية",
    ],
    inclusionsEn: [
      "Manage 2 social media accounts",
      "12 posts per month",
      "Monthly performance reports",
    ],
    price: 7000,
    icon: <IoRocketSharp color="rgba(24, 45, 98, 1)" size={25} />,
    badgeAr: "للنمو السريع",
    badgeEn: "For Rapid Growth",
  },
];

interface PackagesProps {
  lang?: "ar" | "en";
}

const Packages = ({ lang = "ar" }: PackagesProps) => {
  const [selectedKey, setSelectedKey] = useState<string | null>(null);

  return (
    <section className="w-full flex items-center justify-center py-18 px-3 md:px-0">
      <div className="container mx-auto flex flex-col gap-12">
        <SectionHeader
          title="Choose the package that suits your business growth"
          desc="Choose from our packages that combine tech solutions and digital marketing to help you build a strong presence and achieve your goals with ease."
        />

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10">
          {PACKAGES.map((pkg) => (
            <Package
              key={pkg.key}
              lang={lang}
              title={lang === "ar" ? pkg.titleAr : pkg.titleEn}
              desc={lang === "ar" ? pkg.descAr : pkg.descEn}
              inclusions={lang === "ar" ? pkg.inclusionsAr : pkg.inclusionsEn}
              price={pkg.price}
              icon={pkg.icon}
              badgeText={lang === "ar" ? pkg.badgeAr : pkg.badgeEn}
              isSelected={selectedKey === pkg.key}
              onSelect={() =>
                setSelectedKey(selectedKey === pkg.key ? null : pkg.key)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
