/**
 * Cloudflare Worker entry point.
 *
 * Static pages are produced by `next build` (output: "export") into ./out and
 * served by Workers Static Assets. Only paths listed in `assets.run_worker_first`
 * (see wrangler.jsonc) reach this handler; everything else falls through to the
 * asset binding.
 */
export interface Env {
  ASSETS: Fetcher;
}

export default {
  async fetch(request, env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/api/hello") {
      return Response.json({ name: "John Doe" });
    }

    if (url.pathname.startsWith("/api/")) {
      return Response.json({ error: "Not Found" }, { status: 404 });
    }

    return env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<Env>;
