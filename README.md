# 🚀 InsightFlow - AI Consulting Website

A cutting-edge, professional AI consulting website built with Next.js 15, featuring modern animations, comprehensive business sections, and AI-powered tools.

## ✨ Features

### 🎨 Design & UX
- **Modern Green Color Scheme** - Professional #2ed573 primary color avoiding typical AI purple/neon
- **Smooth Animations** - Framer Motion integration with scroll-triggered animations
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Professional Typography** - Inter font with optimized readability
- **Glass Effects & Gradients** - Modern visual elements

### 🏢 Business Pages
- **Homepage** - Hero, features, testimonials, CTA sections
- **About** - Company story and team information
- **Services** - Detailed service offerings with interactive showcase
- **Pricing** - Transparent pricing plans with FAQ
- **Case Studies** - Detailed success stories with metrics
- **Contact** - Professional contact form and information
- **Lab** - AI tools demo (Service Recommender, Brief Analyzer)

### 🤖 AI Integration
- **Chat Widget** - Groq/OpenAI powered assistant
- **Service Recommender** - AI tool for service matching
- **Brief Analyzer** - Project brief analysis tool
- **Smart Contact Forms** - AI-enhanced form processing

### ⚡ Performance
- **Next.js 15** - Latest features and optimizations
- **Image Optimization** - WebP/AVIF format support
- **Bundle Optimization** - Tree-shaking and code splitting
- **SEO Optimized** - Meta tags, structured data, sitemap
- **Security Headers** - XSS protection, CSP, HSTS

### 🎯 Professional Features
- **Newsletter Signup** - Integrated email capture
- **Testimonials Carousel** - Dynamic client reviews
- **Metrics Dashboard** - Real-time performance indicators
- **Industry Filtering** - Dynamic content filtering
- **Progress Tracking** - Project timeline visualization

## 🛠️ Tech Stack

- **Framework:** Next.js 15 with App Router
- **Styling:** Tailwind CSS 4 with custom design system
- **Animations:** Framer Motion + custom CSS animations
- **Icons:** Heroicons + Lucide React
- **AI:** Groq SDK + OpenAI integration
- **TypeScript:** Full type safety
- **Performance:** Bundle analyzer, image optimization

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm 9+
- AI API keys (Groq/OpenAI)

### Installation

1. **Clone and install dependencies:**
\\\ash
npm install
\\\

2. **Set up environment variables:**
\\\ash
# Copy environment template
cp .env.local.example .env.local

# Add your API keys
GROQ_API_KEY=your_groq_api_key
OPENAI_API_KEY=your_openai_api_key
\\\

3. **Start development server:**
\\\ash
npm run dev
\\\

4. **Open in browser:**
Visit http://localhost:3000

### Build for Production
\\\ash
npm run build
npm start
\\\

## 📁 Project Structure

\\\
src/
├── app/                    # App Router pages
│   ├── about/             # About page
│   ├── api/               # API routes
│   ├── case-studies/      # Case studies page
│   ├── contact/           # Contact page
│   ├── lab/               # AI tools demo
│   ├── pricing/           # Pricing page
│   ├── services/          # Services page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # Reusable components
│   ├── chat/             # AI chat widget
│   ├── layout/           # Header, footer
│   └── sections/         # Page sections
└── lib/                  # Utilities and styles
    └── styles/           # Global CSS
\\\

## 🎨 Design System

### Colors
- **Primary:** #2ed573 (Professional green)
- **Accent:** Gray scale for balance
- **Success/Error:** Semantic colors

### Typography
- **Font:** Inter (Google Fonts)
- **Scale:** Modular scale for hierarchy
- **Weight:** 300-900 range

### Components
- **Buttons:** Primary, secondary, ghost variants
- **Cards:** Base, interactive, glass effects
- **Forms:** Consistent styling with validation

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your repository to Vercel
2. Add environment variables in dashboard
3. Deploy automatically on git push

### Docker
\\\ash
# Build image
docker build -t insightflow-consulting .

# Run container
docker run -p 3000:3000 insightflow-consulting
\\\

### Static Export
\\\ash
# For static hosting
npm run build
npm run export
\\\

## 🔧 Configuration

### Tailwind CSS
Custom design system in \	ailwind.config.ts\ with:
- Color palette
- Animation keyframes  
- Component utilities
- Responsive breakpoints

### Next.js Config
Optimized \
ext.config.ts\ with:
- Image optimization
- Bundle analysis
- Security headers
- Performance settings

## 📊 Performance

### Core Web Vitals
- **LCP:** < 2.5s (optimized images)
- **FID:** < 100ms (code splitting)
- **CLS:** < 0.1 (fixed layouts)

### Bundle Size
- **First Load:** ~200KB gzipped
- **Page JS:** ~50KB average
- **Images:** WebP/AVIF optimized

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (\git checkout -b feature/amazing-feature\)
3. Commit changes (\git commit -m 'Add amazing feature'\)
4. Push to branch (\git push origin feature/amazing-feature\)
5. Open Pull Request

## 📝 License

This project is proprietary software. All rights reserved.

## 🆘 Support

- **Documentation:** See /docs folder
- **Issues:** Open GitHub issue
- **Email:** hello@insightflow.ai
- **Chat:** Use the AI widget on the site

## 🎯 Roadmap

### Phase 1 ✅
- [x] Modern design implementation
- [x] Core business pages
- [x] AI chat integration
- [x] Responsive layout
- [x] Performance optimization

### Phase 2 🚧
- [ ] Blog system
- [ ] Advanced analytics
- [ ] Multi-language support
- [ ] Advanced AI tools
- [ ] CRM integration

### Phase 3 📋
- [ ] Mobile app
- [ ] Advanced personalization
- [ ] Real-time collaboration
- [ ] Advanced reporting
- [ ] Enterprise features

---

**Built with ❤️ by the InsightFlow team**

*Transform your business with AI. Start today.*
