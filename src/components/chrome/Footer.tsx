import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-line px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-serif text-2xl">{site.person.name}</p>
          <p className="mt-1 text-sm text-muted">{site.person.role} · {site.person.location}</p>
        </div>
        <p className="font-mono text-[11px] text-muted">
          {site.person.secondaryRole} · Press ⌘K
        </p>
      </div>
    </footer>
  );
}
