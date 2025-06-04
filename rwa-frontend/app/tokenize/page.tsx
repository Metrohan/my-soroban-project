// app/tokenize/page.tsx

import React, { useState } from "react";

const steps = [
  "Proje Bilgileri",
  "Teknik Detaylar",
  "Yasal & Lisans Belgeleri",
  "Token Ekonomisi",
  "Yayınlama & Pazarlama",
];

const descriptions = [
  "Proje adınızı, kategori ve açıklamanızı girin.",
  "Teknik altyapı, platform ve API bilgilerini detaylandırın.",
  "Lisanslar, patent başvuruları ve uyumluluk dokümanlarını yükleyin.",
  "Token sayısı, fiyatlandırma ve satış stratejilerini belirtin.",
  "Projeyi yayınlayıp yatırımcılara sunmak için onaylayın.",
];

export default function Tokenize() {
  const [step, setStep] = useState(0);

  return (
    <main className="p-6 bg-background min-h-screen font-sans text-foreground">
      <h1 className="text-3xl font-bold mb-6 font-poppins">Tokenizasyon Süreci</h1>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          Adım {step + 1}: {steps[step]}
        </h2>
        <p className="text-sm text-gray-600">{descriptions[step]}</p>
      </div>

      <div className="flex gap-4">
        <button
          disabled={step === 0}
          onClick={() => setStep((prev) => Math.max(prev - 1, 0))}
          className="bg-gray-300 px-4 py-2 rounded disabled:opacity-50"
        >
          Geri
        </button>
        <button
          disabled={step === steps.length - 1}
          onClick={() => setStep((prev) => Math.min(prev + 1, steps.length - 1))}
          className="bg-primary text-white px-4 py-2 rounded disabled:opacity-50"
        >
          İleri
        </button>
      </div>
    </main>
  );
}
