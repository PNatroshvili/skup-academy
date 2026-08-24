import Image from "next/image";
import { siteContent } from "@/lib/content";
import Reveal from "./Reveal";

export default function Hero() {
  const { hero, nav } = siteContent;

  return (
    <section id="top" className="relative overflow-hidden border-b border-line">
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-[0.35] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />

      <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-6 pb-16 pt-14 md:px-10 md:pb-24 md:pt-20 lg:grid-cols-12 lg:gap-6">
        {/* Left — statement */}
        <div className="lg:col-span-7">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-subtle">
              {hero.eyebrow}
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-5 text-[13vw] font-extrabold leading-[0.95] tracking-tight sm:text-[9vw] md:text-[6.4vw] lg:text-[5.4vw]">
              {hero.headline[0]} <span className="text-brand-gradient">{hero.headline[1]}</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-7 max-w-[46ch] text-lg text-muted md:text-xl">{hero.lede}</p>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href={hero.primaryCta.href}
                className="rounded-full px-7 py-3.5 text-sm font-semibold text-bg transition-transform hover:scale-[1.02]"
                style={{ background: "var(--gradient-brand)" }}
              >
                {hero.primaryCta.label}
              </a>
              <a
                href={hero.secondaryCta.href}
                className="rounded-full border border-line-strong px-7 py-3.5 text-sm font-semibold text-fg transition-colors hover:border-fg"
              >
                {hero.secondaryCta.label}
              </a>
            </div>
          </Reveal>

          <Reveal delay={280}>
            <dl className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-line pt-6">
              {hero.meta.map((item) => (
                <div key={item.label}>
                  <dt className="text-[11px] uppercase tracking-[0.14em] text-subtle">
                    {item.label}
                  </dt>
                  <dd className="mt-1.5 text-sm font-medium text-fg">{item.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        {/* Right — brand panel */}
        <div className="lg:col-span-5">
          <Reveal delay={140} className="h-full">
            <div className="relative flex h-full min-h-[320px] flex-col justify-between overflow-hidden rounded-2xl border border-line-strong bg-surface p-8">
              <div className="dot-grid pointer-events-none absolute inset-0 opacity-40" />
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-25 blur-3xl"
                style={{ background: "var(--gradient-brand)" }}
              />

              <div className="relative flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-[0.14em] text-subtle">
                  {nav.brand} · {nav.brandKa}
                </span>
                <span className="h-2 w-2 rounded-full" style={{ background: "var(--gradient-brand)" }} />
              </div>

              <div className="relative flex flex-1 items-center justify-center py-10">
                <Image
                  src="/brand/skillup-mark.png"
                  alt="SKILL UP ლოგო"
                  width={340}
                  height={210}
                  className="w-full max-w-[300px] object-contain"
                />
              </div>

              <p className="relative border-t border-line pt-5 text-sm text-muted">
                გრაფიკული დიზაინის აკადემია, თბილისი — Photoshop და Illustrator ერთ კურსში.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
