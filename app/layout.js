import Footer from "@/components/common/Footer/Footer";
import Header from "@/components/common/Header/Header";
import Provider from "@/utils/Provider";
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
  title: {
    default: "Portfolio",
    template: "%s - Portfolio",
  },
  description:
    "Md Sabbir Hossain – Full Stack MERN Developer from Bangladesh. I create modern, responsive websites and web applications using Next.js, React, Node.js, Express, and MongoDB. Explore my portfolio to see projects in real-time apps, authentication systems, and scalable solutions",
  twitter: {
    card: "summary_large_image",
  },
};

// themeColor
export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#009966" },
    { media: "(prefers-color-scheme: dark)", color: "#009966" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${ovo.variable} font-outfit`}>
        <Provider>
          <Header />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
