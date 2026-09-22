import { createFileRoute } from "@tanstack/react-router";
import ProjectDetail from "@/pages/ProjectDetail.jsx";
import { projects } from "@/data/projects.js";

type Project = { id: string; title: string; tagline: string };

export const Route = createFileRoute("/projects_/$id/")({
  staticData: { sitemap: true },
  head: ({ params }) => {
    const project = (projects as Project[]).find((p) => p.id === params.id);
    const title = project
      ? `${project.title} | Digital Supply Chain Lab`
      : "Project | Digital Supply Chain Lab";
    const description = project
      ? project.tagline
      : "A deep dive into one digital supply chain prototype: the problem, the approach, and what was learned.";
    const url = `https://digitalsupplychainlab.com/projects/${params.id}`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: project
        ? [
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "TechArticle",
                headline: project.title,
                description: project.tagline,
                url,
                author: { "@type": "Person", name: "Shubham Gambhire" },
              }),
            },
          ]
        : [],
    };
  },
  component: ProjectDetail,
});
