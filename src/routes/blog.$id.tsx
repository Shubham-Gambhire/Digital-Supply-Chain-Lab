import { createFileRoute, notFound } from "@tanstack/react-router";
import BlogArticle from "@/pages/BlogArticle.jsx";
import { blogPosts } from "@/data/blog.js";

export const Route = createFileRoute("/blog/$id")({
  loader: ({ params }) => {
    const post = blogPosts.find((article) => article.id === params.id);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData }) => {
    const title = loaderData ? `${loaderData.title} | Digital Supply Chain Lab` : "Article not found | Digital Supply Chain Lab";
    const description = loaderData?.excerpt ?? "Supply chain article from Digital Supply Chain Lab.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ArticleRoute,
});

function ArticleRoute() {
  const post = Route.useLoaderData();
  return <BlogArticle post={post} />;
}