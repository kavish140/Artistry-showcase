# Atelier Marr — Artistry Showcase

A design showcase site for a contemporary painting gallery — built with TanStack Start, React 19, and Tailwind CSS v4, deployed on Vercel.

> **Note:** All gallery content (artists, artworks, prices) is demonstration material. No real inventory or transactions.

## Stack

| Layer | Technology |
|---|---|
| Framework | [TanStack Start](https://tanstack.com/start) (SSR) |
| UI | React 19 + Tailwind CSS v4 |
| Build | Vite 8 + Nitro 3 |
| Package manager | [Bun](https://bun.sh) |
| Deployment | Vercel |

## Local Development

**Prerequisites:** [Bun](https://bun.sh) ≥ 1.1

```bash
git clone https://github.com/kavish140/Artistry-showcase
cd artistry-showcase-main
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
bun run build
# Output → .output/
```

## Deployment

The project is configured for Vercel with `vercel.json` (`"framework": null`).  
Nitro auto-detects `VERCEL=1` at build time and switches to the Vercel preset.

```bash
vercel deploy --prod
```

### Custom Domain DNS (Cloudflare)

| Type | Name | Content | Proxy | TTL |
|---|---|---|---|---|
| CNAME | `artistry-showcase` | `cname.vercel-dns.com` | DNS only | Auto |

## Project Structure

```
src/
  assets/          # Image assets (JPG)
  components/      # Shared React components
    ArtworkLightbox.tsx
    CuratorMatch.tsx   # Static private-viewing inquiry form
    ui/            # shadcn/ui primitives
  lib/             # Data & utilities
    works.ts       # Gallery data (artists + works)
    utils.ts
  routes/
    __root.tsx     # Root layout, head, error boundary
    index.tsx      # Main page (/, all sections)
  styles.css       # Tailwind + design tokens
  server.ts        # SSR entry with error normalisation
  start.ts         # TanStack Start instance + middleware
  router.tsx       # Client router factory
```

## Licence

Design showcase — © 2025 Sitenova. All rights reserved.
