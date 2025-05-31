import type { Metadata } from "next";
import {Inter} from 'next/font/google'
import "./globals.css";
import Navbar from "./component/navbar";

const inter = Inter({ subsets: ['latin']})
export const metadata: Metadata = {
  title: "Next.js tutorial",
  description: "build stuff",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar />
       <main className='px-8 py-20 max-w-6xl mx-auto '>{children}</main>
      </body>
    </html>
  );
}
