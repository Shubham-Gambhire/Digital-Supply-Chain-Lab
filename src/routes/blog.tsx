import { createFileRoute } from "@tanstack/react-router";
import Blog from "@/pages/Blog.jsx";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Digital Supply Chain Lab" },
      {
        name: "description",
        content:
          "Notes and reflections on building digital supply chain tools: learn, build, reflect, share.",
      },
      { property: "og:title", content: "Blog — Digital Supply Chain Lab" },
      {
        property: "og:description",
        content:
          "Notes and reflections on building digital supply chain tools: learn, build, reflect, share.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Blog,
});
