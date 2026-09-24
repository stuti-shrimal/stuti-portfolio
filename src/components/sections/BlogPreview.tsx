import Link from "next/link";
import { site } from "@/content/site";
import { Section } from "@/components/ui/Section";

export function BlogPreview() {
  return (
    <Section id="blog" eyebrow="Writing" title="Short notes on the work, not a content mill.">
      <div className="grid gap-4 md:grid-cols-3">
        {site.articles.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="glass rounded-2xl p-5 transition hover:border-accent/40">
            <p className="font-mono text-[10px] text-muted">
              {post.date} · {post.readTime}
            </p>
            <h3 className="mt-3 font-serif text-xl">{post.title}</h3>
            <p className="mt-2 text-sm text-muted">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </Section>
  );
}
