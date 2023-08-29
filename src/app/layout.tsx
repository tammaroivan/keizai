import Sidebar from "@/components/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import Providers from "@/components/Providers";
import { AppLoader } from "@/components/AppLoader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Keizai",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <main className="flex min-h-screen dark:bg-background">
            <Sidebar />
            <AppLoader>{children}</AppLoader>
          </main>
        </Providers>
      </body>
    </html>
  );
}
