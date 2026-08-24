import { siteContent } from "@/lib/content";
import Reveal from "./Reveal";

export default function FAQ() {
  const { faq } = siteContent;

  return (
    <section id="faq" className="border-b border-line bg-surface">
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-subtle">
                {faq.kicker}
              </p>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="mt-4 max-w-[14ch] text-3xl font-extrabold leading-[1.1] tracking-tight md:text-5xl">
                {faq.title}
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <div className="divide-y divide-line border-y border-line">
              {faq.items.map((item, i) => (
                <Reveal key={item.q} delay={i * 40}>
                  <details className="group py-5">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-base font-semibold text-fg marker:content-none md:text-lg">
                      {item.q}
                      <span className="shrink-0 text-xl font-light text-subtle transition-transform group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 max-w-[62ch] text-muted">{item.a}</p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
