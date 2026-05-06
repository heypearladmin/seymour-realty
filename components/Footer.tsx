import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-navy text-softwhite/90 mt-32">
      <div className="max-w-editorial mx-auto px-6 lg:px-10 py-20 grid gap-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <Image
            src={site.logo.light}
            alt={site.logo.alt}
            width={140}
            height={70}
            className="h-12 w-auto mb-7 opacity-90"
          />
          <h2 className="font-display text-4xl md:text-5xl leading-tight text-softwhite">
            Austin. <br />
            Understood.
          </h2>
          <p className="mt-7 max-w-md text-softwhite/70 leading-relaxed">
            You won&apos;t just get a Realtor. You&apos;ll get Austin decoded —
            from a lifelong local who has spent a career mapping the city&apos;s
            micro-markets one street at a time.
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="eyebrow text-softwhite/60 mb-5">Explore</p>
          <ul className="space-y-3 text-sm">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-softwhite/85 hover:text-terracotta transition-colors duration-300"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="eyebrow text-softwhite/60 mb-5">Contact</p>
          <address className="not-italic text-sm leading-relaxed text-softwhite/85 space-y-1">
            <div>{site.company.address.street}</div>
            <div>
              {site.company.address.city}, {site.company.address.state}{" "}
              {site.company.address.zip}
            </div>
            <div className="pt-3">
              <a href={site.company.phoneHref} className="link-underline">
                {site.company.phone}
              </a>
            </div>
            <div>
              <a href={site.company.emailHref} className="link-underline">
                {site.company.email}
              </a>
            </div>
          </address>

          <ul className="flex gap-5 mt-6 text-[0.72rem] tracking-editorial uppercase">
            <li>
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-softwhite/85 hover:text-terracotta transition-colors duration-300"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-softwhite/85 hover:text-terracotta transition-colors duration-300"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-softwhite/85 hover:text-terracotta transition-colors duration-300"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={site.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-softwhite/85 hover:text-terracotta transition-colors duration-300"
              >
                YouTube
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-softwhite/10">
        <div className="max-w-editorial mx-auto px-6 lg:px-10 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-softwhite/55">
          <p>
            © {new Date().getFullYear()} Seymour Realty Group. All rights reserved.
          </p>
          <p className="tracking-editorial uppercase">
            Austin, Texas — by way of every street in it.
          </p>
        </div>
      </div>
    </footer>
  );
}
