import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { describe, it } from "node:test";
import {
  AMAZON_ASSOCIATE_TAG,
  catalog,
  isAmazonHostedImage,
  lifestyleImageSrc,
  productDisplaySrc,
  productShowsAmazonImage,
} from "./catalog.ts";

const DOCK_SLUG = "ugreen-6-in-1-dual-monitor-dock";

describe("lifestyle product photos", () => {
  it("attaches 20 local lifestyle photos and keeps the dual-monitor dock on Amazon", () => {
    const withLifestyle = catalog.filter((product) => product.lifestyleImage);
    const dock = catalog.find((product) => product.slug === DOCK_SLUG);

    assert.equal(withLifestyle.length, 20);
    assert.ok(dock);
    assert.equal(dock.lifestyleImage, undefined);
    assert.equal(productDisplaySrc(dock), dock.image);
    assert.equal(productShowsAmazonImage(dock), true);
  });

  it("keeps Amazon listing URLs on `image` and prefers lifestyle for display", () => {
    for (const product of catalog) {
      assert.equal(isAmazonHostedImage(product.image), true);
      assert.match(product.affiliateUrl, new RegExp(`[?&]tag=${AMAZON_ASSOCIATE_TAG}\\b`));

      if (!product.lifestyleImage) continue;
      assert.equal(product.lifestyleImage, lifestyleImageSrc(product.slug));
      assert.ok(product.lifestyleAlt);
      assert.equal(productDisplaySrc(product), product.lifestyleImage);
      assert.equal(productShowsAmazonImage(product), false);
      assert.ok(
        existsSync(new URL(`../../public${product.lifestyleImage}`, import.meta.url)),
        `missing file for ${product.slug}`,
      );
    }
  });
});
