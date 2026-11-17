// Fetch GitHub star counts at build time (used from getStaticProps).
// Counts refresh on every deploy. Set GITHUB_TOKEN in the build environment to
// avoid the 60 requests/hour unauthenticated rate limit; without it the
// fallback values below are used if GitHub can't be reached.

export type StarCounts = Record<string, number>;

// Last known values, used only when the GitHub API request fails.
const FALLBACK_STARS: StarCounts = {
  "microsoft/autogen": 61895,
  "dotnet/machinelearning": 9364,
  "RazorConsole/RazorConsole": 1745,
};

// Shared across pages within one build so each repo is requested once.
const cache = new Map<string, Promise<number | undefined>>();

export async function fetchStarCounts(repos: string[]): Promise<StarCounts> {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "User-Agent": "littlelittlecloud-site-build",
  };
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  const fetchOne = async (repo: string): Promise<number | undefined> => {
    try {
      const res = await fetch(`https://api.github.com/repos/${repo}`, { headers });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = (await res.json()) as { stargazers_count?: number };
      if (typeof data.stargazers_count !== "number") throw new Error("missing stargazers_count");
      return data.stargazers_count;
    } catch (err) {
      console.warn(`[github-stars] ${repo}: ${(err as Error).message}; using fallback`);
      return FALLBACK_STARS[repo];
    }
  };

  const entries = await Promise.all(
    repos.map(async (repo): Promise<[string, number | undefined]> => {
      if (!cache.has(repo)) cache.set(repo, fetchOne(repo));
      return [repo, await cache.get(repo)];
    }),
  );

  return Object.fromEntries(entries.filter((e): e is [string, number] => typeof e[1] === "number"));
}

export function formatStars(n: number): string {
  return new Intl.NumberFormat("en", { notation: "compact", maximumFractionDigits: 1 })
    .format(n)
    .toLowerCase();
}
