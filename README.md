Personal Website for my portfolio and blog. Built with Next.js, TypeScript, Tailwind CSS, and Shadcn-UI.

## Development

```bash
npm install
npm run dev        # Next.js dev server
npm start          # build static export and serve it through the Worker locally (wrangler dev)
```

## Deployment (Cloudflare Workers)

The site is a static Next.js export (`out/`) served by a Cloudflare Worker with
Static Assets (`wrangler.jsonc`). The Worker code in `worker/index.ts` handles `/api/*`;
all other paths are served directly from assets.

Deploys are handled by **Cloudflare Workers Builds** (Git integration configured in the Cloudflare dashboard):

- **Production**: every push to `main` runs `npm run build` then `npx wrangler deploy`.
- **Preview**: every push to any other branch (including PR branches) runs `npx wrangler preview`
  (Worker Previews, one Preview per branch), which creates a preview URL without touching production. Cloudflare comments the preview URL on the PR.

Dashboard settings (Workers & Pages → `littlelittlecloud` → Settings → Build):

| Setting | Value |
|---|---|
| Git repository | this repo |
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy` |
| Preview command | `npx wrangler preview` |
| Enable Preview builds | On |
| Root directory | `/` |

The Worker name in the dashboard must match `name` in `wrangler.jsonc`. Node version comes from `.node-version`.

Manual deploys: `npm run deploy` (production) / `npm run deploy:preview` (Preview for the current branch).
