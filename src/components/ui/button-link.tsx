import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonLinkProps = React.ComponentProps<typeof Link> & {
  variant?: "primary" | "secondary";
};

const variants = {
  primary: "bg-amber-500 text-slate-950 hover:bg-amber-400",
  secondary: "border border-slate-700 bg-slate-900/60 text-slate-100 hover:border-slate-500 hover:bg-slate-800",
};

export function ButtonLink({ variant = "primary", className, ...props }: ButtonLinkProps) {
  return (
    <Link
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
