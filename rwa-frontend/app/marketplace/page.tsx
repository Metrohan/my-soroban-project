// app/marketplace/page.tsx

import React from "react";

const filterOptions = {
  asset_type: ["Yapay Zeka Uygulaması", "SaaS Platformu", "Patentli Yazılım", "API Servisi"],
  location: ["Kuzey Amerika", "Avrupa", "Asya-Pasifik", "Uzaktan Geliştirilen"],
  category: ["Sağlık Teknolojileri", "FinTech Çözümleri", "Eğitim Teknolojileri", "Veri Analitiği & ML"],
  certification: ["MVP Hazır", "Patent Başvurusu Yapıldı", "Regülasyon Uyumlu", "Güvenlik Denetimi Geçti"],
};

const sampleAssets = [
  {
    id: "1",
    name: "AI-Powered Analytics Suite",
    symbol: "TAI",
    creator: "InnovateTech Labs",
    date: "2025-06-01",
    specs: "SaaS, AI, Veri Analitiği, Bulut Tabanlı",
    price_per_token: "15 USD",
    total_supply: 1000000,
    sold_percentage: 45,
  },
  // ... Diğer örnek varlıklar
];

export default function Marketplace() {
  return (
    <main className="p-6 bg-background min-h-screen font-sans text-foreground">
      <h1 className="text-4xl font-bold mb-6 font-poppins">Yenilikçi Projeler</h1>

      {/* Filtreler */}
      <section className="mb-6 flex flex-wrap gap-4 text-sm">
        {Object.entries(filterOptions).map(([key, values]) => (
          <div key={key}>
            <label className="font-semibold block mb-1 capitalize">{key.replace("_", " ")}</label>
            <select className="border rounded px-3 py-1 w-48" defaultValue="">
              <option value="">Tümü</option>
              {values.map((v) => (
                <option key={v} value={v}>
                  {v}
                </option>
              ))}
            </select>
          </div>
        ))}
      </section>

      {/* Varlık Kartları */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sampleAssets.map(({ id, name, symbol, creator, date, specs, price_per_token, sold_percentage }) => (
          <div key={id} className="bg-white rounded-lg shadow p-4 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-semibold mb-1 font-poppins">{name} ({symbol})</h2>
              <p className="text-sm text-gray-600 mb-1">{creator}</p>
              <p className="text-sm text-gray-600 mb-2">{date}</p>
              <p className="text-sm mb-2">{specs}</p>
            </div>
            <div className="mt-auto">
              <p className="font-semibold">{price_per_token} / token</p>
              <div className="w-full bg-gray-200 rounded h-3 mt-2 overflow-hidden">
                <div
                  className="bg-primary h-3"
                  style={{ width: `${sold_percentage}%` }}
                  aria-label={`${sold_percentage}% satıldı`}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Metrikler */}
      <section className="mt-10 grid grid-cols-3 gap-6 text-center font-poppins">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold">Toplam Tokenize Edilen Değer</h3>
          <p className="text-xl font-bold mt-1">12,500,000 USD</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold">Aktif Katılımcılar</h3>
          <p className="text-xl font-bold mt-1">1,350</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold">Başarıyla Gerçekleşen Yatırımlar</h3>
          <p className="text-xl font-bold mt-1">5,420</p>
        </div>
      </section>
    </main>
  );
}
