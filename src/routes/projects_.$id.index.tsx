import { createFileRoute } from "@tanstack/react-router";
import ProjectDetail from "@/pages/ProjectDetail.jsx";

export const Route = createFileRoute("/projects_/$id/")({
  head: () => ({
    meta: [
      { title: "Project | Digital Supply Chain Lab" },
      {
        name: "description",
        content:
          "A deep dive into one digital supply chain prototype: the problem, the approach, and what was learned.",
      },
      { property: "og:title", content: "Project | Digital Supply Chain Lab" },
      {
        property: "og:description",
        content:
          "A deep dive into one digital supply chain prototype: the problem, the approach, and what was learned.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectDetail,
});
