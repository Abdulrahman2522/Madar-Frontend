import { El_Messiri } from "next/font/google";
import "./globals.css";
import Footer from "@/components/common/footer/Footer";
import MobileNavbar from "@/components/ui/MobileNavbar";

const elMessiri = El_Messiri({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={`bg-white ${elMessiri.className}`}>
        {/* `Children` contains Header and Main Content */}
        {children}

        <MobileNavbar />

        <Footer />
      </body>
    </html>
  );
}
