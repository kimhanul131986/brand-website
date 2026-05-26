import { siteInfo } from "@/lib/content";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[var(--ink-900)] text-white">
      {/* Main Footer */}
      <div className="max-w-[1280px] mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left: Store Info */}
          <div>
            {/* Logo */}
            <div className="flex items-center gap-2.5 mb-8">
              <div className="w-7 h-7 bg-[var(--red-500)] rounded-[3px] flex items-center justify-center shrink-0">
                <span className="text-white text-[10px] font-black leading-none">굽네</span>
              </div>
              <div className="leading-none">
                <span className="block text-white font-bold text-base tracking-tight">굽네치킨</span>
                <span className="block text-white/40 text-[10px] font-medium tracking-wide">
                  HONGDAE · 홍대점
                </span>
              </div>
            </div>

            <div className="space-y-4 text-sm text-white/70">
              {/* Address */}
              <div className="flex items-start gap-3">
                <svg className="mt-0.5 shrink-0" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21C12 21 5 13.5 5 9a7 7 0 0114 0c0 4.5-7 12-7 12z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
                <div>
                  <p className="text-white/80 font-medium">{siteInfo.address}</p>
                  <p className="text-white/45 text-xs mt-0.5">{siteInfo.addressEn}</p>
                  <p className="text-white/45 text-xs mt-0.5">
                    {siteInfo.addressDetail} · {siteInfo.addressDetailEn}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <svg className="shrink-0" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                </svg>
                <div>
                  <a href={`tel:${siteInfo.phone}`} className="hover:text-white transition-colors font-medium text-white/80">
                    {siteInfo.phone}
                  </a>
                  <p className="text-white/40 text-xs mt-0.5">전화 주문 가능 · Phone Orders Welcome</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3">
                <svg className="mt-0.5 shrink-0" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="12" cy="12" r="9" />
                  <path strokeLinecap="round" d="M12 7v5l3 3" />
                </svg>
                <div className="space-y-1.5">
                  <div>
                    <p className="text-white/80 font-medium">월~목·일 {siteInfo.hours.weekday}</p>
                    <p className="text-white/40 text-xs">{siteInfo.hours.weekdayEn}</p>
                  </div>
                  <div>
                    <p className="text-white/80 font-medium">금·토 {siteInfo.hours.weekend}</p>
                    <p className="text-white/40 text-xs">{siteInfo.hours.weekendEn}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Links & CTA */}
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-white/40 text-[10px] uppercase tracking-widest mb-4">
                팔로우하기 · Follow Us
              </p>
              <div className="flex gap-3">
                <a
                  href={siteInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="group w-11 h-11 rounded-full border border-white/20 flex items-center justify-center hover:border-[var(--red-500)] hover:text-[var(--red-500)] transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                </a>
                <a
                  href={siteInfo.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="group w-11 h-11 rounded-full border border-white/20 flex items-center justify-center hover:border-[var(--red-500)] hover:text-[var(--red-500)] transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.9 31.9 0 0 0 0 12a31.9 31.9 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1c.4-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.5 15.6V8.4l6.3 3.6-6.3 3.6z"/>
                  </svg>
                </a>
                <a
                  href={siteInfo.threads}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Threads"
                  className="group w-11 h-11 rounded-full border border-white/20 flex items-center justify-center hover:border-[var(--red-500)] hover:text-[var(--red-500)] transition-colors"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.2 10.8c-.1 0-.2-.1-.3-.1a5.4 5.4 0 0 0-2.7-2.3c-1-.4-2.2-.5-3.4-.3-1.8.3-3.2 1.3-3.8 2.8-.7 1.7-.5 3.6.5 5 .8 1 2 1.7 3.3 1.8 1.6.2 3-.3 3.9-1.4.6-.7.9-1.6.9-2.6 0-.8-.2-1.5-.7-2.1-.5-.6-1.2-.9-2-1-.7-.1-1.4 0-2 .4-.5.4-.8.9-.9 1.5-.1.9.4 1.7 1.2 1.9.4.1.8.1 1.1-.1.2-.1.3-.3.4-.5 0-.1 0-.3-.1-.4-.1-.1-.2-.1-.3-.1h-.1c.1-.2.3-.4.6-.4.4-.1.9.1 1.1.5.2.4.2.9 0 1.3-.3.6-.9 1-1.6 1-.9.1-1.7-.3-2.2-1-.5-.8-.6-1.9-.2-2.9.5-1.2 1.6-1.9 3-2 1 0 1.9.2 2.6.8.7.6 1.1 1.4 1.2 2.4.1 1.3-.3 2.6-1.2 3.5-1.1 1.1-2.7 1.6-4.4 1.4-1.9-.2-3.4-1.2-4.3-2.7-1-1.7-1.1-3.8-.4-5.8.8-2.1 2.5-3.5 4.7-3.9 1.5-.3 3-.1 4.3.5 1.2.6 2.1 1.5 2.7 2.7.1.2.2.5.3.7z"/>
                    <path d="M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1zm6.3 14.6c-.4 1.4-1.3 2.6-2.5 3.4-1.4.9-3.1 1.2-4.8 1-2.1-.3-3.9-1.4-5.1-3.2-1.3-2-1.5-4.5-.6-6.9 1-2.6 3.1-4.3 5.7-4.7 1.8-.3 3.5-.1 5.1.7 1.5.7 2.6 1.9 3.3 3.4.1.3.2.5.3.8.3 1.5.1 3.1-.5 4.5-.3.4-.6.7-.9 1z"/>
                  </svg>
                </a>
                <a
                  href={siteInfo.naverMap}
                  aria-label="네이버 지도 / Naver Map"
                  className="w-11 h-11 rounded-full border border-white/20 flex flex-col items-center justify-center hover:border-[var(--red-500)] hover:text-[var(--red-500)] transition-colors gap-0"
                >
                  <span className="text-[11px] font-black leading-none">N</span>
                  <span className="text-[8px] text-white/40 leading-none">Map</span>
                </a>
                <a
                  href={siteInfo.kakao}
                  aria-label="카카오톡 / KakaoTalk"
                  className="w-11 h-11 rounded-full border border-white/20 flex flex-col items-center justify-center hover:border-[var(--red-500)] hover:text-[var(--red-500)] transition-colors"
                >
                  <span className="text-[11px] font-black leading-none">K</span>
                  <span className="text-[8px] text-white/40 leading-none">Talk</span>
                </a>
              </div>
            </div>

            {/* Phone CTA */}
            <a
              href={`tel:${siteInfo.phone}`}
              className="mt-8 md:mt-0 inline-flex flex-col items-center justify-center bg-[var(--red-500)] hover:bg-[var(--red-700)] text-white h-14 px-8 rounded-[4px] transition-colors w-fit gap-0.5"
            >
              <span className="font-black text-sm leading-tight flex items-center gap-2">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                </svg>
                지금 전화 주문
              </span>
              <span className="text-[11px] font-semibold opacity-75 tracking-widest uppercase leading-tight">
                Call to Order Now
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1280px] mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-white/30 text-xs">
          <p>© 2024 굽네치킨 홍대점 · Goobne Chicken Hongdae. All rights reserved.</p>
          <p>주식회사 지앤푸드 가맹점 · G&Food Franchisee</p>
        </div>
      </div>
    </footer>
  );
}
