import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import type { Guide } from "@/lib/guides";

function ShopLink({ slug, children }: { slug: string; children: ReactNode }) {
  return (
    <Link to="/shop/$slug" params={{ slug }} className="text-clay hover:text-clay-dark">
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

const bodies: Record<string, () => ReactNode> = {
  "65w-gan-charger-travel": GanBody,
  "anc-headphones-vs-earbuds-commute": AncBody,
  "dropship-lead-times": LeadTimeBody,
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
