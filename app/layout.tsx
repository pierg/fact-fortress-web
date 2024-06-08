import "./css/style.css";
import { Inter } from "next/font/google";
import Header from "@/components/ui/header";
import Banner from "@/components/banner";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Fact Fortress",
  description: "On-Chain Zero-Knowledge Proof Solution to Fact-Checking",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-inter antialiased bg-white text-gray-900 tracking-tight`}
      >
        <div className="Simpleflex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
          <Header />
          {children}
          <Banner />
        </div>
        <GoogleAnalytics gaId="G-5ZX3V137HF" />
      </body>
    </html>
  );
}
