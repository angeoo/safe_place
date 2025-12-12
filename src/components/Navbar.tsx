"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/forum", label: "Forum" },
  { href: "/specialistes", label: "Nos specialistes" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About us" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <nav className="flex max-w-8xl mx-auto items-center justify-between px-4 md:px-8 lg:px-12 py-2.5 md:py-3 overflow-visible">
        <Link href="/" className="flex items-center flex-shrink-0 -my-6 translate-y-[12px]">
          <Image
            src="/logo-safe-place.png"
            alt="Safe Place"
            width={120}
            height={120}
            priority
          />
        </Link>

        <div className="flex items-center gap-4 md:gap-8">
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs md:text-sm font-medium text-ink transition-colors hover:text-brand whitespace-nowrap">
                {link.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2">
            <span className={`block w-5 h-0.5 bg-ink transition-all ${
              isMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}></span>
            <span className={`block w-5 h-0.5 bg-ink transition-all ${
              isMenuOpen ? 'opacity-0' : ''
            }`}></span>
            <span className={`block w-5 h-0.5 bg-ink transition-all ${
              isMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}></span>
          </button>

          <Link
            href="/login"
            className="btn btn-brand rounded-full px-4 md:px-6 text-xs md:text-sm font-semibold py-2 flex-shrink-0">
            Connexion
          </Link>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-ink transition-colors hover:text-brand"
                onClick={() => setIsMenuOpen(false)}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
