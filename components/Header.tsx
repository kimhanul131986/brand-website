"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks, siteInfo } from "@/lib/content";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[var(--bg-0)]/95 backdrop-blur-sm border-b border-[var(--line-200)]">
      <div className="max-w-[1280px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-7 h-7 bg-[var(--red-500)] rounded-[3px] flex items-center justify-center shrink-0">
            <span className="text-white text-[10px] font-black leading-none">굽네</span>
          </div>
          <div className="leading-none">
            <span className="block text-[var(--ink-900)] font-bold text-base tracking-tight">
              굽네치킨
            </span>
            <span className="block text-[var(--ink-500)] text-[10px] font-medium tracking-wide">
              HONGDAE · 홍대점
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex flex-col items-center px-4 py-2 rounded-[4px] hover:bg-[var(--bg-50)] transition-colors"
            >
              <span className="text-[var(--ink-700)] text-sm font-semibold group-hover:text-[var(--red-500)] transition-colors leading-tight">
                {link.label}
              </span>
              <span className="text-[var(--ink-500)] text-[10px] font-medium tracking-wide group-hover:text-[var(--red-500)] transition-colors leading-tight">
                {link.labelEn}
              </span>
            </Link>
          ))}
        </nav>

        {/* Phone CTA */}
        <a
          href={`tel:${siteInfo.phone}`}
          className="hidden md:inline-flex flex-col items-center justify-center bg-[var(--red-500)] hover:bg-[var(--red-700)] text-white px-5 h-11 rounded-[4px] transition-colors"
        >
          <span className="text-[13px] font-bold leading-tight">전화 주문</span>
          <span className="text-[10px] font-semibold opacity-80 leading-tight tracking-wide">Call Now</span>
        </a>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded-[4px] hover:bg-[var(--bg-50)] transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="메뉴 열기 / Open menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path strokeLinecap="round" d="M6 6l12 12M6 18L18 6" />
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-[var(--line-200)] bg-[var(--bg-0)] px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between py-3 border-b border-[var(--line-200)] last:border-none hover:text-[var(--red-500)] transition-colors group"
            >
              <span className="text-[var(--ink-900)] text-base font-semibold group-hover:text-[var(--red-500)] transition-colors">
                {link.label}
              </span>
              <span className="text-[var(--ink-500)] text-sm font-medium group-hover:text-[var(--red-500)] transition-colors">
                {link.labelEn}
              </span>
            </Link>
          ))}
          <a
            href={`tel:${siteInfo.phone}`}
            className="mt-3 inline-flex items-center justify-between bg-[var(--red-500)] text-white px-5 h-12 rounded-[4px] w-full"
          >
            <span className="font-bold text-sm">전화 주문</span>
            <span className="text-sm font-semibold opacity-80">Call Now · {siteInfo.phone}</span>
          </a>
        </div>
      )}
    </header>
  );
}
