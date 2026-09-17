import { createFileRoute } from "@tanstack/react-router";
import Home from "@/pages/Home.jsx";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Digital Supply Chain Lab — Shubham Gambhire" },
      {
        name: "description",
        content:
          "A public lab notebook for digital supply chains: prototypes, decisions, and lessons at the intersection of supply chain strategy and technology.",
      },
      { property: "og:title", content: "Digital Supply Chain Lab — Shubham Gambhire" },
      {
        property: "og:description",
        content:
          "A public lab notebook for digital supply chains: prototypes, decisions, and lessons at the intersection of supply chain strategy and technology.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});
