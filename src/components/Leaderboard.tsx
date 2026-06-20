import { Trophy } from "lucide-react";
import type { LeaderboardEntry } from "../types/player";

type LeaderboardProps = {
  entries: LeaderboardEntry[];
};

export function Leaderboard({ entries }: LeaderboardProps) {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-panel">
      <div className="mb-4 flex items-center gap-2">
        <Trophy className="h-5 w-5 text-caution" aria-hidden="true" />
        <h2 className="text-lg font-bold text-agency">Leaderboard</h2>
      </div>
      <div className="space-y-3">
        {entries.slice(0, 5).map((entry) => (
          <div
            key={entry.username}
            className="grid grid-cols-[42px_1fr_auto] items-center gap-3 rounded-md bg-slate-50 px-3 py-2"
          >
            <span className="text-sm font-bold text-slate-500">#{entry.rank}</span>
            <span className="font-semibold text-ink">{entry.username}</span>
            <span className="font-bold text-agency">{entry.score}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
