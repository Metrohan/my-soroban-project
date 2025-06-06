# 🎨 Frontend Customization PDR

## 📋 **Project Details**

### **Selected Sector**: Technology and Software
### **Platform Name**: TechToken Innovation Market  
### **Main Asset Types**: SaaS solutions, AI applications, patented software 
### **Target Audience**: Tech entrepreneurs, software developers, early-stage investors 
### **Contract_ID**: CDI7AI3K6Y6F5LL5AFVEQBZRGTK4PBYN7JSVSJLKZ3YO27UMUD2F3DN3

## 🎯 **Platform Vision**

### **Core Concept**  
TechToken Innovation Market is a blockchain-based marketplace that tokenizes software-based real-world assets (such as SaaS projects, AI systems, licensed software), enabling investors to co-own these projects even with small amounts.

### **Value Proposition**
- **For Entrepreneurs and Software Developers**: Access to early-stage funding, reaching a global investor base, projects being evaluated transparently and gaining visibility. Technical potential is transformed into sustainable revenue models through tokenization. 
- **For Investors**: Micro-investment opportunities in high-potential early-stage software and AI projects, transparent revenue sharing, participation in platform decisions through voting, and building a diversified digital portfolio.
- **For Technical Reviewers and Analysts**: Using their expertise to audit and rate projects, guiding the community with secure investment recommendations, and being rewarded with platform tokens in return for their contributions.

## 🎨 **Visual Identity Updates**

### **Color Palette**
```css
--primary:    #0D47A1;
--secondary:  #00ACC1;
--accent:     #FFC107;
--background: #F5F7FA;
--foreground: #212121;
```

### **Icons & Emojis**
- **Main Theme**: 💡 📈 🤖 🧠 🛠️ 💰  
- **Subcategories**: 🧬 🧑‍💻 📊 🧾 🎯 🌐  
- **Actions**: 📝 💰 📈 🔍 ✅ 🚀

### **Typography**
- **Headings**: Poppins  
- **Content**: Open Sans  
- **Tone**: Warm, trustworthy, professional

---

### **🏠 Homepage (`app/page.tsx`)**

#### **Title and Description**
```typescript
title: "TechToken Innovation Market"  
description: "An RWA investment platform that tokenizes AI, SaaS solutions, and software projects and connects them with investors."
```
#### **Dashboard Cards**
```typescript
"Portfolio Value" → "Token Portfolio Value"  
"Total Investment" → "Total Committed Capital"  
"Active Assets" → "Live Technology Projects"  
"Compliance Status" → "Compliance & Review Status"
```

#### **Quick Actions**
```typescript
"Discover Assets" → "Explore Projects"  
"Token Transfer" → "Share Investment Stake"  
"Tokenize Asset" → "Tokenize Your Project"
```

### **🏪 Marketplace (`app/marketplace/page.tsx`)**
```typescript
asset_type: ["AI Application", "SaaS Platform", "Patented Software", "API Service"]  
location: ["North America", "Europe", "Asia-Pacific", "Remote Developed"]  
category: ["HealthTech", "FinTech", "EdTech", "Data Analytics & ML"]  
certification: ["MVP Ready", "Patent Filed", "Regulation Compliant", "Security Audited"]
```
#### **Asset Cards**
```typescript
{
  name: "AI-Powered Analytics Suite",
  symbol: "TAI",
  creator: "InnovateTech Labs",
  date: "2025-06-01",
  specs: "SaaS, AI, Data Analytics, Cloud-Based",
  price_per_token: "15 USD",
  total_supply: 1000000,
  sold_percentage: 45
}
```
#### **Metrics**
```typescript
"Total Asset Value" → "Total Tokenized Value"  
"Active Investors" → "Active Participants"  
"Completed Transactions" → "Successfully Executed Investments"
```

### **🌱 Tokenization (`app/tokenize/page.tsx`)**
#### **5-Step Process**
```typescript
1. "Project Information"
2. "Technical Details"
3. "Legal & Licensing Documents"
4. "Token Economics"
5. "Publishing & Marketing"
```

### **💸 Transfer (`app/transfer/page.tsx`)**

#### **Transfer Terminology**
```typescript
"Token Transfer" → "Token Sharing"  
"Recipient Address" → "Receiver Wallet Address"  
"Transfer Amount" → "Number of Tokens Sent"  
"Compliance Check" → "Regulatory Verification"
```
### **🎨 Layout (`app/layout.tsx`)**

#### **Metadata**
```typescript
export const metadata = {
  title: 'TechToken Innovation Market - SaaS & AI Tokenization Platform',
  description: 'A trusted platform that tokenizes innovative AI, SaaS, and software projects and connects them with investors.',
  icons: {
    icon: '/techtoken-favicon.ico',
  }
}
```

### **📱 Header (`components/layout/Header.tsx`)**

#### **Navigation Menu**
```typescript
"Dashboard" → "Main Panel"  
"Marketplace" → "Innovative Projects"  
"Tokenize" → "Project Tokenization"  
"Transfer" → "Token Sharing"
```

---


## 🔧 **Technical Updates**

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
