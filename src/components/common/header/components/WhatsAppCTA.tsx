import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

interface WhatsAppCTAProps {
  isRtl: boolean;
  phone: string;
}

const WhatsAppCTA = ({ isRtl, phone }: WhatsAppCTAProps) => (
  <Link
    href={`https://wa.me/${phone}`}
    target="_blank"
    rel="noreferrer"
    className="flex items-center gap-2 bg-transparent border border-white/30 hover:border-white/60 text-white text-sm font-semibold px-6 py-3 rounded-full transition-all duration-200 whitespace-nowrap"
  >
    <FaWhatsapp size={25} className="text-[#25D366]" />
    {isRtl ? "تواصل واتساب" : "WhatsApp"}
  </Link>
);

export default WhatsAppCTA;
