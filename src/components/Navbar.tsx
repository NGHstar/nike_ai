"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Men", href: "#" },
  { label: "Women", href: "#" },
  { label: "Kids", href: "#" },
  { label: "Collections", href: "#" },
  { label: "Contact", href: "#" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="border-b border-light-300 bg-light-100">
      <nav
        className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4 lg:px-12"
        aria-label="Main navigation"
      >
        <Link href="/" aria-label="Nike home">
          <Image
            src="/logo.svg"
            alt="Nike"
            width={80}
            height={29}
            className="invert"
            priority
          />
        </Link>

        <ul className="hidden items-center gap-8 md:flex" role="menubar">
          {navLinks.map((link) => (
            <li key={link.label} role="none">
              <Link
                href={link.href}
                role="menuitem"
                className="text-body-medium text-dark-900 transition-colors hover:text-dark-700"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-6 md:flex">
          <Link
            href="#"
            className="text-body-medium text-dark-900 transition-colors hover:text-dark-700"
          >
            Search
          </Link>
          <Link
            href="#"
            className="text-body-medium text-dark-900 transition-colors hover:text-dark-700"
          >
            My Cart (2)
          </Link>
        </div>

        <button
          type="button"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            {mobileMenuOpen ? (
              <path
                d="M6 18L18 6M6 6l12 12"
                stroke="#111111"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ) : (
              <path
                d="M3 12h18M3 6h18M3 18h18"
                stroke="#111111"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            )}
          </svg>
        </button>
      </nav>

      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-light-300 bg-light-100 px-6 pb-6 md:hidden"
          role="menu"
        >
          <ul className="flex flex-col gap-4 py-4">
            {navLinks.map((link) => (
              <li key={link.label} role="none">
                <Link
                  href={link.href}
                  role="menuitem"
                  className="text-body-medium text-dark-900 transition-colors hover:text-dark-700"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-4 border-t border-light-300 pt-4">
            <Link
              href="#"
              className="text-body-medium text-dark-900 transition-colors hover:text-dark-700"
            >
              Search
            </Link>
            <Link
              href="#"
              className="text-body-medium text-dark-900 transition-colors hover:text-dark-700"
            >
              My Cart (2)
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
