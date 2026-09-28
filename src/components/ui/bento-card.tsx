import { cn } from "@/lib/cn";

type BentoCardProps = React.ComponentProps<"article">;

export function BentoCard({ className, ...props }: BentoCardProps) {
  return (
    <article
      className={cn(
        "rounded-2xl border border-slate-800 bg-slate-900 p-8 transition-colors hover:border-slate-700",
        className,
      )}
      {...props}
    />
  );
}
