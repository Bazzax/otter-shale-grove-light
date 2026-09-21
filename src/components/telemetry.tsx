import { useEffect, useState } from "react";
import { useHydrated } from "@/hooks/use-hydrated";
import { catalog } from "@/lib/catalog";
import { cn } from "@/lib/utils";

export function Telemetry() {
  const hydrated = useHydrated();
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (!hydrated) return;
    const id = window.setInterval(() => setTick((n) => n + 1), 1800);
    return () => window.clearInterval(id);
  }, [hydrated]);

  const heading = ((184 + tick * 3) % 360).toString().padStart(3, "0");
  const alt = 120 + (tick % 7);

  const cells = [
    { k: "Callsign", v: "AL-1" },
    { k: "Status", v: "ONLINE", hot: true },
    { k: "Payload", v: String(catalog.length) },
    { k: "HDG", v: `${heading}°` },
    { k: "ALT", v: `${alt} m` },
    { k: "Hold", v: "NONE" },
  ];

  return (
    <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-line sm:grid-cols-3 lg:grid-cols-6">
      {cells.map((cell) => (
        <div key={cell.k} className={cn("px-3 py-3", cell.hot ? "bg-clay text-paper" : "bg-cream")}>
          <dt className={cn("text-xs tracking-widest uppercase", cell.hot ? "text-paper/80" : "text-dust")}>
            {cell.k}
          </dt>
          <dd
            className={cn(
              "mt-1 font-display text-lg font-medium tracking-tight tabular-nums",
              cell.hot ? "text-paper" : "text-clay",
            )}
          >
            {cell.v}
          </dd>
        </div>
      ))}
    </dl>
  );
}
