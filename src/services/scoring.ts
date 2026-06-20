import type { Difficulty } from "../types/case";

export const difficultyPoints: Record<Difficulty, number> = {
  Easy: 10,
  Medium: 25,
  Hard: 50,
  Expert: 100,
};

export function calculateScore(
  difficulty: Difficulty,
  hintCount: number,
  elapsedSeconds: number,
  isCorrect: boolean,
) {
  if (!isCorrect) return 0;

  const base = difficultyPoints[difficulty];
  const hintPenalty = hintCount === 0 ? 0 : hintCount === 1 ? 10 : 25;
  const speedBonus = elapsedSeconds <= 30 ? 5 : 0;

  return Math.max(0, base - hintPenalty + speedBonus);
}
