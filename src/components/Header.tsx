"use client";

import { useState } from "react";
import Image from "next/image";
import { siteContent } from "@/lib/content";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { nav } = siteContent;

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-6 py-3 md:px-10">
        <a href="#top" className="flex items-center gap-2" aria-label={`${nav.brand} — მთავარი`}>
          <Image
            src="/brand/skillup-mark.png"
            alt={`${nav.brand} ლოგო`}
            width={148}
            height={92}
            priority
            className="h-8 w-auto object-contain"
          />
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="მთავარი ნავიგაცია">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-fg"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a href={siteContent.contact.phoneHref} className="text-sm text-muted hover:text-fg">
            {siteContent.contact.phone}
          </a>
          <a
            href="#contact"
            className="rounded-full bg-fg px-5 py-2.5 text-sm font-semibold text-bg transition-opacity hover:opacity-85"
          >
            {nav.cta}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-line lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "მენიუს დახურვა" : "მენიუს გახსნა"}
        >
          <span className="relative block h-3.5 w-4">
            <span
              className={`absolute left-0 top-0 h-px w-4 bg-fg transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span
              className={`absolute left-0 top-[7px] h-px w-4 bg-fg transition-opacity ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`absolute left-0 top-3.5 h-px w-4 bg-fg transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="border-t border-line px-6 py-4 lg:hidden"
          aria-label="მობილური ნავიგაცია"
        >
          <ul className="flex flex-col gap-1">
            {nav.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 text-base text-muted hover:text-fg"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-3 block rounded-full bg-fg px-5 py-3 text-center text-sm font-semibold text-bg"
          >
            {nav.cta}
          </a>
        </nav>
      )}
    </header>
  );
}
