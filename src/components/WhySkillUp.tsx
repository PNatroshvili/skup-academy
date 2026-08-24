import { siteContent } from "@/lib/content";
import Reveal from "./Reveal";

const spans = ["lg:col-span-7", "lg:col-span-5", "lg:col-span-5", "lg:col-span-7"];
const letters = ["A", "B", "C", "D"];

export default function WhySkillUp() {
  const { whySkillUp } = siteContent;

  return (
    <section className="border-b border-line bg-surface">
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-subtle">
            {whySkillUp.kicker}
          </p>
        </Reveal>
        <Reveal delay={60}>
          <h2 className="mt-4 max-w-[20ch] text-3xl font-extrabold leading-[1.1] tracking-tight md:text-5xl">
            {whySkillUp.title}
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-x-6 gap-y-12 lg:grid-cols-12">
          {whySkillUp.points.map((point, i) => (
            <Reveal key={point.title} delay={i * 70} className={spans[i]}>
              <div className="flex gap-5">
                <span className="text-sm font-bold text-subtle" aria-hidden>
                  {letters[i]}
                </span>
                <div>
                  <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
                    {point.title}
                  </h3>
                  <p className="mt-2.5 max-w-[48ch] text-muted">{point.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
