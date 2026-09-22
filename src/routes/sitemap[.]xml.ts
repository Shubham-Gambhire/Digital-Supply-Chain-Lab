import { createFileRoute } from "@tanstack/react-router";
import { getRouterInstance } from "@tanstack/react-start";
import { sitemapPathForLocation, sitemapStaticPaths, sitemapXML, isSitemapRouteIncluded, type SitemapEntry } from "@/lib/sitemap";
import { projects } from "@/data/projects.js";
import { blogPosts } from "@/data/blog.js";

const BASE_URL = "https://digitalsupplychainlab.com";

export const Route = createFileRoute("/sitemap.xml")({
  staticData: { sitemap: false },
  server: {
    handlers: {
      GET: async () => {
        const router = await getRouterInstance();
        const entries: SitemapEntry[] = sitemapStaticPaths(router).map((path) => ({ path }));

        const projectRouteId = "/projects_/$id/";
        if (isSitemapRouteIncluded(router.routesById[projectRouteId])) {
          for (const project of projects) {
            const location = router.buildLocation({
              to: "/projects/$id",
              params: { id: project.id },
              search: () => ({}),
              hash: "",
            });
            const path = sitemapPathForLocation(router, location, projectRouteId);
            if (path) entries.push({ path });
          }
        }

        const blogRouteId = "/blog/$id";
        if (isSitemapRouteIncluded(router.routesById[blogRouteId])) {
          for (const post of blogPosts) {
            const location = router.buildLocation({
              to: "/blog/$id",
              params: { id: post.id },
              search: () => ({}),
              hash: "",
            });
            const path = sitemapPathForLocation(router, location, blogRouteId);
            if (path) entries.push({ path, lastmod: post.publishedAt });
          }
        }

        if (entries.length === 0) {
          return new Response(
            'No pages are included in this sitemap. Check route decisions and ancestor exclusions.',
            { status: 404, headers: { "Cache-Control": "no-store" } },
          );
        }
        return new Response(sitemapXML(BASE_URL, entries), {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
