"use client";

import { useState } from "react";
import { site } from "@/content/site";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");

  return (
    <form
      className="glass rounded-[2rem] p-6 sm:p-8"
      onSubmit={async (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const name = String(data.get("name") ?? "");
        const email = String(data.get("email") ?? "");
        const message = String(data.get("message") ?? "");
        try {
          const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, message }),
          });
          if (!res.ok) throw new Error("fail");
          const payload = (await res.json()) as { mailto?: string };
          if (payload.mailto) window.location.href = payload.mailto;
          setStatus("sent");
        } catch {
          const mailto = `mailto:${site.person.email}?subject=${encodeURIComponent(`Portfolio note from ${name}`)}&body=${encodeURIComponent(message + "\n\n" + email)}`;
          window.location.href = mailto;
          setStatus("error");
        }
      }}
    >
      <label className="block text-sm">
        Name
        <input
          required
          name="name"
          className="mt-2 w-full rounded-xl border border-line bg-transparent px-3 py-3 outline-none focus:border-accent"
        />
      </label>
      <label className="mt-4 block text-sm">
        Email
        <input
          required
          type="email"
          name="email"
          className="mt-2 w-full rounded-xl border border-line bg-transparent px-3 py-3 outline-none focus:border-accent"
        />
      </label>
      <label className="mt-4 block text-sm">
        How can I help your team?
        <textarea
          required
          name="message"
          rows={5}
          className="mt-2 w-full rounded-xl border border-line bg-transparent px-3 py-3 outline-none focus:border-accent"
        />
      </label>
      <button type="submit" className="btn-primary mt-6 rounded-full px-5 py-3 text-sm font-semibold">
        Send
      </button>
      {status !== "idle" && (
        <p className="mt-3 text-sm text-muted">Your mail client should open — if it doesn’t, email {site.person.email} directly.</p>
      )}
    </form>
  );
}
