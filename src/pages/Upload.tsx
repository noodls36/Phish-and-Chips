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

  function generateCase() {
    const nextCase: CaseFile = {
      id: Date.now(),
      difficulty: "Medium",
      from: "uploaded@example.com",
      subject: fileName ? `Uploaded case: ${fileName}` : "Uploaded email case",
      body:
        text.trim() ||
        "OCR text will appear here in the backend version. For now, paste suspicious email text to turn it into a playable case.",
      verdict: "phishing",
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
            className="sr-only"
            type="file"
            accept="image/*"
            onChange={(event) => setFileName(event.target.files?.[0]?.name ?? "")}
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
