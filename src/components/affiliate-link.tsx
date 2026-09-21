import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

export function AffiliateLink({
  href,
  label,
  className,
}: {
  href: string;
  label: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer nofollow sponsored"
      className={cn(
        "inline-flex h-12 items-center justify-center gap-2 rounded-xl px-5 text-sm font-medium text-ink shadow-[var(--shadow-border)] transition-[box-shadow,color] duration-150 hover:text-clay hover:shadow-[var(--shadow-border-hover)]",
        className,
      )}
    >
      Shop on {label}
      <ExternalLink className="size-4" />
    </a>
  );
}
