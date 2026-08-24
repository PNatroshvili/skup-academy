import { siteContent } from "@/lib/content";
import Reveal from "./Reveal";

export default function StudentWork() {
  const { studentWork } = siteContent;

  // Asymmetric placeholder grid — same rhythm the real gallery will use
  // once portfolio pieces are supplied, sized/positioned intentionally
  // rather than as identical repeated cards.
  const frames = [
    "md:col-span-7 md:row-span-2 aspect-[4/3]",
    "md:col-span-5 aspect-[16/10]",
    "md:col-span-5 aspect-[16/10]",
  ];

  return (
    <section id="work" className="border-b border-line bg-surface">
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-subtle">
                {studentWork.kicker}
              </p>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-5xl">
                {studentWork.title}
              </h2>
            </Reveal>
          </div>
        </div>

        <Reveal delay={120}>
          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-12">
            {frames.map((cls, i) => (
              <div
                key={i}
                className={`dot-grid flex items-center justify-center rounded-xl border border-dashed border-line-strong opacity-70 ${cls}`}
              >
                <span className="text-xs uppercase tracking-[0.14em] text-subtle">
                  მალე
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={180}>
          <p className="mt-8 max-w-[56ch] text-sm italic text-subtle">
            {studentWork.placeholderNote}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
