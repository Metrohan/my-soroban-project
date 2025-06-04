// app/page.tsx

import React from "react";

export const metadata = {
  title: "TechToken Innovation Market",
  description: "Yapay zeka, SaaS çözümleri ve yazılım projelerini tokenize ederek yatırımcılarla buluşturan RWA yatırım platformu.",
};

const dashboardMetrics = [
  { title: "Token Portföy Değeri", value: "12,500 USD" },
  { title: "Yatırılan Toplam Sermaye", value: "3,200,000 USD" },
  { title: "Canlı Teknoloji Projeleri", value: 24 },
  { title: "Uyumluluk ve İnceleme Durumu", value: "Tümü Onaylandı" },
];

const quickActions = [
  { label: "Projeleri Keşfet", href: "/marketplace" },
  { label: "Yatırım Payı Transferi", href: "/transfer" },
  { label: "Projeni Tokenize Et", href: "/tokenize" },
];

export default function Home() {
  return (
    <main className="p-6 bg-background min-h-screen font-sans text-foreground">
      <h1 className="text-4xl font-bold mb-2 font-poppins">TechToken Innovation Market</h1>
      <p className="mb-8 text-lg max-w-xl">
        Yapay zeka, SaaS çözümleri ve yazılım projelerini tokenize ederek yatırımcılarla buluşturan RWA yatırım platformu.
      </p>

      <section className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        {dashboardMetrics.map(({ title, value }) => (
          <div key={title} className="bg-white rounded-lg shadow p-4">
            <h2 className="font-semibold text-primary mb-1">{title}</h2>
            <p className="text-xl font-bold">{value}</p>
          </div>
        ))}
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 font-poppins">Hızlı Eylemler</h2>
        <div className="flex gap-4 flex-wrap">
          {quickActions.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="bg-secondary text-white px-6 py-3 rounded-md shadow hover:bg-secondary/90 transition"
            >
              {label}
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
