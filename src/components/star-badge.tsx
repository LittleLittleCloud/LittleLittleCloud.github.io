import React from "react";
import { Star } from "lucide-react";
import { formatStars } from "@/lib/github-stars";

export const StarBadge: React.FC<{ repo: string; stars: number }> = ({ repo, stars }) => (
  <a
    href={`https://github.com/${repo}/stargazers`}
    target="_blank"
    rel="noopener noreferrer"
    title={`${stars.toLocaleString("en-US")} GitHub stars`}
    aria-label={`${stars.toLocaleString("en-US")} GitHub stars`}
    className="inline-flex items-center gap-1 rounded-full border border-amber-300/60 bg-amber-50 px-2.5 py-0.5 align-middle text-sm font-semibold tabular-nums text-amber-800 transition-colors hover:bg-amber-100 dark:border-amber-400/30 dark:bg-amber-400/10 dark:text-amber-300 dark:hover:bg-amber-400/20"
  >
    <Star className="h-3.5 w-3.5 fill-current" aria-hidden />
    {formatStars(stars)}
  </a>
);
