import "./christmas.css";
import { FallingSnow } from "./falling-snow";
import { SantaHat } from "./santa-hat";
import { isChristmasThemeActive } from "./theme";

export function ChristmasHeroDressing() {
  if (!isChristmasThemeActive()) return null;

  return (
    <div className="xmas-root">
      <FallingSnow scene="hero" />
      <SantaHat variant="hero" />
    </div>
  );
}
