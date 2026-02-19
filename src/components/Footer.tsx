"use client";

import Image from "next/image";
import Link from "next/link";

const footerColumns = [
  {
    title: "Featured",
    links: ["Air Force 1", "Huarache", "Air Max 90", "Air Max 95"],
  },
  {
    title: "Shoes",
    links: ["All Shoes", "Custom Shoes", "Jordan Shoes", "Running Shoes"],
  },
  {
    title: "Clothing",
    links: [
      "All Clothing",
      "Modest Wear",
      "Hoodies & Pullovers",
      "Shirts & Tops",
    ],
  },
  {
    title: "Kids'",
    links: [
      "Infant & Toddler Shoes",
      "Kids' Shoes",
      "Kids' Jordan Shoes",
      "Kids' Basketball Shoes",
    ],
  },
];

const socialLinks = [
  { icon: "/x.svg", label: "X (Twitter)", href: "#" },
  { icon: "/facebook.svg", label: "Facebook", href: "#" },
  { icon: "/instagram.svg", label: "Instagram", href: "#" },
];

const legalLinks = [
  "Guides",
  "Terms of Sale",
  "Terms of Use",
  "Nike Privacy Policy",
];

export function Footer() {
  return (
    <footer className="bg-dark-900 text-light-100">
      <div className="mx-auto max-w-[1440px] px-6 pt-10 pb-6 lg:px-12">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
          <div className="shrink-0">
            <Link href="/" aria-label="Nike home">
              <Image
                src="/logo.svg"
                alt="Nike"
                width={80}
                height={29}
                priority
              />
            </Link>
          </div>

          <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-4">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="mb-4 text-body-medium text-light-100">
                  {column.title}
                </h3>
                <ul className="flex flex-col gap-3">
                  {column.links.map((link) => (
                    <li key={link}>
                      <Link
                        href="#"
                        className="text-caption text-dark-500 transition-colors hover:text-light-100"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex gap-4 self-start lg:shrink-0">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="transition-opacity hover:opacity-70"
              >
                <Image
                  src={social.icon}
                  alt={social.label}
                  width={18}
                  height={18}
                  className="invert"
                />
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-dark-700/30 pt-6 sm:flex-row sm:items-center">
          <div className="flex flex-wrap items-center gap-2 text-footnote text-dark-500">
            <span className="flex items-center gap-1">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z"
                  fill="currentColor"
                />
              </svg>
              Croatia
            </span>
            <span>&copy; 2025 Nike, Inc. All Rights Reserved</span>
          </div>

          <nav aria-label="Legal links">
            <ul className="flex flex-wrap items-center gap-4 sm:gap-6">
              {legalLinks.map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-footnote text-dark-500 transition-colors hover:text-light-100"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
