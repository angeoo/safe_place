import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/forum", label: "Forum" },
  { href: "/specialistes", label: "Nos specialistes" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About us" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#f5f7fa]">
      <nav className="mx-auto flex max-w-7xl items-center gap-4 px-2 md:px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo-safe-place.png"
            alt="Safe Place"
            width={164}
            height={127}
            className="relative top-[15px] h-25 w-auto"
            priority
          />
        </Link>

        <div className="flex flex-1 items-center justify-end gap-5 md:gap-7">
          <div className="flex items-center gap-5 md:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-ink transition-colors hover:text-brand md:text-base">
                {link.label}
              </Link>
            ))}
          </div>

          <Link
            href="/login"
            className="btn btn-brand rounded-full px-4 text-sm font-semibold !py-2">
            Connexion
          </Link>
        </div>
      </nav>
    </header>
  );
}
