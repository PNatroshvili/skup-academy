import { siteContent } from "@/lib/content";
import Reveal from "./Reveal";

export default function Course() {
  const { course } = siteContent;

  return (
    <section id="course" className="border-b border-line bg-surface">
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-subtle">
            {course.kicker}
          </p>
        </Reveal>

        <div className="mt-6 grid grid-cols-1 gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal delay={60}>
              <h2 className="text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
                {course.title}
              </h2>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-5 flex flex-wrap gap-2">
                {course.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-line-strong px-3.5 py-1.5 text-xs font-semibold text-muted"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-7 max-w-[56ch] text-lg text-muted">{course.description}</p>
            </Reveal>

            {/* Spec list — editorial, not a card grid */}
            <Reveal delay={200}>
              <dl className="mt-10 divide-y divide-line border-y border-line">
                {course.specs.map((spec) => (
                  <div key={spec.label} className="flex items-baseline justify-between gap-6 py-4">
                    <dt className="text-sm text-subtle">{spec.label}</dt>
                    <dd className="text-right text-sm font-semibold text-fg">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={240}>
              <ul className="mt-10 space-y-3">
                {course.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] text-muted">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ background: "var(--gradient-brand)" }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Pricing block */}
          <div className="lg:col-span-5">
            <Reveal delay={100} className="h-full">
              <div className="flex h-full flex-col justify-between rounded-2xl border border-line-strong p-8">
                <div className="space-y-8">
                  {course.pricing.map((tier) => (
                    <div key={tier.label} className="border-b border-line pb-8 last:border-b-0 last:pb-0">
                      <p className="text-sm text-muted">{tier.label}</p>
                      <p className="mt-1 text-xs text-subtle">{tier.duration}</p>
                      <div className="mt-3 flex items-baseline gap-2">
                        <span className="text-5xl font-extrabold tracking-tight">{tier.price}</span>
                        <span className="text-2xl font-semibold text-muted">{tier.currency}</span>
                      </div>
                      <p className="mt-1 text-xs font-medium text-blue">{tier.note}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <p className="text-xs uppercase tracking-[0.14em] text-subtle">
                    {course.payment.label}
                  </p>
                  <p className="mt-2 text-sm text-muted">{course.payment.options.join(" · ")}</p>

                  <a
                    href={course.cta.href}
                    className="mt-6 block rounded-full px-6 py-3.5 text-center text-sm font-semibold text-bg"
                    style={{ background: "var(--gradient-brand)" }}
                  >
                    {course.cta.label}
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
