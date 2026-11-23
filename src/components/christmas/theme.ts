/**
 * Seasonal hangar dressing for Al's Drop Ship.
 *
 * January teardown: set `CHRISTMAS_THEME` to `false`, or delete
 * `src/components/christmas/`, the `@import` in `src/styles.css`, and the
 * call sites in `src/routes/index.tsx` and `src/routes/ask-al.tsx`.
 *
 * When the flag is true, the theme is on only between 1 November and 6 January
 * (UTC). Flip the flag off to kill it immediately during that window.
 */
export const CHRISTMAS_THEME = true;

export const CHRISTMAS_WINDOW = {
  startMonth: 11,
  startDay: 1,
  endMonth: 1,
  endDay: 6,
} as const;

export function isWithinChristmasWindow(now: Date): boolean {
  const month = now.getUTCMonth() + 1;
  const day = now.getUTCDate();
  const { startMonth, startDay, endMonth, endDay } = CHRISTMAS_WINDOW;

  if (month > startMonth || (month === startMonth && day >= startDay)) {
    return true;
  }
  if (month < endMonth || (month === endMonth && day <= endDay)) {
    return true;
  }
  return false;
}

export function isChristmasThemeActive(now: Date = new Date()): boolean {
  return CHRISTMAS_THEME && isWithinChristmasWindow(now);
}
