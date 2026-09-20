import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef, useEffect } from "react";
import { Maximize2, Menu, X } from "lucide-react";

import { ArtworkLightbox } from "@/components/ArtworkLightbox";
import { CuratorMatch } from "@/components/CuratorMatch";
import { artists, heroImage, works } from "@/lib/works";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Atelier Marr — Contemporary Painting, Curated" },
      {
        name: "description",
        content:
          "Atelier Marr represents a small circle of living painters and places their work into considered collections. A showcase site by Sitenova.",
      },
      { property: "og:title", content: "Atelier Marr — Contemporary Painting, Curated" },
      {
        property: "og:description",
        content:
          "A curated house of living painters. Browse the gallery, meet the artists and arrange a private viewing. Showcase by Sitenova.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Atelier Marr — Contemporary Painting, Curated" },
      {
        name: "twitter:description",
        content:
          "A curated house of living painters. Browse the gallery and arrange a private viewing. Showcase by Sitenova.",
      },
    ],
  }),
  component: Index,
});

const navLinks = [
  { href: "#gallery", label: "Collection" },
  { href: "#artists", label: "Artists" },
  { href: "#curator", label: "Private viewings" },
  { href: "#enquire", label: "Inquire" },
];

const galleryTabs = ["All", "Abstract", "Figurative", "Minimal"];

function Index() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("All");
  const tabsRef = useRef<HTMLDivElement>(null);
  const activeTabRef = useRef<HTMLButtonElement>(null);

  // Scroll active tab into view on mount and tab change
  useEffect(() => {
    activeTabRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, [activeTab]);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const handler = (e: MediaQueryListEvent) => { if (e.matches) setMenuOpen(false); };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const filteredWorks = activeTab === "All"
    ? works
    : works.filter((w) => w.mood.some((m) => m.toLowerCase() === activeTab.toLowerCase()));

  return (
    <div className="mesh-bg min-h-screen font-body text-ink">
      {/* Showcase notice */}
      <div className="bg-ink text-paper">
        <p className="mx-auto max-w-7xl px-6 py-2.5 text-center text-[12px] tracking-wide text-paper/70 lg:px-10">
          This is a design showcase site by <span className="font-semibold text-paper">Sitenova</span>{" "}
          — the gallery, artists, artworks and prices are demonstration content.
        </p>
      </div>

      {/* Nav */}
      <header className="relative mx-auto flex max-w-7xl items-center justify-between px-6 pt-8 lg:px-10">
        <div className="flex items-baseline gap-2">
          <span className="font-display text-2xl font-semibold tracking-tight">Atelier</span>
          <span className="font-display text-2xl font-semibold italic tracking-tight text-terracotta">
            Marr
          </span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-9 text-[13px] font-medium tracking-wide text-ink/70 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-ink">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#enquire"
            className="hidden rounded-full border border-ink/20 px-5 py-2 text-[13px] font-semibold transition-colors hover:bg-ink hover:text-paper md:inline-block"
          >
            Book a viewing
          </a>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="relative flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:bg-ink/5 md:hidden"
          >
            <span
              className={`absolute transition-all duration-200 ${menuOpen ? "rotate-0 opacity-100" : "rotate-90 opacity-0"}`}
            >
              <X className="size-5" />
            </span>
            <span
              className={`absolute transition-all duration-200 ${menuOpen ? "-rotate-90 opacity-0" : "rotate-0 opacity-100"}`}
            >
              <Menu className="size-5" />
            </span>
          </button>
        </div>
      </header>

      {/* Mobile menu drawer */}
      {menuOpen && (
        <div className="mx-auto max-w-7xl px-6 pb-4 pt-2 lg:px-10 md:hidden">
          <nav className="flex flex-col divide-y divide-ink/10 rounded-sm bg-paper/80 shadow-sm outline-1 -outline-offset-1 outline-ink/10 backdrop-blur-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-6 py-4 text-[15px] font-medium text-ink/80 transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#enquire"
              onClick={() => setMenuOpen(false)}
              className="px-6 py-4 text-[15px] font-semibold text-terracotta transition-colors hover:text-terracotta/80"
            >
              Book a viewing →
            </a>
          </nav>
        </div>
      )}

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-10 pt-16 lg:px-10 lg:pt-24">
        <div className="grid items-center gap-y-10 gap-x-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.28em] text-terracotta">
              Contemporary art · Est. 2011
            </p>
            <h1 className="font-display text-4xl font-semibold leading-[0.92] tracking-tight sm:text-5xl lg:text-7xl">
              Art for the life you actually live
            </h1>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-ink/65">
              A curated house of living painters. We represent a small circle of artists and place
              their work into considered collections — one painting at a time.
            </p>
            <div className="mt-9 flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:items-center">
              <a
                href="#gallery"
                className="w-full rounded-full bg-ink px-7 py-3.5 text-center text-sm font-semibold text-paper transition-colors hover:bg-terracotta sm:w-auto"
              >
                Browse the gallery
              </a>
              <a
                href="#curator"
                className="text-center text-sm font-semibold text-ink/80 transition-colors hover:text-ink sm:text-left"
              >
                Arrange a viewing →
              </a>
            </div>
            <div className="mt-12 flex gap-10">
              <div>
                <p className="font-display text-3xl font-semibold">48</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-ink/50">Artists</p>
              </div>
              <div>
                <p className="font-display text-3xl font-semibold">12</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-ink/50">Cities</p>
              </div>
              <div>
                <p className="font-display text-3xl font-semibold">300+</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-ink/50">Placements</p>
              </div>
            </div>
          </div>
          <div className="min-h-[60vh] sm:min-h-[78vh] lg:col-span-7 lg:min-h-0">
            <div className="relative h-full">
              <img
                src={heroImage}
                alt="Large abstract contemporary painting in terracotta, sage and ochre under raking gallery light"
                width={1200}
                height={1408}
                className="aspect-[6/7] w-full rounded-sm object-cover outline-1 -outline-offset-1 outline-black/5"
              />
              <div className="absolute -bottom-6 -left-6 rounded-sm bg-paper px-6 py-5 shadow-[0_20px_50px_-20px_rgba(27,29,34,0.35)]">
                <p className="text-[11px] uppercase tracking-[0.2em] text-ink/45">Now showing</p>
                <p className="mt-1 font-display text-xl font-semibold">Colour Field, 2025</p>
                <p className="mt-0.5 text-sm text-ink/55">A group survey · through 30 June</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured artists */}
      <section id="artists" className="mx-auto max-w-7xl px-6 py-14 sm:py-24 lg:px-10">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-terracotta">
              Featured artists
            </p>
            <h2 className="font-display text-4xl font-semibold tracking-tight lg:text-5xl">
              The painters we represent
            </h2>
          </div>
          <a
            href="#gallery"
            className="hidden text-sm font-semibold text-ink/70 transition-colors hover:text-ink sm:block"
          >
            All 48 artists →
          </a>
        </div>
        <div className="grid gap-y-10 gap-x-6 sm:grid-cols-3 sm:gap-y-14">
          {artists.map((artist) => (
            <div key={artist.name} className="overflow-hidden rounded-sm bg-paper">
              <div className={`${artist.tint} w-full`}>
                <img
                  src={artist.image}
                  alt={`Portrait of ${artist.name} in the studio`}
                  loading="lazy"
                  width={752}
                  height={896}
                  className="aspect-[5/6] w-full object-cover outline-1 -outline-offset-1 outline-black/5"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-xl font-semibold">{artist.name}</h3>
                  <span className="text-xs uppercase tracking-[0.15em] text-ink/45">
                    {artist.city}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">{artist.blurb}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery grid */}
      <section id="gallery" className="mx-auto max-w-7xl px-6 py-14 sm:py-24 lg:px-10">
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-terracotta">
              The gallery
            </p>
            <h2 className="font-display text-4xl font-semibold tracking-tight lg:text-5xl">
              Curated works, ready to collect
            </h2>
            <p className="mt-4 text-sm text-ink/50">
              Select any painting for the full view, dimensions and artist context.
            </p>
          </div>

          {/* Scrollable tab bar */}
          <div className="relative">
            {/* Right-edge fade hint */}
            <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-paper/80 to-transparent sm:hidden" />
            <div
              ref={tabsRef}
              className="flex gap-2 overflow-x-auto pb-1 text-[13px] font-medium [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {galleryTabs.map((tab) => (
                <button
                  key={tab}
                  ref={activeTab === tab ? activeTabRef : null}
                  onClick={() => setActiveTab(tab)}
                  className={`whitespace-nowrap rounded-full px-4 py-2 transition-colors ${
                    activeTab === tab
                      ? "bg-ink text-paper"
                      : "border border-ink/15 text-ink/60 hover:border-ink/30 hover:text-ink"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-y-10 gap-x-6 sm:grid-cols-2 sm:gap-y-14 lg:grid-cols-3">
          {filteredWorks.map((work, i) => (
            <button
              key={work.id}
              onClick={() => setOpenIndex(works.indexOf(work))}
              aria-label={`View ${work.title} by ${work.artist}`}
              className="group overflow-hidden rounded-sm bg-paper text-left"
            >
              <div className={`${work.tint} relative w-full overflow-hidden`}>
                <img
                  src={work.image}
                  alt={`${work.title} by ${work.artist}`}
                  loading={i < 3 ? "eager" : "lazy"}
                  width={800}
                  height={1008}
                  className="aspect-[4/5] w-full object-cover outline-1 -outline-offset-1 outline-black/5 transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <span className="absolute inset-0 flex items-end justify-end bg-ink/0 p-4 opacity-0 transition-all duration-300 group-hover:bg-ink/15 group-hover:opacity-100">
                  <span className="inline-flex items-center gap-2 rounded-full bg-paper px-4 py-2 text-[12px] font-semibold">
                    <Maximize2 className="size-3.5" /> View work
                  </span>
                </span>
              </div>
              <div className="flex items-end justify-between gap-4 p-5">
                <div>
                  <h3 className="font-display text-lg font-semibold">{work.title}</h3>
                  <p className="mt-0.5 text-sm text-ink/55">
                    {work.artist} · {work.medium}, {work.year}
                  </p>
                  <p className="mt-1 text-xs text-ink/40">{work.dimensions}</p>
                </div>
                <p className="whitespace-nowrap font-display text-lg font-semibold">{work.price}</p>
              </div>
            </button>
          ))}
        </div>

        {filteredWorks.length === 0 && (
          <p className="py-16 text-center text-sm text-ink/45">
            No works match this filter yet — check back soon.
          </p>
        )}
      </section>

      {/* Private viewings / Inquiry form */}
      <CuratorMatch onOpenWork={setOpenIndex} />

      {/* CTA band */}
      <section id="enquire" className="mx-auto max-w-7xl px-6 pb-20 lg:px-10">
        <div className="grid items-center gap-10 rounded-sm bg-ink p-6 text-paper sm:p-10 lg:grid-cols-2 lg:px-16 lg:py-20">
          <div>
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-terracotta">
              Collect with confidence
            </p>
            <h2 className="font-display text-4xl font-semibold leading-[1.02] tracking-tight lg:text-5xl">
              Every work ships fully insured and documented.
            </h2>
          </div>
          <div className="lg:text-right">
            <p className="max-w-md text-lg leading-relaxed text-paper/65 lg:ml-auto">
              Our advisors walk you through provenance, condition and placement — in person or by
              appointment. Private viewings available in London.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center lg:justify-end">
              <a
                href="#curator"
                className="w-full rounded-full bg-terracotta px-7 py-3.5 text-center text-sm font-semibold text-paper transition-colors hover:bg-paper hover:text-ink sm:w-auto"
              >
                Arrange a private viewing
              </a>
              <a
                href="mailto:hello@ateliermarr.co"
                className="w-full rounded-full border border-paper/25 px-7 py-3.5 text-center text-sm font-semibold text-paper/80 transition-colors hover:border-paper hover:text-paper sm:w-auto"
              >
                Email directly
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-ink/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-10 sm:flex-row sm:items-center lg:px-10">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-lg font-semibold">Atelier</span>
            <span className="font-display text-lg font-semibold italic text-terracotta">Marr</span>
          </div>
          <p className="text-sm text-ink/50">14 Foundry Lane, London · hello@ateliermarr.co</p>
          <p className="text-xs text-ink/40">
            © 2025 Atelier Marr. All works shown are demonstration content.
          </p>
        </div>
        <div className="border-t border-ink/10">
          <p className="mx-auto max-w-7xl px-6 py-6 text-center text-xs text-ink/45 lg:px-10">
            Made by <span className="font-semibold text-ink/70">Sitenova</span> — a showcase site
            built to demonstrate design only, with no real inventory or transactions.
          </p>
        </div>
      </footer>

      <ArtworkLightbox
        works={works}
        index={openIndex}
        onClose={() => setOpenIndex(null)}
        onNavigate={setOpenIndex}
      />
    </div>
  );
}
