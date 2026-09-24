import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { site } from "@/content/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return site.articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = site.articles.find((a) => a.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = site.articles.find((a) => a.slug === slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-2xl px-5 py-16 sm:px-8">
      <Link href="/blog" className="font-mono text-[11px] text-accent">
        ← Writing
      </Link>
      <p className="mt-8 font-mono text-[11px] text-muted">
        {post.date} · {post.readTime}
      </p>
      <h1 className="mt-3 font-serif text-4xl sm:text-5xl">{post.title}</h1>
      <div className="mt-8 space-y-4 text-base leading-8 text-muted">
        {post.body.split("\n\n").map((para) => (
          <p key={para.slice(0, 24)}>{para}</p>
        ))}
      </div>
    </article>
  );
}
