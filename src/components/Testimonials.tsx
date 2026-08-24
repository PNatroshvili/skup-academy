import { siteContent } from "@/lib/content";
import Reveal from "./Reveal";

export default function Testimonials() {
  const { testimonials } = siteContent;

  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-subtle">
                {testimonials.kicker}
              </p>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-5xl">
                {testimonials.title}
              </h2>
            </Reveal>
          </div>
          <Reveal delay={100}>
            <p className="text-sm italic text-subtle">{testimonials.placeholderNote}</p>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 border-t border-line pt-10 md:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <Reveal key={i} delay={i * 60}>
              <span className="text-brand-gradient text-4xl font-serif leading-none" aria-hidden>
                &ldquo;
              </span>
              <p className="mt-3 text-sm text-subtle">ადგილი რეალური შეფასებისთვის.</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
