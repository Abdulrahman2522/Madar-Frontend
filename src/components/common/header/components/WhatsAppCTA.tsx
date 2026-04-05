import Link from "next/link";
import Image from "next/image";
import whatsappIcon from "../../../../../public/assets/icons/whatsapp.svg";

interface WhatsAppCTAProps {
  isRtl: boolean;
  phone: string;
}

const WhatsAppCTA = ({ isRtl, phone }: WhatsAppCTAProps) => (
  <Link
    href={`https://wa.me/${phone}`}
    target="_blank"
    rel="noreferrer"
    className="w-full flex items-center justify-center gap-2 bg-transparent border border-white/30 hover:border-white/60 text-white text-base md:text-sm font-semibold px-6 py-3 rounded-full transition-all duration-200 whitespace-nowrap"
  >
    <Image src={whatsappIcon} alt="WhatsApp" width={25} height={25} />
    {isRtl ? "تواصل واتساب" : "WhatsApp"}
  </Link>
);

export default WhatsAppCTA;
