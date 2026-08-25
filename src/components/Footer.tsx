import Image from "next/image";
import { siteContent } from "@/lib/content";

export default function Footer() {
  const { footer, nav } = siteContent;

  return (
    <footer className="mt-auto">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Image
              src="/brand/skillup-mark.png"
              alt={`${nav.brand} ლოგო`}
              width={229}
              height={100}
              className="h-7 w-auto object-contain"
            />
            <p className="mt-5 max-w-[32ch] text-sm text-muted">{footer.tagline}</p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:col-span-7 md:grid-cols-2">
            {footer.columns.map((col) => (
              <div key={col.title}>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-subtle">
                  {col.title}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-muted transition-colors hover:text-fg"
                        {...(link.href.startsWith("http")
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-line pt-6 text-xs text-subtle md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} SKILL UP · სქილაპ</p>
          <p>skup.ge ოჯახის ნაწილი</p>
        </div>
      </div>
    </footer>
  );
}
