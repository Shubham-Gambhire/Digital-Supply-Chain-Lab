import { createFileRoute } from "@tanstack/react-router";
import ProjectDemo from "@/pages/ProjectDemo.jsx";
import { projects } from "@/data/projects.js";

type Project = { id: string; title: string; tagline: string };

export const Route = createFileRoute("/projects_/$id/demo")({
  staticData: { sitemap: false },
  head: ({ params }) => {
    const project = (projects as Project[]).find((p) => p.id === params.id);
    const title = project
      ? `${project.title} live demo | Digital Supply Chain Lab`
      : "Live Demo | Digital Supply Chain Lab";
    const description = project
      ? `Try the ${project.title} prototype in your browser. ${project.tagline}`
      : "Interactive demo of a digital supply chain prototype.";
    const url = `https://digitalsupplychainlab.com/projects/${params.id}/demo`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  component: ProjectDemo,
});
