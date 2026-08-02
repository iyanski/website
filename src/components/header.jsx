import React, { useState } from "react"
import { Link } from "gatsby"
import LinkedInIcon from "./icons/LinkedInIcon"
import GithubIcon from "./icons/GithubIcon"

const navLinks = [
  { label: "Writing", href: "/#writing" },
  { label: "Work", href: "/#work" },
  { label: "Approach", href: "/#approach" },
  { label: "About", href: "/#about" },
]

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a
          href="/"
          className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-900"
        >
          ian tusil
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-zinc-600 transition hover:text-zinc-900"
            >
              {link.label}
            </a>
          ))}
          <Link
            to="/blog"
            className="text-sm text-zinc-600 transition hover:text-zinc-900"
          >
            Blog
          </Link>
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href="https://www.linkedin.com/in/iyanski"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 transition hover:text-zinc-900"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://github.com/iyanski"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 transition hover:text-zinc-900"
            aria-label="GitHub"
          >
            <GithubIcon />
          </a>
          <a
            href="/#contact"
            className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-700"
          >
            Contact
          </a>
        </div>

        <button
          className="flex items-center justify-center rounded-lg p-2 text-zinc-600 transition hover:bg-zinc-100 md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(prev => !prev)}
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-zinc-100 bg-white px-6 pb-6 pt-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-zinc-600 transition hover:text-zinc-900"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Link
              to="/blog"
              className="text-sm text-zinc-600 transition hover:text-zinc-900"
              onClick={() => setMenuOpen(false)}
            >
              Blog
            </Link>
          </nav>
          <div className="mt-6 flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/iyanski"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 transition hover:text-zinc-900"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://github.com/iyanski"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 transition hover:text-zinc-900"
              aria-label="GitHub"
            >
              <GithubIcon />
            </a>
            <a
              href="/#contact"
              className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-700"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
