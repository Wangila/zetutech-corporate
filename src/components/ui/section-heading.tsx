import { Eyebrow } from "@/components/ui/eyebrow";
import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({ eyebrow, title, description, className }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", className)}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-4 text-4xl font-bold tracking-tighter md:text-5xl">{title}</h2>
      {description && (
        <p className="mt-6 text-lg leading-relaxed text-slate-400">{description}</p>
      )}
    </div>
  );
}
