import Link from "next/link";
import { heroContent } from "@/lib/content";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[580px] md:min-h-[720px] flex items-center bg-[var(--ink-900)] overflow-hidden"
    >
      {/* Background overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-transparent z-10" />

      {/* Background image */}
      <div
        className="absolute inset-0 bg-[var(--ink-900)]"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Accent stripe — brand energy */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[var(--red-500)] z-20" />

      {/* Content */}
      <div className="relative z-20 max-w-[1280px] mx-auto px-6 py-20 w-full">
        {/* Eyebrow — bilingual */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3 mb-5">
          <span className="inline-block bg-[var(--red-500)] text-white text-[11px] font-black uppercase tracking-widest px-2.5 py-1 w-fit shrink-0">
            #1 Hongdae
          </span>
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
            <span className="text-[var(--gold-500)] text-sm font-bold leading-tight">
              {heroContent.eyebrow}
            </span>
            <span className="hidden sm:inline text-[var(--gold-500)]/50 text-sm">·</span>
            <span className="text-[var(--gold-500)]/70 text-xs sm:text-sm font-medium leading-tight">
              {heroContent.eyebrowEn}
            </span>
          </div>
        </div>

        {/* Headline — Korean primary */}
        <h1 className="text-white font-black text-4xl md:text-[60px] leading-[1.1] whitespace-pre-line mb-3">
          {heroContent.headline}
        </h1>
        {/* Headline — English secondary */}
        <p className="text-white/50 text-lg md:text-2xl font-medium leading-snug whitespace-pre-line mb-6">
          {heroContent.headlineEn}
        </p>

        {/* Body copy — Korean */}
        <p className="text-white/80 text-sm md:text-base max-w-sm leading-relaxed mb-1.5">
          {heroContent.body}
        </p>
        {/* Body copy — English */}
        <p className="text-white/50 text-xs md:text-sm max-w-sm leading-relaxed mb-10">
          {heroContent.bodyEn}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Primary CTA */}
          <a
            href={heroContent.primaryCta.href}
            className="inline-flex flex-col items-center justify-center bg-[var(--red-500)] hover:bg-[var(--red-700)] text-white h-14 px-8 rounded-[4px] transition-colors gap-0.5"
          >
            <span className="font-black text-base leading-tight flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
              </svg>
              {heroContent.primaryCta.label}
            </span>
            <span className="text-[11px] font-semibold opacity-75 tracking-widest uppercase leading-tight">
              {heroContent.primaryCta.labelEn}
            </span>
          </a>

          {/* Secondary CTA */}
          <Link
            href={heroContent.secondaryCta.href}
            className="inline-flex flex-col items-center justify-center border-2 border-white/70 text-white h-14 px-8 rounded-[4px] hover:bg-white hover:text-[var(--ink-900)] transition-colors gap-0.5"
          >
            <span className="font-bold text-base leading-tight">{heroContent.secondaryCta.label}</span>
            <span className="text-[11px] font-semibold opacity-75 tracking-widest uppercase leading-tight">
              {heroContent.secondaryCta.labelEn}
            </span>
          </Link>
        </div>

        {/* Social proof strip */}
        <div className="mt-12 flex items-center gap-4 flex-wrap">
          {[
            { ko: "배달의민족", en: "Baemin" },
            { ko: "쿠팡이츠", en: "Coupang Eats" },
            { ko: "요기요", en: "Yogiyo" },
          ].map((p) => (
            <div
              key={p.ko}
              className="flex items-center gap-1.5 text-white/40 text-xs"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--red-500)]" />
              <span>{p.ko}</span>
              <span className="text-white/25">·</span>
              <span>{p.en}</span>
            </div>
          ))}
          <span className="text-white/30 text-xs">배달 가능 / Delivery Available</span>
        </div>
      </div>
    </section>
  );
}
