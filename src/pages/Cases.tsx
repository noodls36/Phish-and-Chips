import type { CaseFile, Difficulty } from "../types/case";
import { CaseCard } from "../components/CaseCard";
import { difficultyOrder } from "../data/cases";

type CasesProps = {
  cases: CaseFile[];
  onOpen: (caseFile: CaseFile) => void;
};

export function Cases({ cases, onOpen }: CasesProps) {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <div className="mb-6 flex flex-col justify-between gap-3 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-signal">Case Files</p>
          <h1 className="text-3xl font-black text-agency">Choose an investigation</h1>
        </div>
        <p className="max-w-xl text-sm text-slate-600">
          Difficulty determines base points. Hints reduce the final score, while fast correct
          answers earn a small speed bonus.
        </p>
      </div>
      <div className="space-y-8">
        {difficultyOrder.map((difficulty) => (
          <CaseGroup
            key={difficulty}
            difficulty={difficulty}
            cases={cases.filter((caseFile) => caseFile.difficulty === difficulty)}
            onOpen={onOpen}
          />
        ))}
      </div>
    </main>
  );
}

function CaseGroup({
  difficulty,
  cases,
  onOpen,
}: {
  difficulty: Difficulty;
  cases: CaseFile[];
  onOpen: (caseFile: CaseFile) => void;
}) {
  if (cases.length === 0) return null;

  return (
    <section>
      <h2 className="mb-3 text-xl font-black text-agency">{difficulty} Cases</h2>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {cases.map((caseFile) => (
          <CaseCard key={caseFile.id} caseFile={caseFile} onOpen={onOpen} />
        ))}
      </div>
    </section>
  );
}
