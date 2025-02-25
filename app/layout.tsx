import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// import { MobileNav } from "@/components/mobile-nav"
import type React from "react"; // Added import for React
import Sidebar from "@/components/side-bar";
import { MobileNav } from "@/components/mobile-nav";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Raj Maharjan - Portfolio",
  description: "Personal portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex">
          <div className="md:basis-[15%]  basis-[10%] hidden md:block ">
            <Sidebar />
          </div>
          <MobileNav />
          <div className="flex-1 flex flex-col">
            <main className="">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
