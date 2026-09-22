import { createFileRoute } from "@tanstack/react-router";
import Resume from "@/pages/Resume.jsx";

export const Route = createFileRoute("/resume")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Resume | Shubham Gambhire" },
      {
        name: "description",
        content:
          "Resume of Shubham Gambhire: supply chain operations, analytics, and digital tool building.",
      },
      { property: "og:title", content: "Resume | Shubham Gambhire" },
      {
        property: "og:description",
        content:
          "Resume of Shubham Gambhire: supply chain operations, analytics, and digital tool building.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://digitalsupplychainlab.com/resume" },
    ],
    links: [{ rel: "canonical", href: "https://digitalsupplychainlab.com/resume" }],
  }),
  component: Resume,
});
