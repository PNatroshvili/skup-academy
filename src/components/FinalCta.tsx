import { siteContent } from "@/lib/content";
import Reveal from "./Reveal";

export default function FinalCta() {
  const { finalCta, contact } = siteContent;

  return (
    <section id="contact" className="relative overflow-hidden border-b border-line">
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-25" />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-[60%] -translate-x-1/2 rounded-full opacity-20 blur-3xl"
        style={{ background: "var(--gradient-brand)" }}
      />

      <div className="relative mx-auto max-w-[1000px] px-6 py-24 text-center md:px-10 md:py-32">
        <Reveal>
          <h2 className="text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
            {finalCta.title}
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="mx-auto mt-6 max-w-[46ch] text-lg text-muted">{finalCta.body}</p>
        </Reveal>

        <Reveal delay={140}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={finalCta.primaryCta.href}
              className="rounded-full px-8 py-4 text-sm font-semibold text-bg transition-transform hover:scale-[1.02]"
              style={{ background: "var(--gradient-brand)" }}
            >
              {finalCta.primaryCta.label} · {contact.phone}
            </a>
            <a
              href={finalCta.secondaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-line-strong px-8 py-4 text-sm font-semibold text-fg transition-colors hover:border-fg"
            >
              {finalCta.secondaryCta.label}
            </a>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-8 text-sm text-subtle">{contact.city}</p>
        </Reveal>
      </div>
    </section>
  );
}
