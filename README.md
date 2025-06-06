# 🎨 Frontend Özelleştirme PDR

## 📋 **Proje Bilgileri**

### **Seçilen Sektör**: Teknoloji ve Yazılım  
### **Platform Adı**: TechToken Innovation Market  
### **Ana Varlık Türü**: SaaS çözümleri, yapay zeka uygulamaları, patentli yazılımlar  
### **Hedef Kitle**: Teknoloji girişimcileri, yazılım geliştiricileri, erken aşama yatırımcılar  
### **Contract_ID**: CDI7AI3K6Y6F5LL5AFVEQBZRGTK4PBYN7JSVSJLKZ3YO27UMUD2F3DN3

## 🎯 **Platform Vizyonu**

### **Ana Konsept**  
TechToken Innovation Market, yazılım tabanlı gerçek dünya varlıklarını (SaaS projeleri, yapay zeka sistemleri, lisanslı yazılımlar vb.) tokenize ederek, yatırımcıların küçük miktarlarla bile bu projelere ortak olmasını sağlayan blokzincir tabanlı bir pazaryeridir.

### **Değer Önerisi**
- **Girişimciler ve Yazılım Geliştiricileri için**: Erken finansman erişimi, global yatırımcı kitlesiyle buluşma, projelerin şeffaflıkla değerlendirilip öne çıkması. Teknik potansiyelin tokenize edilerek sürdürülebilir gelir modellerine dönüşmesi.  
- **Yatırımcılar için**: Erken aşama yüksek potansiyelli yazılım ve yapay zeka projelerine mikro yatırım imkânı, şeffaf gelir paylaşımı, platform içi oylamalarla karar süreçlerine katılım ve çeşitlendirilmiş dijital portföy oluşturma.  
- **Teknik Değerlendiriciler ve Analistler için**: Uzmanlıklarını kullanarak projeleri denetleme ve puanlama, topluluğa güvenli yatırım rehberliği sağlama ve katkı karşılığında platform token’ları ile ödüllendirilme.

## 🎨 **Görsel Kimlik Güncellemeleri**

### **Renk Paleti**
```css
--primary:    #0D47A1;
--secondary:  #00ACC1;
--accent:     #FFC107;
--background: #F5F7FA;
--foreground: #212121;
```

### **İkonlar ve Emojiler**
- **Ana Tema**: 💡 📈 🤖 🧠 🛠️ 💰  
- **Alt Kategoriler**: 🧬 🧑‍💻 📊 🧾 🎯 🌐  
- **İşlemler**: 📝 💰 📈 🔍 ✅ 🚀

### **Tipografi**
- **Başlıklar**: Poppins  
- **İçerik**: Open Sans  
- **Ton**: Sıcak, güvenilir, profesyonel

---

### **🏠 Ana Sayfa (`app/page.tsx`)**

#### **Başlık ve Açıklama**
```typescript
title: "TechToken Innovation Market"  
description: "Yapay zeka, SaaS çözümleri ve yazılım projelerini tokenize ederek yatırımcılarla buluşturan RWA yatırım platformu."
```
#### **Dashboard Kartları**
```typescript
"Portfolio Değeri" → "Token Portföy Değeri"  
"Toplam Yatırım" → "Yatırılan Toplam Sermaye"  
"Aktif Varlıklar" → "Canlı Teknoloji Projeleri"  
"Compliance Status" → "Uyumluluk ve İnceleme Durumu"
```

#### **Hızlı Eylemler**
```typescript
"Varlık Keşfet" → "Projeleri Keşfet"  
"Token Transfer" → "Yatırım Payı Transferi"  
"Tokenize Et" → "Projeni Tokenize Et"
```

### **🏪 Marketplace (`app/marketplace/page.tsx`)**
```typescript
asset_type: ["Yapay Zeka Uygulaması", "SaaS Platformu", "Patentli Yazılım", "API Servisi"]  
location: ["Kuzey Amerika", "Avrupa", "Asya-Pasifik", "Uzaktan Geliştirilen"]  
category: ["Sağlık Teknolojileri", "FinTech Çözümleri", "Eğitim Teknolojileri", "Veri Analitiği & ML"]  
certification: ["MVP Hazır", "Patent Başvurusu Yapıldı", "Regülasyon Uyumlu", "Güvenlik Denetimi Geçti"]
```
#### **Varlık Kartları**
```typescript
{
- name: "AI-Powered Analytics Suite",
- symbol: "TAI",
- creator: "InnovateTech Labs",
- date: "2025-06-01",
- specs: "SaaS, AI, Veri Analitiği, Bulut Tabanlı",
- price_per_token: "15 USD",
- total_supply: 1000000,
- sold_percentage: 45
}
```
#### **Metrikler**
```typescript
"Toplam Varlık Değeri" → "Toplam Tokenize Edilen Değer"  
"Aktif Yatırımcılar" → "Aktif Katılımcılar"  
"Tamamlanan İşlemler" → "Başarıyla Gerçekleşen Yatırımlar"
```

### **🌱 Tokenization (`app/tokenize/page.tsx`)**
#### **5 Adımlı Süreç**
```typescript
1. "Proje Bilgileri"
2. "Teknik Detaylar"
3. "Yasal & Lisans Belgeleri"
4. "Token Ekonomisi"
5. "Yayınlama & Pazarlama"
```

### **💸 Transfer (`app/transfer/page.tsx`)**

#### **Transfer Terminolojisi**
```typescript
"Token Transfer" → "Token Paylaşımı"  
"Alıcı Adresi" → "Alıcı Cüzdan Adresi"  
"Transfer Miktarı" → "Gönderilen Token Miktarı"  
"Compliance Check" → "Uyumluluk Doğrulaması"
```
### **🎨 Layout (`app/layout.tsx`)**

#### **Metadata**
```typescript
export const metadata = {
  title: 'TechToken Innovation Market - SaaS & AI Tokenizasyon Platformu',
  description: 'Yapay zeka, SaaS ve teknoloji alanında yenilikçi projeleri tokenize edip yatırımcılarla buluşturan güvenilir platform.',
  icons: {
    icon: '/techtoken-favicon.ico',
  }
}
```

### **📱 Header (`components/layout/Header.tsx`)**

#### **Navigasyon Menüsü**
```typescript
"Dashboard" → "Ana Panel"  
"Marketplace" → "Yenilikçi Projeler"  
"Tokenize" → "Proje Tokenizasyonu"  
"Transfer" → "Token Paylaşımı"
```

---


## 🔧 **Teknik Güncellemeler**

### **Type Definitions (`lib/types.ts`)**


```typescript
interface TechAsset {
  id: string;
  name: string;
  symbol: string;
  asset_type: 'SaaS' | 'AI Model' | 'Patent' | 'Software Solution';
  creator_info: {
    name: string;
    location: string;
    experience_years: number;
    certifications: string[];
  };
  asset_details: {
    code_base_size_MB: number;
    tech_stack: string[];
    user_base: number;
    certification_status: boolean;
  };
  timeline_info: {
    creation_date: string;
    milestone_date: string;
    estimated_completion: string;
    quality_grade: 'A' | 'B' | 'C';
  };
  financial: {
    funding_goal: number;
    current_funding: number;
    token_price: number;
    total_supply: number;
  };
}
```

### **Mock Data (`lib/contract.ts`)**

```typescript
SAMPLE_TechAssets = [
  {
    id: 'tech-001',
    name: 'AI-Powered Chatbot',
    symbol: 'AIPC',
    asset_type: 'AI Model',
    creator_info: {
      name: 'InnovateAI Labs',
      location: 'San Francisco, USA',
      experience_years: 5,
      certifications: ['ISO 9001', 'AI Ethics Compliance']
    },
    asset_details: {
      code_base_size_MB: 250,
      tech_stack: ['Python', 'TensorFlow', 'Docker'],
      user_base: 50000,
      certification_status: true
    },
    timeline_info: {
      creation_date: '2023-01-15',
      milestone_date: '2024-03-01',
      estimated_completion: '2025-06-30',
      quality_grade: 'A'
    },
    financial: {
      funding_goal: 1000000,
      current_funding: 650000,
      token_price: 1.5,
      total_supply: 1000000
    }
  }
]

```
---
