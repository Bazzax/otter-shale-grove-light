import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

type QtyStepperProps = {
  value: number;
  onChange: (next: number) => void;
  min?: number;
  max?: number;
  className?: string;
};

export function QtyStepper({
  value,
  onChange,
  min = 1,
  max = 9,
  className,
}: QtyStepperProps) {
  return (
    <div
      className={cn(
        "inline-flex h-11 items-center rounded-lg bg-cream shadow-[var(--shadow-border)]",
        className,
      )}
    >
      <button
        type="button"
        className="flex size-11 items-center justify-center text-ink hover:bg-ink/5 disabled:opacity-40"
        onClick={() => onChange(Math.max(min, value - 1))}
        disabled={value <= min}
        aria-label="Decrease quantity"
      >
        <Minus className="size-4" />
      </button>
      <span className="min-w-8 text-center text-sm tabular-nums">{value}</span>
      <button
        type="button"
        className="flex size-11 items-center justify-center text-ink hover:bg-ink/5 disabled:opacity-40"
        onClick={() => onChange(Math.min(max, value + 1))}
        disabled={value >= max}
        aria-label="Increase quantity"
      >
        <Plus className="size-4" />
      </button>
    </div>
  );
}
