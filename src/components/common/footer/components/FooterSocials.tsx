import Image from "next/image";
import Link from "next/link";
import { SOCIALMEDIA } from "@/lib/constants";

const FooterSocials = () => (
  <ul className="flex justify-between items-start gap-5">
    {SOCIALMEDIA.map((link, index) => (
      <li key={index}>
        <Link
          href={link.url}
          className="group flex items-center gap-3 text-gray-300 transition-all duration-300"
        >
          <span className="transition-transform duration-300 group-hover:scale-110">
            <Image src={link.image} alt={link.alt} width={40} height={40} />
          </span>
        </Link>
      </li>
    ))}
  </ul>
);

export default FooterSocials;
