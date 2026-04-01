import AnimatedDiv from "@/components/ui/AnimatedWrapper";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";

interface NavLinksProps {
  isRtl: boolean;
}

const NavLinks = ({ isRtl }: NavLinksProps) => (
  <ul className="hidden lg:flex items-center gap-6">
    {NAV_LINKS.map((link) => (
      <li key={link.key}>
        <Link href="#" className="text-base md:text-lg font-normal relative">
          <AnimatedDiv
            initial={false}
            animate={link.active ? "active" : "idle"}
            whileHover={{ color: "#3baedb", transition: { duration: 0.2 } }}
            variants={{
              idle: { color: "rgba(255,255,255,0.8)" },
              hover: { color: "rgba(255,255,255,1)" },
              active: { color: "#3BAEDB" },
            }}
            transition={{ duration: 0.2 }}
          >
            {isRtl ? link.ar : link.en}
          </AnimatedDiv>
        </Link>
      </li>
    ))}
  </ul>
);

export default NavLinks;
