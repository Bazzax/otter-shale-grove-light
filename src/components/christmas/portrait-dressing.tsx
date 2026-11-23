import "./christmas.css";
import { SantaHat } from "./santa-hat";
import { isChristmasThemeActive } from "./theme";

export function ChristmasPortraitDressing() {
  if (!isChristmasThemeActive()) return null;

  return (
    <div className="xmas-root">
      <SantaHat variant="portrait" />
    </div>
  );
}
