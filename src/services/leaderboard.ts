import type { LeaderboardEntry, PlayerStats } from "../types/player";

const STORAGE_KEY = "cda-leaderboard";

const starterBoard: LeaderboardEntry[] = [
  { username: "Sarah", score: 4200, casesSolved: 55, correct: 49 },
  { username: "Alex", score: 3950, casesSolved: 51, correct: 44 },
  { username: "Jerry", score: 3200, casesSolved: 45, correct: 39 },
];

export function loadLeaderboard(): LeaderboardEntry[] {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return ranked(starterBoard);

  try {
    return ranked(JSON.parse(raw) as LeaderboardEntry[]);
  } catch {
    return ranked(starterBoard);
  }
}

export function savePlayerResult(
  username: string,
  chips: number,
  wasCorrect: boolean,
): LeaderboardEntry[] {
  const board = loadLeaderboard();
  const existing = board.find((entry) => entry.username.toLowerCase() === username.toLowerCase());

  if (existing) {
    existing.score += chips;
    existing.casesSolved += 1;
    existing.correct += wasCorrect ? 1 : 0;
  } else {
    board.push({
      username,
      score: chips,
      casesSolved: 1,
      correct: wasCorrect ? 1 : 0,
    });
  }

  const next = ranked(board);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  return next;
}

export function getPlayerStats(username: string): PlayerStats {
  const found = loadLeaderboard().find(
    (entry) => entry.username.toLowerCase() === username.toLowerCase(),
  );

  return found ?? { username, score: 0, casesSolved: 0, correct: 0 };
}

function ranked(entries: LeaderboardEntry[]) {
  return [...entries]
    .sort((a, b) => b.score - a.score)
    .map((entry, index) => ({ ...entry, rank: index + 1 }));
}
