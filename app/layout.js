import Footer from "@/components/common/Footer/Footer";
import Header from "@/components/common/Header/Header";
import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const ovo = Ovo({
  subsets: ["latin"],
  variable: "--font-ovo",
  weight: "400",
  display: "swap",
});

export const metadata = {
  title: "Portfolio",
  description: "My personal portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${ovo.variable} font-outfit`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
