import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tyrell DaSilva - Expert Consulting Services",
  description: "Tyrell DaSilva offers expert consulting services in digital transformation and climate sensitive building design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.variable}>
      <ClientBody>
        <div className="md:ml-64 min-h-screen bg-[#18191b]">
          {children}
        </div>
      </ClientBody>
    </html>
  );
}
