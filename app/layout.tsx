import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Ave Musica - Хорът на музикалното изкуство",
  description: "Официален уебсайт на Ave Musica - професионален хор, специализиран в класическа хорова музика",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bg" className="scroll-smooth">
      <body
        className={`${montserrat.variable} ${inter.variable} antialiased bg-white text-black`}
      >
        {children}
      </body>
    </html>
  );
}
