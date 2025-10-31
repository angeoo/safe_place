import Image from "next/image";
import Link from "next/link";

const footerSections = [
  {
    title: "Services",
    links: [
      { label: "Video Consultations", href: "/services/video-consultations" },
      { label: "Individual Therapy", href: "/services/individual-therapy" },
      { label: "Couples Counseling", href: "/services/couples-counseling" },
      { label: "Crisis Support", href: "/services/crisis-support" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Free Support Forum", href: "/forum" },
      { label: "Anonymous Groups", href: "/community/anonymous-groups" },
      { label: "Mental Health Resources", href: "/community/resources" },
      { label: "Crisis Resources", href: "/community/crisis" },
    ],
  },
  {
    title: "Platform",
    links: [
      { label: "Privacy Policy", href: "/legal/privacy" },
      { label: "Terms of Service", href: "/legal/terms" },
      { label: "HIPAA Compliance", href: "/legal/hipaa" },
      { label: "Video Support", href: "/support/video" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#111827]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-12 md:flex-row md:justify-between">
        <div className="flex max-w-sm flex-col gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="/logo-safe-place.png"
              alt="Safe Place logo"
              width={164}
              height={127}
              className="h-25 w-auto"
        
            />
          </div>
          <p className="mb-10 text-sm text-white">
            Your secure platform for mental health support and community
            connection.
          </p>
        </div>

        <div className="grid flex-1 gap-10 md:grid-cols-3">
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="uppercase text-white pb-4">
                {section.title}
              </h3>
              <ul className="space-y-3 text-sm text-slate-300">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
