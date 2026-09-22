import { createFileRoute } from "@tanstack/react-router";
import About from "@/pages/About.jsx";

export const Route = createFileRoute("/about")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "About | Digital Supply Chain Lab" },
      {
        name: "description",
        content:
          "About Shubham Gambhire and the Digital Supply Chain Lab: supply chain strategy meets hands-on technology building.",
      },
      { property: "og:title", content: "About | Digital Supply Chain Lab" },
      {
        property: "og:description",
        content:
          "About Shubham Gambhire and the Digital Supply Chain Lab: supply chain strategy meets hands-on technology building.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});
