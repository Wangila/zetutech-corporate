import { cn } from "@/lib/cn";

type ReadoutRow = { readonly key: string; readonly value: string };

type TerminalReadoutProps = {
  title: string;
  command: string;
  rows: readonly ReadoutRow[];
  className?: string;
};

export function TerminalReadout({ title, command, rows, className }: TerminalReadoutProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-slate-800 bg-slate-900/50 font-mono text-sm shadow-2xl shadow-black/40 backdrop-blur-sm",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-4 border-b border-slate-800 bg-slate-900/80 px-5 py-3">
        <div className="flex min-w-0 items-center gap-2">
          <span className="size-2.5 shrink-0 rounded-full bg-slate-700" aria-hidden />
          <span className="size-2.5 shrink-0 rounded-full bg-slate-700" aria-hidden />
          <span className="size-2.5 shrink-0 rounded-full bg-slate-700" aria-hidden />
          <span className="ml-3 truncate text-xs text-slate-400">{title}</span>
        </div>
        <span className="flex shrink-0 items-center gap-2 text-[10px] uppercase tracking-widest text-emerald-400">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
          </span>
          Online
        </span>
      </div>

      <div className="px-5 pt-5 text-slate-400">
        <span className="text-amber-500">$</span> {command}
      </div>

      <dl className="mx-5 mt-4 grid grid-cols-[auto_1fr] gap-x-6 border-b border-slate-800">
        {rows.map((row) => (
          <div key={row.key} className="contents">
            <dt className="border-t border-slate-800 py-3 text-xs uppercase tracking-widest text-amber-500">
              [{row.key}]
            </dt>
            <dd className="border-t border-slate-800 py-3 text-slate-200">{row.value}</dd>
          </div>
        ))}
      </dl>

      <div className="flex items-center justify-between gap-4 px-5 py-4 text-xs">
        <span className="text-emerald-400/80">&gt; {rows.length} records returned</span>
        <span className="h-4 w-2 animate-pulse bg-slate-500" aria-hidden />
      </div>
    </div>
  );
}
