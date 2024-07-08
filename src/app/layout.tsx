import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/main.scss";
import Header from "@/components/AppComponents/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
        <h1>whatsapp</h1>
        <h1>Footer</h1>
      </body>
    </html>
  );
}
