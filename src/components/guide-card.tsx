import { Link } from "@tanstack/react-router";
import type { Guide } from "@/lib/guides";

export function GuideCard({ guide }: { guide: Guide }) {
  return (
    <Link
      to="/guides/$slug"
      params={{ slug: guide.slug }}
      className="group flex flex-col rounded-2xl bg-cream p-5 shadow-[var(--shadow-border)] transition-[box-shadow,transform] duration-200 ease-out hover:-translate-y-1 hover:shadow-[var(--shadow-border-hover)]"
    >
      <p className="text-xs font-medium tracking-widest text-clay uppercase">{guide.kicker}</p>
      <h3 className="mt-3 font-display text-xl font-medium tracking-tight text-balance text-ink">
        {guide.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-pretty text-stone">
        {guide.description}
      </p>
      <p className="mt-4 text-sm font-medium text-clay group-hover:text-clay-dark">Read the log</p>
    </Link>
  );
}
