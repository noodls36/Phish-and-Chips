import { FileSearch } from "lucide-react";
import type { CaseFile } from "../types/case";
import { difficultyPoints } from "../services/scoring";
import { Button } from "./Button";

type CaseCardProps = {
  caseFile: CaseFile;
  onOpen: (caseFile: CaseFile) => void;
};

export function CaseCard({ caseFile, onOpen }: CaseCardProps) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-teal-50 text-signal">
            <FileSearch className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <h3 className="font-bold text-agency">Case #{caseFile.id}</h3>
            <p className="text-sm text-slate-500">{caseFile.subject}</p>
          </div>
        </div>
        <span className="rounded-md bg-slate-100 px-2 py-1 text-xs font-bold text-slate-600">
          {difficultyPoints[caseFile.difficulty]} pts
        </span>
      </div>
      <p className="mb-4 text-sm text-slate-600">From: {caseFile.from}</p>
      <Button className="w-full" onClick={() => onOpen(caseFile)}>
        Open Case
      </Button>
    </article>
  );
}
