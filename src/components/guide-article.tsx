import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { AffiliateLink } from "@/components/affiliate-link";
import { AmazonImageCredit, ProductImage } from "@/components/product-image";
import {
  AMAZON_PICK_ASINS,
  affiliateProduct,
  catalog,
  isAmazonHostedImage,
  isAmazonPick,
} from "@/lib/catalog";
import { formatProductPrice } from "@/lib/format";
import {
  AIRLINE_POWER_BANK_ROWS,
  CAA_BATTERY_CHECKLIST,
  CAA_CHRISTMAS_PACKING,
  CAA_FESTIVE_PACKING,
  CAA_LITHIUM_RULES,
  CAA_PACK_RIGHT,
  CAA_PACKRIGHT_SHORT,
  CHRISTMAS_TECH_GIFT_FAQS,
  CHRISTMAS_UNDER_50_FAQS,
  GOV_UK_ELECTRONIC_DEVICES,
  GOV_UK_HAND_LUGGAGE,
  GOV_UK_PERSONAL_ITEMS,
  ONBOARD_POWER_BANK_FAQS,
  ONBOARD_POWER_BANK_ROWS,
  ONBOARD_POWER_BANK_SOURCES,
  PACKING_POWER_FAQS,
  PORTABLE_MONITOR_FAQS,
  PORTABLE_MONITOR_SOURCES,
  type Guide,
} from "@/lib/guides";

function ShopLink({ slug, children }: { slug: string; children: ReactNode }) {
  return (
    <Link to="/shop/$slug" params={{ slug }} className="text-clay hover:text-clay-dark">
      {children}
    </Link>
  );
}

function GuideLink({ slug, children }: { slug: string; children: ReactNode }) {
  return (
    <Link to="/guides/$slug" params={{ slug }} className="text-clay hover:text-clay-dark">
      {children}
    </Link>
  );
}

function AmazonPick({ asin }: { asin: string }) {
  const product = catalog.find((item) => item.asin === asin && isAmazonPick(item));
  const amazonImage = product ? isAmazonHostedImage(product.image) : false;
  return (
    <div className="flex flex-col gap-3">
      {product && amazonImage ? (
        <div className="max-w-xs overflow-hidden rounded-xl bg-cream p-2 shadow-[var(--shadow-border)]">
          <ProductImage
            product={product}
            alt={`${product.name} — ${product.tagline}`}
            className="aspect-square w-full rounded-lg outline outline-1 -outline-offset-1 outline-ink/10"
          />
        </div>
      ) : null}
      <p className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center">
        {product ? (
          <span className="text-sm tabular-nums text-clay">
            {formatProductPrice(product)}
            {product.price == null ? null : (
              <>
                {" "}
                <span className="font-normal text-dust">approx. · check Amazon</span>
              </>
            )}
          </span>
        ) : null}
        <AffiliateLink
          href={affiliateProduct(asin)}
          label="Amazon UK"
          className="mt-1 w-full sm:mt-0 sm:w-auto"
        />
      </p>
      {amazonImage ? <AmazonImageCredit /> : null}
    </div>
  );
}

function AmazonText({ asin, children }: { asin: string; children: ReactNode }) {
  return (
    <a
      href={affiliateProduct(asin)}
      target="_blank"
      rel="noopener noreferrer nofollow sponsored"
      className="text-clay hover:text-clay-dark"
    >
      {children}
    </a>
  );
}

function AskAlLink({ q, children }: { q: string; children: ReactNode }) {
  return (
    <Link to="/ask-al" search={{ q }} className="text-clay hover:text-clay-dark">
      {children}
    </Link>
  );
}

function GanBody() {
  return (
    <>
      <p>
        Sixty-five watts is the useful line for a weekend bag. It tops a USB-C laptop at a cafe
        without cooking the brick, and it still has leftover for a phone. Forty-five watts is a
        phone charger with ambition. One hundred watts is a desk supply you will resent at security.
      </p>
      <h2>What actually matters in the bag</h2>
      <p>
        Dual USB-C, not a circus of USB-A leftovers. PD 3.0 or 3.1 so a modern laptop negotiates
        the full 65W on one port. Folding pins so the brick does not stab the sleeve. A 100–240V
        label so a UK trip and a EU socket are the same problem with a different plug.
      </p>
      <p>
        GaN is the silicon that stays small. It still makes heat. If a 65W cube is the size of a
        matchbox and has no vents, treat the review photos as fiction. Warm is fine. Painful is a
        return.
      </p>
      <h2>UK pins, honestly</h2>
      <p>
        <ShopLink slug="ugreen-65w-gan">UGREEN 65W GaN Charger (2 USB-C, UK plug)</ShopLink> is a white
        65W GaN with two USB-C ports and a UK 3-pin plug (BS 1363). The listing does not say the
        pins fold. 65W max, and 65W total when both ports charge. In stock at £20.99 (RRP £29.99),
        dispatched by Amazon, sold by UGREEN GROUP LIMITED UK. This is an Amazon UK affiliate pick.
        Al does not dropship it. Approx. UK price is a snapshot from 10 Nov 2026. Amazon's live
        checkout may differ.
      </p>
      <AmazonPick asin={AMAZON_PICK_ASINS.ugreen65w} />
      <ul>
        <li>Need it this week: this is the Amazon UK pick. Dispatched by Amazon.</li>
        <li>Need one brick for laptop + phone: 65W dual USB-C, not two 30W cubes.</li>
        <li>
          Phone-only top-up in a jacket:{" "}
          <ShopLink slug="belkin-5000-magnetic-power-bank">
            Belkin 5000mAh Magnetic Wireless Power Bank
          </ShopLink>
          , 5,000 mAh, about 18.5Wh at 3.7V.
        </li>
        <li>
          The charger still needs a pocket:{" "}
          <ShopLink slug="tomtoc-14-laptop-case">tomtoc 360 Protective 14-inch Laptop Case</ShopLink>{" "}
          has a front pocket. It is a structured case, not a plain sleeve.
        </li>
      </ul>
      <h2>When the affiliate aisle is the better buy</h2>
      <p>
        The UGREEN card above is already the tagged listing. If you want a 100W three-port brick
        with a foldable plug, that is{" "}
        <ShopLink slug="anker-100w-gan-charger">Anker 100W USB-C GaN Charger</ShopLink>. If the trip
        leaves a UK wall, read the world adapter guide. The button below is a tagged search for
        other wattages. Read the wattage on the listing, not the title.
      </p>
    </>
  );
}

function AncBody() {
  return (
    <>
      <p>
        Commutes punish gear. Bags, glasses, announcements, a bike helmet. Over-ear ANC wins on a
        train. Buds win on a walk. Buying both is how you lose one of them.
      </p>
      <h2>Over-ear, if you sit</h2>
      <p>
        <ShopLink slug="soundcore-q20i">Soundcore Anker Q20i</ShopLink> is the{" "}
        <AmazonText asin={AMAZON_PICK_ASINS.soundcoreQ20i}>
          hybrid active noise cancelling foldable over-ear
        </AmazonText>
        . Four built-in mics filter background noise; ANC is not available in AUX mode. Wireless
        mode uses BassUp; the 3.5 mm jack unlocks Hi-Res audio. Up to 40 hours with ANC on; 5
        minutes of charging gives 4 hours. Multipoint switches between phone and laptop.
        Transparency mode keeps a train announcement in. The soundcore app adds EQ, mode
        adjustment, customised white noise, and AI translation between over 100 languages. I do
        not dropship Soundcore. The card is affiliate. £29.99, price checked 10 Nov 2026 on
        Amazon.co.uk. Amazon’s live checkout may differ.
      </p>
      <AmazonPick asin={AMAZON_PICK_ASINS.soundcoreQ20i} />
      <h2>Buds, if you walk</h2>
      <p>
        <ShopLink slug="soundcore-liberty-4-nc">Anker Soundcore Liberty 4 NC</ShopLink> is the{" "}
        <AmazonText asin={AMAZON_PICK_ASINS.liberty4Nc}>
          adaptive noise cancelling wireless earbud
        </AmazonText>
        . Adaptive ANC 2.0 adjusts to ear canals and the room; the listing says they cancel up to
        98.5% of noise. 11 mm custom-tuned drivers, Hi-Res wireless, and LDAC. HearID 2.0, a fully
        adjustable EQ, or 22 presets. Battery: 10 hours / 50 hours with the case in normal mode; 8
        hours / 40 hours with ANC on. Bluetooth 5.3, multipoint, auto-play and pause on wear,
        IPX4, and six beamforming mics with an AI algorithm for calls. XS/S/M/L tips and a USB-C
        cable in the box. I do not dropship Soundcore. £54.99, price checked 25 Oct 2026 on
        Amazon.co.uk. Amazon’s live checkout may differ.
      </p>
      <AmazonPick asin={AMAZON_PICK_ASINS.liberty4Nc} />
      <ul>
        <li>Train or plane, bag space: Q20i over-ears.</li>
        <li>Walk, cycle, or you already wear a hat: Liberty 4 NC.</li>
        <li>Calls on the move: Liberty 4 NC lists 6-mic AI call pickup and multipoint.</li>
        <li>You already own a brand ecosystem: use the Amazon search and stop stacking cases.</li>
      </ul>
      <h2>What the listings actually print</h2>
      <p>
        ANC-on hours, whether transparency exists, and whether ANC dies on a cable. Q20i states 40
        hours with ANC on and that ANC is off in AUX. Liberty 4 NC states separate normal and ANC
        numbers, plus IPX4. If another listing hides ANC-on hours, assume they are bad.
      </p>
      <p>
        Need Sony, Bose, or whatever your office already issued? That is what the affiliate search
        is for. Al may earn a cut. The bay stays short on purpose.
      </p>
    </>
  );
}

function LeadTimeBody() {
  return (
    <>
      <p>
        This catalog does not dropship. Every card is an Amazon UK affiliate pick. Delivery is
        Amazon's. How long a parcel takes is Amazon's clock, and it varies. Al does not pack or
        ship.
      </p>
      <h2>What this bay actually does</h2>
      <p>
        Every SKU is a tagged Amazon UK listing. Returns sit with Amazon. There is no factory
        window printed on a card.
      </p>
      <ul>
        <li>
          Chargers and banks in this bay:{" "}
          <ShopLink slug="ugreen-65w-gan">UGREEN 65W GaN</ShopLink>,{" "}
          <ShopLink slug="belkin-5000-magnetic-power-bank">Belkin 5000mAh</ShopLink>. Amazon UK
          picks. Delivery is Amazon's.
        </li>
        <li>
          Desk kit: <ShopLink slug="anker-7-in-1-usb-c-hub">Anker 7-in-1 USB-C Hub</ShopLink>,{" "}
          <ShopLink slug="tomtoc-14-laptop-case">tomtoc 14-inch case</ShopLink>. Same rule.
        </li>
        <li>Need a live delivery estimate: tap the tagged listing. That is the honest clock.</li>
      </ul>
      <h2>When Amazon is the buy</h2>
      <p>
        Always, on this site. You want UK returns. You want a brand Al does not invent. Those are
        Amazon jobs. The buttons are tagged and marked sponsored.
      </p>
      <p>
        This checkout is theatre. Nothing packs, nothing bills. The useful part of the bay is the
        tagged listing and the snapshot price. Read{" "}
        <Link to="/faq" className="text-clay hover:text-clay-dark">
          the briefing
        </Link>{" "}
        if you want the short version.
      </p>
    </>
  );
}

function PackingPowerBody() {
  return (
    <>
      <p>
        Skip the loose batteries and the Fire sticks. What is actually moving in the UK accessory
        charts is a power bank that ships with a cable, a foldable GaN that does not stab
        the sleeve, and a hub you can leave on a hotel desk. That is the pack. Everything else is
        a second bag.
      </p>
      <aside className="rounded-2xl bg-cream p-5 shadow-[var(--shadow-border)]">
        <p className="text-xs font-medium tracking-widest text-clay uppercase">UK cabin answer</p>
        <p className="mt-3 text-ink">
          Power banks go in cabin / hand luggage only. Never the hold. The{" "}
          <a
            href={CAA_PACK_RIGHT}
            target="_blank"
            rel="noopener noreferrer"
            className="text-clay hover:text-clay-dark"
          >
            UK Civil Aviation Authority
          </a>{" "}
          says you can only take two per person, and they should never be recharged onboard.
          Under 100Wh is fine for the cabin. 100Wh to 160Wh needs airline approval. Over 160Wh
          is not allowed in passenger baggage.
        </p>
        <p className="mt-3 text-sm text-stone">
          Full watt-hour maths, the March 2026 list, and the banks I would actually fly:{" "}
          <GuideLink slug="power-bank-hand-luggage-uk">
            power banks in UK hand luggage
          </GuideLink>
          .
        </p>
      </aside>
      <h2>Can you take a power bank on a plane from the UK?</h2>
      <p>
        Yes — in the cabin bag, not checked luggage. The CAA pack-right page is blunt: always take
        spare batteries and power banks with you in the cabin; you can only take two power banks
        per person; they should never be re-charged onboard. Battery size is in watt-hours. Under
        100Wh is the common phone, laptop, and camera class and should travel in the cabin. 100Wh
        to 160Wh (large banks, some power tools) requires airline approval. Over 160Wh is
        prohibited in passenger baggage. Read the{" "}
        <a
          href={CAA_PACK_RIGHT}
          target="_blank"
          rel="noopener noreferrer"
          className="text-clay hover:text-clay-dark"
        >
          CAA pack-right page
        </a>
        , then the carrier you booked. I do not invent airline policy.
      </p>
      <p>
        Wh = mAh × V ÷ 1000. If the case does not print Wh, use the nominal cell voltage —
        typically 3.7V for lithium-ion, not the 5V USB output. That is the CAA formula. The longer
        cabin log is{" "}
        <GuideLink slug="power-bank-hand-luggage-uk">
          Can you take a power bank on a plane from the UK?
        </GuideLink>
        .
      </p>
      <h2>What do Ryanair, easyJet, BA and Jet2 allow?</h2>
      <p>
        Checked on 23 October 2026 on each airline's own site. Airlines change these rules, so
        click through before you fly. I do not invent airline policy. Using the bank once you sit
        down is{" "}
        <GuideLink slug="power-bank-on-plane-rules-uk">
          can you use a power bank on a plane
        </GuideLink>
        .
      </p>
      <div className="overflow-x-auto rounded-2xl bg-cream shadow-[var(--shadow-border)]">
        <table className="w-full min-w-[52rem] text-left text-sm">
          <thead>
            <tr className="text-xs tracking-widest text-clay uppercase">
              <th className="px-4 py-3 font-medium">Airline</th>
              <th className="px-4 py-3 font-medium">Max banks</th>
              <th className="px-4 py-3 font-medium">Wh limit</th>
              <th className="px-4 py-3 font-medium">Where on board</th>
              <th className="px-4 py-3 font-medium">Recharge the bank?</th>
              <th className="px-4 py-3 font-medium">Charge a phone from it?</th>
              <th className="px-4 py-3 font-medium">Source</th>
            </tr>
          </thead>
          <tbody className="text-stone">
            {AIRLINE_POWER_BANK_ROWS.map((row) => (
              <tr key={row.airline} className="border-t border-line align-top">
                <td className="px-4 py-3 font-medium text-ink">{row.airline}</td>
                <td className="px-4 py-3">{row.maxBanks}</td>
                <td className="px-4 py-3">{row.whLimit}</td>
                <td className="px-4 py-3">{row.whereOnBoard}</td>
                <td className="px-4 py-3">{row.rechargeBank}</td>
                <td className="px-4 py-3">{row.chargePhone}</td>
                <td className="px-4 py-3">
                  <ul className="list-none space-y-1 pl-0">
                    {row.sources.map((source) => (
                      <li key={source.href}>
                        <a
                          href={source.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-clay hover:text-clay-dark"
                        >
                          {source.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        The short version: Ryanair and BA cap you at 100Wh. easyJet and Jet2 go up to 160Wh. None
        of the four let you recharge the bank on board. easyJet and Jet2 do not let you charge a
        phone from one. BA still does not say, in official wording, whether you may charge a phone
        from a bank in flight — that cell stays "Check with airline".
      </p>
      <h2>Is a 20,000mAh power bank allowed on a plane?</h2>
      <p>
        Yes, as a cabin item, if it sits under 100Wh and you stay inside the two-bank limit. The{" "}
        <AmazonText asin={AMAZON_PICK_ASINS.ankerZolo20k}>Anker Zolo 20K</AmazonText> is 20,000
        mAh — about <strong className="font-medium text-ink">74Wh at 3.7V nominal</strong> (20,000
        × 3.7 ÷ 1000). That is under the CAA 100Wh line, still a hand-luggage item, still not a
        hold item. Thirty-watt USB-C. Cable in the box. I do not dropship Anker. If you need a
        bank this week, this is the tagged listing.
      </p>
      <AmazonPick asin={AMAZON_PICK_ASINS.ankerZolo20k} />
      <h2>What foldable GaN should I pack?</h2>
      <p>
        The bay's 65W pick does not fold.{" "}
        <ShopLink slug="ugreen-65w-gan">UGREEN 65W GaN Charger (2 USB-C, UK plug)</ShopLink> is a
        white dual USB-C brick with a UK 3-pin. The listing does not say folding. Amazon UK
        affiliate pick. Al does not dropship it. If you need a foldable plug,{" "}
        <ShopLink slug="anker-100w-gan-charger">Anker 100W USB-C GaN Charger</ShopLink> is the
        verified foldable brick: 100W, 3-port GaN, foldable plug 69×55×34 mm, smart display,
        USB-C cable in the box.
      </p>
      <AmazonPick asin={AMAZON_PICK_ASINS.flightbrick100} />
      <h2>Is a 70W named travel charger the honest brick?</h2>
      <p>
        Seventy watts, travel-sized, a name a hotel desk has seen before. If you want a UK return
        window and a brand that will still exist next year, this is the honest click. Do not buy it
        because the title says Pro. Buy it because the wattage and the fold match the bag.
      </p>
      <AmazonPick asin="B0FK587ZZ6" />
      <h2>Can a magnetic power bank go in the cabin?</h2>
      <p>
        A magnetic puck for the phone that still pretends it does not need a cable. Qi2.2, small,
        airline-safe if the listing capacity stays under the cabin limit. This page never printed
        a milliamp-hour figure for the Baseus, so there is no Wh sum here — read the case.
        {" "}
        <ShopLink slug="belkin-5000-magnetic-power-bank">
          Belkin 5000mAh Magnetic Wireless Power Bank
        </ShopLink>{" "}
        is the catalog pick: 5,000 mAh, about{" "}
        <strong className="font-medium text-ink">18.5Wh at 3.7V nominal</strong> (5,000 × 3.7 ÷
        1000). MagSafe-compatible, 7.5W wireless. This Baseus is the affiliate aisle if you need
        it on a Tuesday.
      </p>
      <AmazonPick asin="B0G4CHTD53" />
      <h2>What USB-C hub belongs on a hotel desk?</h2>
      <p>
        Hotel desk, one cable, HDMI that should hit 4K60 if the listing is not lying. Eight ports
        is enough.{" "}
        <ShopLink slug="anker-7-in-1-usb-c-hub">Anker USB-C Hub, 7-in-1</ShopLink> is the catalog
        pick: 4K@60Hz HDMI, 85W max PD, SD/TF, charger not included. ABLEWE is the next-day
        stand-in if you want eight ports.
      </p>
      <AmazonPick asin="B0DN9F245H" />
      <h2>Which power banks are cabin-legal on those four airlines?</h2>
      <p>
        Cabin verdicts only. Watt-hours use the same 3.7V nominal sum already on this page, and
        only where a milliamp-hour figure is already stated — except A1695, which uses the Wh
        printed on the Amazon UK listing. Each bank below has its own price-check date.
        Amazon’s live checkout may differ.
      </p>
      <h3>INIU 20,000mAh 45W</h3>
      <p>
        About 74Wh at 3.7V nominal (20,000 × 3.7 ÷ 1000). That sits under 100Wh, so it is
        cabin-legal on Ryanair, easyJet, BA and Jet2 if you stay inside the two-bank limit.
        Forty-five watt USB-C, cable built in. The tagged listing is the{" "}
        <AmazonText asin={AMAZON_PICK_ASINS.iniu20k45w}>INIU P51L 20,000mAh 45W</AmazonText>{" "}
        (ASIN B0DCZ82MGG). £27.53, price checked 10 Nov 2026 on Amazon.co.uk.
      </p>
      <AmazonPick asin={AMAZON_PICK_ASINS.iniu20k45w} />
      <h3>Anker Laptop Power Bank 25,000mAh (A1695)</h3>
      <p>
        The one to look at if a laptop is the thing that dies. Still two banks at most, and
        Ryanair and BA will not take anything over 100Wh. The{" "}
        <AmazonText asin={AMAZON_PICK_ASINS.ankerA1695}>Amazon UK listing for A1695</AmazonText>{" "}
        (ASIN B0DCBB2YTR) prints a nominal <strong className="font-medium text-ink">25,000mAh
        (90Wh)</strong> capacity. That is under 100Wh, so it is cabin-legal on all four if you
        stay inside two banks. A 3.7V sum from 25,000mAh is the wrong tool on this pack — use the
        printed 90Wh. £65.55, price checked 13 Nov 2026 on Amazon.co.uk. The listing was in
        stock that day. I did not re-check Anker UK’s own store, so that earlier £89.98
        figure is out of this log — check on Amazon if you want a non-Amazon price.
      </p>
      <AmazonPick asin={AMAZON_PICK_ASINS.ankerA1695} />
      <h3>INIU 10,000mAh 45W</h3>
      <p>
        About 37Wh at 3.7V nominal (10,000 × 3.7 ÷ 1000). Cabin-trivial: a phone-and-earbuds bank
        that stays well under every Wh line in the table. The tagged listing is the{" "}
        <AmazonText asin={AMAZON_PICK_ASINS.iniu10k45w}>INIU P50 10,000mAh 45W</AmazonText>{" "}
        (ASIN B0DQD385HN). £27.99, price checked 13 Nov 2026 on Amazon.co.uk.
      </p>
      <AmazonPick asin={AMAZON_PICK_ASINS.iniu10k45w} />
      <h3>Anker Zolo 20K</h3>
      <p>
        Already covered above: 20,000 mAh, about 74Wh, 30W USB-C, cable in the box. Cabin-legal on
        all four if you stay inside two banks. The tagged listing is on that section.
      </p>
      <h3>Anker MagGo 10,000mAh Qi2</h3>
      <p>
        <ShopLink slug="anker-maggo-10000-power-bank">Anker MagGo 10,000mAh Qi2 Power Bank</ShopLink>{" "}
        is the{" "}
        <AmazonText asin={AMAZON_PICK_ASINS.magDeck10}>Anker MagGo 10,000 mAh Qi2</AmazonText>
        : about 37Wh at 3.7V nominal (10,000 × 3.7 ÷ 1000). Qi2 15W wireless, USB-C, smart
        display, white. Cabin-legal. Covers the day you miss the socket. I do not dropship it. The
        card is affiliate. £49.99, price checked 10 Nov 2026 on Amazon.co.uk.
        Amazon's live checkout may differ.
      </p>
      <AmazonPick asin={AMAZON_PICK_ASINS.magDeck10} />
      <h3>Baseus magnetic power bank</h3>
      <p>
        Already covered above. This page has never printed a milliamp-hour figure for it, so there
        is no Wh sum. Read the case.{" "}
        <ShopLink slug="belkin-5000-magnetic-power-bank">
          Belkin 5000mAh Magnetic Wireless Power Bank
        </ShopLink>{" "}
        is the catalog pick: 5,000 mAh, about 18.5Wh. The tagged Baseus listing sits on that
        section.
      </p>
      <h2>What is the best cabin-legal power bank in the UK?</h2>
      <p>
        For most UK travellers, the{" "}
        <AmazonText asin={AMAZON_PICK_ASINS.iniuP62}>
          INIU P62 20,000mAh 65W (model P62-E1, Mini)
        </AmazonText>{" "}
        is the best all-round cabin-legal choice. It is about 73-74Wh, so it needs no airline
        approval, and 65W USB-C covers phones, tablets and many lightweight laptops.
      </p>
      <p>
        The three banks already on this page, the Anker 737, the INIU P63 and the ALOGIC Ark, are
        still the ones to look at if you want as much capacity as you can carry under 100Wh, or
        100W-140W for a hungrier laptop. The P62 sits beside them, not instead of them. It is not
        the INIU 20,000mAh 45W (P51L) listed higher up this page.
      </p>
      <p>
        The{" "}
        <a
          href={CAA_PACK_RIGHT}
          target="_blank"
          rel="noopener noreferrer"
          className="text-clay hover:text-clay-dark"
        >
          CAA pack-right page
        </a>{" "}
        (checked 29 Oct 2026) puts it like this: “Under 100Wh are common in phones, laptops, and
        cameras – it is recommended that you take these devices with you in the cabin.” Then:
        “100Wh to 160Wh ... you require airline approval to carry these”. “Over 160Wh are
        prohibited in passenger baggage”. And: “you can only take two power banks per person. These
        should never be re-charged onboard the aircraft.”
      </p>
      <p>
        I am not repeating the airline table or the mAh-to-Wh sum here. See the airline table in
        our{" "}
        <GuideLink slug="power-bank-on-plane-rules-uk">power banks on planes guide</GuideLink>.
        That table covers six airlines.
      </p>
      <div className="overflow-x-auto rounded-2xl bg-cream shadow-[var(--shadow-border)]">
        <table className="w-full min-w-[52rem] text-left text-sm">
          <thead>
            <tr className="text-xs tracking-widest text-clay uppercase">
              <th className="px-4 py-3 font-medium">Power bank</th>
              <th className="px-4 py-3 font-medium">Capacity</th>
              <th className="px-4 py-3 font-medium">Wh</th>
              <th className="px-4 py-3 font-medium">Max output</th>
              <th className="px-4 py-3 font-medium">UK price</th>
              <th className="px-4 py-3 font-medium">Where to buy</th>
            </tr>
          </thead>
          <tbody className="text-stone">
            <tr className="border-t border-line align-top">
              <td className="px-4 py-3 font-medium text-ink">INIU P62 (P62-E1, Mini)</td>
              <td className="px-4 py-3">20,000mAh</td>
              <td className="px-4 py-3">about 73-74Wh</td>
              <td className="px-4 py-3">65W single USB-C</td>
              <td className="px-4 py-3">£46.99, checked 10 Nov 2026</td>
              <td className="px-4 py-3">
                <AmazonText asin={AMAZON_PICK_ASINS.iniuP62}>Amazon UK</AmazonText>
              </td>
            </tr>
            <tr className="border-t border-line align-top">
              <td className="px-4 py-3 font-medium text-ink">
                ALOGIC Ark
                <span className="block text-xs font-normal text-dust">A27KPB140W</span>
              </td>
              <td className="px-4 py-3">27,000mAh</td>
              <td className="px-4 py-3">97.2Wh</td>
              <td className="px-4 py-3">140W USB-C</td>
              <td className="px-4 py-3">£84.99 (regular £99.99), sold out when checked 10 Nov 2026</td>
              <td className="px-4 py-3">
                <a
                  href="https://alogic.co.uk/products/ark-27-000mah-power-bank-with-140w-usb-c-charging"
                  target="_blank"
                  rel="noopener noreferrer nofollow sponsored"
                  className="text-clay hover:text-clay-dark"
                >
                  ALOGIC UK
                </a>
              </td>
            </tr>
            <tr className="border-t border-line align-top">
              <td className="px-4 py-3 font-medium text-ink">
                INIU P63
                <span className="block text-xs font-normal text-dust">P63-E1</span>
              </td>
              <td className="px-4 py-3">25,000mAh</td>
              <td className="px-4 py-3">92.5Wh</td>
              <td className="px-4 py-3">100W single USB-C</td>
              <td className="px-4 py-3">£66.99, checked 10 Nov 2026</td>
              <td className="px-4 py-3">
                <AmazonText asin="B0DBHGZ5QH">Amazon UK</AmazonText>
              </td>
            </tr>
            <tr className="border-t border-line align-top">
              <td className="px-4 py-3 font-medium text-ink">
                Anker 737 PowerCore 24K
                <span className="block text-xs font-normal text-dust">A1289</span>
              </td>
              <td className="px-4 py-3">24,000mAh</td>
              <td className="px-4 py-3">86.4Wh</td>
              <td className="px-4 py-3">140W</td>
              <td className="px-4 py-3">No featured new buy box on Amazon UK on 10 Nov 2026; check on Amazon</td>
              <td className="px-4 py-3">Check before buying</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-sm text-dust">Prices change daily; comparison table checked 10 Nov 2026.</p>
      <h3>INIU P62</h3>
      <p>
        The P62 is the smaller, cheaper 65W bank. 20,000mAh, about 73-74Wh. INIU's Cougar series
        table lists 74Wh, which matches the 3.7V sum already used on this page (20,000 × 3.7 ÷
        1000). The same official product page also says "73Wh" in its TSA line. Both sit under the
        CAA 100Wh line, so it is cabin-legal on a UK flight with no airline approval if you stay
        inside the two-bank limit. Read the watt-hour rating printed on the case before you fly.
        Max output is 65W on USB-C1, with a second USB-C at 36W and a USB-A at 18W. Weight is about
        323g. It ships with a detachable 100W USB-C cable that can be used as a lanyard. It is not a
        fixed built-in lead. £46.99, sold by Amazon, in stock on 10 Nov 2026. The tagged listing is
        the{" "}
        <AmazonText asin={AMAZON_PICK_ASINS.iniuP62}>INIU P62-E1 Mini</AmazonText> (ASIN B0DB89DSHV).
        If Amazon shows a Classic size on the same page, pick Mini / P62-E1. This is an Amazon UK
        affiliate pick. Amazon's live checkout may differ.
      </p>
      <p>
        <strong className="font-medium text-ink">For you if</strong> you want one all-round cabin
        bank for a phone, a tablet and the occasional lightweight USB-C laptop, at a lower price
        and weight than the P63.{" "}
        <strong className="font-medium text-ink">Not for you if</strong> your laptop wants 100W, or
        you want the most watt-hours you can carry under 100Wh. That is still the P63 or the ALOGIC
        Ark.
      </p>
      <p>
        <strong className="font-medium text-ink">P62 vs P63:</strong> they are different models in
        the same Cougar family. The P62 is 20,000mAh, about 73-74Wh, 65W and about 323g. The P63,
        already on this page, is 25,000mAh, 92.5Wh, 100W and about 392g. Same maker, different job.
        The P62 is also not the INIU 20,000mAh 45W (P51L) higher up this page: that one is 45W with
        a built-in cable.
      </p>
      <AmazonPick asin={AMAZON_PICK_ASINS.iniuP62} />
      <h3>ALOGIC Ark</h3>
      <p>
        The ALOGIC Ark is very close to the 100Wh line, so make sure the rating on the case is
        visible at security. 27,000mAh, 97.2Wh, 140W USB-C, 635g. £84.99 at{" "}
        <a
          href="https://alogic.co.uk/products/ark-27-000mah-power-bank-with-140w-usb-c-charging"
          target="_blank"
          rel="noopener noreferrer nofollow sponsored"
          className="text-clay hover:text-clay-dark"
        >
          ALOGIC UK
        </a>{" "}
        (regular £99.99). It was sold out on ALOGIC's UK store when checked 10 Nov 2026. It is not confirmed on Amazon UK.
      </p>
      <h3>INIU P63</h3>
      <p>
        The{" "}
        <AmazonText asin="B0DBHGZ5QH">INIU P63</AmazonText> is 100W, which is enough for most 13-14
        inch laptops, and it is the cheapest of the three. 25,000mAh, 92.5Wh from INIU’s spec table
        (25,000mAh × 3.7V), about 392g. £66.99, in stock on 10 Nov 2026. Read the
        rating on the case before flying.
      </p>
      <h3>Anker 737 PowerCore 24K</h3>
      <p>
        The Anker 737 is a good bank with poor availability. 24,000mAh,{" "}
        <a
          href="https://www.anker.tw/ANKER/moreinfo_177693.htm"
          target="_blank"
          rel="noopener noreferrer"
          className="text-clay hover:text-clay-dark"
        >
          86.4Wh on Anker’s official page
        </a>, 140W max. No featured new buy box on Amazon UK on 10 Nov 2026; check on Amazon.
        The other two do the same job.
      </p>
      <h2>Questions people type</h2>
      <dl className="space-y-6">
        {PACKING_POWER_FAQS.map((item) => (
          <div key={item.q}>
            <dt className="font-display text-xl font-medium tracking-tight text-ink">{item.q}</dt>
            <dd className="mt-2 text-stone">{item.a}</dd>
          </div>
        ))}
      </dl>
      <h2>The affiliate bit, once</h2>
      <p>
        Those buttons are tagged Amazon UK affiliate links. Al may earn a commission. Read the
        listing, not the title. Card prices are approx. snapshots — Amazon’s live checkout may differ. I do not invent stock.
      </p>
      <p>
        If you want the versions I put a name on, the bay has{" "}
        <ShopLink slug="ugreen-65w-gan">the UGREEN 65W</ShopLink>,{" "}
        <ShopLink slug="belkin-5000-magnetic-power-bank">the Belkin 5000mAh</ShopLink>, and{" "}
        <ShopLink slug="anker-7-in-1-usb-c-hub">the Anker 7-in-1 hub</ShopLink>. All Amazon UK
        picks. Delivery is Amazon's. No surprise warehouse.
        Cabin rules, two-bank limit, and the Wh sum live on{" "}
        <GuideLink slug="power-bank-hand-luggage-uk">
          power banks in UK hand luggage
        </GuideLink>
        . Using the bank once you sit down is a different question:{" "}
        <GuideLink slug="power-bank-on-plane-rules-uk">
          can you use a power bank on a plane
        </GuideLink>
        .
      </p>
    </>
  );
}

function TravelDeskBody() {
  return (
    <>
      <p>
        As an Amazon Associate, Al's AI Drop Ship earns from qualifying purchases on amazon.co.uk
        when you buy via the tagged links below. We recommend comparable retail products — buy what
        fits your bag and budget, and always check the live UK listing for price and stock.
      </p>
      <p>
        There is a difference between packing tech and packing useful tech. Gimmicks eat weight.
        The gear that survives a month of desks that are not yours is boring in the best way: power
        that actually feeds a laptop, a screen height that does not wreck your neck, a mouse that
        earns its grams, a cable that matches the brick, and enough display to finish the work you
        flew for.
      </p>
      <p>
        Five Amazon UK picks. They sit next to, not on top of, the headphones, hubs, and 65W
        bricks already in the bay. Al does not dropship these. The cards are affiliate.
      </p>
      <h2>Anker 100W GaN — one plug, three devices</h2>
      <p>
        Hotel desks have one free socket and zero patience. If you still travel with a single-port
        laptop charger plus a phone brick, you are negotiating with the wall.{" "}
        <ShopLink slug="anker-100w-gan-charger">Anker 100W USB-C GaN Charger</ShopLink> is a 100W
        3-port GaN with a smart display and touch control: two USB-C, one USB-A, foldable plug
        69×55×34 mm, USB-C cable in the box. 95W+5W mode. Dark grey. 18-month warranty.
      </p>
      <p>
        This is the practical step up from{" "}
        <ShopLink slug="ugreen-65w-gan">UGREEN 65W GaN Charger (2 USB-C, UK plug)</ShopLink> if one
        socket has to do a laptop and a phone. Pair it with a proper high-watt cable. The brick
        cannot outrun a weak lead.
      </p>
      <AmazonPick asin={AMAZON_PICK_ASINS.flightbrick100} />
      <h2>UGREEN laptop stand — raise the screen</h2>
      <p>
        Working flat on a café table looks romantic until hour three.{" "}
        <ShopLink slug="ugreen-laptop-stand">UGREEN Laptop Stand</ShopLink> is an adjustable
        aluminium stand: five height settings, a carry bag, 8-17.3 inch machines, scratch-resistant
        padding, silver. It is not a standing desk. It is a riser that makes hotel and co-working
        tables usable, especially if you already carry{" "}
        <ShopLink slug="omoton-75-iso-uk-keyboard">OMOTON 75% ISO-UK</ShopLink>.
      </p>
      <AmazonPick asin={AMAZON_PICK_ASINS.runwayRiser} />
      <h2>MX Master 3S — trackpad is fine until the spreadsheet isn't</h2>
      <p>
        Trackpads survive short flights. Long edit sessions need MagSpeed scrolling and quiet
        clicks for hotel calls.{" "}
        <ShopLink slug="logitech-mx-master-3s">Logitech MX Master 3S</ShopLink> is the graphite
        mouse: 8000 DPI, MagSpeed, Bluetooth + USB-C, Logi Options+ / FLOW. I do not dropship
        Logitech. If the mouse earns bag space, this is the one.
      </p>
      <AmazonPick asin={AMAZON_PICK_ASINS.cabinCursor} />
      <h2>Anker 240W cable — the brick is only as fast as the cable</h2>
      <p>
        A 100W wall brick with a tired 60W cable is cosplay.{" "}
        <ShopLink slug="anker-240w-right-angle-cable">
          Anker 240W Right-Angle USB-C Cable, 2-pack
        </ShopLink>{" "}
        is braided, six feet each, 90-degree ends, 10,000+ bends, 24-month warranty. Pack a pair.
        Leave one at the desk.
      </p>
      <AmazonPick asin={AMAZON_PICK_ASINS.twinLead240} />
      <h2>Best portable monitor for travel: 16-inch USB-C</h2>
      <p>
        One laptop panel means Slack eating half the spreadsheet.{" "}
        <ShopLink slug="arzopa-z1fc-portable-monitor">ARZOPA Z1FC</ShopLink> is the
        16-inch USB-C panel I would pack. Official manufacturer specs, not a guess: 16.1 inch FHD
        1920×1080, 144Hz, 106% sRGB, net weight 1.72 lb / 780g. USB-C plug-and-play or Mini HDMI.
        One USB-C cable can carry video and power when the laptop supports DisplayPort Alt Mode
        and supplies enough wattage; HDMI devices still need a second power lead. Kickstand. Slim
        enough to sit beside the laptop. Mid-range, not OLED luxury. Sleeve the panel so it does
        not share scratches with the bricks. Size tradeoffs and the port test live in{" "}
        <GuideLink slug="portable-monitor-laptop-second-screen">
          portable monitors as a second screen
        </GuideLink>
        .
      </p>
      <AmazonPick asin={AMAZON_PICK_ASINS.secondWindow16} />
      <h3 className="font-display text-lg font-medium tracking-tight text-ink">
        How it sits next to two other travel panels
      </h3>
      <p>
        A short comparison against two panels people actually search — ViewSonic TD1656-2K and
        SideTrak Solo Pro 13 — plus the ARZOPA Z1FC this card already is. Specs below are from
        the manufacturer pages, not marketplace titles. UK prices are omitted; live Amazon
        checkout is the only honest number, and I have not verified one for the two alternatives.
      </p>
      <div className="overflow-x-auto rounded-2xl bg-cream shadow-[var(--shadow-border)]">
        <table className="w-full min-w-[36rem] text-left text-sm">
          <thead>
            <tr className="text-xs tracking-widest text-clay uppercase">
              <th className="px-4 py-3 font-medium">Panel</th>
              <th className="px-4 py-3 font-medium">Size / resolution</th>
              <th className="px-4 py-3 font-medium">Weight</th>
              <th className="px-4 py-3 font-medium">Single-cable USB-C</th>
            </tr>
          </thead>
          <tbody className="text-stone">
            <tr className="border-t border-line">
              <td className="px-4 py-3 text-ink">
                <ShopLink slug="arzopa-z1fc-portable-monitor">ARZOPA Z1FC</ShopLink>
                <span className="block text-xs text-dust">16.1-inch portable monitor</span>
              </td>
              <td className="px-4 py-3">16.1 in · 1920×1080 · 144Hz</td>
              <td className="px-4 py-3">1.72 lb / 780g</td>
              <td className="px-4 py-3">
                Yes, when the laptop does DP Alt Mode and can power the panel
              </td>
            </tr>
            <tr className="border-t border-line">
              <td className="px-4 py-3 text-ink">
                ViewSonic TD1656-2K
                <span className="block text-xs text-dust">official datasheet</span>
              </td>
              <td className="px-4 py-3">16 in · 2560×1600 · 60Hz</td>
              <td className="px-4 py-3">1.8 lb / 0.8 kg</td>
              <td className="px-4 py-3">
                Yes — dual USB-C, up to 65W bidirectional PD, if the source supports DP 1.2 Alt
                Mode and PD
              </td>
            </tr>
            <tr className="border-t border-line">
              <td className="px-4 py-3 text-ink">
                SideTrak Solo Pro 13
                <span className="block text-xs text-dust">Luxor STFRHDTC13BL touch listing</span>
              </td>
              <td className="px-4 py-3">13 in · 1920×1080 · 60Hz</td>
              <td className="px-4 py-3">1.6 lb</td>
              <td className="px-4 py-3">
                USB-C plus mini-HDMI on the official listing. Sell sheet claims a single-cord
                setup with pass-through; I have not independently tested it
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-sm text-dust">
        Sources:{" "}
        <a
          href="https://www.arzopa.com/products/z1fc-16-1-fhd-144hz-portable-monitor"
          target="_blank"
          rel="noopener noreferrer"
          className="text-clay hover:text-clay-dark"
        >
          ARZOPA Z1FC
        </a>
        ,{" "}
        <a
          href="https://www.viewsonic.com/global/products/sheet/TD1656-2K"
          target="_blank"
          rel="noopener noreferrer"
          className="text-clay hover:text-clay-dark"
        >
          ViewSonic TD1656-2K datasheet
        </a>
        ,{" "}
        <a
          href="https://www.luxorworkspaces.com/solo-pro-fhd-touch-monitor-13-3-inch-black"
          target="_blank"
          rel="noopener noreferrer"
          className="text-clay hover:text-clay-dark"
        >
          Luxor SideTrak Solo Pro 13
        </a>
        . No UK prices on this table.
      </p>
      <h2>How I would pack the kit</h2>
      <ul>
        <li>Bottom of the bag: Anker 100W GaN and the Anker 240W cable pair.</li>
        <li>Middle: UGREEN stand in its bag. MX Master 3S in a pocket.</li>
        <li>Against the laptop: ARZOPA Z1FC in a case, not loose against the bricks.</li>
      </ul>
      <p>
        That is a travel desk — not a gadget haul. If one of these earns a permanent slot, it will
        be because it removed friction, not because it looked clever in a reel.
      </p>
      <h2>The affiliate bit, once</h2>
      <p>
        Those buttons are tagged Amazon UK affiliate links. Al may earn a commission. Read the
        listing, not the title. Card prices are approx. snapshots — Amazon’s live checkout may differ. I do not invent stock.
      </p>
      <p>Fly light. Charge full. Keep your neck.</p>
    </>
  );
}

function AfterSummerBody() {
  return (
    <>
      <p>
        The suitcase is back in the loft, the sunburn has faded, and the laptop is on the kitchen
        table again. Most of the tech you took away for the summer can do a second job at home, and
        a few cheap additions make the switch painless. Here's what I'd keep out of the drawer this
        autumn.
      </p>
      <h2>1. Turn the travel laptop into a proper desk setup</h2>
      <p>
        One cable, everything connected. The{" "}
        <AmazonText asin={AMAZON_PICK_ASINS.ableweHub}>ABLEWE 8-in-1 USB-C hub</AmazonText> plugs
        your monitor, keyboard, mouse and card reader into the laptop all at once, so "going to
        work" means plugging in one lead rather than five.
      </p>
      <AmazonPick asin={AMAZON_PICK_ASINS.ableweHub} />
      <h2>2. Lift the screen and save your neck</h2>
      <p>
        Hunching over a laptop on a sofa was fine on holiday. It isn't fine for eight hours a day.
        The{" "}
        <AmazonText asin={AMAZON_PICK_ASINS.runwayRiser}>
          UGREEN fold-flat aluminium laptop stand
        </AmazonText>{" "}
        (
        <ShopLink slug="ugreen-laptop-stand">UGREEN Laptop Stand</ShopLink>
        ) raises the screen to a sensible height and still folds into its bag for the next trip.
        Pair it with the{" "}
        <AmazonText asin={AMAZON_PICK_ASINS.cabinCursor}>Logitech MX Master 3S</AmazonText> (
        <ShopLink slug="logitech-mx-master-3s">MX Master 3S</ShopLink>
        ), which has quiet clicks for calls and MagSpeed scrolling, so the trackpad can retire for
        the season.
      </p>
      <AmazonPick asin={AMAZON_PICK_ASINS.runwayRiser} />
      <AmazonPick asin={AMAZON_PICK_ASINS.cabinCursor} />
      <h2>3. Add a second screen without buying a monitor arm</h2>
      <p>
        The{" "}
        <AmazonText asin={AMAZON_PICK_ASINS.secondWindow16}>
          ARZOPA 16.1-inch portable monitor
        </AmazonText>{" "}
        (
        <ShopLink slug="arzopa-z1fc-portable-monitor">ARZOPA Z1FC</ShopLink>
        ) sits next to the laptop and connects over USB-C or mini HDMI. When you're done, it
        slides into a bag, which suits a spare room that's also a guest room.
      </p>
      <AmazonPick asin={AMAZON_PICK_ASINS.secondWindow16} />
      <h2>4. Swap three chargers for one</h2>
      <p>
        If summer left you with a tangle of bricks, the{" "}
        <AmazonText asin={AMAZON_PICK_ASINS.flightbrick100}>
          Anker 100W 3-port GaN charger
        </AmazonText>{" "}
        (
        <ShopLink slug="anker-100w-gan-charger">Anker 100W USB-C GaN</ShopLink>
        ) charges your laptop, phone and earbuds from one socket, and its smart display is on the
        listing. Your charger is only as fast as its cable, so the{" "}
        <AmazonText asin={AMAZON_PICK_ASINS.twinLead240}>
          Anker 240W right-angle USB-C 2-pack
        </AmazonText>{" "}
        (
        <ShopLink slug="anker-240w-right-angle-cable">Anker 240W cable pair</ShopLink>
        ) is worth adding: keep one lead at the desk and one in the bag.
      </p>
      <AmazonPick asin={AMAZON_PICK_ASINS.flightbrick100} />
      <AmazonPick asin={AMAZON_PICK_ASINS.twinLead240} />
      <h2>5. Keep the power bank for the commute</h2>
      <p>
        The holiday power bank doesn't have to go back in a drawer. The{" "}
        <AmazonText asin={AMAZON_PICK_ASINS.ankerZolo20k}>Anker Zolo 20K</AmazonText> is just as
        useful on a delayed train in November as it was at the airport gate in July.
      </p>
      <AmazonPick asin={AMAZON_PICK_ASINS.ankerZolo20k} />
      <p>
        That's the whole list. None of it is flashy, and all of it removes a small daily annoyance.
      </p>
      <p>Fly light, charge full.</p>
      <p>Al</p>
      <h2>The affiliate bit, once</h2>
      <p>
        As an Amazon Associate, Al's AI Drop Ship earns from qualifying purchases. Prices and stock
        change, so check the linked Amazon UK listing before you buy.
      </p>
    </>
  );
}

function WorldAdapterBody() {
  return (
    <>
      <p>
        A UK three-pin brick is a home tool. The second you land somewhere that is not Britain, it
        is a paperweight unless you packed the right adapter. Most "travel adapters" are a pouch of
        dead sockets: no USB-C, no wattage worth a laptop, and a fuse that looks like a souvenir.
        The job is one brick that speaks UK, EU, AU, and US pins and still feeds a notebook.
      </p>
      <h2>What actually matters in a world charger</h2>
      <p>
        Wattage first. A phone cube in a fancy shell is still a phone cube. Seventy watts is the
        useful line for a modern USB-C laptop plus a phone on the same brick. Look for USB-C Power
        Delivery on the adapter itself so you are not stacking a second GaN in the sleeve. Grounded
        pins, a real fuse on the UK face, and a label that says 100–240V. If the listing hides
        watts behind "fast charge", leave it.
      </p>
      <p>
        This guide is for laptops, phones, and hubs. Hair dryers, cheap irons, and anything that
        expects 230V through a dumb US plug are a different packing problem.
      </p>
      <ul>
        <li>UK / EU / AU / US pins on one body. Not a bag of loose heads.</li>
        <li>Enough USB-C PD to feed a laptop. Two leftover USB-A ports are a bonus, not the pitch.</li>
        <li>GaN if you want it small enough to survive a weekend bag.</li>
        <li>A cable that can carry the watts. The adapter cannot outrun a tired 60W lead.</li>
      </ul>
      <h2>MOMAX 70W — one brick, four countries</h2>
      <p>
        <ShopLink slug="momax-70w-travel-adapter">MOMAX 70W GaN Universal Travel Adapter</ShopLink>{" "}
        is the{" "}
        <AmazonText asin={AMAZON_PICK_ASINS.worldBrick70}>
          MOMAX 70W GaN universal travel adapter
        </AmazonText>
        : UK, EU, AU, and US pins (JP/CN also listed), 150+ countries, 7.7×5.5×5.3 cm, black.
        Laptop and phones without a pouch of country plugs. I do not dropship it. The card is
        affiliate. Read the listing for live stock. Approx. UK price, checked 3 Nov 2026. Amazon's
        live checkout may differ.
      </p>
      <p>
        This is the one I would pack if the itinerary leaves the UK wall. Hotel desks have one free
        socket.
      </p>
      <AmazonPick asin={AMAZON_PICK_ASINS.worldBrick70} />
      <h2>When you are staying on UK pins</h2>
      <p>
        If the trip is Britain and a train, you do not need a world face.{" "}
        <ShopLink slug="anker-100w-gan-charger">Anker 100W USB-C GaN Charger</ShopLink> is Anker’s
        100W 3-port GaN with a foldable plug and a smart display. That is the honest desk brick for
        a UK socket.{" "}
        <ShopLink slug="ugreen-65w-gan">UGREEN 65W GaN Charger (2 USB-C, UK plug)</ShopLink> is the
        smaller Amazon UK pick: white, two USB-C, UK 3-pin (the listing does not say folding),
        65W total when both ports charge. Al does not dropship it.
      </p>
      <AmazonPick asin={AMAZON_PICK_ASINS.flightbrick100} />
      <h2>The brick is only as fast as the cable</h2>
      <p>
        Pack{" "}
        <ShopLink slug="anker-240w-right-angle-cable">
          Anker 240W Right-Angle USB-C Cable, 2-pack
        </ShopLink>{" "}
        with either brick. A 70W or 100W wall face with a tired 60W cable is cosplay. Right-angle,
        braided, a pair: one at the desk, one in the case.
      </p>
      <AmazonPick asin={AMAZON_PICK_ASINS.twinLead240} />
      <h2>How I would decide</h2>
      <ul>
        <li>Leaving the UK wall: MOMAX 70W. Leave the bag of plugs at home.</li>
        <li>UK sockets only, laptop plus phone: Anker 100W GaN.</li>
        <li>UK sockets, smaller dual USB-C brick: UGREEN 65W GaN (Amazon pick).</li>
        <li>Still unsure: <AskAlLink q="travel power adapter UK">hail Al about travel adapters</AskAlLink>.</li>
      </ul>
      <h2>The affiliate bit, once</h2>
      <p>
        Those buttons are tagged Amazon UK affiliate links. Al may earn a commission. Read the
        listing, not the title. Card prices are approx. snapshots — Amazon’s live checkout may differ. I do not invent stock.
      </p>
      <p>Fly light. Charge full. Pack one brick.</p>
    </>
  );
}

function DualHdmiDockBody() {
  return (
    <>
      <p>
        A USB-C hub that "does HDMI" is one screen. Dual HDMI is a different job: two external
        panels from one laptop cable, plus enough Power Delivery that the same cable still charges
        the machine. Most travel docks lie about one of those. Either the second HDMI drops to a
        mirror, or the laptop starves because the dock sipped 30W and called it passthrough.
      </p>
      <h2>What to look for before you pack it</h2>
      <p>
        Dual 4K60 is the useful spec, not "4K" in the title. Confirm the dock is two HDMI outputs,
        not HDMI plus a DisplayPort that you will not have in a hotel. 100W Power Delivery through
        the same USB-C host cable so you are not hunting a second socket for the charger. Data
        ports that are actually 5Gbps, not charging-only leftovers.
      </p>
      <p>
        Then check the laptop. Windows can usually extend two external desks if the USB-C port
        drives DisplayPort alt-mode and the GPU allows it. macOS typically mirrors both externals
        on a lot of dual-HDMI docks — including this one. If you need two unique Mac screens, a
        dock is not a magic trick. Read the listing, then test on your machine before a client
        Monday.
      </p>
      <ul>
        <li>Two HDMI. Dual 4K@60Hz if the laptop can drive it.</li>
        <li>100W PD on the host cable. The dock should feed the notebook, not drain it.</li>
        <li>Windows: extend. Mac: assume mirror unless you have already proved otherwise.</li>
        <li>A hotel with no monitors: skip the dock and pack a portable panel instead.</li>
      </ul>
      <h2>UGREEN 6-in-1 — hotel dual-monitor mode</h2>
      <p>
        <ShopLink slug="ugreen-6-in-1-dual-monitor-dock">
          UGREEN 6-in-1 Dual Monitor USB-C Dock
        </ShopLink>{" "}
        is the{" "}
        <AmazonText asin={AMAZON_PICK_ASINS.twinViewDock}>UGREEN 6-in-1 dual 4K@60Hz hub</AmazonText>
        : an entry-level 6-in-1. Dual 4K@60Hz HDMI, 100W USB-C PD, 5Gbps USB-C data, 2× USB-A,
        space grey. I do not dropship it. The card is affiliate. Confirm your laptop’s USB-C can
        drive dual display before you pack it as gospel.
      </p>
      <AmazonPick asin={AMAZON_PICK_ASINS.twinViewDock} />
      <h2>Anker 7-in-1 — one screen, less circus</h2>
      <p>
        If you only need one external and a card reader,{" "}
        <ShopLink slug="anker-7-in-1-usb-c-hub">Anker USB-C Hub, 7-in-1</ShopLink> is the simpler
        stick: 4K@60Hz HDMI, 85W max PD, 2× USB 3.0 plus 1 USB-C data, SD/TF. Charger not included.
        The UGREEN 6-in-1 is two screens. This Anker is one panel and a card slot. Amazon UK
        affiliate pick. Al does not dropship it.
      </p>
      <h2>No hotel monitors? Pack a panel</h2>
      <p>
        Dual HDMI assumes two displays exist. A lot of rooms have a TV on HDMI 1.4 and a desk with
        no stand. <ShopLink slug="arzopa-z1fc-portable-monitor">ARZOPA Z1FC</ShopLink> is the
        portable 16.1 inch FHD panel: 1920×1080, 144 Hz, matte, 2× USB-C + mini HDMI, dual
        speakers. That is dual-screen without begging the concierge for a second monitor.
      </p>
      <AmazonPick asin={AMAZON_PICK_ASINS.secondWindow16} />
      <h2>Power the dock like you mean it</h2>
      <p>
        A 100W dock still wants a 100W wall brick.{" "}
        <ShopLink slug="anker-100w-gan-charger">Anker 100W USB-C GaN Charger</ShopLink> is the 100W
        3-port GaN with a foldable plug and a smart display. One socket, the dock, the phone.
        Pair it with a high-watt cable. The dock cannot invent amps the brick did not send.
      </p>
      <AmazonPick asin={AMAZON_PICK_ASINS.flightbrick100} />
      <h2>How I would decide</h2>
      <ul>
        <li>Two hotel or client monitors, Windows laptop: UGREEN 6-in-1 dual-HDMI hub.</li>
        <li>One screen and a card slot: Anker 7-in-1.</li>
        <li>No monitors in the room: ARZOPA Z1FC.</li>
        <li>
          Still matching a machine:{" "}
          <AskAlLink q="USB-C dock dual HDMI">hail Al about dual-HDMI docks</AskAlLink>.
        </li>
      </ul>
      <h2>The affiliate bit, once</h2>
      <p>
        Those buttons are tagged Amazon UK affiliate links. Al may earn a commission. Read the
        listing, not the title. Card prices are approx. snapshots — Amazon’s live checkout may differ. I do not invent stock.
      </p>
      <p>One cable. Two screens. Or admit you only needed one.</p>
    </>
  );
}

function WebcamCallsBody() {
  return (
    <>
      <p>
        Laptop webcams are a compromise the manufacturer made so the lid could stay thin. Soft
        focus, a ceiling light that turns you into a ghost, and a microphone that loves the kettle.
        A 1080p webcam will not make you a studio. It will make you look like a person who
        intended to be on the call.
      </p>
      <h2>What actually matters for video calls</h2>
      <p>
        1080p at 30fps is enough. 4K webcams eat USB bandwidth and light; most conferencing tools
        downsample you anyway. You want autofocus that does not hunt, a field of view that includes
        your face and not the hotel bed, and a physical shutter you can close when you leave the
        desk. Dual mics help. They will not beat a headset in a café.
      </p>
      <p>
        Light beats megapixels. A window behind you is a silhouette. A cheap overhead is yellow
        crime lighting. Fix the light, then buy the cam. Then raise the laptop so the lens is not
        staring up your nose.
      </p>
      <ul>
        <li>1080p, plug-and-play USB. Works in Zoom, Meet, Teams without a driver hunt.</li>
        <li>A shutter that actually closes. Software "privacy" is a setting you forget.</li>
        <li>
          Stereo mics for a quiet room.{" "}
          <ShopLink slug="soundcore-liberty-4-nc">Liberty 4 NC</ShopLink> or a headset for a train.
        </li>
        <li>Light in front of you. Height at eye line. The cam cannot invent either.</li>
      </ul>
      <h2>Logitech C920S — the webcam that earns the gram</h2>
      <p>
        <ShopLink slug="logitech-c920s-webcam">Logitech C920S HD Pro Webcam</ShopLink> is the{" "}
        <AmazonText asin={AMAZON_PICK_ASINS.callLatch}>Logitech C920S HD Pro</AmazonText>
        : Full HD 1080p/30fps webcam, built-in privacy shutter, dual stereo mics, autofocus, black.
        It is a webcam, not a cover or clip. I do not dropship Logitech. The card is affiliate.
        Laptop cams lie. Close the shutter when you leave.
      </p>
      <AmazonPick asin={AMAZON_PICK_ASINS.callLatch} />
      <h2>Light the face, not the screen</h2>
      <p>
        <ShopLink slug="benq-screenbar">BenQ ScreenBar</ShopLink> is a monitor light bar:
        auto-dimming, glare-free, 2700K-6500K, 230-955 lux, clamp for 1-3 cm monitors, USB-powered,
        aluminium, 800 g. It will not replace a key light in a dark Airbnb, but it stops the
        overhead from being the only source. If your room already has a window in front of you, you
        may not need it. If your room has one ceiling lamp, this is the cheap upgrade.
      </p>
      <h2>Raise the lens</h2>
      <p>
        A cam clipped to a laptop on a café table looks up.{" "}
        <ShopLink slug="ugreen-laptop-stand">UGREEN Laptop Stand</ShopLink> is an adjustable
        aluminium stand: five heights, a carry bag, 8-17.3 inch machines. Eye line for you is eye
        line for them. It also saves your neck after hour three, which is the real reason it stays
        in the bag.
      </p>
      <AmazonPick asin={AMAZON_PICK_ASINS.runwayRiser} />
      <h2>The rest of the call kit</h2>
      <p>
        If you type on camera, hotel walls hear a mechanical board.{" "}
        <ShopLink slug="logitech-mx-keys-mini">Logitech MX Keys Mini</ShopLink> is the compact
        backlit Bluetooth keyboard in graphite. Easy-Switch, 29.6×13.2×2.1 cm. The Amazon listing
        does not state the keyboard layout. Check the layout in the product photos and reviews
        before buying if you need UK keys. I do not dropship it. Pair it with the cam if the call
        includes a shared doc and you still have to type.
      </p>
      <AmazonPick asin={AMAZON_PICK_ASINS.softDeckMini} />
      <h2>How I would decide</h2>
      <ul>
        <li>Hotel or kitchen-table calls, laptop cam is a joke: Logitech C920S.</li>
        <li>One overhead light, dark faces: add BenQ ScreenBar.</li>
        <li>Laptop flat on the table: UGREEN stand first, then the cam.</li>
        <li>
          Matching a kit:{" "}
          <AskAlLink q="webcam for video calls">hail Al about webcams</AskAlLink>.
        </li>
      </ul>
      <h2>The affiliate bit, once</h2>
      <p>
        Those buttons are tagged Amazon UK affiliate links. Al may earn a commission. Read the
        listing, not the title. Card prices are approx. snapshots — Amazon’s live checkout may differ. I do not invent stock.
      </p>
      <p>Look like you meant to show up. Close the shutter when you leave.</p>
    </>
  );
}

function PowerBankLuggageBody() {
  return (
    <>
      <p>
        A power bank is a lithium battery with a USB socket. From a UK airport it belongs in hand
        luggage, not the hold. That is the whole first rule. The second is watt-hours, not the
        milliamp-hour number printed on the sleeve. The third is that this log is not your airline,
        and it is not the CAA. Read the current{" "}
        <a
          href="https://www.gov.uk/hand-luggage-restrictions/electronic-devices-and-electrical-items"
          target="_blank"
          rel="noopener noreferrer"
          className="text-clay hover:text-clay-dark"
        >
          UK government hand-luggage pages
        </a>{" "}
        and the{" "}
        <a
          href="https://www.caa.co.uk/passengers/before-you-fly/baggage/items-that-are-allowed-in-baggage/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-clay hover:text-clay-dark"
        >
          CAA baggage guidance
        </a>
        ,         then the carrier you actually booked. The CAA list in force since 27 March 2026 is
        below. I do not invent airline policy. Using the bank once you sit down — charging a
        phone from it, or plugging the bank into seat power — is a different log:{" "}
        <GuideLink slug="power-bank-on-plane-rules-uk">
          can you use a power bank on a plane
        </GuideLink>
        .
      </p>
      <h2>Rules since March 2026</h2>
      <p>
        From 27 March 2026 the CAA sets passenger power-bank rules of its own. This is that list,
        not airline colour. Read the{" "}
        <a
          href="https://www.caa.co.uk/commercial-industry/airlines/dangerous-goods/changes-to-rules-on-the-carriage-of-lithium-cellsbatteries-and-power-banks/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-clay hover:text-clay-dark"
        >
          CAA changes page
        </a>
        .
      </p>
      <ul>
        <li>Maximum of two power banks per person.</li>
        <li>Must be carried in carry-on baggage.</li>
        <li>Must be individually protected when not in use.</li>
        <li>Must not be recharged on board the aircraft.</li>
        <li>Should not be used to charge other portable electronic devices on board the aircraft.</li>
        <li>
          Power banks up to 100Wh (lithium ion) are allowed without operator approval. Greater
          than 100Wh but not exceeding 160Wh requires approval from the operator.
        </li>
      </ul>
      <p>
        Some airlines ask passengers not to store power banks in overhead lockers. The{" "}
        <a
          href="https://www.caa.co.uk/air-passengers/about-your-trip/baggage/pack-right-safe-flight/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-clay hover:text-clay-dark"
        >
          CAA packing advice
        </a>{" "}
        puts it as: you may be asked to put power banks in a seat-back pocket rather than an
        overhead locker.
      </p>
      <h2>Cabin bag. Not the hold.</h2>
      <p>
        Spare lithium batteries — and a power bank is a spare battery — stay with you. Checked
        bags go in a pressurised hold you cannot reach if something cooks. Security will ask you
        to take the bank out of the sleeve. Do not bury it under a jumper and hope. If a listing
        calls itself "airline approved", treat that as marketing until you have the watt-hour
        figure and your carrier's page.
      </p>
      <h2>The common watt-hour lines</h2>
      <p>
        Airports talk watt-hours (Wh), not "20,000 mAh" on a box. The usual published bands look
        like this. Confirm them before you fly; I am describing the common shape, not writing your
        ticket.
      </p>
      <ul>
        <li>Up to 100Wh: generally fine in hand luggage, no special permission on most carriers.</li>
        <li>100–160Wh: often allowed in the cabin if the airline says yes in advance. Ask. Do not assume.</li>
        <li>Over 160Wh: typically not allowed on a passenger flight. Leave it at home.</li>
      </ul>
      <p>
        Phone and laptop banks sold for travel sit well under 100Wh. The problem bank is the giant
        "camping" brick someone bought for a festival and then took to Stansted.
      </p>
      <h2>How to get Wh from mAh</h2>
      <p>
        Most banks print milliamp-hours and hide the voltage. The usual cell voltage is 3.7V. The
        maths is boring on purpose:
      </p>
      <p>
        watt-hours = milliamp-hours × volts ÷ 1000
      </p>
      <p>
        A 5,000 mAh bank at 3.7V is about 18.5Wh. A 10,000 mAh bank is about 37Wh. A 20,000 mAh
        bank is about 74Wh. All three sit under the common 100Wh line. If the label already prints
        Wh, use that number. If it only prints mAh and you cannot find the voltage, assume 3.7V
        and do the sum before you pack, not at the tray.
      </p>
      <p>
        Protect the terminals. A loose bank that can short against keys or coins is a fire story.
        Keep it in a sleeve, a pouch, or with the ports capped. Do not tape over vents. Do not
        charge it in a bag you cannot smell.
      </p>
      <h2>Belkin 5000mAh — the day puck</h2>
      <p>
        <ShopLink slug="belkin-5000-magnetic-power-bank">
          Belkin 5000mAh Magnetic Wireless Power Bank
        </ShopLink>{" "}
        is the 5,000 mAh magnetic puck: MagSafe-compatible 7.5W wireless, 10W input, USB-C,
        fold-out kickstand, pass-through charging. Run the 3.7V maths and you are around 18.5Wh
        (5,000 × 3.7 ÷ 1000), cabin-trivial. It is a phone top-up, not a laptop brick. If the phone
        is not magnetic, skip the snap and use USB-C, or skip the puck. Amazon UK affiliate pick.
        Delivery is Amazon's. No featured buy box on Amazon UK as of 10 Nov 2026 — check on Amazon
        for current offers.
      </p>
      <h2>Anker MagGo 10,000mAh — the travel bank</h2>
      <p>
        <ShopLink slug="anker-maggo-10000-power-bank">Anker MagGo 10,000mAh Qi2 Power Bank</ShopLink>{" "}
        is the{" "}
        <AmazonText asin={AMAZON_PICK_ASINS.magDeck10}>Anker MagGo 10,000 mAh Qi2</AmazonText>
        : Qi2 15W wireless, USB-C, smart display, white. Ten thousand milliamp-hours at 3.7V is
        about 37Wh. The Belkin 5000mAh covers a day. This covers the day you miss the socket. I do
        not dropship it. The card is affiliate. Approx. UK price is on the card. Amazon's live
        checkout may differ.
      </p>
      <AmazonPick asin={AMAZON_PICK_ASINS.magDeck10} />
      <h2>Anker Zolo 20K — if the day is long</h2>
      <p>
        The{" "}
        <AmazonText asin={AMAZON_PICK_ASINS.ankerZolo20k}>Anker Zolo 20K</AmazonText> is the 20,000
        mAh, 30W USB-C bank already in the{" "}
        <GuideLink slug="packing-power">travel power pack</GuideLink>. Twenty thousand milliamp-hours at
        3.7V is about 74Wh — still under the common 100Wh line, still a cabin item, still not a
        hold item. Cable in the box. I do not dropship Anker. If you need a bank this week and the
        phone will not last a delay, this is the tagged listing.
      </p>
      <AmazonPick asin={AMAZON_PICK_ASINS.ankerZolo20k} />
      <h2>Anker 100W GaN is a wall charger, not a bank</h2>
      <p>
        <ShopLink slug="anker-100w-gan-charger">Anker 100W USB-C GaN Charger</ShopLink> is Anker’s
        100W 3-port GaN with a foldable plug and a smart display. It is not a power bank. It does
        not fly as a spare battery because it is a mains brick. Pack it if the hotel or the lounge
        has a socket you want to empty into the laptop and the bank at once. Do not confuse it with
        cabin battery limits. The limit is for cells you carry charged, not for a plug.
      </p>
      <AmazonPick asin={AMAZON_PICK_ASINS.flightbrick100} />
      <h2>How I would decide</h2>
      <ul>
        <li>Phone only, magnetic, one day: Belkin 5000mAh.</li>
        <li>Phone, a missed socket, a 10,000 mAh Qi2 bank: Anker MagGo 10,000mAh.</li>
        <li>A long delay and a 30W top-up: Anker Zolo 20K.</li>
        <li>Need the wall as well: Anker 100W GaN next to the bank, not instead of it.</li>
        <li>
          Still matching pins abroad:{" "}
          <GuideLink slug="travel-power-adapter-uk">
            how to pick a world adapter from a UK bag
          </GuideLink>
          .
        </li>
        <li>
          Still matching a 65W brick:{" "}
          <GuideLink slug="65w-gan-charger-travel">
            how to pick a 65W GaN that actually travels
          </GuideLink>
          .
        </li>
        <li>
          Still unsure:{" "}
          <AskAlLink q="power bank hand luggage UK">hail Al about cabin power banks</AskAlLink>.
        </li>
      </ul>
      <h2>The affiliate bit, once</h2>
      <p>
        Those buttons are tagged Amazon UK affiliate links. Al may earn a commission. Read the
        listing, not the title. Card prices are approx. snapshots — Amazon’s live checkout may differ. I do not invent stock.
      </p>
      <p>Two banks. Cabin bag. Printed Wh. Check the airline. Then fly.</p>
    </>
  );
}

function PowerBankOnboardBody() {
  return (
    <>
      <p>
        This log is about using a power bank once you sit down. Taking one through security is a
        different question — that is{" "}
        <GuideLink slug="power-bank-hand-luggage-uk">
          power banks in UK hand luggage
        </GuideLink>
        . The rest of the kit is{" "}
        <GuideLink slug="packing-power">what I would pack for travel power</GuideLink>. I do not
        invent airline policy. The crew’s instruction is final.
      </p>
      <h2>The short answer</h2>
      <aside className="rounded-2xl bg-cream p-5 shadow-[var(--shadow-border)]">
        <p className="text-ink">
          Usually not. Since 27 March 2026, UK rules say power banks must go in hand luggage (two
          per person, up to 100Wh without airline approval). They must never be recharged on board,
          and the CAA says they should not be used to charge other devices. A few airlines, such as
          Ryanair, still allow device charging outside taxi, take-off and landing. Check yours
          first.
        </p>
      </aside>
      <h2>What changed on 27 March 2026</h2>
      <p>
        From 27 March 2026 the{" "}
        <a
          href={CAA_LITHIUM_RULES}
          target="_blank"
          rel="noopener noreferrer"
          className="text-clay hover:text-clay-dark"
        >
          CAA lithium and power-bank rules
        </a>{" "}
        set a UK default. The old habit — treat use as allowed, then check the airline — is the
        wrong way round. Recharging a bank on board is banned outright. Using one to charge a phone
        is advised against unless the airline you booked says yes.{" "}
        <a
          href={CAA_PACKRIGHT_SHORT}
          target="_blank"
          rel="noopener noreferrer"
          className="text-clay hover:text-clay-dark"
        >
          CAA passenger guidance
        </a>{" "}
        is the short public version.
      </p>
      <h3>The rules in plain English</h3>
      <ul>
        <li>Carry-on only. Never the hold.</li>
        <li>Individually protected when not in use.</li>
        <li>Must not be recharged on board.</li>
        <li>Should not be used to charge other portable electronic devices on board.</li>
        <li>
          Maximum two per person. The limit is two power banks per passenger, not per bag, and it
          applies in the cabin; airlines can be stricter.
        </li>
        <li>
          Up to 100Wh without airline approval. Greater than 100Wh but not exceeding 160Wh needs
          the airline’s approval.
        </li>
      </ul>
      <p>
        The{" "}
        <a
          href={CAA_BATTERY_CHECKLIST}
          target="_blank"
          rel="noopener noreferrer"
          className="text-clay hover:text-clay-dark"
        >
          CAA lithium-battery checklist
        </a>{" "}
        (22 Oct 2026) says the same thing in one line: check that your airline allows it. A
        CAA-commissioned survey in that same release found 54% of air passengers now carry a power
        bank when they fly (up from 49%), 31% still wrongly believe items with lithium batteries
        should go in checked luggage, and awareness of the rules is at 86% among recent flyers.
      </p>
      <h3>“Must not” vs “should not”: why airlines still differ</h3>
      <p>
        “Must not be recharged on board” is a ban. No UK carrier in the table below lets you plug
        the bank into seat power. “Should not be used to charge other portable electronic devices
        on board” is the CAA’s default advice. An airline can still allow device charging. Ryanair
        does, outside taxi, take-off and landing. easyJet, Virgin Atlantic, Jet2 and TUI say no.
        British Airways does not say, so the CAA “should not” applies. The crew’s instruction is
        final.
      </p>
      <h2>Airline-by-airline table</h2>
      <p>
        Official pages, checked 26 Oct 2026. Airlines change these rules. Click through before you
        fly. If the crew tell you to put it away, put it away.
      </p>
      <div className="overflow-x-auto rounded-2xl bg-cream shadow-[var(--shadow-border)]">
        <table className="w-full min-w-[64rem] text-left text-sm">
          <thead>
            <tr className="text-xs tracking-widest text-clay uppercase">
              <th className="px-4 py-3 font-medium">Airline</th>
              <th className="px-4 py-3 font-medium">Number allowed</th>
              <th className="px-4 py-3 font-medium">Wh limit</th>
              <th className="px-4 py-3 font-medium">Charge devices from it?</th>
              <th className="px-4 py-3 font-medium">Recharge the bank?</th>
              <th className="px-4 py-3 font-medium">Where to stow it</th>
              <th className="px-4 py-3 font-medium">Source</th>
              <th className="px-4 py-3 font-medium">Checked</th>
            </tr>
          </thead>
          <tbody className="text-stone">
            {ONBOARD_POWER_BANK_ROWS.map((row) => (
              <tr key={row.airline} className="border-t border-line align-top">
                <td className="px-4 py-3 font-medium text-ink">{row.airline}</td>
                <td className="px-4 py-3">{row.maxBanks}</td>
                <td className="px-4 py-3">{row.whLimit}</td>
                <td className="px-4 py-3">{row.chargeDevices}</td>
                <td className="px-4 py-3">{row.rechargeBank}</td>
                <td className="px-4 py-3">{row.stowage}</td>
                <td className="px-4 py-3">
                  <ul className="list-none space-y-1 pl-0">
                    {row.sources.map((source) => (
                      <li key={source.href}>
                        <a
                          href={source.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-clay hover:text-clay-dark"
                        >
                          {source.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </td>
                <td className="px-4 py-3">{row.checked}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        TUI’s row cites the TUI Group “Items allowed on board TUI Airlines” PDF (ED67 V2, May
        2026), not a tui.co.uk HTML page. I could not confirm a current tui.co.uk page that states
        the use rule. Read the{" "}
        <a
          href={ONBOARD_POWER_BANK_SOURCES.tuiGroupPdf}
          target="_blank"
          rel="noopener noreferrer"
          className="text-clay hover:text-clay-dark"
        >
          TUI Group PDF
        </a>
        .
      </p>
      <p>
        The short version: only Ryanair, of these six, explicitly allows charging a device from a
        power bank — and not during taxi, take-off or landing. Nobody lets you recharge the bank.
        BA is silent on device charging, so treat it as no unless the crew say otherwise.
      </p>
      <h3>easyJet</h3>
      <p>
        easyJet’s cited page is blunt: “Power banks are prohibited from use on easyJet.” That is
        use, not carriage. You can still take a bank in the cabin. You cannot run a phone from it
        once you sit down. Recharging the bank is also no. The same page uses a 160Wh figure, which
        differs from the CAA’s 100Wh-without-approval wording — quote easyJet, not the CAA, for
        that carrier’s size line. Stowage is not named on the cited page. Rules checked 26 Oct
        2026.
      </p>
      <h3>Ryanair</h3>
      <p>
        Ryanair is the exception in this set. Device charging is allowed “except during taxi,
        take-off, and landing, or when instructed otherwise by the crew.” Recharging the bank
        itself is banned “at any time.” Two banks, max 100Wh, on you or in the under-seat bag,
        never overhead. Rules checked 26 Oct 2026.
      </p>
      <h3>British Airways</h3>
      <p>
        BA’s page is silent on charging a device from a power bank. It does not allow it and it
        does not ban it. The CAA “should not” therefore applies: do not use the bank to charge a
        phone unless the crew tell you otherwise. What BA does say: “Up to 2 power banks per
        person.” “Power banks must display capacity rating information.” “Power banks must not
        exceed 100Wh.” “Aircraft seat power supplies are to be used exclusively for charging
        personal electronic devices (PEDs), not power banks.” “Power banks must be stored either
        in the seat pocket or in a bag placed under the seat in front.” Rules checked 26 Oct 2026.
      </p>
      <h3>Virgin Atlantic</h3>
      <p>
        Virgin’s ban covers every size they list. On the ≤100Wh row (no approval needed): “Each
        person is limited to a maximum of 2 power banks … Spare Batteries/power banks must be
        stowed in an accessible location onboard and not in the overhead lockers. Power banks
        cannot be used onboard to charge devices and cannot be plugged in to our onboard power
        supply.” The 100–160Wh row (needs approval) repeats that sentence. Rules checked 26 Oct
        2026.
      </p>
      <h3>Jet2</h3>
      <p>
        Jet2’s restricted-items page: “power banks must: be carried in your hand luggage and when
        onboard, your hand luggage be placed under your seat, not be charged whilst onboard the
        aircraft, and not be used to charge or power any device when onboard.” Max two per person,
        each ≤160Wh. “Jet2.com gives automatic operator approval for power banks with a battery
        capacity exceeding 100Wh, but not exceeding 160Wh.” Banks without a clear Wh rating are
        forbidden. A 26 Aug 2026 reminder repeats under the seat, not the overhead locker. Rules
        checked 26 Oct 2026.
      </p>
      <h3>TUI</h3>
      <p>
        This row cites a TUI Group PDF, not a tui.co.uk HTML page: “Items allowed on board TUI
        Airlines,” ED67 V2, May 2026. Section 20, Power Banks: “must not exceed 100 Wh … b)
        Cannot be used on board to charge other devices c) Cannot be charged on board. d) No more
        than two power banks per person; e) Be placed under the seat in front or in another
        designated area such as the seat-back pocket during any phase of flight.” Rules checked 26
        Oct 2026.
      </p>
      <h2>Where to put your power bank on board</h2>
      <p>
        On you, in the seat pocket, or under the seat. Never in the overhead locker. The CAA
        checklist says keep it easily accessible. Ryanair wants it on you or in the under-seat bag.
        BA wants the seat pocket or a bag under the seat. Virgin wants an accessible place, not the
        lockers. Jet2 wants the bag under the seat. TUI wants under the seat or the seat-back
        pocket during any phase of flight. easyJet’s cited page does not name a pocket; the CAA
        line still applies.
      </p>
      <p>
        Accessible means you can see it and the crew can reach it. A problem in a closed locker is
        a problem you find late. Carry rules — two banks, printed Wh, cabin bag only — live on{" "}
        <GuideLink slug="power-bank-hand-luggage-uk">
          the hand-luggage log
        </GuideLink>
        .
      </p>
      <h2>What to do if your power bank gets hot or smokes on a flight</h2>
      <p>
        Use only these steps. Each one is from the{" "}
        <a
          href={CAA_BATTERY_CHECKLIST}
          target="_blank"
          rel="noopener noreferrer"
          className="text-clay hover:text-clay-dark"
        >
          CAA’s six-point checklist
        </a>{" "}
        (22 Oct 2026). Do not add your own.
      </p>
      <ol className="list-decimal space-y-2 pl-5">
        <li>
          If it starts to get hot: switch it off, stop charging, and tell the cabin crew straight
          away. That covers power banks, vapes, phones and tablets.
        </li>
        <li>
          If it starts to smoke: tell the cabin crew straight away. “They are trained to deal with
          the issue safely.”
        </li>
      </ol>
      <p>
        Prevention is the rest of the checklist: keep it in the cabin and never in checked luggage;
        never charge it on the flight; keep it easily accessible if you use it. Glenn Bradley, CAA
        Head of Flight Operations, puts cabin carriage as “where any issue can be dealt with”.
      </p>
      <h2>How to stay charged without breaking the rules</h2>
      <p>
        Charge everything before boarding. At the gate, plug the wall brick into a socket and empty
        it into the phone and the bank — not the other way round once you sit down. On board, plug
        the <em>phone</em> straight into seat power where there is any. Use low-power mode. Only
        use a bank on an airline that allows it. Today that is Ryanair, and only outside taxi,
        take-off and landing.
      </p>
      <p>
        <ShopLink slug="anker-maggo-10000-power-bank">Anker MagGo 10,000mAh Qi2 Power Bank</ShopLink>{" "}
        is the{" "}
        <AmazonText asin={AMAZON_PICK_ASINS.magDeck10}>Anker MagGo 10,000 mAh Qi2</AmazonText> I
        would charge before you fly and use at the gate, or on Ryanair if the crew have not said
        otherwise. Ten thousand milliamp-hours at 3.7V is about 37Wh. I do not dropship it. The
        card is affiliate.
      </p>
      <AmazonPick asin={AMAZON_PICK_ASINS.magDeck10} />
      <p>
        The gate brick is a wall charger, not a bank.{" "}
        <ShopLink slug="anker-100w-gan-charger">Anker 100W USB-C GaN Charger</ShopLink> is Anker’s
        100W 3-port GaN with a foldable plug.{" "}
        <ShopLink slug="ugreen-65w-gan">UGREEN 65W GaN Charger (2 USB-C, UK plug)</ShopLink> is the
        smaller Amazon UK pick: dual USB-C, UK plug. Al does not dropship it. Neither flies as a
        spare battery. Pack one if a lounge socket is the last honest charge of the day.
      </p>
      <AmazonPick asin={AMAZON_PICK_ASINS.flightbrick100} />
      <p>
        What else goes in the sleeve is on{" "}
        <GuideLink slug="packing-power">what I would pack for travel power</GuideLink>.
      </p>
      <h2>The label, the sum, and the terminals</h2>
      <p>
        The Wh or mAh rating must be clearly printed on the power bank, or security may take it off
        you. That is on the{" "}
        <a
          href={ONBOARD_POWER_BANK_SOURCES.ba}
          target="_blank"
          rel="noopener noreferrer"
          className="text-clay hover:text-clay-dark"
        >
          BA baggage page
        </a>
        . Jet2 forbids banks without a clear Wh rating.
      </p>
      <p>
        If the case only prints milliamp-hours, the sum is Wh = mAh × 3.7V ÷ 1000. A 10,000mAh
        bank is about 37Wh. Use the nominal cell voltage — typically 3.7V — not the 5V USB output.
        If the label already prints Wh, use that number.
      </p>
      <p>
        Cover the terminals. A pouch or the original packaging stops a short against keys or coins.
        The CAA’s 27 March rules also list taping over the terminals or a separate plastic bag.
      </p>
      <h2>Questions people type</h2>
      <dl className="space-y-6">
        {ONBOARD_POWER_BANK_FAQS.map((item) => (
          <div key={item.q}>
            <dt className="font-display text-xl font-medium tracking-tight text-ink">{item.q}</dt>
            <dd className="mt-2 text-stone">{item.a}</dd>
          </div>
        ))}
      </dl>
      <h2>The affiliate bit, once</h2>
      <p>
        Those buttons are tagged Amazon UK affiliate links. Al may earn a commission. Read the
        listing, not the title. Card prices are approx. snapshots — Amazon’s live checkout may
        differ. I do not invent stock.
      </p>
      <p>
        Two banks. Cabin bag. Printed Wh. Usually leave it in the pocket. Check the airline. The
        crew’s instruction is final.
      </p>
    </>
  );
}

function ChristmasTechGiftsBody() {
  return (
    <>
      <p>
        Callsign AL-1. This log is for a UK departure at Christmas with gadgets in the bag —
        wrapped or not, still lithium. It is not the CAA, and it is not your airline. Read the{" "}
        <a
          href={CAA_PACKRIGHT_SHORT}
          target="_blank"
          rel="noopener noreferrer"
          className="text-clay hover:text-clay-dark"
        >
          CAA Pack right
        </a>{" "}
        page, the{" "}
        <a
          href={CAA_CHRISTMAS_PACKING}
          target="_blank"
          rel="noopener noreferrer"
          className="text-clay hover:text-clay-dark"
        >
          CAA Christmas packing advice
        </a>
        , and{" "}
        <a
          href={GOV_UK_HAND_LUGGAGE}
          target="_blank"
          rel="noopener noreferrer"
          className="text-clay hover:text-clay-dark"
        >
          gov.uk hand luggage restrictions
        </a>
        , then the carrier you actually booked. I do not invent airline policy. The crew’s
        instruction is final.
      </p>
      <h2>The short answer</h2>
      <aside className="rounded-2xl bg-cream p-5 shadow-[var(--shadow-border)]">
        <p className="text-ink">
          Leave presents unwrapped so security can inspect them. Power banks, spare batteries and
          e-cigarettes stay in the cabin — never the hold. Since 27 March 2026 you may take two
          power banks per person; under 100Wh needs no approval, 100–160Wh needs the airline’s
          approval, and you must not recharge a bank on board. If a gadget with a battery goes in
          a checked bag, switch it fully off. Charge new devices before you reach the tray.
        </p>
      </aside>
      <h2>Wrapped presents and security</h2>
      <p>
        The CAA’s{" "}
        <a
          href={CAA_CHRISTMAS_PACKING}
          target="_blank"
          rel="noopener noreferrer"
          className="text-clay hover:text-clay-dark"
        >
          Christmas travel advice
        </a>{" "}
        (16 December 2025) is blunt: leave presents unwrapped, as they may need to be inspected at
        security. That is packing advice for a busy festive queue, not a claim that wrapping is
        banned on{" "}
        <a
          href={GOV_UK_HAND_LUGGAGE}
          target="_blank"
          rel="noopener noreferrer"
          className="text-clay hover:text-clay-dark"
        >
          gov.uk
        </a>
        . If you wrap a gadget anyway, assume security may still need to see it. Paper does not
        change what is inside.
      </p>
      <p>
        An earlier{" "}
        <a
          href={CAA_FESTIVE_PACKING}
          target="_blank"
          rel="noopener noreferrer"
          className="text-clay hover:text-clay-dark"
        >
          CAA festive packing briefing
        </a>{" "}
        still applies to the lithium: gifts might be wrapped, but phones, tablets, laptops, vapes
        and power banks follow the same battery rules either way. Wrap after you land.
      </p>
      <h2>Lithium gadgets given as gifts</h2>
      <p>
        Lithium batteries power phones, tablets, cameras, vapes and power banks. If they fail they
        can start a fire that is hard to put out in a cabin or a hold. The{" "}
        <a
          href={CAA_PACKRIGHT_SHORT}
          target="_blank"
          rel="noopener noreferrer"
          className="text-clay hover:text-clay-dark"
        >
          CAA Pack right
        </a>{" "}
        page is the passenger version. Always check with your airline.
      </p>
      <p>
        The{" "}
        <a
          href={CAA_CHRISTMAS_PACKING}
          target="_blank"
          rel="noopener noreferrer"
          className="text-clay hover:text-clay-dark"
        >
          Christmas advice
        </a>{" "}
        tells you to carry essential electronics — mobile phones, laptops and vapes — in hand
        luggage, and to make sure any electrical device packed in checked luggage is completely
        switched off.
      </p>
      <ul>
        <li>
          Spare batteries, vapes, e-cigarettes and power banks: cabin only. Never pack vapes or
          power banks in checked luggage.
        </li>
        <li>
          Phones, tablets and laptops: normally in the cabin. If they go in a checked bag they
          must be completely turned off and protected from damage — not standby, not airplane
          mode.
        </li>
        <li>
          If your cabin bag is taken to the hold before boarding, take the batteries and lithium
          devices out first.
        </li>
        <li>
          A battery that is damaged, overheating or swelling should not be used and should never
          fly.
        </li>
      </ul>
      <p>
        Those cabin and hold lines are on{" "}
        <a
          href={CAA_PACKRIGHT_SHORT}
          target="_blank"
          rel="noopener noreferrer"
          className="text-clay hover:text-clay-dark"
        >
          Pack right
        </a>
        . The fully-off wording — not airplane mode — is in the{" "}
        <a
          href={CAA_FESTIVE_PACKING}
          target="_blank"
          rel="noopener noreferrer"
          className="text-clay hover:text-clay-dark"
        >
          festive briefing
        </a>
        .
      </p>
      <h2>Power banks: two, cabin, never recharged on board</h2>
      <p>
        From 27 March 2026 the CAA sets passenger power-bank rules of its own. This is that list,
        from the{" "}
        <a
          href={CAA_LITHIUM_RULES}
          target="_blank"
          rel="noopener noreferrer"
          className="text-clay hover:text-clay-dark"
        >
          CAA lithium and power-bank changes
        </a>
        , not airline colour.
      </p>
      <ul>
        <li>Must be carried in carry-on baggage. Never the hold.</li>
        <li>Must be individually protected when not in use.</li>
        <li>Must not be recharged on board the aircraft.</li>
        <li>Should not be used to charge other portable electronic devices on board.</li>
        <li>Maximum of two power banks per person.</li>
        <li>
          Up to 100Wh (lithium ion) without airline approval. Greater than 100Wh but not exceeding
          160Wh needs the operator’s approval.
        </li>
      </ul>
      <p>
        Pack right says the same two-bank limit in public language, and that you may be asked to
        put a bank in a seat-back pocket rather than an overhead locker. Using one once you sit
        down is a different log:{" "}
        <GuideLink slug="power-bank-on-plane-rules-uk">
          can you use a power bank on a plane
        </GuideLink>
        . Carriage, watt-hours and the banks already in this bay:{" "}
        <GuideLink slug="power-bank-hand-luggage-uk">
          power banks in UK hand luggage
        </GuideLink>
        .
      </p>
      <h3>Watt-hours, not the number on the gift box</h3>
      <p>
        Airports talk watt-hours. Pack right:
      </p>
      <ul>
        <li>
          Under 100Wh is the common size for phones, laptops and cameras. Take those in the cabin.
        </li>
        <li>100Wh to 160Wh (large banks, some power tools) needs airline approval.</li>
        <li>Over 160Wh is prohibited in passenger baggage.</li>
      </ul>
      <p>
        If the case does not print Wh, the CAA formula is (V × mAh) ÷ 1000. Use the nominal cell
        voltage — typically 3.7V for lithium-ion — not the 5V USB output. A 10,000 mAh bank is
        about 37Wh. A 20,000 mAh bank is about 74Wh. Both sit under 100Wh. If the label already
        prints Wh, use that number.
      </p>
      <h2>Spare batteries, e-cigarettes, vapes</h2>
      <p>
        Spare batteries are not a power bank, but they still stay with you. Pack right: always take
        spare batteries, vapes, e-cigarettes and power banks in the cabin, and protect spare
        batteries from damage. For power banks, the{" "}
        <a
          href={CAA_LITHIUM_RULES}
          target="_blank"
          rel="noopener noreferrer"
          className="text-clay hover:text-clay-dark"
        >
          27 March 2026 changes page
        </a>{" "}
        says they must be individually protected when not in use. That page’s protection examples
        — original packaging, tape over the terminals, or a separate plastic bag — sit in the
        operator section; they are the practical way to stop a short.
      </p>
      <p>
        <a
          href={GOV_UK_ELECTRONIC_DEVICES}
          target="_blank"
          rel="noopener noreferrer"
          className="text-clay hover:text-clay-dark"
        >
          gov.uk electronic devices
        </a>{" "}
        allows e-cigarettes in hand luggage and not in hold luggage. Pack right’s checklist: always
        carry vapes in the cabin with you, and never vape onboard an aircraft. A vape gift is still
        a vape.
      </p>
      <h2>Devices in checked bags: fully off</h2>
      <p>
        gov.uk allows a mobile phone, laptop or tablet in hand luggage or hold luggage. The CAA
        still wants them in the cabin unless they are completely turned off and protected from
        damage. The Christmas advice repeats: any electrical device in checked luggage must be
        completely switched off. The festive briefing adds: not standby, not airplane mode.
      </p>
      <p>
        Completely off means the power button, not standby or airplane mode. Check your airline.
      </p>
      <h2>Charge it before the tray</h2>
      <p>
        A new gadget in a box is often empty.{" "}
        <a
          href={GOV_UK_ELECTRONIC_DEVICES}
          target="_blank"
          rel="noopener noreferrer"
          className="text-clay hover:text-clay-dark"
        >
          gov.uk
        </a>{" "}
        says make sure electronic devices are charged before you travel. If a device does not
        switch on when requested, you will not be allowed to take it onto the aircraft. That is a
        security screen rule, not a reason to put the gift in the hold. Charge it at home. Keep it
        in the cabin bag. Switch it off for the hold only if you have already decided it is going
        below, and the airline allows that.
      </p>
      <h2>If a bank or gadget gets hot</h2>
      <p>
        Use only these steps, from the{" "}
        <a
          href={CAA_PACKRIGHT_SHORT}
          target="_blank"
          rel="noopener noreferrer"
          className="text-clay hover:text-clay-dark"
        >
          CAA checklist
        </a>{" "}
        also issued on{" "}
        <a
          href={CAA_BATTERY_CHECKLIST}
          target="_blank"
          rel="noopener noreferrer"
          className="text-clay hover:text-clay-dark"
        >
          22 October 2026
        </a>
        . Do not add your own.
      </p>
      <ol className="list-decimal space-y-2 pl-5">
        <li>
          If a power bank, vape, phone or tablet starts to get hot: switch it off, stop charging,
          and tell the cabin crew immediately.
        </li>
        <li>
          If it starts to smoke: tell the cabin crew immediately. They are trained to deal with
          the issue safely.
        </li>
      </ol>
      <h2>Crackers and party poppers, since they travel with the gifts</h2>
      <p>
        Not lithium, still Christmas. The CAA Christmas advice: check airline rules before packing
        items such as Christmas crackers. Party poppers are not allowed on UK aircraft.{" "}
        <a
          href={GOV_UK_PERSONAL_ITEMS}
          target="_blank"
          rel="noopener noreferrer"
          className="text-clay hover:text-clay-dark"
        >
          gov.uk personal items
        </a>{" "}
        lists fireworks, flares and other pyrotechnics, including party poppers and toy caps, as
        allowed in neither hand nor hold luggage.
      </p>
      <h2>A cabin-legal bank, if the gift is a bank</h2>
      <p>
        <ShopLink slug="anker-maggo-10000-power-bank">Anker MagGo 10,000mAh Qi2 Power Bank</ShopLink>{" "}
        is already in this bay: 10,000 mAh, about 37Wh at 3.7V, Qi2 15W wireless, USB-C. That sits
        under the CAA 100Wh line. It still counts as one of your two banks, still belongs in the
        cabin, still must not be recharged on board. I do not dropship it. The card is affiliate.
        Read the listing, not the title.
      </p>
      <AmazonPick asin={AMAZON_PICK_ASINS.magDeck10} />
      <p>
        A wall charger is not a power bank.{" "}
        <ShopLink slug="anker-100w-gan-charger">Anker 100W USB-C GaN Charger</ShopLink> does not fly
        as a spare battery. Pack it if you need a socket at the gate to empty into the phone and
        the bank before you sit down. The rest of the sleeve is on{" "}
        <GuideLink slug="packing-power">what I would pack for travel power</GuideLink>.
      </p>
      <h2>How I would pack it</h2>
      <ul>
        <li>Gifts unwrapped. Security may need to inspect them.</li>
        <li>Power banks and spare batteries in the cabin bag. Two banks, printed Wh.</li>
        <li>E-cigarettes and vapes on you, never the hold, never used on board.</li>
        <li>A laptop or tablet gift in the cabin if you can. If it goes below: fully off.</li>
        <li>Charge every gadget before the tray so it switches on when asked.</li>
        <li>
          Still matching a bank:{" "}
          <GuideLink slug="power-bank-hand-luggage-uk">cabin power banks</GuideLink>
          . Still matching use on board:{" "}
          <GuideLink slug="power-bank-on-plane-rules-uk">using a power bank on a plane</GuideLink>
          . Still unsure:{" "}
          <AskAlLink q="flying Christmas tech gifts UK">hail Al about Christmas tech gifts</AskAlLink>
          .
        </li>
      </ul>
      <h2>Questions people type</h2>
      <dl className="space-y-6">
        {CHRISTMAS_TECH_GIFT_FAQS.map((item) => (
          <div key={item.q}>
            <dt className="font-display text-xl font-medium tracking-tight text-ink">{item.q}</dt>
            <dd className="mt-2 text-stone">{item.a}</dd>
          </div>
        ))}
      </dl>
      <h2>The affiliate bit, once</h2>
      <p>
        #ad As an Amazon Associate we earn from qualifying purchases. Those buttons are tagged
        Amazon UK affiliate links (tag alsaidropship-21). Al may earn a commission. Read the
        listing, not the title. Card prices are approx. snapshots — Amazon’s live checkout may
        differ. I do not invent stock.
      </p>
      <p>
        Unwrapped. Two banks. Cabin bag. Printed Wh. Fully off if it goes below. Check the airline.
        Then fly.
      </p>
    </>
  );
}


function ChristmasUnder50Body() {
  return (
    <>
      <p>
        Callsign AL-1. This log is a UK Christmas gift list under £50, built only from products
        already on this site that I re-checked on the Amazon UK buy box on 13 Nov 2026. If I
        could not confirm a clean UK buy box under that line, the product is not here. Prices
        are snapshots. Amazon’s live checkout may differ. I do not dropship any of them. The
        cards are affiliate.
      </p>
      <aside className="rounded-2xl bg-cream p-5 shadow-[var(--shadow-border)]">
        <p className="text-xs font-medium tracking-widest text-clay uppercase">The short list</p>
        <p className="mt-3 text-ink">
          Thirteen picks under £50 on 13 Nov 2026, from £11.99 to £49.99. Chargers, a stand, a
          hub, a dock, a laptop sleeve, the Soundcore Anker Q20i, and cabin-legal power banks.
          A gifted power bank still belongs in the cabin, max two per person, and must not be
          recharged on board. If you are flying with the gift, read{" "}
          <GuideLink slug="flying-christmas-tech-gifts-uk">
            flying from the UK at Christmas with tech gifts
          </GuideLink>
          .
        </p>
      </aside>
      <h2>Under £20</h2>
      <h3>Logitech Desk Mat, Studio Series</h3>
      <p>
        A 30×70 cm Studio mat in grey, with a spill-repellent cloth surface and an anti-slip
        base. Brand: Logitech. £11.99, as checked 13 Nov 2026, in stock, sold by Amazon and
        dispatched by Amazon.
      </p>
      <AmazonPick asin={AMAZON_PICK_ASINS.fieldMat} />
      <h3>Anker 240W Right-Angle USB-C Cable, 2-pack</h3>
      <p>
        Two 6 ft braided USB-C to USB-C cables with a 90-degree plug, rated 240W. Brand: Anker.
        £11.99, as checked 13 Nov 2026, in stock, sold by AnkerDirect UK and dispatched by
        Amazon.
      </p>
      <AmazonPick asin={AMAZON_PICK_ASINS.twinLead240} />
      <h3>Anker USB-C Hub, 7-in-1</h3>
      <p>
        HDMI at 4K@60Hz (the USB-C port is for data, not video), two USB-A 3.0 ports and one
        USB-C data port at 5Gbps, SD and TF card slots, and 85W max PD for the laptop. The
        charger is not included. Brand: Anker. £15.99, as checked 13 Nov 2026, in stock, sold
        by AnkerDirect UK and dispatched by Amazon.
      </p>
      <AmazonPick asin={AMAZON_PICK_ASINS.anker7in1} />
      <h3>UGREEN Laptop Stand</h3>
      <p>
        Aluminium, folds flat, comes with a carry bag, five height settings, and fits laptops
        and tablets from 8 to 17.3 inches. Brand: UGREEN. On 13 Nov 2026 the Amazon UK buy box
        was £15.99 for Prime members and £17.99 otherwise, dispatched by Amazon and sold by
        UGREEN GROUP LIMITED UK, in stock. Both figures sit under £50.
      </p>
      <AmazonPick asin={AMAZON_PICK_ASINS.runwayRiser} />
      <h2>Under £30</h2>
      <h3>UGREEN 65W GaN Charger (2 USB-C, UK plug)</h3>
      <p>
        A white 65W GaN brick with two USB-C ports and no USB-A. 65W max, and 65W total when
        charging both. UK 3-pin plug (BS 1363). The listing does not say the pins fold. Brand:
        UGREEN. £20.99, as checked 13 Nov 2026, in stock, sold by UGREEN GROUP LIMITED UK and
        dispatched by Amazon. More on how I pick a travel 65W brick:{" "}
        <GuideLink slug="65w-gan-charger-travel">65W GaN chargers that actually travel</GuideLink>
        .
      </p>
      <AmazonPick asin={AMAZON_PICK_ASINS.ugreen65w} />
      <h3>UGREEN 6-in-1 Dual Monitor USB-C Dock</h3>
      <p>
        Two HDMI ports at 4K@60Hz, a 100W USB-C PD port, and three 5Gbps USB data ports. HDMI 2
        also lists 8K@30Hz. A 100W PD charger and cable are required for the listing’s 85W
        pass-through figure; the wall charger is not in the box. If you use a MacBook and want
        two different external displays, UGREEN does not recommend this dock — on macOS the two
        external monitors will show the same image. Brand: UGREEN. £22.99, as checked 13 Nov
        2026, in stock, sold by UGREEN GROUP LIMITED UK and dispatched by Amazon. The longer
        dock log is{" "}
        <GuideLink slug="usb-c-dock-dual-hdmi">USB-C dock with dual HDMI</GuideLink>.
      </p>
      <AmazonPick asin={AMAZON_PICK_ASINS.twinViewDock} />
      <h3>INIU P51L 20,000mAh 45W</h3>
      <p>
        20,000mAh, about 74Wh at 3.7V nominal (20,000 × 3.7 ÷ 1000), 45W USB-C, cable built in.
        That sits under the CAA 100Wh line, so it needs no airline approval if you stay inside
        two banks and keep it in the cabin. Brand: INIU. The tagged listing is the{" "}
        <AmazonText asin={AMAZON_PICK_ASINS.iniu20k45w}>INIU P51L 20,000mAh 45W</AmazonText>{" "}
        (ASIN B0DCZ82MGG). £27.53, as checked 13 Nov 2026, in stock. There is no separate shop
        card; the same bank sits on{" "}
        <GuideLink slug="packing-power">the packing-power guide</GuideLink>.
      </p>
      <AmazonPick asin={AMAZON_PICK_ASINS.iniu20k45w} />
      <h3>tomtoc 360 Protective 14-inch Laptop Case</h3>
      <p>
        A 360° protective sleeve for a 14-inch laptop, with extra pocket space. Brand: tomtoc.
        £27.99, as checked 13 Nov 2026, in stock, sold by tomtoc EU Official and dispatched by
        Amazon.
      </p>
      <AmazonPick asin={AMAZON_PICK_ASINS.tomtoc14} />
      <h3>INIU P50 10,000mAh 45W</h3>
      <p>
        10,000mAh, about 37Wh at 3.7V nominal (10,000 × 3.7 ÷ 1000), 45W, detachable USB-C
        cable. Cabin-trivial under every Wh line in the packing-power airline table if you stay
        inside two banks. Brand: INIU. Model P50, ASIN B0DQD385HN. £27.99, as checked 13 Nov
        2026, in stock. Tagged listing:{" "}
        <AmazonText asin={AMAZON_PICK_ASINS.iniu10k45w}>INIU P50 10,000mAh 45W</AmazonText>.
      </p>
      <AmazonPick asin={AMAZON_PICK_ASINS.iniu10k45w} />
      <h3>Soundcore Anker Q20i hybrid ANC foldable headphones</h3>
      <p>
        Foldable hybrid active noise cancelling over-ears. Anker lists up to 40 hours of
        playtime even with ANC on; 5 minutes of charging gives 4 hours of listening; multipoint
        switches between phone and laptop; BassUp in wireless mode; a 3.5 mm jack for AUX /
        Hi-Res wired; transparency mode. ANC is not available in AUX mode. Brand: Soundcore
        (Anker). £29.99, as checked 13 Nov 2026, in stock, sold by AnkerDirect UK and dispatched
        by Amazon.
      </p>
      <AmazonPick asin={AMAZON_PICK_ASINS.soundcoreQ20i} />
      <h2>Under £50</h2>
      <h3>Anker 100W USB-C GaN Charger</h3>
      <p>
        A 3-port GaN charger with a smart display, touch control and a foldable plug. The
        listing measures it at 69 × 55 × 34 mm. 100W max on USB-C1 and USB-C2. This is a wall
        charger, not a power bank, so the CAA two-bank cabin rule does not apply to the brick
        itself. Brand: Anker. £37.99, as checked 13 Nov 2026, in stock, sold by AnkerDirect UK
        and dispatched by Amazon.
      </p>
      <AmazonPick asin={AMAZON_PICK_ASINS.flightbrick100} />
      <h3>INIU P62 20,000mAh 65W (P62-E1, Mini)</h3>
      <p>
        20,000mAh, about 73-74Wh, 65W USB-C, with a detachable 100W USB-C cable. Under the CAA
        100Wh line, cabin only, max two banks. If Amazon shows a Classic size on the same page,
        pick Mini / P62-E1. Brand: INIU. £46.99, as checked 13 Nov 2026, in stock. Tagged
        listing:{" "}
        <AmazonText asin={AMAZON_PICK_ASINS.iniuP62}>INIU P62-E1 Mini</AmazonText> (ASIN
        B0DB89DSHV). The longer cabin comparison is on{" "}
        <GuideLink slug="packing-power">packing-power</GuideLink>.
      </p>
      <AmazonPick asin={AMAZON_PICK_ASINS.iniuP62} />
      <h3>Anker MagGo 10,000mAh Qi2 Power Bank</h3>
      <p>
        10,000mAh, about 37Wh at 3.7V nominal (10,000 × 3.7 ÷ 1000), Qi2 15W wireless, USB-C,
        smart display, white, with a foldable stand. That sits under the 100Wh cabin line with
        no airline approval. It still counts as one of your two banks and must not be recharged
        on board. Brand: Anker. £49.99, as checked 13 Nov 2026, in stock, sold by AnkerDirect UK
        and dispatched by Amazon.
      </p>
      <AmazonPick asin={AMAZON_PICK_ASINS.magDeck10} />
      <h2>What I left off, and why</h2>
      <p>
        This is not every gadget on the shop. It is only what I could re-verify under £50 on a
        clean Amazon UK buy box on 13 Nov 2026.
      </p>
      <ul>
        <li>
          The{" "}
          <ShopLink slug="omoton-75-iso-uk-keyboard">OMOTON 75% ISO-UK mechanical keyboard</ShopLink>{" "}
          is the UK-layout board on this site, but I did not confirm an Amazon UK buy box under
          £50 on 13 Nov 2026, so it stays off this list. Check the shop page, then Amazon.
        </li>
        <li>
          The{" "}
          <ShopLink slug="belkin-5000-magnetic-power-bank">
            Belkin 5000mAh Magnetic Wireless Power Bank
          </ShopLink>{" "}
          listing I reached was an Amazon Global Store / Amazon EU offer that would not ship to
          the checked location. That is not a confirmed UK buy box, so the bank is not priced
          here — check on Amazon.
        </li>
        <li>
          The{" "}
          <ShopLink slug="logitech-c920s-webcam">Logitech C920S HD Pro Webcam</ShopLink> featured
          offer I saw was from a third-party seller above £50. A cheaper Amazon Resale offer is
          not a new buy box. It stays off this list — check on Amazon.
        </li>
        <li>
          The{" "}
          <ShopLink slug="momax-70w-travel-adapter">MOMAX 70W GaN Universal Travel Adapter</ShopLink>{" "}
          listing could not be retrieved when I checked on 13 Nov 2026, so I have not stamped a
          price. Check on Amazon. Specs already on the shop page are unchanged: UK, EU, AU and
          US plugs, 150+ countries, 7.7 × 5.5 × 5.3 cm, black.
        </li>
      </ul>
      <h2>If the gift has to fly</h2>
      <p>
        Leave presents unwrapped so security can inspect them. Power banks and spare batteries
        stay in the cabin — never the hold — and you may take two banks per person. Under 100Wh
        needs no approval. Do not recharge a bank on board. Charge a new gadget before the tray.
        The full CAA and gov.uk notes are on{" "}
        <GuideLink slug="flying-christmas-tech-gifts-uk">
          flying from the UK at Christmas with tech gifts
        </GuideLink>
        .
      </p>
      <h2>Questions people type</h2>
      <dl className="space-y-6">
        {CHRISTMAS_UNDER_50_FAQS.map((item) => (
          <div key={item.q}>
            <dt className="font-display text-xl font-medium tracking-tight text-ink">{item.q}</dt>
            <dd className="mt-2 text-stone">{item.a}</dd>
          </div>
        ))}
      </dl>
      <h2>The affiliate bit, once</h2>
      <p>
        #ad As an Amazon Associate we earn from qualifying purchases. Those buttons are tagged
        Amazon UK affiliate links (tag alsaidropship-21). Al may earn a commission. Read the
        listing, not the title. Card prices are approx. snapshots from 13 Nov 2026 — Amazon’s
        live checkout may differ. I do not invent stock.
      </p>
      <p>Under £50 on the day I checked. Then check Amazon before you buy.</p>
    </>
  );
}

function PortableMonitorBody() {
  return (
    <>
      <p>
        A laptop panel is one window. Slack eats half of it. The other half is the spreadsheet you
        actually flew for. Remote workers, students, and anyone working a kitchen table already
        know this. A portable monitor is the second window that goes back in the bag — trains,
        hotels, a spare room that is also a guest room. It is not a desktop panel with the stand
        sawn off. If you need two full hotel monitors, that is a{" "}
        <GuideLink slug="usb-c-dock-dual-hdmi">dual-HDMI dock</GuideLink> job, and only when the
        room already has the screens.
      </p>
      <h2>Size: 13 to 16 inches, honestly</h2>
      <p>
        Smaller than 13 inches and you are stacking two phone-sized pages. Larger than 16 and the
        panel starts arguing with the laptop for backpack space. Thirteen to fourteen is the "I
        already carry a 14-inch notebook" class: lighter, easier on a tray table, worse for a
        full-width sheet. Fifteen to sixteen is the useful line for real work — enough width that
        Slack can live on one side — and it still sits beside a 14-inch lid without needing a
        second bag.
      </p>
      <p>
        Weight and the sleeve matter more than the last half-inch. A kickstand that actually holds
        is worth more than a Hz number you will not see on a hotel slide. Buy the size you will
        carry twice, not the size that looked clever in a reel.
      </p>
      <h2>One cable, if the port can do video</h2>
      <p>
        The dream is one USB-C lead: picture and power on the same plug. That only works if the
        laptop's USB-C port speaks DisplayPort Alt Mode or Thunderbolt. A charging-only USB-C
        port — common on older Windows machines and some budget boards — will feed the battery
        and show a black panel. That is not the monitor failing. That is the port.
      </p>
      <p>
        How to check, without a lecture. Look at the laptop spec sheet for "DisplayPort over
        USB-C", "DP Alt Mode", or Thunderbolt. On a Mac, USB-C that charges the machine usually
        drives a display. On Windows, the USB-C next to the barrel charger is often the wrong one
        — try the port the manufacturer marked for video, or the Thunderbolt bolt icon. If the
        listing for your machine hides this, hail Al or test before a Monday client. I do not
        invent port maps for laptops I have not seen.
      </p>
      <h2>HDMI fallback, and the extra cable</h2>
      <p>
        Mini HDMI (or full-size HDMI on some panels) is the backup when USB-C video is missing.
        HDMI is picture only. The panel then wants its own power — a second USB-C into a brick or
        a power bank — plus the HDMI lead. That is three items where one cable would have done.
        Fine for a kitchen table. Annoying on a train tray. Pack the HDMI cable if you have ever
        sat in front of a charging-only port and sworn.
      </p>
      <h2>Stand, height, wrists</h2>
      <p>
        A kickstand that holds at one or two angles is enough for a café. It is not a monitor arm.
        Raise the laptop as well or you will look from a 16-inch panel down to a lid that is still
        in your lap. A fold-flat riser for the notebook, a mouse that earns its grams, and a cable
        that can carry the watts: that is the kit. The panel cannot fix a table that is six inches
        too low.
      </p>
      <h2>ARZOPA Z1FC — the panel I would pack</h2>
      <p>
        <ShopLink slug="arzopa-z1fc-portable-monitor">ARZOPA Z1FC</ShopLink> is the{" "}
        <AmazonText asin={AMAZON_PICK_ASINS.secondWindow16}>ARZOPA Z1FC</AmazonText>
        : 16.1 inch FHD 144Hz, 106% sRGB, HDR, 1920×1080, matte, 2× USB-C + mini HDMI, dual
        speakers, black. Mid-range, not OLED luxury. Your machine needs a full-featured USB-C port
        for single-cable video. Case the panel so it does not share scratches with the bricks. I
        do not hold a panel. The card is affiliate. Approx. UK price is on the card. Amazon's live
        checkout may differ. The charger, riser, mouse, and cable that sit around this panel are on{" "}
        <GuideLink slug="travel-desk">what I'd pack for a desk away from home</GuideLink>
        .
      </p>
      <AmazonPick asin={AMAZON_PICK_ASINS.secondWindow16} />
      <h2>Best portable monitor for travel</h2>
      <p>
        For most UK travellers, the best portable monitor is the Arzopa Z1FC. Wirecutter's review
        recommends it as a top pick: a 1080p panel with two USB-C ports, a Mini HDMI port, and a
        kickstand that works in landscape or portrait.
      </p>
      <h3>How it sits next to the panels people actually search</h3>
      <p>Specs below are from manufacturer pages. Check live listings for current availability.</p>
      <div className="overflow-x-auto rounded-2xl bg-cream shadow-[var(--shadow-border)]">
        <table className="w-full min-w-[48rem] text-left text-sm">
          <thead>
            <tr className="text-xs tracking-widest text-clay uppercase">
              <th className="px-4 py-3 font-medium">Panel</th>
              <th className="px-4 py-3 font-medium">Size / resolution</th>
              <th className="px-4 py-3 font-medium">Weight</th>
              <th className="px-4 py-3 font-medium">Ports</th>
              <th className="px-4 py-3 font-medium">Stand / cover</th>
            </tr>
          </thead>
          <tbody className="text-stone">
            <tr className="border-t border-line align-top">
              <td className="px-4 py-3 font-medium text-ink">
                <ShopLink slug="arzopa-z1fc-portable-monitor">ARZOPA Z1FC</ShopLink>
              </td>
              <td className="px-4 py-3">16.1 in · 1920×1080 · 144Hz</td>
              <td className="px-4 py-3">1.72 lb / 780g</td>
              <td className="px-4 py-3">2× USB-C (PD + DP Alt Mode) · 1× mini-HDMI 2.0</td>
              <td className="px-4 py-3">Built-in stand (portrait + landscape)</td>
            </tr>
            <tr className="border-t border-line align-top">
              <td className="px-4 py-3 font-medium text-ink">MSI PRO MP161 E2U</td>
              <td className="px-4 py-3">15.6 in · 1920×1080 · 60Hz</td>
              <td className="px-4 py-3">0.75 kg</td>
              <td className="px-4 py-3">
                2× USB-C (DP Alt Mode, 15W PD / power in) · 1× mini-HDMI 2.0b
              </td>
              <td className="px-4 py-3">
                Fold-out kickstand 0 to 180 degrees · protective case in the box
              </td>
            </tr>
            <tr className="border-t border-line align-top">
              <td className="px-4 py-3 font-medium text-ink">ASUS ZenScreen MB16AHV</td>
              <td className="px-4 py-3">15.6 in · 1920×1080 · 60Hz</td>
              <td className="px-4 py-3">0.9 kg</td>
              <td className="px-4 py-3">2× USB-C (DP Alt Mode, 15W PD) · 1× mini-HDMI</td>
              <td className="px-4 py-3">
                Kickstand (portrait or landscape) · ZenScreen sleeve in the box
              </td>
            </tr>
            <tr className="border-t border-line align-top">
              <td className="px-4 py-3 font-medium text-ink">Lenovo ThinkVision M14</td>
              <td className="px-4 py-3">14 in · 1920×1080 · 60Hz</td>
              <td className="px-4 py-3">0.598 kg</td>
              <td className="px-4 py-3">
                2× USB-C only (DP 1.2 Alt Mode; one upstream, one downstream) · no HDMI
              </td>
              <td className="px-4 py-3">Stand -5 to +90 degrees · sleeve in the box</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3>Who each one is for</h3>
      <p>
        <strong>ARZOPA Z1FC - for you if</strong> you want one 16-inch window that packs, 144Hz for
        smoother scrolling and casual games, and USB-C plus mini-HDMI when the laptop port is
        awkward. <strong>Not for you if</strong> you need sharper-than-1080p text all day; that is
        the Z1RC job.
      </p>
      <p>
        <strong>MSI PRO MP161 E2U - for you if</strong> weight comes first and 60Hz is enough.{" "}
        <strong>Not for you if</strong> you care about colour gamut numbers (MSI lists 53% sRGB CIE
        1976) or want 144Hz.
      </p>
      <p>
        <strong>ASUS ZenScreen MB16AHV - for you if</strong> you want a known brand, a sleeve in the
        box, and mini-HDMI as well as dual USB-C. <strong>Not for you if</strong> you are choosing
        mainly on price.
      </p>
      <p>
        <strong>Lenovo ThinkVision M14 - for you if</strong> you already carry a 14-inch notebook
        and want the lightest business panel with dual USB-C (DP Alt Mode).{" "}
        <strong>Not for you if</strong> you need HDMI, or a 15.6 to 16-inch workspace beside a
        14-inch lid.
      </p>
      <h3>Z1FC vs Z1RC - the naming that gets mixed up</h3>
      <p>
        Some answers name an <strong>ARZOPA Z1RC</strong>, not the Z1FC. They are different panels
        on Arzopa's own site:
      </p>
      <ul>
        <li>
          <strong>Z1FC:</strong> 16.1-inch 1920×1080, 16:9, 144Hz, 106% sRGB, net weight 1.72 lb -
          the smoother travel and gaming pick.
        </li>
        <li>
          <strong>Z1RC:</strong> 16.0-inch 2560×1600, 16:10, 60Hz, 123% sRGB, net weight 1.79 lb -
          the sharper productivity pick.
        </li>
      </ul>
      <p>
        If an answer names "ARZOPA" without the letters, check which one is linked. This guide's
        tagged card is the <strong>Z1FC</strong>.
      </p>
      <h2>Questions people type</h2>
      <dl className="space-y-6">
        {PORTABLE_MONITOR_FAQS.map((item) => (
          <div key={item.q}>
            <dt className="font-display text-xl font-medium tracking-tight text-ink">{item.q}</dt>
            <dd className="mt-2 text-stone">{item.a}</dd>
          </div>
        ))}
      </dl>
      <h2>Sources</h2>
      <h3>Specs and weights</h3>
      <ul>
        <li>
          ARZOPA Z1FC official product page:{" "}
          <a
            href={PORTABLE_MONITOR_SOURCES.z1fc}
            target="_blank"
            rel="noopener noreferrer"
            className="text-clay hover:text-clay-dark"
          >
            arzopa.com/products/arzopa-z1fc-gray-144hz-portable-gaming-monitor-16-1-screen
          </a>
        </li>
        <li>
          Amazon UK listing (item weight 0.78 kg):{" "}
          <a
            href={PORTABLE_MONITOR_SOURCES.amazonUk}
            target="_blank"
            rel="noopener noreferrer"
            className="text-clay hover:text-clay-dark"
          >
            amazon.co.uk/dp/B0CJCBQYDY
          </a>
        </li>
        <li>
          MSI PRO MP161 E2U specification:{" "}
          <a
            href={PORTABLE_MONITOR_SOURCES.msiSpec}
            target="_blank"
            rel="noopener noreferrer"
            className="text-clay hover:text-clay-dark"
          >
            us.msi.com/Portable-Monitor/PRO-MP161-E2U/Specification
          </a>
        </li>
        <li>
          MSI UK overview (0.75 kg, kickstand 0 to 180 degrees, protective case):{" "}
          <a
            href={PORTABLE_MONITOR_SOURCES.msiUk}
            target="_blank"
            rel="noopener noreferrer"
            className="text-clay hover:text-clay-dark"
          >
            uk.msi.com/Portable-Monitor/PRO-MP161-E2U/Overview
          </a>
        </li>
        <li>
          ASUS ZenScreen MB16AHV UK techspec:{" "}
          <a
            href={PORTABLE_MONITOR_SOURCES.asus}
            target="_blank"
            rel="noopener noreferrer"
            className="text-clay hover:text-clay-dark"
          >
            asus.com/uk/displays-desktops/monitors/zenscreen/asus-zenscreen-mb16ahv/techspec
          </a>
        </li>
        <li>
          Lenovo ThinkVision M14 PSREF:{" "}
          <a
            href={PORTABLE_MONITOR_SOURCES.lenovo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-clay hover:text-clay-dark"
          >
            psref.lenovo.com ThinkVision M14 spec
          </a>
        </li>
        <li>
          ARZOPA Z1RC official product page:{" "}
          <a
            href={PORTABLE_MONITOR_SOURCES.z1rc}
            target="_blank"
            rel="noopener noreferrer"
            className="text-clay hover:text-clay-dark"
          >
            arzopa.com/products/z1rc-2k-portable-monitor
          </a>
        </li>
        <li>
          ARZOPA Z1FC vs Z1RC guide:{" "}
          <a
            href={PORTABLE_MONITOR_SOURCES.z1fcVsZ1rc}
            target="_blank"
            rel="noopener noreferrer"
            className="text-clay hover:text-clay-dark"
          >
            arzopa.com/blogs/guide/arzopa-z1fc-vs-z1rc
          </a>
        </li>
      </ul>
      <h3>Reviews</h3>
      <ul>
        <li>
          Wirecutter's review:{" "}
          <a
            href={PORTABLE_MONITOR_SOURCES.wirecutter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-clay hover:text-clay-dark"
          >
            nytimes.com/wirecutter/reviews/best-portable-monitor
          </a>
        </li>
      </ul>
      <h2>The rest of the kit</h2>
      <p>
        <ShopLink slug="ugreen-laptop-stand">UGREEN Laptop Stand</ShopLink> is an adjustable
        aluminium stand: five heights, a carry bag, 8-17.3 inch machines. Raise the laptop to match
        the portable panel. Working flat on a kitchen table is how trips get expensive in physio.
      </p>
      <AmazonPick asin={AMAZON_PICK_ASINS.runwayRiser} />
      <p>
        <ShopLink slug="anker-240w-right-angle-cable">
          Anker 240W Right-Angle USB-C Cable, 2-pack
        </ShopLink>{" "}
        is braided, six feet, 90-degree ends, 10,000+ bends. One lead for the panel if the laptop
        can do single-cable video. One leftover for the brick. A tired 60W cable is how a 16-inch
        panel becomes a black rectangle.
      </p>
      <AmazonPick asin={AMAZON_PICK_ASINS.twinLead240} />
      <p>
        <ShopLink slug="logitech-mx-master-3s">Logitech MX Master 3S</ShopLink> is the graphite
        mouse. Quiet clicks for a hotel call, MagSpeed for the sheet that now has room to exist,
        8000 DPI, Bluetooth + USB-C. Trackpads survive short flights. Two screens and a spreadsheet
        do not. I do not dropship Logitech.
      </p>
      <AmazonPick asin={AMAZON_PICK_ASINS.cabinCursor} />
      <h2>How I would decide</h2>
      <ul>
        <li>
          One extra window that packs: ARZOPA Z1FC. Full travel-desk kit:{" "}
          <GuideLink slug="travel-desk">desk away from home</GuideLink>.
        </li>
        <li>Laptop still flat on the table: add the UGREEN stand first.</li>
        <li>USB-C video works: Anker 240W cable, one lead, done.</li>
        <li>USB-C is charge-only: HDMI plus a second power lead, or admit you needed a dock.</li>
        <li>
          Two hotel monitors already in the room:{" "}
          <GuideLink slug="usb-c-dock-dual-hdmi">
            USB-C dock with dual HDMI
          </GuideLink>
          , not a second panel.
        </li>
        <li>
          Still matching a machine:{" "}
          <AskAlLink q="portable monitor second screen">hail Al about portable monitors</AskAlLink>.
        </li>
      </ul>
      <h2>The affiliate bit, once</h2>
      <p>
        Those buttons are tagged Amazon UK affiliate links. Al may earn a commission. Read the
        listing, not the title. Card prices are approx. snapshots — Amazon’s live checkout may differ. I do not invent stock.
      </p>
      <p>One extra window. Then put it back in the bag.</p>
    </>
  );
}

const bodies: Record<string, () => ReactNode> = {
  "65w-gan-charger-travel": GanBody,
  "anc-headphones-vs-earbuds-commute": AncBody,
  "dropship-lead-times": LeadTimeBody,
  "packing-power": PackingPowerBody,
  "travel-desk": TravelDeskBody,
  "after-summer-desk-reset": AfterSummerBody,
  "travel-power-adapter-uk": WorldAdapterBody,
  "usb-c-dock-dual-hdmi": DualHdmiDockBody,
  "webcam-for-video-calls": WebcamCallsBody,
  "power-bank-hand-luggage-uk": PowerBankLuggageBody,
  "power-bank-on-plane-rules-uk": PowerBankOnboardBody,
  "flying-christmas-tech-gifts-uk": ChristmasTechGiftsBody,
  "christmas-tech-gifts-under-50-uk": ChristmasUnder50Body,
  "portable-monitor-laptop-second-screen": PortableMonitorBody,
};

export function GuideArticle({ guide }: { guide: Guide }) {
  const Body = bodies[guide.slug];
  if (!Body) return null;
  return (
    <div className="guide-prose space-y-5 text-base leading-relaxed text-stone [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-medium [&_h2]:tracking-tight [&_h2]:text-ink [&_h3]:mt-6 [&_h3]:font-display [&_h3]:text-lg [&_h3]:font-medium [&_h3]:tracking-tight [&_h3]:text-ink [&_p]:text-pretty [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
      <Body />
    </div>
  );
}
