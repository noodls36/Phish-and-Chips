import { useMemo, useState } from "react";
import { Navbar } from "./components/Navbar";
import { cases as starterCases } from "./data/cases";
import { Home } from "./pages/Home";
import { Cases } from "./pages/Cases";
import { Investigation } from "./pages/Investigation";
import { Results } from "./pages/Results";
import { Upload } from "./pages/Upload";
import { calculateScore } from "./services/scoring";
import { getPlayerStats, loadLeaderboard, savePlayerResult } from "./services/leaderboard";
import type { CaseFile, Verdict } from "./types/case";

type Screen = "home" | "cases" | "investigation" | "results" | "upload";

type ResultState = {
  caseFile: CaseFile;
  selected: Verdict;
  points: number;
};

const usernameKey = "cda-username";

export default function App() {
  const [screen, setScreen] = useState<Screen>("home");
  const [allCases, setAllCases] = useState<CaseFile[]>(starterCases);
  const [activeCase, setActiveCase] = useState<CaseFile | null>(null);
  const [result, setResult] = useState<ResultState | null>(null);
  const [username, setUsername] = useState(() => localStorage.getItem(usernameKey) ?? "Jerry");
  const [leaderboard, setLeaderboard] = useState(loadLeaderboard);

  const player = useMemo(() => getPlayerStats(username), [leaderboard, username]);

  function navigate(next: "home" | "cases" | "upload") {
    setScreen(next);
    setActiveCase(null);
    setResult(null);
  }

  function openCase(caseFile: CaseFile) {
    setActiveCase(caseFile);
    setResult(null);
    setScreen("investigation");
  }

  function submitVerdict(selected: Verdict, hintCount: number, elapsedSeconds: number) {
    if (!activeCase) return;

    const isCorrect = selected === activeCase.verdict;
    const points = calculateScore(activeCase.difficulty, hintCount, elapsedSeconds, isCorrect);
    setLeaderboard(savePlayerResult(username, points, isCorrect));
    setResult({ caseFile: activeCase, selected, points });
    setScreen("results");
  }

  function updateUsername(nextName: string) {
    const cleanName = nextName.trim() || "Detective";
    localStorage.setItem(usernameKey, cleanName);
    setUsername(cleanName);
  }

  function addUploadedCase(caseFile: CaseFile) {
    setAllCases((existing) => [caseFile, ...existing]);
    openCase(caseFile);
  }

  return (
    <div className="min-h-screen bg-[#eef2f1]">
      <Navbar current={screen} onNavigate={navigate} />
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-600">
            Signed in as <span className="font-bold text-agency">{username}</span>
          </p>
          <label className="flex items-center gap-2 text-sm font-semibold text-slate-600">
            Detective name
            <input
              className="w-40 rounded-md border border-slate-300 px-3 py-2 outline-none focus:border-signal focus:ring-2 focus:ring-teal-100"
              value={username}
              onChange={(event) => updateUsername(event.target.value)}
            />
          </label>
        </div>
      </section>

      {screen === "home" && (
        <Home player={player} leaderboard={leaderboard} onStart={() => setScreen("cases")} />
      )}
      {screen === "cases" && <Cases cases={allCases} onOpen={openCase} />}
      {screen === "investigation" && activeCase && (
        <Investigation caseFile={activeCase} onSubmit={submitVerdict} />
      )}
      {screen === "results" && result && (
        <Results
          caseFile={result.caseFile}
          selected={result.selected}
          points={result.points}
          onContinue={() => setScreen("cases")}
        />
      )}
      {screen === "upload" && <Upload onCaseCreated={addUploadedCase} />}
    </div>
  );
}
