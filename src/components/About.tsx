import { siteContent } from "@/lib/content";
import Reveal from "./Reveal";

export default function About() {
  const { about } = siteContent;

  return (
    <section id="about" className="border-b border-line">
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-subtle">
              {about.kicker}
            </p>
          </Reveal>

          <div className="lg:col-span-9">
            <Reveal>
              <h2 className="max-w-[22ch] text-3xl font-semibold leading-[1.2] tracking-tight md:text-5xl">
                {about.statement}
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-8 max-w-[62ch] text-lg text-muted">{about.body}</p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
