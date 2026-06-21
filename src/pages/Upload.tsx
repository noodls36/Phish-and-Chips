import { useState } from "react";
import { UploadCloud } from "lucide-react";
import { Button } from "../components/Button";
import type { CaseFile } from "../types/case";

type UploadProps = {
  onCaseCreated: (caseFile: CaseFile) => void;
};

export function Upload({ onCaseCreated }: UploadProps) {
  const [fileName, setFileName] = useState("");
  const [text, setText] = useState("");
  const [file, setFile] = useState<File | null>(null);
  function extractSender(text: string) {
    const emailMatch = text.match(
      /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i
    );

    return emailMatch?.[0] ?? "Unknown Sender";
  }

  function determineVerdict(text: string) {
    const lower = text.toLowerCase();

    let score = 0;

    if (lower.includes("urgent")) score++;
    if (lower.includes("verify")) score++;
    if (lower.includes("password")) score += 2;
    if (lower.includes("gift card")) score += 2;
    if (lower.includes("click here")) score++;

    return score >= 2 ? "phishing" : "legitimate";
  }

  function determineDifficulty(text: string) {
    const lower = text.toLowerCase();

    let score = 0;

    if (lower.includes("urgent")) score++;
    if (lower.includes("verify")) score++;
    if (lower.includes("password")) score += 2;
    if (lower.includes("gift card")) score += 2;
    if (lower.includes("click here")) score++;

    if (score <= 1) return "Easy";
    if (score <= 3) return "Medium";
    if (score <= 5) return "Hard";

    return "Expert";
  }

  function generateCase() {
    const nextCase: CaseFile = {
      id: Math.floor(Math.random() * 100000),
      difficulty: determineDifficulty(text),
      from: extractSender(text),
      subject: fileName ? `Uploaded case: ${fileName}` : "Uploaded email case",
      body:
        extractedText;
      verdict: determineVerdict(text),
      hints: [
        "Review sender, urgency, links, and requests for sensitive details.",
        "Confirm anything financial or account-related through a trusted channel.",
      ],
      explanation: {
        headline: "Uploaded cases need detective review.",
        detail:
          "This first version creates a playable case from uploaded or pasted content. The later OCR service can classify difficulty, verdict, hints, and explanation automatically.",
        suspiciousSource: "uploaded@example.com",
      },

      let extractedText = text;

      if(file && !text.trim()) {
        const result = await Tesseract.recognize(file, "eng");
    extractedText = result.data.text;
  }
};

onCaseCreated(nextCase);
  }

return (
  <main className="mx-auto max-w-4xl px-4 py-8">
    <div className="mb-6">
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-signal">Upload Email</p>
      <h1 className="text-3xl font-black text-agency">Create a citizen report</h1>
    </div>

    <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-panel">
      <label className="mb-5 flex min-h-52 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-slate-300 bg-slate-50 p-6 text-center transition hover:border-signal hover:bg-teal-50">
        <UploadCloud className="mb-3 h-10 w-10 text-signal" aria-hidden="true" />
        <span className="font-bold text-agency">
          {fileName || "Drag screenshot here or choose file"}
        </span>
        <span className="mt-1 text-sm text-slate-500">PNG, JPG, or pasted text for now</span>
        <input
          type="file"
          accept="image/*"
          onChange={(event) => {
            const f = event.target.files?.[0] ?? null;
            setFile(f);
            setFileName(f?.name ?? "");
          }}
        />
      </label>

      <label className="mb-5 block">
        <span className="mb-2 block text-sm font-bold text-agency">Extracted Text</span>
        <textarea
          className="min-h-40 w-full rounded-md border border-slate-300 p-3 outline-none focus:border-signal focus:ring-2 focus:ring-teal-100"
          placeholder="Paste OCR text or the email body here..."
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
      </label>

      <Button onClick={generateCase}>
        <UploadCloud className="h-4 w-4" aria-hidden="true" />
        Generate Case
      </Button>
    </section>
  </main>
);
}
