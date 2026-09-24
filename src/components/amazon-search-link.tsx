import { ExternalLink } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { affiliateSearch } from "@/lib/catalog";
import { cn } from "@/lib/utils";

export const AMAZON_SEARCH_REL = "sponsored noopener noreferrer";

export function AmazonSearchLink({
  query,
  variant = "primary",
  className,
}: {
  query: string;
  variant?: "primary" | "chip";
  className?: string;
}) {
  const href = affiliateSearch(query);
  const label = `Search Amazon UK for ‘${query}’`;

  if (variant === "chip") {
    return (
      <a
        href={href}
        target="_blank"
        rel={AMAZON_SEARCH_REL}
        className={cn(
          "inline-flex h-11 items-center gap-2 rounded-full bg-cream px-4 text-sm text-ink shadow-[var(--shadow-border)] transition-colors duration-150 hover:bg-clay hover:text-paper hover:shadow-none",
          className,
        )}
      >
        {label}
        <ExternalLink className="size-3.5" aria-hidden />
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel={AMAZON_SEARCH_REL}
      className={cn(buttonVariants({ size: "lg" }), "min-h-12 w-full sm:w-auto", className)}
    >
      {label}
      <ExternalLink aria-hidden />
    </a>
  );
}
