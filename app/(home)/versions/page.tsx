import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("https://hubertgrzesiak.com/"),
  title: "Hubert Grzesiak - Portfolio Versions",
  description: "Browse archived versions of Hubert Grzesiak's portfolio.",
  robots: {
    index: false,
    follow: true,
  },
};

const versions = [
  {
    label: "Current",
    version: "v3",
    href: "/",
    title: "Cinematic portfolio",
    description:
      "The current dark, video-led version with a contact modal and updated services.",
  },
  {
    label: "Archive",
    version: "v2",
    href: "/v2",
    title: "Brutalist gradient version",
    description:
      "The previous experimental layout with brutalist cards and gradient backgrounds.",
  },
  {
    label: "Archive",
    version: "v1",
    href: "/v1",
    title: "Original portfolio",
    description:
      "The preserved version of the earlier homepage with the original section structure.",
  },
];

const VersionsPage = () => {
  return (
    <main className="min-h-screen bg-black px-5 py-28 text-white sm:px-6">
      <section className="mx-auto max-w-[1120px]">
        <p className="mb-5 text-[12px] leading-none font-semibold tracking-[0.22em] text-white/42 uppercase">
          Portfolio archive
        </p>
        <h1 className="max-w-[760px] text-[42px] leading-tight font-medium sm:text-[64px]">
          Previous versions, kept as a visible design history.
        </h1>
        <p className="mt-5 max-w-[620px] text-[15px] leading-7 text-white/58">
          The current homepage is v3. Older directions stay available here for
          comparison and reference.
        </p>
      </section>

      <section className="mx-auto mt-12 grid max-w-[1120px] gap-4 lg:grid-cols-3">
        {versions.map((item) => (
          <Link
            className="group flex min-h-[260px] flex-col justify-between rounded-[24px] border border-white/12 bg-white/[0.035] p-6 transition-colors hover:bg-white/[0.065]"
            href={item.href}
            key={item.version}
          >
            <div>
              <div className="mb-6 flex items-center justify-between gap-4">
                <span className="rounded-full border border-white/14 px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.16em] text-white/52">
                  {item.label}
                </span>
                <span className="text-[14px] font-semibold text-white/46">
                  {item.version}
                </span>
              </div>
              <h2 className="text-[28px] leading-tight font-medium">
                {item.title}
              </h2>
              <p className="mt-4 text-[14px] leading-7 text-white/56">
                {item.description}
              </p>
            </div>
            <span className="mt-8 inline-flex items-center gap-2 text-[14px] font-semibold text-white">
              Open version
              <ArrowUpRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </span>
          </Link>
        ))}
      </section>
    </main>
  );
};

export default VersionsPage;
