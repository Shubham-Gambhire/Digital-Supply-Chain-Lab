import { createFileRoute, notFound } from "@tanstack/react-router";
import BlogArticle from "@/pages/BlogArticle.jsx";
import { blogPosts } from "@/data/blog.js";
import type { BlogPost } from "@/data/blog";

export const Route = createFileRoute("/blog/$id")({
  staticData: { sitemap: true },
  loader: ({ params }): BlogPost => {
    const post = (blogPosts as BlogPost[]).find((article) => article.id === params.id);
    if (!post) throw notFound();
    return post;
  },
  head: ({ params, loaderData }) => {
    const post = loaderData as BlogPost | undefined;
    const title = post
      ? `${post.title} | Digital Supply Chain Lab`
      : "Article not found | Digital Supply Chain Lab";
    const description = post?.excerpt ?? "Supply chain article from Digital Supply Chain Lab.";
    const url = `https://digitalsupplychainlab.com/blog/${params.id}`;
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
      scripts: post
        ? [
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BlogPosting",
                headline: post.title,
                description: post.excerpt,
                datePublished: post.publishedAt,
                url,
                keywords: post.tags,
                author: { "@type": "Person", name: "Shubham Gambhire" },
                publisher: { "@type": "Organization", name: "Digital Supply Chain Lab" },
              }),
            },
          ]
        : [],
    };
  },
  component: ArticleRoute,
});

function ArticleRoute() {
  const post = Route.useLoaderData();
  return <BlogArticle post={post} />;
}
