
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ShopeContext from "@/context/ShopeContext";
import Left from "@/components/Left/Left";
import Right from "@/components/Right/Right";

const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "E-Commerce Shop",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="bg-slate-50">
          <ShopeContext>
            <Navbar />
            <div className="app">
              <div>
                <Left />
              </div>
              <div>
                {children}
              </div>
              <div>
                <Right />
              </div>
            </div>
            <Footer />
          </ShopeContext>
        </div>
      </body>
    </html>
  );
}
