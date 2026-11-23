import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { CHRISTMAS_WINDOW, isWithinChristmasWindow } from "./theme.ts";

function utcDate(year: number, month: number, day: number): Date {
  return new Date(Date.UTC(year, month - 1, day, 12, 0, 0));
}

describe("isWithinChristmasWindow", () => {
  it("opens on 1 November", () => {
    assert.equal(isWithinChristmasWindow(utcDate(2026, 11, 1)), true);
    assert.equal(isWithinChristmasWindow(utcDate(2026, 10, 31)), false);
  });

  it("stays on through December", () => {
    assert.equal(isWithinChristmasWindow(utcDate(2026, 12, 25)), true);
    assert.equal(isWithinChristmasWindow(utcDate(2026, 12, 31)), true);
  });

  it("closes after 6 January", () => {
    assert.equal(isWithinChristmasWindow(utcDate(2027, 1, 6)), true);
    assert.equal(isWithinChristmasWindow(utcDate(2027, 1, 7)), false);
    assert.equal(isWithinChristmasWindow(utcDate(2027, 2, 1)), false);
  });

  it("matches the documented window bounds", () => {
    assert.equal(CHRISTMAS_WINDOW.startMonth, 11);
    assert.equal(CHRISTMAS_WINDOW.startDay, 1);
    assert.equal(CHRISTMAS_WINDOW.endMonth, 1);
    assert.equal(CHRISTMAS_WINDOW.endDay, 6);
  });
});
