import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Writing",
  description: `Notes by ${site.person.name} on data engineering and analytics.`,
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
      <p className="font-mono text-[11px] text-accent uppercase">Writing</p>
      <h1 className="mt-3 font-serif text-5xl">Field notes</h1>
      <div className="mt-10 space-y-4">
        {site.articles.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="glass block rounded-2xl p-5">
            <p className="font-mono text-[10px] text-muted">
              {post.date} · {post.readTime}
            </p>
            <h2 className="mt-2 font-serif text-2xl">{post.title}</h2>
            <p className="mt-2 text-sm text-muted">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
