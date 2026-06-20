import { ShieldCheck } from "lucide-react";

type NavbarProps = {
  current: string;
  onNavigate: (screen: "home" | "cases" | "upload") => void;
};

export function Navbar({ current, onNavigate }: NavbarProps) {
  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <button
          className="flex items-center gap-2 text-left font-bold text-agency"
          onClick={() => onNavigate("home")}
        >
          <ShieldCheck className="h-7 w-7 text-signal" aria-hidden="true" />
          <span>Cyber Detective Agency</span>
        </button>
        <nav className="flex items-center gap-1">
          {(["home", "cases", "upload"] as const).map((item) => (
            <button
              key={item}
              onClick={() => onNavigate(item)}
              className={`rounded-md px-3 py-2 text-sm font-semibold capitalize transition ${
                current === item ? "bg-agency text-white" : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              {item}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
