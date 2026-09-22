import { createFileRoute } from "@tanstack/react-router";
import Projects from "@/pages/Projects.jsx";

export const Route = createFileRoute("/projects")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Projects | Digital Supply Chain Lab" },
      {
        name: "description",
        content:
          "Prototypes and experiments in digital supply chain: SKU analysis, shipment tracking, supplier reliability, facility layout, and more.",
      },
      { property: "og:title", content: "Projects | Digital Supply Chain Lab" },
      {
        property: "og:description",
        content:
          "Prototypes and experiments in digital supply chain: SKU analysis, shipment tracking, supplier reliability, facility layout, and more.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://digitalsupplychainlab.com/projects" },
    ],
    links: [{ rel: "canonical", href: "https://digitalsupplychainlab.com/projects" }],
  }),
  component: Projects,
});
