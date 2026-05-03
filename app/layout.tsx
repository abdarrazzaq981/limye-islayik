import type { Metadata } from "next";
import "./globals.css";
import BottomNav from "@/components/BottomNav";

export const metadata: Metadata = {
  title: "Limyè Islayik",
  description: "Platfòm aprann Islam an Kreyòl Ayisyen — Islamic Light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ht" className="h-full">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-cream text-text-primary pb-20">
        <main className="flex-1">{children}</main>
        <BottomNav />
      </body>
    </html>
  );
}
