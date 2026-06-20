export type PlayerStats = {
  username: string;
  score: number;
  casesSolved: number;
  correct: number;
};

export type LeaderboardEntry = PlayerStats & {
  rank?: number;
};
