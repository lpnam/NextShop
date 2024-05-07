import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import SideBar from "@/ui/SideBar";
import Header from "@/ui/Header";
import { Suspense } from "react";
import LoadingW from "./loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Shop",
  description: "Generated by create next app",
  authors: { name: "lpnam", url: "https://github.com/lpnam" },
  icons: "/next.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SideBar />
        <main>
          <Header />
          <Suspense fallback={<LoadingW />}>{children}</Suspense>
        </main>
        <div className="hidden h-screen w-1/6  right-0"></div> //xl:fixed
      </body>
    </html>
  );
}
