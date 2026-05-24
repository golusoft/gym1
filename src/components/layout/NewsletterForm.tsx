"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [done, setDone] = useState(false);
  return (
    <form
      className="flex flex-col gap-3"
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
        setTimeout(() => setDone(false), 3500);
      }}
    >
      <input
        type="email"
        placeholder="Your email"
        required
        aria-label="Email"
        className="px-4 py-3 rounded-full bg-white/5 border border-white/10 text-sm focus:outline-none focus:border-primary transition"
      />
      <button type="submit" className="btn-primary !py-3">
        {done ? "Subscribed ✓" : "Subscribe"}
      </button>
    </form>
  );
}
