import { CheckCircle2, XCircle } from "lucide-react";
import type { CaseFile, Verdict } from "../types/case";
import { Button } from "../components/Button";

type ResultsProps = {
  caseFile: CaseFile;
  selected: Verdict;
  points: number;
  onContinue: () => void;
};

export function Results({ caseFile, selected, points, onContinue }: ResultsProps) {
  const correct = selected === caseFile.verdict;

  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-panel md:p-8">
        <div className="mb-6 flex items-center gap-3">
          {correct ? (
            <CheckCircle2 className="h-10 w-10 text-signal" aria-hidden="true" />
          ) : (
            <XCircle className="h-10 w-10 text-red-600" aria-hidden="true" />
          )}
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-500">
              Case #{caseFile.id}
            </p>
            <h1 className="text-3xl font-black text-agency">
              {correct ? "Correct!" : "Not quite"}
            </h1>
          </div>
        </div>

        <div className="mb-6 rounded-lg bg-slate-50 p-5">
          <h2 className="mb-2 text-xl font-black text-agency">Why?</h2>
          <p className="mb-4 font-semibold text-ink">{caseFile.explanation.headline}</p>
          <p className="leading-7 text-slate-700">{caseFile.explanation.detail}</p>
          {(caseFile.explanation.trustedSource || caseFile.explanation.suspiciousSource) && (
            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {caseFile.explanation.trustedSource && (
                <Source label="Official source" value={caseFile.explanation.trustedSource} />
              )}
              {caseFile.explanation.suspiciousSource && (
                <Source label="Suspicious source" value={caseFile.explanation.suspiciousSource} />
              )}
            </div>
          )}
        </div>

        <div className="mb-6 flex items-center justify-between rounded-md bg-agency px-4 py-3 text-white">
          <span className="font-semibold">Points earned</span>
          <span className="text-2xl font-black">+{points}</span>
        </div>
        <Button onClick={onContinue} className="w-full">
          Continue
        </Button>
      </section>
    </main>
  );
}

function Source({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md bg-white p-3">
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">{label}</p>
      <p className="break-words font-bold text-agency">{value}</p>
    </div>
  );
}
