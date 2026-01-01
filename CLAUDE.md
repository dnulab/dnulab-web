# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a full-stack React application built with Vite, Hono, and deployed to Cloudflare Workers. The application features:
- React 19 frontend with TypeScript
- Hono backend API running on Cloudflare Workers edge network
- Vite for development and production builds
- Single-page application (SPA) architecture served from Workers assets

## Key Commands

### Development
```bash
npm run dev              # Start local development server at http://localhost:5173
npm run build            # Build for production (TypeScript compilation + Vite build)
npm run preview          # Build and preview production build locally
npm run lint             # Run ESLint on all TypeScript files
```

### Deployment
```bash
npm run deploy           # Deploy to Cloudflare Workers
npm run check            # Type-check, build, and dry-run deploy (validation without deploying)
npx wrangler tail        # Monitor deployed worker logs in real-time
```

### Type Generation
```bash
npm run cf-typegen       # Generate TypeScript types for Cloudflare Workers bindings
```

## Architecture

### Directory Structure

The codebase is split into two distinct compilation units with separate TypeScript configurations:

- `src/react-app/` - Frontend React application (tsconfig.app.json)
  - Entry point: `main.tsx`
  - Root component: `App.tsx`
  - Compiled by Vite into static assets

- `src/worker/` - Cloudflare Workers backend (tsconfig.worker.json)
  - Entry point: `index.ts`
  - Hono app serving API routes
  - Deployed as a Cloudflare Worker

### Build Process

1. **TypeScript Compilation**: `tsc -b` compiles both the app and worker configurations
2. **Vite Build**: Bundles React app into `dist/client/`
3. **Worker Deployment**: Wrangler deploys `src/worker/index.ts` and serves static assets from `dist/client/`

### Request Routing

The Cloudflare Worker handles all requests:
- API routes (e.g., `/api/*`) are handled by Hono routes in `src/worker/index.ts`
- All other requests serve the React SPA from assets (configured as SPA in wrangler.json)
- Frontend fetches from `/api/` routes to communicate with the backend

### TypeScript Configuration

The project uses TypeScript project references:
- `tsconfig.json` - Root configuration referencing app, node, and worker configs
- `tsconfig.app.json` - React app with DOM types, strict mode, React JSX
- `tsconfig.worker.json` - Worker with Cloudflare Worker types
- `tsconfig.node.json` - Vite config and build scripts

### Adding API Routes

To add new API endpoints:
1. Define routes in `src/worker/index.ts` using Hono's routing API
2. The Hono app is typed with `{ Bindings: Env }` for Cloudflare Workers environment bindings
3. Access environment variables and bindings via `c.env` in route handlers

### Cloudflare Workers Configuration

Configuration is in `wrangler.json`:
- `compatibility_flags: ["nodejs_compat"]` - Enables Node.js compatibility
- `observability.enabled: true` - Built-in observability for monitoring
- `upload_source_maps: true` - Source maps for better error tracking
- `assets.not_found_handling: "single-page-application"` - SPA routing support

### ESLint Configuration

ESLint is configured with:
- TypeScript ESLint with recommended rules
- React Hooks plugin with recommended rules
- React Refresh plugin for HMR validation
- Targets ES2020 with browser globals
