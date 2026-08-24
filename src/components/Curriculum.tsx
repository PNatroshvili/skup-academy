import { siteContent } from "@/lib/content";
import Reveal from "./Reveal";

export default function Curriculum() {
  const { curriculum } = siteContent;

  return (
    <section id="curriculum" className="border-b border-line">
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-subtle">
                {curriculum.kicker}
              </p>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-5xl">
                {curriculum.title}
              </h2>
            </Reveal>
          </div>
        </div>

        <div className="mt-14 divide-y divide-line border-t border-line">
          {curriculum.items.map((item, i) => (
            <Reveal key={item.index} delay={i * 60}>
              <div className="grid grid-cols-1 gap-3 py-8 md:grid-cols-12 md:items-baseline md:gap-6">
                <span
                  className="text-brand-gradient text-3xl font-extrabold tabular-nums md:col-span-2 md:text-4xl"
                  aria-hidden
                >
                  {item.index}
                </span>
                <h3 className="text-xl font-semibold tracking-tight md:col-span-4 md:text-2xl">
                  {item.title}
                </h3>
                <p className="max-w-[52ch] text-muted md:col-span-6">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
