import Image from "next/image";
import Link from "next/link";
import { SOCIALMEDIA } from "@/lib/constants";

const SocialLinks = () => {
  return (
    <div className="flex items-center justify-center gap-4">
      {SOCIALMEDIA.map((link, index) => (
        <Link key={index} href={link.url} target="_blank">
          <Image src={link.image} alt={link.alt} width={32} height={32} />
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;
