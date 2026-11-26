import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import {
  APP_NAME,
  META_DESCRIPTION_MAX,
  TITLE_MAX,
  clipMetaDescription,
  documentTitle,
  pageHead,
  robotsForQueryParams,
} from "./seo.ts";

const guidesSource = readFileSync(new URL("./guides.ts", import.meta.url), "utf8");
const powerBankBody = readFileSync(new URL("../components/guide-article.tsx", import.meta.url), "utf8");
const robotsTxt = readFileSync(new URL("../../public/robots.txt", import.meta.url), "utf8");

describe("documentTitle", () => {
  it("keeps a full brand suffix when the page name is short", () => {
    const title = documentTitle("Hail Al: Amazon UK tech search");
    assert.equal(title, `Hail Al: Amazon UK tech search | ${APP_NAME}`);
    assert.ok(title.length <= TITLE_MAX);
  });

  it("shortens the suffix before dropping it", () => {
    const title = documentTitle("How to pick a 65W GaN charger that actually travels");
    assert.equal(title, "How to pick a 65W GaN charger that actually travels | Al");
    assert.equal(title.length, 56);
  });

  it("drops the suffix when the page name already fills the SERP slot", () => {
    const title = documentTitle("USB-C dock with dual HDMI: what actually works on the road");
    assert.equal(title, "USB-C dock with dual HDMI: what actually works on the road");
    assert.equal(title.length, 58);
  });

  it("does not double-suffix titles that already include the brand", () => {
    assert.equal(documentTitle(`Briefing | ${APP_NAME}`), `Briefing | ${APP_NAME}`);
  });

  it("leaves a branded homepage title alone", () => {
    const title = documentTitle("Al's Drop Ship: Amazon UK tech picks", { branded: true });
    assert.equal(title, "Al's Drop Ship: Amazon UK tech picks");
    assert.match(title, /Al's Drop Ship/);
  });
});

describe("clipMetaDescription", () => {
  it("leaves copy at or under 160 characters", () => {
    const text = "Yes. A power bank goes in hand luggage, not the hold.";
    assert.equal(clipMetaDescription(text), text);
  });

  it("clips long copy on a word boundary without exceeding 160", () => {
    const long = `${"word ".repeat(50)}end`;
    const clipped = clipMetaDescription(long);
    assert.ok(clipped.length <= META_DESCRIPTION_MAX);
    assert.ok(!clipped.includes("end"));
    assert.match(clipped, /[.!?]$/);
  });
});

describe("robotsForQueryParams", () => {
  it("indexes the clean URL and noindexes query variants", () => {
    assert.equal(robotsForQueryParams(undefined, undefined), "index, follow");
    assert.equal(robotsForQueryParams("", "  "), "index, follow");
    assert.equal(robotsForQueryParams("power bank"), "noindex, follow");
    assert.equal(robotsForQueryParams(undefined, "ugreen-65w-gan"), "noindex, follow");
  });
});

describe("pageHead", () => {
  it("brands, clips, and can noindex query variants while keeping the canonical", () => {
    const indexed = pageHead("Hail Al: Amazon UK tech search", "Search Amazon UK tech.", "/ask-al");
    const variant = pageHead("Hail Al: Amazon UK tech search", "Search Amazon UK tech.", "/ask-al", {
      robots: robotsForQueryParams("gan charger"),
    });
    const titleOf = (head: ReturnType<typeof pageHead>) =>
      head.meta.find((entry) => "title" in entry)?.title;
    const robotsOf = (head: ReturnType<typeof pageHead>) =>
      head.meta.find((entry) => "name" in entry && entry.name === "robots");
    assert.equal(titleOf(indexed), `Hail Al: Amazon UK tech search | ${APP_NAME}`);
    assert.ok((titleOf(indexed) ?? "").length <= TITLE_MAX);
    assert.equal(robotsOf(indexed)?.content, "index, follow");
    assert.equal(robotsOf(variant)?.content, "noindex, follow");
    assert.deepEqual(indexed.links, [{ rel: "canonical", href: "https://alsaidropship.com/ask-al" }]);
  });
});

describe("query-targeted guides", () => {
  it("retitles the power-bank carry guide at the query", () => {
    assert.match(guidesSource, /title: "Can you take a power bank on a plane\?"/);
    assert.match(guidesSource, /heading: "Can you take a power bank on a plane\?"/);
    assert.match(
      guidesSource,
      /Yes\. A power bank goes in hand luggage, not the hold\. Under 100Wh is fine; 100–160Wh needs airline approval; over 160Wh is not allowed\. Check your airline\./,
    );
    assert.match(powerBankBody, /Yes\. You can take a power bank on a plane — in hand luggage, not the hold/);
    assert.match(powerBankBody, /Rules vary by airline, so check the one you booked/);
  });

  it("retitles the portable-monitor guide at the three target phrases", () => {
    assert.match(guidesSource, /title: "Portable monitor for laptop: ARZOPA Z1FC"/);
    assert.match(guidesSource, /heading: "Portable monitor for laptop: ARZOPA portable monitor \(Z1FC\)"/);
    assert.match(guidesSource, /A portable monitor for laptop work/);
    assert.match(guidesSource, /ARZOPA portable monitor this bay lists/);
    assert.match(powerBankBody, /A portable\s+monitor for laptop work/);
    assert.match(powerBankBody, /ARZOPA\s+portable monitor: the ARZOPA Z1FC/);
  });
});

describe("robots.txt", () => {
  it("disallows /ask-al query strings while leaving the clean path allowed", () => {
    assert.match(robotsTxt, /Allow: \//);
    assert.match(robotsTxt, /Disallow: \/ask-al\?/);
    assert.doesNotMatch(robotsTxt, /^Disallow: \/ask-al$/m);
  });
});
