import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@componets/navbar";



export const metadata: Metadata = {
  title: "Fashion WoW",
  description: "A small forum for wow transmogs.",
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="overflow-hidden">
        <Navbar />
        <main className="mx-auto border-r border-l h-screen border-gray-300 max-w-[900px] overflow-y-auto hide-scrollbar">
           {children}
        </main>
      </body>
    </html>
  );
}
