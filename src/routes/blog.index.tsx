import { createFileRoute } from "@tanstack/react-router";
import Blog from "@/pages/Blog.jsx";

export const Route = createFileRoute("/blog/")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Blog | Digital Supply Chain Lab" },
      { name: "description", content: "Original articles on supply chain strategy, resilience, planning, operations, and technology." },
      { property: "og:title", content: "Blog | Digital Supply Chain Lab" },
      { property: "og:description", content: "Original articles on supply chain strategy, resilience, planning, operations, and technology." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Blog,
});