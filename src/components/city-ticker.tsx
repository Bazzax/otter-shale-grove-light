const items = [
  "AL-1 ONLINE",
  "PAYLOAD 9",
  "NO WAREHOUSE",
  "AFFILIATE ARMED",
  "ETA ON EVERY CARD",
  "HAIL AL",
];
const loop = [...items, ...items];

export function CityTicker() {
  return (
    <div className="overflow-hidden bg-clay text-paper" aria-hidden="true">
      <div className="marquee-track flex w-max gap-8 py-3.5 pr-8 whitespace-nowrap">
        {loop.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center gap-8 text-sm font-medium">
            <span className="font-display tracking-tight">{item}</span>
            <span className="size-1.5 rounded-full bg-paper" />
          </span>
        ))}
      </div>
    </div>
  );
}
