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
        {/* Apply saved theme before paint to avoid flash. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(()=>{try{const p=JSON.parse(localStorage.getItem("limye_islayik_progress")||"{}");const t=p?.settings?.theme;if(t==="dark"||t==="light")document.documentElement.setAttribute("data-theme",t);}catch{}})()`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col pb-20" style={{ background: "var(--ll-bg)", color: "var(--ll-fg)" }}>
        <main className="flex-1">{children}</main>
        <BottomNav />
      </body>
    </html>
  );
}
