import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { AffiliateLink } from "@/components/affiliate-link";
import { AMAZON_PICK_ASINS, affiliateProduct } from "@/lib/catalog";
import type { Guide } from "@/lib/guides";

function ShopLink({ slug, children }: { slug: string; children: ReactNode }) {
  return (
    <Link to="/shop/$slug" params={{ slug }} className="text-clay hover:text-clay-dark">
      {children}
    </Link>
  );
}

function AmazonPick({ asin }: { asin: string }) {
  return (
    <p>
      <AffiliateLink
        href={affiliateProduct(asin)}
        label="Amazon UK"
        className="mt-1 w-full sm:w-auto"
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
        train. I do not scrape Amazon. The button below is a tagged search. Read the wattage on the
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
        charts this month is a power bank that ships with a cable, a foldable GaN that does not stab
        the sleeve, and a hub you can leave on a hotel desk. That is the pack. Everything else is
        a second bag.
      </p>
      <h2>Anker Zolo 20K, 30W</h2>
      <p>
        Twenty thousand milliamp-hours and a 30W USB-C that will top a phone twice and still have
        leftover for a laptop sip. The cable is in the box. That is the whole pitch. I do not
        dropship Anker. If you need a bank this week, this is the tagged listing.
      </p>
      <AmazonPick asin="B0CZ9LH53B" />
      <h2>UGREEN Nexode 65W foldable</h2>
      <p>
        A foldable 65W GaN is the brick I would actually pack if I were buying tonight and flying
        tomorrow. Pins fold. Two ports. It is the Amazon version of the job{" "}
        <ShopLink slug="arc-gan">Arc 65W GaN</ShopLink> does in the bay — wait the 6–11 days from
        Dongguan if you want the one I put a name on. Need it before the train: tap the listing.
      </p>
      <AmazonPick asin="B0B7N4DX1Z" />
      <h2>Belkin BoostCharge Pro 70W travel</h2>
      <p>
        Seventy watts, travel-sized, a name a hotel desk has seen before. If you want a UK return
        window and a brand that will still exist next year, this is the honest click. Do not buy it
        because the title says Pro. Buy it because the wattage and the fold match the bag.
      </p>
      <AmazonPick asin="B0FK587ZZ6" />
      <h2>Baseus PicoGo AM52, Qi2.2</h2>
      <p>
        A magnetic puck for the phone that still pretends it does not need a cable. Qi2.2, small,
        airline-safe if the listing capacity stays under the cabin limit.{" "}
        <ShopLink slug="orbit-bank">Orbit Mag</ShopLink> is the bay version — 5,000 mAh, snaps,
        leaves. This Baseus is the affiliate aisle if you need it on a Tuesday.
      </p>
      <AmazonPick asin="B0G4CHTD53" />
      <h2>ABLEWE 8-in-1 hub</h2>
      <p>
        Hotel desk, one cable, HDMI that should hit 4K60 if the listing is not lying. Eight ports
        is enough. <ShopLink slug="trace-hub">Trace Hub</ShopLink> is the one I dropship —
        aluminum, 100W passthrough, I actually tested 4K60. ABLEWE is the next-day stand-in.
      </p>
      <AmazonPick asin="B0DN9F245H" />
      <h2>The affiliate bit, once</h2>
      <p>
        Those buttons are tagged Amazon UK affiliate links. Al may earn a commission. Read the
        listing, not the title. I do not scrape prices and I do not invent stock.
      </p>
      <p>
        If you want the versions I put a name on, the bay has{" "}
        <ShopLink slug="arc-gan">Arc</ShopLink>,{" "}
        <ShopLink slug="orbit-bank">Orbit Mag</ShopLink>, and{" "}
        <ShopLink slug="trace-hub">Trace</ShopLink>. Lead times printed. No surprise warehouse.
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
      <h2>Second Window 16 — dual-screen without a second bag</h2>
      <p>
        One laptop panel means Slack eating half the spreadsheet.{" "}
        <ShopLink slug="second-window-16">Second Window 16</ShopLink> is the ARZOPA Z1FC: 16.1 inch
        FHD 144Hz, USB-C plug-and-play or Mini HDMI, kickstand, slim enough to sit beside the
        laptop. Mid-range, not OLED luxury. Your machine needs a full-featured USB-C port for
        single-cable video. Sleeve the panel so it does not share scratches with the bricks.
      </p>
      <AmazonPick asin={AMAZON_PICK_ASINS.secondWindow16} />
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
        listing, not the title. I do not scrape prices and I do not invent stock.
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

const bodies: Record<string, () => ReactNode> = {
  "65w-gan-charger-travel": GanBody,
  "anc-headphones-vs-earbuds-commute": AncBody,
  "dropship-lead-times": LeadTimeBody,
  "packing-power-september": PackingPowerBody,
  "travel-desk-september": TravelDeskBody,
  "after-summer-desk-reset": AfterSummerBody,
};

export function GuideArticle({ guide }: { guide: Guide }) {
  const Body = bodies[guide.slug];
  if (!Body) return null;
  return (
    <div className="guide-prose space-y-5 text-base leading-relaxed text-stone [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-medium [&_h2]:tracking-tight [&_h2]:text-ink [&_p]:text-pretty [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
      <Body />
    </div>
  );
}
