import { useEffect, useState } from "react";
import { Lightbulb, Send } from "lucide-react";
import type { CaseFile, Verdict } from "../types/case";
import { Button } from "../components/Button";

type InvestigationProps = {
  caseFile: CaseFile;
  onSubmit: (verdict: Verdict, hintCount: number, elapsedSeconds: number) => void;
};

export function Investigation({ caseFile, onSubmit }: InvestigationProps) {
  const [selected, setSelected] = useState<Verdict | null>(null);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    setSelected(null);
    setHintsUsed(0);
    setElapsed(0);
    const timer = window.setInterval(() => setElapsed((value) => value + 1), 1000);
    return () => window.clearInterval(timer);
  }, [caseFile.id]);

  return (
    <main className="mx-auto grid max-w-6xl gap-6 px-4 py-8 lg:grid-cols-[1fr_320px]">
      <section className="case-paper rounded-lg border border-slate-200 p-5 shadow-panel md:p-7">
        <div className="mb-5 flex flex-col justify-between gap-3 border-b border-slate-200 pb-4 md:flex-row md:items-center">
          <div>
            <h1 className="text-3xl font-black text-agency">Case #{caseFile.id}</h1>
            <p className="font-semibold text-slate-500">Difficulty: {caseFile.difficulty}</p>
          </div>
          <span className="w-fit rounded-md bg-white px-3 py-2 text-sm font-bold text-agency shadow-sm">
            {elapsed}s
          </span>
        </div>
        <div className="grid gap-4">
          <Field label="From" value={caseFile.from} />
          <Field label="Subject" value={caseFile.subject} />
          <div>
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.14em] text-slate-500">
              Email Body
            </p>
            <div className="rounded-md border border-slate-200 bg-white/80 p-4 leading-7 text-slate-700">
              {caseFile.body}
            </div>
          </div>
        </div>
      </section>

      <aside className="space-y-4">
        <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-panel">
          <div className="mb-4 flex items-center justify-between gap-3">
            <h2 className="font-black text-agency">Hints</h2>
            <span className="text-sm font-bold text-slate-500">
              {Math.max(0, caseFile.hints.length - hintsUsed)} remaining
            </span>
          </div>
          <div className="mb-4 space-y-3">
            {caseFile.hints.slice(0, hintsUsed).map((hint, index) => (
              <p key={hint} className="rounded-md bg-amber-50 p-3 text-sm text-amber-900">
                Hint {index + 1}: {hint}
              </p>
            ))}
          </div>
          <Button
            tone="danger"
            className="w-full"
            disabled={hintsUsed >= caseFile.hints.length}
            onClick={() => setHintsUsed((value) => value + 1)}
          >
            <Lightbulb className="h-4 w-4" aria-hidden="true" />
            Use Hint
          </Button>
        </section>

        <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-panel">
          <h2 className="mb-4 font-black text-agency">Phishing?</h2>
          <div className="mb-5 grid gap-3">
            <VerdictOption
              label="Yes"
              checked={selected === "phishing"}
              onClick={() => setSelected("phishing")}
            />
            <VerdictOption
              label="No"
              checked={selected === "legitimate"}
              onClick={() => setSelected("legitimate")}
            />
          </div>
          <Button
            className="w-full"
            disabled={!selected}
            onClick={() => selected && onSubmit(selected, hintsUsed, elapsed)}
          >
            <Send className="h-4 w-4" aria-hidden="true" />
            Submit
          </Button>
        </section>
      </aside>
    </main>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="mb-1 text-sm font-bold uppercase tracking-[0.14em] text-slate-500">{label}</p>
      <p className="rounded-md border border-slate-200 bg-white/80 p-3 font-semibold text-agency">
        {value}
      </p>
    </div>
  );
}

function VerdictOption({
  label,
  checked,
  onClick,
}: {
  label: string;
  checked: boolean;
  onClick: () => void;
}) {
  return (
    <button
      className={`flex items-center gap-3 rounded-md border p-3 text-left font-semibold transition ${
        checked ? "border-signal bg-teal-50 text-agency" : "border-slate-200 hover:bg-slate-50"
      }`}
      onClick={onClick}
    >
      <span
        className={`flex h-5 w-5 items-center justify-center rounded-full border ${
          checked ? "border-signal" : "border-slate-300"
        }`}
      >
        {checked && <span className="h-2.5 w-2.5 rounded-full bg-signal" />}
      </span>
      {label}
    </button>
  );
}
