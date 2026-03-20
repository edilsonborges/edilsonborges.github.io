# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Edilson Borges, built with React 18 + TypeScript + Vite + Tailwind CSS + shadcn/ui. Deployed to GitHub Pages via GitHub Actions on push to `main`.

## Commands

- `npm run dev` — Dev server at http://localhost:8080
- `npm run build` — Production build (outputs to `dist/`)
- `npm run build:dev` — Development mode build
- `npm run lint` — ESLint
- `npm run preview` — Preview production build

Node version: 20.19.0 (see `.nvmrc`)

## Architecture

**Multi-entry build:** Vite is configured with two entry points — `index.html` (main portfolio) and `busca-plantix/index.html` (secondary app). Both are defined in `vite.config.ts` under `build.rollupOptions.input`.

**Routing:** React Router v6 in `src/App.tsx`. New routes must be added above the catch-all `*` route. Current routes:
- `/` → `src/pages/Index.tsx` (portfolio home: Hero → About → Skills → Experience → Contact)
- `/busca-plantix` → `src/pages/BuscaPlantix.tsx`
- `/portfolio` → `src/pages/Portfolio.tsx` (grid of project cards)
- `/portfolio/niver` → `src/pages/NiverApp.tsx` (Niver app marketing page: hero, features, privacy links, support)
- `/portfolio/niver/privacy/ios` (+ `/portfolio/niver/ios/privacy`) → `src/pages/NiverPrivacyIos.tsx` (iOS privacy policy — SwiftUI/SwiftData)
- `/portfolio/niver/privacy/android` (+ `/portfolio/niver/android/privacy`) → `src/pages/NiverPrivacyAndroid.tsx` (Android privacy policy — Room/SQLite)
- `/portfolio/estoque-domestico` → `src/pages/EstoqueDomesticoApp.tsx` (Estoque Doméstico marketing page — iOS and Android, scanner de código de barras, scanner de nota fiscal, comparador de preços)
- `/portfolio/estoque-domestico/privacy/ios` (+ `/portfolio/estoque-domestico/ios/privacy`) → `src/pages/EstoqueDomesticoPrivacyIos.tsx` (iOS privacy policy — SwiftUI/SwiftData, login Apple/Google, exclusão de conta)
- `/portfolio/estoque-domestico/privacy/android` (+ `/portfolio/estoque-domestico/android/privacy`) → `src/pages/EstoqueDomesticoPrivacyAndroid.tsx` (Android privacy policy — Kotlin/Jetpack Compose/Room, login Google, exclusão de conta)
- `/portfolio/farmacia-domestica` → `src/pages/FarmaciaDomesticaApp.tsx` (Farmácia Doméstica marketing page — iOS only, Android "em breve")
- `/portfolio/farmacia-domestica/privacy/ios` (+ `/portfolio/farmacia-domestica/ios/privacy`) → `src/pages/FarmaciaDomesticaPrivacyIos.tsx` (iOS privacy policy — SwiftUI/SwiftData/CloudKit)
- `/portfolio/hinos-fc` → `src/pages/HinosFcApp.tsx` (Hinos FC marketing page — iOS only, Android "em breve")
- `/portfolio/hinos-fc/privacy/ios` (+ `/portfolio/hinos-fc/ios/privacy`) → `src/pages/HinosFcPrivacyIos.tsx` (iOS privacy policy — UIKit/AVFoundation)
- `/portfolio/zapsticker` → `src/pages/ZapStickerApp.tsx` (ZapSticker marketing page — iOS only, Android "em breve")
- `/portfolio/zapsticker/privacy/ios` (+ `/portfolio/zapsticker/ios/privacy`) → `src/pages/ZapStickerPrivacyIos.tsx` (iOS privacy policy — SwiftUI)

**External portfolio items:** Some projects link externally instead of having internal pages:
- Wololo Converter → `https://wololo.edilson.dev` (YouTube/Twitter video/audio downloader — web)
- Markdown to PDF → `https://markdown-to-pdf.edilson.dev` (Markdown to PDF converter — web)

These use `externalHref` instead of `href` in the `projects` array and open in a new tab.

**Portfolio pattern:** To add a new product to the portfolio, add an entry to the `projects` array in `src/pages/Portfolio.tsx`, create a product page in `src/pages/`, and register the route in `App.tsx`. Use `/portfolio/niver` as the reference implementation. For web-only projects with external sites, use `externalHref` and `platforms: ["web"]`. A Claude Code command exists at `.claude/commands/new-portfolio-product.md` to automate this.

**App assets:** Product icons and images go in `public/assets/` (e.g., `public/assets/niver-icon.png`). Referenced as `/assets/filename` in code.

**App providers** (in `App.tsx`): QueryClientProvider (React Query), TooltipProvider, Toaster (Radix), Sonner.

**Path alias:** `@/` maps to `./src/` (configured in both `vite.config.ts` and `tsconfig.json`).

**UI components:** `src/components/ui/` contains shadcn/ui components. Add new ones via the shadcn CLI. Page-level section components (Hero, About, Skills, Experience, Contact) live directly in `src/components/`.

## Styling

- Tailwind CSS 3 with a custom HSL-based design system defined in `src/index.css`
- All colors must use HSL format (stated in the CSS file comment)
- Key theme tokens: `--primary` (cyan 195), `--hero-bg` (dark blue-gray 220), `--section-bg` (light gray)
- Custom utilities in `tailwind.config.ts`: `gradient-primary`, `gradient-hero`, `gradient-card`, `shadow-card`, `shadow-glow`, `transition-smooth`, `transition-bounce`
- `src/lib/utils.ts` exports `cn()` for merging Tailwind classes (clsx + tailwind-merge)

## TypeScript

Strict mode is off. `noImplicitAny`, `strictNullChecks`, `noUnusedLocals`, and `noUnusedParameters` are all disabled in `tsconfig.json`.

## Deployment

GitHub Actions workflow (`.github/workflows/pages.yml`) builds and deploys to GitHub Pages on push to `main`. The build step:
1. Copies `dist/index.html` to `dist/404.html` for SPA client-side routing fallback
2. Creates `index.html` copies in each SPA route directory (e.g., `dist/portfolio/niver/privacy/android/index.html`) so that external crawlers (Google Play, App Store) receive HTTP 200 instead of 404

**Important:** When adding new SPA routes that need to be crawled externally (e.g., privacy policies for app stores), add the route path to the `routes` array in the "Create SPA route files" step of `.github/workflows/pages.yml`.

**Icons:** Brand icons (Apple, Android) use `react-icons` (`FaApple` from `react-icons/fa`, `DiAndroid` from `react-icons/di`). UI icons use `lucide-react`.
