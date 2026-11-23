import "./christmas.css";
import { FallingSnow } from "./falling-snow";
import { HangarTree } from "./hangar-tree";
import { isChristmasThemeActive } from "./theme";

export function ChristmasHangarDressing() {
  if (!isChristmasThemeActive()) return null;

  return (
    <div className="xmas-root">
      <FallingSnow scene="hangar" />
      <HangarTree />
    </div>
  );
}
