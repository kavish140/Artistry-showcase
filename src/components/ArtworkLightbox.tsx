import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import { artistByName, type Work } from "@/lib/works";

type Props = {
  works: Work[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

export function ArtworkLightbox({ works, index, onClose, onNavigate }: Props) {
  const open = index !== null;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate((index! + 1) % works.length);
      if (e.key === "ArrowLeft") onNavigate((index! - 1 + works.length) % works.length);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, index, works.length, onClose, onNavigate]);

  if (!open) return null;
  const work = works[index!];
  const artist = artistByName(work.artist);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${work.title} by ${work.artist}`}
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-ink/92 px-4 py-6 backdrop-blur-sm sm:items-center sm:px-8"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute right-5 top-5 rounded-full border border-paper/25 p-2.5 text-paper/80 transition-colors hover:border-paper hover:text-paper"
      >
        <X className="size-4" />
      </button>

      <button
        aria-label="Previous work"
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((index! - 1 + works.length) % works.length);
        }}
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border border-paper/20 p-3 text-paper/70 transition-colors hover:border-paper hover:text-paper sm:left-5"
      >
        <ChevronLeft className="size-5" />
      </button>
      <button
        aria-label="Next work"
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((index! + 1) % works.length);
        }}
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-paper/20 p-3 text-paper/70 transition-colors hover:border-paper hover:text-paper sm:right-5"
      >
        <ChevronRight className="size-5" />
      </button>

      <div
        onClick={(e) => e.stopPropagation()}
        className="mt-10 grid w-full max-w-6xl gap-6 sm:mt-0 sm:gap-8 lg:grid-cols-[1.35fr_1fr] lg:items-center"
      >
        {/* Image — capped at 50vh on mobile so detail panel is always visible */}
        <div className={`${work.tint} rounded-sm`}>
          <img
            src={work.image}
            alt={`${work.title} by ${work.artist}`}
            className="max-h-[50vh] w-full rounded-sm object-contain shadow-[0_40px_120px_-40px_rgba(0,0,0,0.8)] sm:max-h-[78vh]"
          />
        </div>

        <div className="text-paper">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-terracotta">
            Work {index! + 1} of {works.length}
          </p>
          <h3 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            {work.title}
          </h3>
          <p className="mt-2 text-lg text-paper/70">
            {work.artist} · {work.medium}, {work.year}
          </p>

          <p className="mt-6 max-w-md leading-relaxed text-paper/65">{work.story}</p>

          <dl className="mt-8 grid gap-x-8 gap-y-4 border-t border-paper/15 pt-6 sm:grid-cols-2">
            {[
              ["Dimensions", work.dimensions],
              ["Framing", work.framing],
              ["Edition", work.edition],
              ["Price", work.price],
            ].map(([label, value]) => (
              <div key={label}>
                <dt className="text-[10px] uppercase tracking-[0.2em] text-paper/45">{label}</dt>
                <dd className="mt-1 text-sm text-paper/90">{value}</dd>
              </div>
            ))}
          </dl>

          {artist ? (
            <div className="mt-8 flex items-center gap-4 border-t border-paper/15 pt-6">
              <img
                src={artist.image}
                alt={`Portrait of ${artist.name}`}
                className="size-14 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-semibold">
                  {artist.name} · <span className="text-paper/55">{artist.city}</span>
                </p>
                <p className="mt-0.5 max-w-xs text-sm leading-relaxed text-paper/60">
                  {artist.blurb}
                </p>
              </div>
            </div>
          ) : null}

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#enquire"
              onClick={onClose}
              className="rounded-full bg-terracotta px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-paper hover:text-ink"
            >
              Inquire about this work
            </a>
            <span className="text-xs text-paper/40">Esc to close · ← → to browse</span>
          </div>
        </div>
      </div>
    </div>
  );
}
