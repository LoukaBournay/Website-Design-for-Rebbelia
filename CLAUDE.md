# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start Vite dev server
npm run build    # Production build → dist/
```

No test runner is configured.

## Architecture

React 18 + TypeScript SPA built with Vite, deployed on Vercel.

**Routing**: React Router v7. All routes are nested under `RootLayout` (Navbar + Footer wrapper). Route definitions live in [src/app/routes.tsx](src/app/routes.tsx); the app entry is [src/app/App.tsx](src/app/App.tsx).

**Pages** (`src/app/pages/`): `HomeNew`, `Services`, `About`, `Testimonials`, `Contact`, `FAQ`, `Legal`, `googlePage` (OAuth flow).

**Components** (`src/app/components/`):
- `ui/` — shadcn/ui primitives (~45 files). Do not modify these directly.
- Custom components: `ButtonPrimary`, `GlassCard`, `Badge`, `ServiceCard`, `TestimonialCard`, `TeamMember`, `WorkflowDiagram`.
- `Navbar.tsx` / `NavbarDark.tsx` and `Footer.tsx` / `FooterDark.tsx` are layout-level.

## Key Patterns

**Vite**: A custom `figmaAssetResolver()` plugin in [vite.config.ts](vite.config.ts) resolves `figma:asset/` import paths. Do not remove it. The `@` alias maps to `./src`.

**Styling**: Tailwind CSS v4 via `@tailwindcss/vite`. Theme color variables are defined in [src/styles/theme.css](src/styles/theme.css). Custom animations (`.animate-fade-in-up`, `.animate-float`, `.animate-delay-*`) are in [src/styles/fonts.css](src/styles/fonts.css). Use `tailwind-merge` (`twMerge`) when combining dynamic class names.

**Contact form**: Submits directly to Formspree (`https://formspree.io/f/xgodazvg`) — no backend required.

**SPA routing**: [vercel.json](vercel.json) rewrites all non-asset requests to `/index.html`.

**Language**: Site content is in French, targeting a European B2B market.
