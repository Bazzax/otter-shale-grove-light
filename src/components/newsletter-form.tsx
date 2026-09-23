import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CONTACT_EMAIL, FORMSUBMIT_AJAX } from "@/lib/seo";
import { cn } from "@/lib/utils";

type Status = "idle" | "sending" | "success" | "pending" | "error";

export function NewsletterForm({
  source,
  compact = false,
}: {
  source: "footer" | "home" | "faq";
  compact?: boolean;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [detail, setDetail] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (honeypot.trim()) return;
    const trimmed = email.trim();
    if (!trimmed) return;

    setStatus("sending");
    setDetail(null);

    try {
      const response = await fetch(FORMSUBMIT_AJAX, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: name.trim() || "Anonymous",
          email: trimmed,
          _subject: "Flight log signup — Al's AI Drop Ship",
          _template: "table",
          _captcha: "false",
          source,
          message: "Newsletter signup for Al's flight log.",
        }),
      });

      const payload = (await response.json().catch(() => null)) as {
        success?: string | boolean;
        message?: string;
      } | null;

      const message = payload?.message?.toLowerCase() ?? "";
      const ok =
        payload?.success === true ||
        payload?.success === "true" ||
        response.ok;

      if (ok && /activat|confirm|check your email/.test(message)) {
        setStatus("pending");
        setDetail(
          "First hop logged. Al's inbox needs to confirm FormSubmit once — after that, this form lands.",
        );
        return;
      }

      if (ok) {
        setStatus("success");
        setName("");
        setEmail("");
        return;
      }

      setStatus("error");
      setDetail(payload?.message ?? "Signal dropped. Try again, or mail Al directly.");
    } catch {
      setStatus("error");
      setDetail("Telemetry dropped. Mail Al if the form stays silent.");
    }
  }

  if (status === "success") {
    return (
      <p className="text-sm leading-relaxed text-ink" role="status">
        Logged. Al will use this inbox — not a list broker. Unsubscribe by mailing{" "}
        <a href={`mailto:${CONTACT_EMAIL}`} className="text-clay hover:text-clay-dark">
          {CONTACT_EMAIL}
        </a>
        .
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="relative space-y-3" noValidate>
      <div className="sr-only" aria-hidden>
        <label>
          Website
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(event) => setHoneypot(event.target.value)}
          />
        </label>
      </div>

      <div className={cn("grid gap-3", compact ? "grid-cols-1" : "sm:grid-cols-2")}>
        <div>
          <Label htmlFor={`flight-name-${source}`} className="text-dust">
            Name <span className="font-normal">(optional)</span>
          </Label>
          <Input
            id={`flight-name-${source}`}
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            autoComplete="name"
            className="mt-1.5"
          />
        </div>
        <div>
          <Label htmlFor={`flight-email-${source}`} className="text-dust">
            Email
          </Label>
          <Input
            id={`flight-email-${source}`}
            name="email"
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            autoComplete="email"
            inputMode="email"
            className="mt-1.5"
          />
        </div>
      </div>

      <Button type="submit" disabled={status === "sending"} className="w-full sm:w-auto">
        {status === "sending" ? "Filing…" : "Join the flight log"}
      </Button>

      <p className="text-xs leading-relaxed text-dust">
        Affiliate site. No spam. Al emails {CONTACT_EMAIL} via FormSubmit — nothing is stored in a
        CRM. Unsubscribe the same inbox.
      </p>

      {status === "pending" || status === "error" ? (
        <p
          className={cn(
            "text-sm leading-relaxed",
            status === "error" ? "text-clay" : "text-ink",
          )}
          role="status"
        >
          {detail}
        </p>
      ) : null}
    </form>
  );
}
