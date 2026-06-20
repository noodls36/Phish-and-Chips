export type Difficulty = "Easy" | "Medium" | "Hard" | "Expert";

export type Verdict = "phishing" | "legitimate";

export type CaseFile = {
  id: number;
  difficulty: Difficulty;
  from: string;
  subject: string;
  body: string;
  verdict: Verdict;
  hints: string[];
  explanation: {
    headline: string;
    detail: string;
    trustedSource?: string;
    suspiciousSource?: string;
  };
};
