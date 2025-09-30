import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// Roboto font from Google Fonts
const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

// Custom Parafina fonts
const parafinaBlack = localFont({
  src: "../../public/assets/fonts/ParafinaTrial-BlackS.otf",
  variable: "--font-parafina-black",
  display: "swap",
});

const parafinaBold = localFont({
  src: "../../public/assets/fonts/ParafinaTrial-BoldS.otf",
  variable: "--font-parafina-bold",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Winvest – Aplikasi Investasi Saham Modern",
  description:
    "Beli-jual saham secara instan, pantau portofolio real-time, dan nikmati fitur AI (coming soon). Aman, cepat, dan tepercaya.",
  metadataBase: new URL("https://winvest.example"),
  openGraph: {
    title: "Winvest – Aplikasi Investasi Saham Modern",
    description:
      "Beli-jual saham secara instan, pantau portofolio real-time, dan nikmati fitur AI (coming soon).",
    url: "/",
    siteName: "Winvest",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Winvest – Aplikasi Investasi Saham Modern",
    description:
      "Beli-jual saham secara instan, pantau portofolio real-time, dan nikmati fitur AI (coming soon).",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${roboto.variable} ${parafinaBlack.variable} ${parafinaBold.variable}`}>
      <body className="antialiased bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}
