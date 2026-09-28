import { cn } from "@/lib/cn";

type EyebrowProps = React.ComponentProps<"p">;

export function Eyebrow({ className, ...props }: EyebrowProps) {
  return (
    <p
      className={cn(
        "text-sm font-semibold uppercase tracking-widest text-amber-500",
        className,
      )}
      {...props}
    />
  );
}
