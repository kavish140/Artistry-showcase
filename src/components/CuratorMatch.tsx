import { useState } from "react";
import { Send } from "lucide-react";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const hints = [
  "Calm, coastal works for a bright bedroom",
  "Bold colour and figurative painting, under £30k",
  "Something minimal for a small hallway or entry",
];

export function CuratorMatch({ onOpenWork: _onOpenWork }: { onOpenWork: (index: number) => void }) {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleHint = (hint: string) => {
    setForm((prev) => ({ ...prev, message: hint }));
  };

  const mailtoHref = () => {
    const subject = encodeURIComponent("Private Viewing Enquiry — Atelier Marr");
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    );
    return `mailto:hello@ateliermarr.co?subject=${subject}&body=${body}`;
  };

  const isValid = form.name.trim().length > 0 && form.email.includes("@") && form.message.trim().length >= 3;

  return (
    <section id="curator" className="mx-auto max-w-7xl px-6 py-14 sm:py-24 lg:px-10">
      <div className="rounded-sm bg-paper/70 p-5 outline-1 -outline-offset-1 outline-ink/10 sm:p-8 lg:p-14">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          {/* Left — form */}
          <div>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-terracotta">
              Private viewings
            </p>
            <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              Tell us what you're looking for
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-ink/65">
              Describe the room, mood, or subject you have in mind. Our advisors will respond within
              one working day with works worth seeing first.
            </p>

            <form
              className="mt-8 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = mailtoHref();
              }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="curator-name" className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/50">
                    Name
                  </label>
                  <input
                    id="curator-name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full rounded-sm border border-ink/15 bg-paper px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink/35 focus:border-ink/40"
                  />
                </div>
                <div>
                  <label htmlFor="curator-email" className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/50">
                    Email
                  </label>
                  <input
                    id="curator-email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full rounded-sm border border-ink/15 bg-paper px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink/35 focus:border-ink/40"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="curator-message" className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/50">
                  What are you looking for?
                </label>
                <textarea
                  id="curator-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  maxLength={600}
                  placeholder="I love quiet, layered abstraction — soft greys and blues for a light-filled living room…"
                  className="w-full resize-none rounded-sm border border-ink/15 bg-paper px-4 py-3.5 text-sm leading-relaxed text-ink outline-none transition-colors placeholder:text-ink/35 focus:border-ink/40"
                />
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <button
                  type="submit"
                  disabled={!isValid}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-terracotta disabled:opacity-40 sm:w-auto"
                >
                  <Send className="size-4" />
                  Send enquiry
                </button>
                <span className="text-xs text-ink/40">Opens your email client</span>
              </div>
            </form>

            {/* Hint chips */}
            <div className="mt-6 flex flex-wrap gap-2">
              <p className="w-full text-[11px] uppercase tracking-[0.18em] text-ink/40">Try a prompt:</p>
              {hints.map((hint) => (
                <button
                  key={hint}
                  type="button"
                  onClick={() => handleHint(hint)}
                  className="rounded-full border border-ink/15 px-4 py-2 text-[13px] text-ink/60 transition-colors hover:border-ink/40 hover:text-ink"
                >
                  {hint}
                </button>
              ))}
            </div>
          </div>

          {/* Right — advisory panel */}
          <div className="flex flex-col justify-between gap-10 rounded-sm bg-ink px-7 py-8 text-paper lg:px-10 lg:py-10">
            <div>
              <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-terracotta">
                How it works
              </p>
              <ul className="space-y-6 text-sm leading-relaxed text-paper/70">
                <li className="flex gap-3">
                  <span className="mt-0.5 font-display text-xl font-semibold text-terracotta">1</span>
                  <span>Send your enquiry — tell us the room, mood, or budget you have in mind.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 font-display text-xl font-semibold text-terracotta">2</span>
                  <span>Our advisor responds within one working day with a short-list of works worth seeing first.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 font-display text-xl font-semibold text-terracotta">3</span>
                  <span>Arrange a private viewing — in our London space or via a documented condition report for remote collection.</span>
                </li>
              </ul>
            </div>

            <div className="border-t border-paper/15 pt-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-terracotta">
                Contact
              </p>
              <p className="mt-3 font-display text-xl font-semibold">Atelier Marr</p>
              <p className="mt-1 text-sm text-paper/60">14 Foundry Lane, London</p>
              <a
                href="mailto:hello@ateliermarr.co"
                className="mt-2 inline-block text-sm text-paper/70 transition-colors hover:text-paper"
              >
                hello@ateliermarr.co
              </a>
              <p className="mt-4 text-xs text-paper/40">
                Mon – Fri · 10:00 – 18:00 GMT
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
