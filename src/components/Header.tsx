"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Experience", href: "#experience" },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="container">
        <div className="flex items-center justify-between gap-[20] h-30">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold font-display">
            <Image
              src="/logos/1_black.png"
              alt="Leo Phan"
              width={250}
              height={80}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[#0b0133] hover:underline transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link href="#contact" className="button-primary max-lg:ml-auto">
            Let&apos;s talk
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-4 bg-secondary rounded-lg text-accent"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden px-[30] py-4 bg-white border-b border-secondary">
          <nav className="flex flex-col space-y-4">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[#0b0133] hover:underline transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
