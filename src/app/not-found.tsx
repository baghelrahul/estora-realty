import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full min-h-[70vh] flex items-center justify-center py-24 px-6">
      <div className="max-w-lg mx-auto text-center space-y-6">
        <span className="text-label-caps font-label-caps uppercase tracking-widest text-secondary block">
          404 · Architectural Disconnect
        </span>
        <h1 className="text-display-hero-mobile sm:text-headline-xl font-headline-xl text-primary tracking-tight">
          Residence Not Found
        </h1>
        <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
          The property or monograph you are attempting to view may have completed private escrow divestment or has been relocated within our private advisory archives.
        </p>
        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="px-6 py-3 rounded-lg bg-primary text-surface hover:bg-[#323A35] font-label-lg text-label-lg transition-colors"
          >
            Return to Homepage
          </Link>
          <Link
            href="/properties/"
            className="px-6 py-3 rounded-lg border border-primary text-primary hover:bg-primary hover:text-surface font-label-lg text-label-lg transition-colors"
          >
            Explore Available Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}
