# ✅ FORMSINCHAT_QUALITY_POLICY.md

## 🎯 Objective
To ensure that every line of code, design decision, and architectural implementation for FormsInChat is held to the standard of a world-class, $1M+ production-grade SaaS platform.

---

## 🔐 Definition of World-Class Output

Every module, feature, or component MUST be:

- ✅ **Architecturally Sound** – Modular, scalable, cleanly abstracted
- ✅ **Fully Styled & Responsive** – Perfectly aligned across all device sizes
- ✅ **UX-Polished** – Typography, spacing, motion, and design coherence must be elegant
- ✅ **Agent-Ready** – Capable of integrating with Gemini/ADK and future agent systems
- ✅ **Accessible** – Uses semantic HTML and supports keyboard navigation & screen readers
- ✅ **Documented** – Includes relevant README files, type definitions, and comments
- ✅ **Deployable** – Must be runnable on staging or production (Vercel/GCP/Cloud Run)
- ✅ **Designed to Scale** – All systems should handle growth to millions of users
- ✅ **Visualized** – Includes Storybook stories, screenshots, and preview markdowns
- ✅ **Tested** – All components, agents, and flows must be covered by automated tests

---

## ✅ Code Review Checklist for Each Module

| ✅ Checkpoint        | ❓ Question                                                                 |
|---------------------|------------------------------------------------------------------------------|
| 🔍 Purpose           | Does this feature align with the PRD or GTM strategy?                       |
| 🧱 Quality           | Would a senior engineer at Stripe, Linear, or Vercel approve this as-is?    |
| 📦 Completeness      | Is this module fully functional and self-contained (not stubbed)?           |
| 💡 Clarity           | Can a new engineer understand and extend it with no hand-holding?           |
| 📲 UX & Polish       | Is it beautiful, intuitive, and fast across all viewports?                  |
| 🧪 Tested            | Are there passing unit, integration, or E2E tests for this module?          |
| 🖼 Visualized        | Does this include a working Storybook preview, screenshot, or preview doc?  |
| 🚀 Deployment-Ready  | Can it be pushed to prod without errors, todos, or untested features?       |

---

## 🧩 What Will NEVER Be Accepted

- ❌ Placeholder code in shipped modules
- ❌ Unresponsive or poorly styled components
- ❌ Unexplained logic, spaghetti state, or untyped APIs
- ❌ Missing metadata, SEO, analytics, or accessibility compliance
- ❌ Any deliverable that doesn’t make users feel like they’re using a premium product
- ❌ Any module missing both tests and previews

---

## 🧪 Comprehensive Testing Strategy

| Type                | Purpose                                                  | Tools                          |
|---------------------|----------------------------------------------------------|--------------------------------|
| ✅ Unit Tests        | Validate individual components and utilities             | Jest + React Testing Library   |
| ✅ Integration Tests | Ensure logical flow between components/agents            | RTL + Mocked APIs              |
| ✅ E2E Tests         | Simulate full user journeys across routes and states     | Playwright or Cypress          |
| ✅ Visual Testing    | Prevent UI regressions (layout, spacing, theme variants) | Percy, Chromatic, Playwright   |

---

## 🛠 How This Policy is Enforced

1. Each module includes:
   - 📂 Code Files
   - 📄 README.md
   - ✅ Test Coverage (unit/integration/e2e)
   - 🧪 Storybook + Screenshot previews
   - 🔍 Visual preview markdown

2. You (the product owner) review and approve before we proceed to the next module.

3. If feedback suggests substandard output, the module will be reworked before delivery continues.

---

## 🧠 Final Note

> “If it doesn’t feel like a $1M product today, we’re not done building it.”

Maintained by: Core Development Lead (AI)  
Version: 1.1 – Updated on request by founder