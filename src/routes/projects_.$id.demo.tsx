import { createFileRoute } from "@tanstack/react-router";
import ProjectDemo from "@/pages/ProjectDemo.jsx";

export const Route = createFileRoute("/projects_/$id/demo")({
  head: () => ({
    meta: [
      { title: "Live Demo | Digital Supply Chain Lab" },
      {
        name: "description",
        content: "Interactive demo of a digital supply chain prototype.",
      },
      { property: "og:title", content: "Live Demo | Digital Supply Chain Lab" },
      {
        property: "og:description",
        content: "Interactive demo of a digital supply chain prototype.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectDemo,
});
