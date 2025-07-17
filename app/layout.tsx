// app/layout.tsx

import ThemeProvider from "@/components/theme-provider";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import React from "react"; // important to allow JSX + props like children

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TrustShield",
  description: "Your app description here",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
