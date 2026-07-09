"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "./ThemeProvider";

export function Nav() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const isHome = pathname === "/";
  const isBlog = pathname === "/blog";

  return (
    <nav className="nav">
      <div className="nav-name">Irakli Todua</div>
      <div className="nav-right">
        <div className="nav-tabs">
          <Link href="/" className={`nav-tab${isHome ? " active" : ""}`}>
            Home
          </Link>
          <Link href="/blog" className={`nav-tab${isBlog ? " active" : ""}`}>
            Blog
          </Link>
        </div>
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="theme-toggle"
          suppressHydrationWarning
        >
          {theme === "light" ? "☾" : "☀"}
        </button>
      </div>
    </nav>
  );
}
