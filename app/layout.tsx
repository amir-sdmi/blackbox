import type { Metadata } from "next";
import "./globals.css";
import texts from "@/data/texts.json";

export const metadata: Metadata = {
  title: texts.metadata.title,
  description: texts.metadata.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className="dark" suppressHydrationWarning>
      <body
        className="antialiased bg-black font-vazirmatn"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
