# 🧠 FORMSINCHAT DESIGN MEMORY

## 🌐 Product Name: FormsInChat

## 🎯 Design Objectives
- 🌍 World-class SaaS design
- 📈 High-conversion homepage UX
- 📱 Mobile-first and fully responsive
- ♿ Accessible and WCAG-compliant
- 🌈 Gradient branding (blue → purple)
- 💬 Conversational tone and UI experience
- ⚛️ Modular, reusable component architecture
- ✅ Testable, documented, production-grade

## 📦 Component Overview

- `layout.tsx` and `page.tsx` in Next.js App Router
- `/components/` directory includes:
  - Navbar, Hero, ChatPreview (animated), Features, HowItWorks, CtaBanner, Footer
- `/lib/` includes:
  - `useAnalyticsEvent.ts` for PostHog/Vercel Analytics

## 🧪 Tracking Events
- clicked_start_free
- clicked_live_demo
- shared_via_qr
- exported_form

## 🛠 Development Stack
- Next.js 14 App Router
- TailwindCSS
- Prisma + Postgres
- PostHog or Vercel Analytics
- Framer Motion (optional)
- Storybook, Testing Library, Playwright