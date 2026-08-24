import { siteContent } from "@/lib/content";
import Reveal from "./Reveal";

export default function Experience() {
  const { experience } = siteContent;

  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-subtle">
                {experience.kicker}
              </p>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="mt-4 max-w-[16ch] text-3xl font-extrabold leading-[1.1] tracking-tight md:text-5xl">
                {experience.title}
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 max-w-[46ch] text-lg text-muted">{experience.body}</p>
            </Reveal>
          </div>

          {/* Connected fact list — visually distinct from the curriculum's
              numbered rows and the course's spec table. */}
          <div className="lg:col-span-7">
            <ul className="relative border-l border-line pl-8">
              {experience.facts.map((fact, i) => (
                <Reveal key={fact.title} delay={i * 70} as="li" className="relative pb-10 last:pb-0">
                  <span
                    className="absolute -left-[calc(2rem+4px)] top-1.5 h-2 w-2 rounded-full"
                    style={{ background: "var(--gradient-brand)" }}
                  />
                  <h3 className="text-lg font-semibold text-fg">{fact.title}</h3>
                  <p className="mt-1.5 max-w-[50ch] text-muted">{fact.description}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
