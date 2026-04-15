import Image from "next/image";
import { aboutContent } from "@/lib/content";

export default function About() {
  return (
    <section id="about" className="bg-[var(--bg-0)] py-20 md:py-28">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative aspect-[4/3] rounded-sm overflow-hidden bg-[var(--bg-50)]">
            <Image
              src={aboutContent.image}
              alt="굽네치킨 홍대점 매장 / Goobne Chicken Hongdae interior"
              fill
              className="object-cover"
            />
          </div>

          {/* Text */}
          <div>
            {/* Eyebrow — bilingual */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-6 h-0.5 bg-[var(--red-500)]" />
              <p className="text-[var(--red-500)] text-xs font-black uppercase tracking-widest">
                {aboutContent.eyebrow} · {aboutContent.eyebrowEn}
              </p>
            </div>

            {/* Headline — bilingual */}
            <h2 className="text-[var(--ink-900)] font-black text-3xl md:text-[38px] leading-[1.2] mb-1">
              {aboutContent.headline}
            </h2>
            <p className="text-[var(--ink-500)] text-lg font-medium mb-8">
              {aboutContent.headlineEn}
            </p>

            {/* Paragraphs — bilingual stacked */}
            <div className="space-y-5">
              {aboutContent.paragraphs.map((para, i) => (
                <div key={i}>
                  <p className="text-[var(--ink-700)] text-sm leading-[1.8]">{para}</p>
                  <p className="text-[var(--ink-500)] text-xs leading-[1.8] mt-0.5">
                    {aboutContent.paragraphsEn[i]}
                  </p>
                </div>
              ))}
            </div>

            {/* Stat strip — bilingual */}
            <div className="mt-10 pt-8 border-t border-[var(--line-200)] grid grid-cols-3 gap-4">
              {aboutContent.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-[var(--red-500)] font-black text-2xl">{stat.value}</p>
                  <p className="text-[var(--ink-900)] text-sm font-semibold mt-0.5 leading-tight">{stat.label}</p>
                  <p className="text-[var(--ink-500)] text-[10px] font-medium tracking-wide leading-tight">{stat.labelEn}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
