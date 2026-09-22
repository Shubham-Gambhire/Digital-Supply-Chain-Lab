import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/projects_/$id")({
  staticData: { sitemap: false },
  component: Outlet,
});
