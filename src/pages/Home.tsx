import { Play, Target } from "lucide-react";
import { Button } from "../components/Button";
import { Leaderboard } from "../components/Leaderboard";
import type { LeaderboardEntry, PlayerStats } from "../types/player";

type HomeProps = {
  player: PlayerStats;
  leaderboard: LeaderboardEntry[];
  onStart: () => void;
};

export function Home({ player, leaderboard, onStart }: HomeProps) {
  const accuracy = player.casesSolved ? Math.round((player.correct / player.casesSolved) * 100) : 0;
  const rank = leaderboard.find((entry) => entry.username === player.username)?.rank ?? "--";

  return (
    <main className="mx-auto grid max-w-6xl gap-6 px-4 py-8 lg:grid-cols-[1fr_360px]">
      <section className="overflow-hidden rounded-lg bg-agency text-white shadow-panel">
        <div className="grid gap-8 p-6 md:grid-cols-[1.2fr_0.8fr] md:p-8">
          <div className="flex flex-col justify-between gap-10">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-teal-200">
                Daily case desk
              </p>
              <h1 className="max-w-xl text-4xl font-black leading-tight md:text-5xl">
                Phish and Chips
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-slate-200">
                Review citizen reports, spot suspicious emails, and explain the clues that prove
                whether each case is legitimate or phishing.
              </p>
            </div>
            <Button onClick={onStart} className="w-fit" tone="primary">
              <Play className="h-4 w-4" aria-hidden="true" />
              Start Investigation
            </Button>
          </div>
          <div className="rounded-lg border border-white/15 bg-white/10 p-5">
            <div className="mb-5 flex items-center gap-2">
              <Target className="h-5 w-5 text-teal-200" aria-hidden="true" />
              <h2 className="font-bold">Detective Record</h2>
            </div>
            <dl className="grid gap-3">
              <Metric label="Cases Solved" value={player.casesSolved.toString()} />
              <Metric label="Accuracy" value={`${accuracy}%`} />
              <Metric label="Current Rank" value={`#${rank}`} />
              <Metric label="Score" value={player.score.toString()} />
            </dl>
          </div>
        </div>
      </section>
      <Leaderboard entries={leaderboard} />
    </main>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-md bg-white/10 px-4 py-3">
      <dt className="text-sm text-slate-200">{label}</dt>
      <dd className="text-xl font-black">{value}</dd>
    </div>
  );
}
