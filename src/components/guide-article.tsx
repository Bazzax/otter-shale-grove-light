import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { AffiliateLink } from "@/components/affiliate-link";
import { AMAZON_PICK_ASINS, affiliateProduct, affiliateSearch, catalog, isAmazonPick } from "@/lib/catalog";
import { formatProductPrice } from "@/lib/format";
import { AIRLINE_POWER_BANK_ROWS, CAA_PACK_RIGHT, PACKING_POWER_FAQS, type Guide } from "@/lib/guides";

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
  return (
    <p className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center">
      {product ? (
        <span className="text-sm tabular-nums text-clay">
          {formatProductPrice(product)}{" "}
          <span className="font-normal text-dust">approx. · check Amazon</span>
        </span>
      ) : null}
      <AffiliateLink
        href={affiliateProduct(asin)}
        label="Amazon UK"
        className="mt-1 w-full sm:mt-0 sm:w-auto"
      />
    </p>
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
        <ShopLink slug="arc-gan">Arc 65W GaN</ShopLink> ships folding US pins. That is useful on a
        long-haul itinerary and useless in a UK wall without a travel adapter. If you only ever
        charge at home in Britain, buy a UK three-pin brick on Amazon and stop reading. If you
        already own a compact adapter, Arc is the one brick I would dropship — two USB-C, PD 3.1,
        cable in the box, no logo louder than the job.
      </p>
      <ul>
        <li>Need it this week: use the Amazon UK search. Next-day beats Dongguan.</li>
        <li>Need one brick for laptop + phone: 65W dual USB-C, not two 30W cubes.</li>
        <li>
          Phone-only top-up in a jacket: <ShopLink slug="orbit-bank">Orbit Mag</ShopLink>, airline-safe
          5,000 mAh.
        </li>
        <li>
          The charger still needs a pocket: <ShopLink slug="slip-sleeve">Slip 14</ShopLink> has one,
          on purpose.
        </li>
      </ul>
      <h2>When the affiliate aisle is the better buy</h2>
      <p>
        A named UK three-pin GaN with a high review count is the correct answer if you do not want
        to think about adapters, or if the dropship window on Arc (6–11 days) lands after your
        train. The button below is a tagged search. Read the wattage on the
        listing, not the title.
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
        <ShopLink slug="pulse-one">Pulse One</ShopLink> is closed-back, hybrid ANC, fourteen hours
        with the noise cancelling on, fold-flat hinge, no case brick. Voices first, then bass. If
        you wear glasses, pads matter more than the driver graph. If you mix music for a living,
        look at the affiliate list — Pulse is for planes and open-plan, not a mastering room.
      </p>
      <h2>Buds, if you walk</h2>
      <p>
        <ShopLink slug="ember-buds">Ember Buds</ShopLink> are the ones that stay in. ANC plus
        transparency, IPX4, multipoint for a laptop and a phone, a case that lasts a work week.
        Four tip sizes. If a commute is a bike or a platform sprint, buds beat a headband every
        time. They will not match Pulse for low-frequency rumble on the Underground. That is
        physics, not marketing.
      </p>
      <ul>
        <li>Train or plane, glasses OK, bag space: Pulse One.</li>
        <li>Walk, cycle, or you already wear a hat: Ember Buds.</li>
        <li>Calls all day: whichever stays in. Multipoint on Ember is the useful extra.</li>
        <li>You already own a brand ecosystem: use the Amazon button and stop stacking cases.</li>
      </ul>
      <h2>The commute test I actually run</h2>
      <p>
        Transparency that does not sound like a tin can. A pause when you take one bud out. Pads
        that do not cook your ears by zone 3. Battery that survives a delay. If a listing hides
        ANC-on hours, assume they are bad.
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
        A card that says 8–14 days is not a courier promise. It is a supplier window: pick, pack,
        fly, clear, last mile. I print it so you can decide whether dropship is the tool, or
        whether you should tap Amazon UK and be done.
      </p>
      <h2>What the numbers hide</h2>
      <p>
        Shenzhen, Dongguan, Taipei, Seoul, Ho Chi Minh, Hangzhou — those are origins, not
        warehouses on the M25. The clock starts when a factory batch includes your line, not when
        you click. Weekends vanish. A customs pause at a UK hub can add two quiet days. Tracking
        will look dead, then suddenly move.
      </p>
      <ul>
        <li>
          Fastest in this bay: <ShopLink slug="arc-gan">Arc</ShopLink> 6–11 days,{" "}
          <ShopLink slug="orbit-bank">Orbit Mag</ShopLink> 6–12.
        </li>
        <li>
          Mid: <ShopLink slug="ember-buds">Ember Buds</ShopLink> 7–12,{" "}
          <ShopLink slug="nimbus-ssd">Nimbus</ShopLink> 7–13.
        </li>
        <li>Longer boards and lights: 10–16 is not a slight. It is aluminum and a queue.</li>
      </ul>
      <h2>When to buy affiliate instead</h2>
      <p>
        You need it before a Monday. You want UK returns, not a supplier argument. You want a brand
        Al does not stock. You are buying a second of something you already own. Those are Amazon
        jobs. The buttons are tagged, marked sponsored, and they do not pretend to be dropship.
      </p>
      <p>
        This checkout is theatre. Nothing packs, nothing bills. The useful part of the bay is the
        lead time printed next to the origin — and the exit ramp when that window is the wrong
        tool. Read{" "}
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
        click through before you fly. I do not invent airline policy.
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
        The short version: Ryanair and BA cap you at 100Wh. easyJet and Jet2 go up to 160Wh, but
        Jet2 does not let you use a bank in the air, and easyJet does not let you charge a phone
        from one. Two cells below stay as "Check with airline" until those pages say it plainly.
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
      <h2>What 65W foldable GaN should I pack?</h2>
      <p>
        A foldable 65W GaN is the brick I would actually pack if I were buying tonight and flying
        tomorrow. Pins fold. Two ports. It is the Amazon version of the job{" "}
        <ShopLink slug="arc-gan">Arc 65W GaN</ShopLink> does in the bay — wait the 6–11 days from
        Dongguan if you want the one I put a name on. Need it before the train: tap the listing.
      </p>
      <AmazonPick asin="B0B7N4DX1Z" />
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
        <ShopLink slug="orbit-bank">Orbit Mag</ShopLink> is the bay version — 5,000 mAh, about{" "}
        <strong className="font-medium text-ink">18.5Wh at 3.7V nominal</strong> (5,000 × 3.7 ÷
        1000). Snaps. Leaves. This Baseus is the affiliate aisle if you need it on a Tuesday.
      </p>
      <AmazonPick asin="B0G4CHTD53" />
      <h2>What USB-C hub belongs on a hotel desk?</h2>
      <p>
        Hotel desk, one cable, HDMI that should hit 4K60 if the listing is not lying. Eight ports
        is enough. <ShopLink slug="trace-hub">Trace Hub</ShopLink> is the one I dropship —
        aluminum, 100W passthrough, I actually tested 4K60. ABLEWE is the next-day stand-in.
      </p>
      <AmazonPick asin="B0DN9F245H" />
      <h2>Which power banks are cabin-legal on those four airlines?</h2>
      <p>
        Cabin verdicts only. Watt-hours use the same 3.7V nominal sum already on this page, and
        only where a milliamp-hour figure is already stated. No guessed prices. No placeholder
        shop links.
      </p>
      <h3>INIU 20,000mAh 45W</h3>
      <p>
        About 74Wh at 3.7V nominal (20,000 × 3.7 ÷ 1000). That sits under 100Wh, so it is
        cabin-legal on Ryanair, easyJet, BA and Jet2 if you stay inside the two-bank limit.
        Forty-five watt USB-C, cable built in. There is no tagged Amazon ASIN for this INIU in
        the bay, so there is no shop button here.
      </p>
      <h3>Anker Laptop Power Bank 25,000mAh (A1695)</h3>
      <p>
        The one to look at if a laptop is the thing that dies. Still two banks at most, and
        Ryanair and BA will not take anything over 100Wh. This page does not print a watt-hour
        figure for A1695 — a 3.7V sum from 25,000mAh is the wrong tool on a multi-cell pack, and
        the live UK listing is not in the bay. Read the Wh on the case. No tagged ASIN here, so
        no shop button.
      </p>
      <h3>INIU 10,000mAh 45W</h3>
      <p>
        About 37Wh at 3.7V nominal (10,000 × 3.7 ÷ 1000). Cabin-trivial: a phone-and-earbuds bank
        that stays well under every Wh line in the table. No tagged Amazon ASIN in the bay, so no
        shop button.
      </p>
      <h3>Anker Zolo 20K</h3>
      <p>
        Already covered above: 20,000 mAh, about 74Wh, 30W USB-C, cable in the box. Cabin-legal on
        all four if you stay inside two banks. The tagged listing is on that section.
      </p>
      <h3>MagDeck 10 (Anker MagGo 10,000mAh Qi2)</h3>
      <p>
        <ShopLink slug="magdeck-10">MagDeck 10</ShopLink> is the{" "}
        <AmazonText asin={AMAZON_PICK_ASINS.magDeck10}>Anker MagGo 10,000 mAh Qi2</AmazonText>
        : about 37Wh at 3.7V nominal (10,000 × 3.7 ÷ 1000). Fifteen-watt magnetic charge, a
        display, a fold-out stand. Cabin-legal. Covers the day you miss the socket. I do not
        dropship it. The card is affiliate. Approx. UK price is on the card — Amazon’s live
        checkout may differ.
      </p>
      <AmazonPick asin={AMAZON_PICK_ASINS.magDeck10} />
      <h3>Baseus magnetic power bank</h3>
      <p>
        Already covered above. This page has never printed a milliamp-hour figure for it, so there
        is no Wh sum. Read the case.{" "}
        <ShopLink slug="orbit-bank">Orbit Mag</ShopLink> is the bay version: 5,000 mAh, about
        18.5Wh. The tagged Baseus listing sits on that section.
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
        <ShopLink slug="arc-gan">Arc</ShopLink>,{" "}
        <ShopLink slug="orbit-bank">Orbit Mag</ShopLink>, and{" "}
        <ShopLink slug="trace-hub">Trace</ShopLink>. Lead times printed. No surprise warehouse.
        Cabin rules, two-bank limit, and the Wh sum live on{" "}
        <GuideLink slug="power-bank-hand-luggage-uk">
          power banks in UK hand luggage
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
        Five Amazon UK picks. They sit next to — not on top of — the headphones, hubs, and 65W
        bricks already in the bay. Al does not dropship these. The cards are affiliate.
      </p>
      <h2>FlightBrick 100 — one plug, three devices</h2>
      <p>
        Hotel desks have one free socket and zero patience. If you still travel with a single-port
        laptop charger plus a phone brick, you are negotiating with the wall.{" "}
        <ShopLink slug="flightbrick-100">FlightBrick 100</ShopLink> is Anker’s 100W 3-port GaN with
        a smart display: two USB-C, one USB-A, foldable UK pins, and a live readout of what each
        port is pulling. That is how you know the MacBook is getting real wattage while the phone
        tops up beside it. Then the pins fold flat for the bag.
      </p>
      <p>
        This is the practical step up from{" "}
        <ShopLink slug="arc-gan">Arc 65W GaN</ShopLink> if one socket has to do a laptop and a
        phone. Pair it with a proper high-watt cable — the brick cannot outrun a weak lead.
      </p>
      <AmazonPick asin={AMAZON_PICK_ASINS.flightbrick100} />
      <h2>Runway Riser — raise the screen</h2>
      <p>
        Working flat on a café table looks romantic until hour three.{" "}
        <ShopLink slug="runway-riser">Runway Riser</ShopLink> is UGREEN’s fold-flat aluminium stand:
        five height options, a carry pouch, roughly 8–17.3 inch machines, scratch-padded. It is not
        a standing desk. It is a riser that makes hotel and co-working tables usable — especially
        if you already carry <ShopLink slug="drift-75">Drift 75</ShopLink>.
      </p>
      <AmazonPick asin={AMAZON_PICK_ASINS.runwayRiser} />
      <h2>Cabin Cursor — trackpad is fine until the spreadsheet isn't</h2>
      <p>
        Trackpads survive short flights. Long edit sessions need MagSpeed scrolling, quiet clicks
        for hotel calls, and Easy-Switch between laptop and tablet.{" "}
        <ShopLink slug="cabin-cursor">Cabin Cursor</ShopLink> is the MX Master 3S in graphite. I do
        not dropship Logitech. If the mouse earns bag space, this is the one.
      </p>
      <AmazonPick asin={AMAZON_PICK_ASINS.cabinCursor} />
      <h2>Twin Lead 240 — the brick is only as fast as the cable</h2>
      <p>
        A 100W wall brick with a tired 60W cable is cosplay.{" "}
        <ShopLink slug="twin-lead-240">Twin Lead 240</ShopLink> is Anker’s 240W-rated right-angle
        USB-C 2-pack — braided, six feet, 90-degree ends for tight laptop ports, cars, and hotel
        nightstands. Pack a pair. Leave one at the desk.
      </p>
      <AmazonPick asin={AMAZON_PICK_ASINS.twinLead240} />
      <h2>Best portable monitor for travel: 16-inch USB-C</h2>
      <p>
        One laptop panel means Slack eating half the spreadsheet.{" "}
        <ShopLink slug="second-window-16">Second Window 16</ShopLink> is the ARZOPA Z1FC — the
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
                <ShopLink slug="second-window-16">Second Window 16</ShopLink>
                <span className="block text-xs text-dust">ARZOPA Z1FC</span>
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
        <li>Bottom of the bag: FlightBrick 100 and Twin Lead 240.</li>
        <li>Middle: Runway Riser in its pouch. Cabin Cursor in a pocket.</li>
        <li>Against the laptop: Second Window 16 in a soft sleeve.</li>
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
        <ShopLink slug="runway-riser">Runway Riser</ShopLink>
        ) raises the screen to a sensible height and still folds into its pouch for the next trip.
        Pair it with the{" "}
        <AmazonText asin={AMAZON_PICK_ASINS.cabinCursor}>Logitech MX Master 3S</AmazonText> (
        <ShopLink slug="cabin-cursor">Cabin Cursor</ShopLink>
        ), which has quiet clicks for calls and can switch between three devices, so the trackpad
        can retire for the season.
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
        <ShopLink slug="second-window-16">Second Window 16</ShopLink>
        ) sits next to the laptop on its kickstand and connects over USB-C. When you're done, it
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
        <ShopLink slug="flightbrick-100">FlightBrick 100</ShopLink>
        ) charges your laptop, phone and earbuds from one socket, and its little display shows what
        each device is drawing. Your charger is only as fast as its cable, so the{" "}
        <AmazonText asin={AMAZON_PICK_ASINS.twinLead240}>
          Anker 240W right-angle USB-C 2-pack
        </AmazonText>{" "}
        (
        <ShopLink slug="twin-lead-240">Twin Lead 240</ShopLink>
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
        It is an adapter, not a voltage converter. Hair dryers, cheap irons, and anything that
        expects 230V through a dumb US plug will still fry. This guide is for laptops, phones, and
        hubs. If you need to convert voltage, you are packing a different tool.
      </p>
      <ul>
        <li>UK / EU / AU / US pins on one body. Not a bag of loose heads.</li>
        <li>Enough USB-C PD to feed a laptop. Two leftover USB-A ports are a bonus, not the pitch.</li>
        <li>GaN if you want it small enough to survive a weekend bag.</li>
        <li>A cable that can carry the watts. The adapter cannot outrun a tired 60W lead.</li>
      </ul>
      <h2>WorldBrick 70 — one brick, four countries</h2>
      <p>
        <ShopLink slug="worldbrick-70">WorldBrick 70</ShopLink> is the{" "}
        <AmazonText asin={AMAZON_PICK_ASINS.worldBrick70}>
          MOMAX 70W GaN universal travel adapter
        </AmazonText>
        : UK, EU, AU, and US pins, three USB-C PD ports and two USB-A QC ports. Laptop and phones
        without a pouch of country plugs. I do not dropship it. The card is affiliate. Read the
        listing for live stock. Approx. UK price is on the card — Amazon’s live checkout may differ.
      </p>
      <p>
        This is the one I would pack if the itinerary leaves the UK wall. Hotel desks have one free
        socket. Five USB ports on the brick means the wall socket can stay empty for a kettle, or
        stay unused.
      </p>
      <AmazonPick asin={AMAZON_PICK_ASINS.worldBrick70} />
      <h2>When you are staying on UK pins</h2>
      <p>
        If the trip is Britain and a train, you do not need a world face.{" "}
        <ShopLink slug="flightbrick-100">FlightBrick 100</ShopLink> is Anker’s 100W 3-port GaN with
        folding UK pins and a live wattage readout. That is the honest desk brick for a UK socket.{" "}
        <ShopLink slug="arc-gan">Arc 65W GaN</ShopLink> is the dropship version of the smaller job
        — dual USB-C, folding US pins, 100–240V — and it still wants a travel adapter the moment
        you leave a US or a hotel that already converted the wall. Wait the 6–11 days from Dongguan
        if you want the one I put a name on and you already own a compact adapter.
      </p>
      <AmazonPick asin={AMAZON_PICK_ASINS.flightbrick100} />
      <h2>The brick is only as fast as the cable</h2>
      <p>
        Pack <ShopLink slug="twin-lead-240">Twin Lead 240</ShopLink> with either brick. A 70W or
        100W wall face with a tired 60W cable is cosplay. Right-angle, braided, a pair: one at the
        desk, one in the sleeve.
      </p>
      <AmazonPick asin={AMAZON_PICK_ASINS.twinLead240} />
      <h2>How I would decide</h2>
      <ul>
        <li>Leaving the UK wall: WorldBrick 70. Leave the bag of plugs at home.</li>
        <li>UK sockets only, laptop plus phone: FlightBrick 100.</li>
        <li>Already own an adapter and can wait a dropship window: Arc 65W GaN.</li>
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
      <h2>TwinView Dock — hotel dual-monitor mode</h2>
      <p>
        <ShopLink slug="twinview-dock">TwinView Dock</ShopLink> is the{" "}
        <AmazonText asin={AMAZON_PICK_ASINS.twinViewDock}>UGREEN Revodok 206</AmazonText>
        : a packable 6-in-1 dual-HDMI USB-C dock. Dual 4K@60Hz, single 8K, 100W Power Delivery, and
        three 5Gbps USB data ports. I do not dropship it. The card is affiliate. Confirm your
        laptop’s USB-C can drive dual display before you pack it as gospel.
      </p>
      <AmazonPick asin={AMAZON_PICK_ASINS.twinViewDock} />
      <h2>Trace Hub — one screen, less circus</h2>
      <p>
        If you only need one external and a card reader,{" "}
        <ShopLink slug="trace-hub">Trace Hub</ShopLink> is the dropship stick: HDMI that actually
        hits 4K60 on the two laptops I tested, SD, 100W passthrough, aluminum. TwinView is two
        screens. Trace is the simple multiport. Affiliate clones are cheaper and drop to 30 Hz.
        Wait the 8–13 days from Taipei if one panel is the whole job.
      </p>
      <h2>No hotel monitors? Pack a panel</h2>
      <p>
        Dual HDMI assumes two displays exist. A lot of rooms have a TV on HDMI 1.4 and a desk with
        no stand. <ShopLink slug="second-window-16">Second Window 16</ShopLink> is the ARZOPA Z1FC
        portable 16.1 inch FHD panel — USB-C plug-and-play or Mini HDMI, kickstand, slim enough to
        sit beside the laptop. That is dual-screen without begging the concierge for a second
        monitor.
      </p>
      <AmazonPick asin={AMAZON_PICK_ASINS.secondWindow16} />
      <h2>Power the dock like you mean it</h2>
      <p>
        A 100W dock still wants a 100W wall brick.{" "}
        <ShopLink slug="flightbrick-100">FlightBrick 100</ShopLink> is the Anker 100W 3-port GaN
        with folding UK pins. One socket, the dock, the phone, and a live readout so you know the
        MacBook is getting real wattage. Pair it with a high-watt cable. The dock cannot invent
        amps the brick did not send.
      </p>
      <AmazonPick asin={AMAZON_PICK_ASINS.flightbrick100} />
      <h2>How I would decide</h2>
      <ul>
        <li>Two hotel or client monitors, Windows laptop: TwinView Dock.</li>
        <li>One screen and a card slot: Trace Hub.</li>
        <li>No monitors in the room: Second Window 16.</li>
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
        A clip-on 1080p cam will not make you a studio. It will make you look like a person who
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
        <li>Stereo mics for a quiet room. Ember or a headset for a train.</li>
        <li>Light in front of you. Height at eye line. The cam cannot invent either.</li>
      </ul>
      <h2>CallLatch — the clip-on that earns the gram</h2>
      <p>
        <ShopLink slug="call-latch">CallLatch</ShopLink> is the{" "}
        <AmazonText asin={AMAZON_PICK_ASINS.callLatch}>Logitech C920S HD Pro</AmazonText>
        : Full HD 1080p/30fps, dual stereo mics, HD light correction, and a physical privacy
        shutter. USB plug-and-play for Zoom, Skype, PC, Mac, and tablets. I do not dropship
        Logitech. The card is affiliate. Laptop cams lie — clip this on, close the shutter when you
        leave.
      </p>
      <AmazonPick asin={AMAZON_PICK_ASINS.callLatch} />
      <h2>Light the face, not the screen</h2>
      <p>
        <ShopLink slug="quietframe">QuietFrame</ShopLink> is a monitor light bar: asymmetric LEDs
        that wash the desk and spare the panel. Stepless dim, 3000–5000K, USB-C from the display or
        a hub. It will not replace a key light in a dark Airbnb, but it stops the overhead from
        being the only source. If your room already has a window in front of you, you may not need
        it. If your room has one ceiling lamp, this is the cheap upgrade.
      </p>
      <h2>Raise the lens</h2>
      <p>
        A cam clipped to a laptop on a café table looks up.{" "}
        <ShopLink slug="runway-riser">Runway Riser</ShopLink> is UGREEN’s fold-flat aluminium stand
        — five heights, a carry pouch, roughly 8–17.3 inch machines. Eye line for you is eye line
        for them. It also saves your neck after hour three, which is the real reason it stays in
        the bag.
      </p>
      <AmazonPick asin={AMAZON_PICK_ASINS.runwayRiser} />
      <h2>The rest of the call kit</h2>
      <p>
        If you type on camera, hotel walls hear a mechanical board.{" "}
        <ShopLink slug="softdeck-mini">SoftDeck Mini</ShopLink> is the MX Keys Mini in graphite, UK
        layout, quiet on purpose, Easy-Switch across three devices. It slides into a sleeve next to
        the laptop. I do not dropship it. Pair it with the cam if the call includes a shared doc
        and you still have to type.
      </p>
      <AmazonPick asin={AMAZON_PICK_ASINS.softDeckMini} />
      <h2>How I would decide</h2>
      <ul>
        <li>Hotel or kitchen-table calls, laptop cam is a joke: CallLatch.</li>
        <li>One overhead light, dark faces: add QuietFrame.</li>
        <li>Laptop flat on the table: Runway Riser first, then the cam.</li>
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
        , then the carrier you actually booked. The CAA list in force since 27 March 2026 is
        below. I do not invent airline policy.
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
      <h2>Orbit Mag — the day puck</h2>
      <p>
        <ShopLink slug="orbit-bank">Orbit Mag</ShopLink> is the 5,000 mAh magnetic puck in the bay:
        15W Mag-compatible charge, USB-C in and out, 10.5 mm thick. Run the 3.7V maths and you are
        around 18.5Wh — cabin-trivial, which is why the card already says airline-safe capacity.
        It is a phone top-up, not a laptop brick. If the phone is not magnetic, skip the snap and
        use the USB-C port, or skip the puck. Dropship from Shenzhen in 6–12 days, or use the
        tagged Amazon button on the card if Tuesday is the problem.
      </p>
      <h2>MagDeck 10 — the travel bank</h2>
      <p>
        <ShopLink slug="magdeck-10">MagDeck 10</ShopLink> is the{" "}
        <AmazonText asin={AMAZON_PICK_ASINS.magDeck10}>Anker MagGo 10,000 mAh Qi2</AmazonText>
        : 15W magnetic charge, smart display, foldable stand, USB-C cable in the box. Ten thousand
        milliamp-hours at 3.7V is about 37Wh. Orbit covers a day. This covers the day you miss the
        socket. I do not dropship it. The card is affiliate. Approx. UK price is on the card —
        Amazon’s live checkout may differ.
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
      <h2>FlightBrick 100 is a wall charger, not a bank</h2>
      <p>
        <ShopLink slug="flightbrick-100">FlightBrick 100</ShopLink> is Anker’s 100W 3-port GaN with
        folding UK pins and a live wattage display. It is not a power bank. It does not fly as a
        spare battery because it is a mains brick. Pack it if the hotel or the lounge has a socket
        you want to empty into the laptop and the bank at once. Do not confuse it with cabin
        battery limits. The limit is for cells you carry charged, not for a plug.
      </p>
      <AmazonPick asin={AMAZON_PICK_ASINS.flightbrick100} />
      <h2>How I would decide</h2>
      <ul>
        <li>Phone only, magnetic, one day: Orbit Mag.</li>
        <li>Phone, a missed socket, FaceTime on a stand: MagDeck 10.</li>
        <li>A long delay and a 30W top-up: Anker Zolo 20K.</li>
        <li>Need the wall as well: FlightBrick 100 next to the bank, not instead of it.</li>
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
      <h2>Second Window 16 — the panel I would pack</h2>
      <p>
        <ShopLink slug="second-window-16">Second Window 16</ShopLink> is the{" "}
        <AmazonText asin={AMAZON_PICK_ASINS.secondWindow16}>ARZOPA Z1FC</AmazonText>
        : 16.1 inch FHD 144Hz, 106% sRGB, HDR, USB-C plug-and-play or Mini HDMI, kickstand, slim
        enough to sit beside the laptop. Mid-range, not OLED luxury. Your machine needs a
        full-featured USB-C port for single-cable video. Sleeve the panel so it does not share
        scratches with the bricks. I do not hold a panel. The card is affiliate. Approx. UK price
        is on the card — Amazon’s live checkout may differ. The charger, riser, mouse, and cable
        that sit around this panel are on{" "}
        <GuideLink slug="travel-desk">what I'd pack for a desk away from home</GuideLink>
        .
      </p>
      <AmazonPick asin={AMAZON_PICK_ASINS.secondWindow16} />
      <h2>The rest of the kit</h2>
      <p>
        <ShopLink slug="runway-riser">Runway Riser</ShopLink> is UGREEN’s fold-flat aluminium
        stand: five heights, a carry pouch, roughly 8–17.3 inch machines. Raise the laptop to
        match the portable panel. Working flat on a kitchen table is how trips get expensive in
        physio.
      </p>
      <AmazonPick asin={AMAZON_PICK_ASINS.runwayRiser} />
      <p>
        <ShopLink slug="twin-lead-240">Twin Lead 240</ShopLink> is Anker’s 240W-rated right-angle
        USB-C 2-pack — braided, six feet, 90-degree ends. One lead for the panel if the laptop can
        do single-cable video. One leftover for the brick. A tired 60W cable is how a 16-inch
        panel becomes a black rectangle.
      </p>
      <AmazonPick asin={AMAZON_PICK_ASINS.twinLead240} />
      <p>
        <ShopLink slug="cabin-cursor">Cabin Cursor</ShopLink> is the MX Master 3S in graphite.
        Quiet clicks for a hotel call, MagSpeed for the sheet that now has room to exist, Easy-Switch
        across machines. Trackpads survive short flights. Two screens and a spreadsheet do not.
        I do not dropship Logitech.
      </p>
      <AmazonPick asin={AMAZON_PICK_ASINS.cabinCursor} />
      <h2>How I would decide</h2>
      <ul>
        <li>
          One extra window that packs: Second Window 16. Full travel-desk kit:{" "}
          <GuideLink slug="travel-desk">desk away from home</GuideLink>.
        </li>
        <li>Laptop still flat on the table: add Runway Riser first.</li>
        <li>USB-C video works: Twin Lead 240, one cable, done.</li>
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
