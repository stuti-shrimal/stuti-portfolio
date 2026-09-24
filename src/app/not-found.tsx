import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-xl flex-col justify-center px-5 py-24 text-center">
      <p className="font-mono text-[11px] text-accent">404</p>
      <h1 className="mt-4 font-serif text-5xl">This page isn’t here.</h1>
      <p className="mt-4 text-muted">The link may be old. The work is on the homepage.</p>
      <Link href="/" className="btn-primary mt-8 inline-flex self-center rounded-full px-5 py-3 text-sm font-semibold">
        Back home
      </Link>
    </div>
  );
}
