import { createFileRoute } from "@tanstack/react-router";
import Home from "@/pages/Home.jsx";

const title = "Digital Supply Chain Lab | Prototypes by Shubham Gambhire";
const description =
  "Hands-on prototypes and field notes on supply chain planning, sourcing, manufacturing, and logistics, built with analytics, optimization, and simulation.";

export const Route = createFileRoute("/")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://digitalsupplychainlab.com/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://digitalsupplychainlab.com/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Digital Supply Chain Lab",
          url: "https://digitalsupplychainlab.com/",
          author: { "@type": "Person", name: "Shubham Gambhire" },
        }),
      },
    ],
  }),
  component: Home,
});
