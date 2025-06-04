// app/layout.tsx

import "./globals.css";

export const metadata = {
  title: "TechToken Innovation Market",
  description:
    "Yapay zeka, SaaS çözümleri ve yazılım projelerini tokenize ederek yatırımcılarla buluşturan RWA yatırım platformu.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className="bg-background text-foreground font-sans">{children}</body>
    </html>
  );
}
