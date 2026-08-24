import type { MetadataRoute } from "next";
import { siteContent } from "@/lib/content";

// Required for `output: export` — otherwise Next treats `new Date()` below
// as request-time and refuses to prerender this route statically.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteContent.meta.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
