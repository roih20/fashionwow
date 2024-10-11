import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar";
import DialogForm from "./components/dialogForm";
import DialogFormSignUp from "./components/dialogFormSignUp";


export const metadata: Metadata = {
  title: "Fashion WoW",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="overflow-hidden">
        <Navbar />
        <DialogForm />
        <DialogFormSignUp />
        <div className="mx-auto border-r border-l overflow-y-auto h-screen border-gray-300 max-w-[900px] hide-scrollbar">
           {children}
        </div>
      </body>
    </html>
  );
}
