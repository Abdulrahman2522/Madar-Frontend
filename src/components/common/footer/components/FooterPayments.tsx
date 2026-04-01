import Image from "next/image";
import { PAYMENT_WAYS } from "@/lib/constants";

const FooterPayments = () => (
  <div className="grid grid-cols-4 gap-4">
    {PAYMENT_WAYS.map((paymentWay, index) => (
      <div key={index} className="flex items-center justify-center p-1">
        <Image
          src={paymentWay.image}
          alt="payment way"
          width={40}
          height={40}
          className="object-contain transition-transform duration-300 hover:scale-110"
        />
      </div>
    ))}
  </div>
);

export default FooterPayments;
