import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, Download, Linkedin, Twitter } from "lucide-react";
import { AccessibilityWidget } from "./AccessibilityWidget";

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isChapterPage = location.startsWith("/chapter-");
  const currentChapter = isChapterPage ? location.replace("/chapter-", "") : null;

  const menuItems = [
    { label: "Foreword", href: "/foreword" },
    { label: "Executive Summary", href: "/executive-summary" },
    { label: "Chapter 01 – Mapping the Terrain", href: "/chapter-1" },
    { label: "Chapter 02 – The Nonprofit Landscape", href: "/chapter-2" },
    { label: "Chapter 03 – Where Inclusion Breaks", href: "/chapter-3" },
    { label: "Chapter 04 – Strengthening the Ecosystem", href: "/chapter-4" },
    { label: "Chapter 05 – Cornerstones for Collaborative Action", href: "/chapter-5" },
    { label: "Chapter 06 – Time Horizons for Disability Inclusion", href: "/chapter-6" },
    { label: "Resources", href: "/resources" },
  ];

  return (
    <div className="min-h-[100dvh] flex flex-col bg-background text-foreground selection:bg-primary selection:text-white">
      <header className={`sticky top-0 z-50 transition-all duration-300 bg-white ${scrolled ? "shadow-sm py-4" : "py-6"}`}>
        <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
          <Link href="/" className="flex items-center gap-4 group">
            <img src="/Dasra.png" alt="Dasra" className="h-14 w-auto object-contain" />
            <div className="w-px h-6 bg-border"></div>
            <img src="/HSBC-Logo.png" alt="HSBC" className="h-14 w-auto object-contain" />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-secondary hover:text-primary transition-colors">
              Home
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-secondary hover:text-primary transition-colors py-2">
                Report Menu <ChevronDown className="w-4 h-4" />
              </button>

              {dropdownOpen && (
                <div className="absolute top-full left-0 w-80 bg-white shadow-xl border border-border rounded-xl py-2 animate-in fade-in slide-in-from-top-2">
                  {menuItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-secondary hover:bg-muted hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* <Link href="/accessibility" className="text-sm font-medium text-secondary hover:text-primary transition-colors">
              Accessibility
            </Link> */}

            <a
              href="/pdf/report.pdf"
              download
              className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-full text-sm font-medium transition-all"
            >
              <Download className="w-4 h-4" /> Download PDF
            </a>
          </nav>

          <button className="lg:hidden text-secondary" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed top-[72px] inset-0 z-40 bg-white border-t border-border overflow-y-auto pb-24">
          <div className="flex flex-col p-6 gap-2">
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="py-3 text-lg font-medium text-secondary border-b border-border">Home</Link>
            {menuItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 text-lg font-medium text-secondary border-b border-border"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/accessibility" onClick={() => setMobileMenuOpen(false)} className="py-3 text-lg font-medium text-secondary border-b border-border">Accessibility</Link>
            <a
              href="/pdf/report.pdf"
              download
              className="flex items-center justify-center gap-2 bg-primary text-white mt-6 py-3 rounded-full text-lg font-medium"
            >
              <Download className="w-5 h-5" /> Download PDF
            </a>
          </div>
        </div>
      )}

      {/* Chapter Nav */}
      {isChapterPage && (
        <div className="chapter-nav sticky top-[72px] lg:top-[88px] z-40 bg-muted/80 backdrop-blur-md border-b border-border py-3">
          <div className="container mx-auto px-6 max-w-7xl flex items-center justify-center lg:justify-start gap-4 lg:gap-8 overflow-x-auto no-scrollbar">
            {["1", "2", "3", "4", "5", "6"].map(num => (
              <Link
                key={num}
                href={`/chapter-${num}`}
                className={`text-sm font-heading font-bold whitespace-nowrap flex items-center gap-2 ${currentChapter === num ? "text-primary" : "text-gray-400 hover:text-secondary"}`}
              >
                CHAPTER {num.padStart(2, '0')}
              </Link>
            ))}
          </div>
        </div>
      )}

      <main className="flex-1 flex flex-col">
        {children}
      </main>

      <footer className="bg-white border-t border-border py-12 mt-auto">
        <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-4 group">
              <img src="/Dasra.png" alt="Dasra" className="h-14 w-auto object-contain" />
              <div className="w-px h-6 bg-border"></div>
              <img src="/HSBC-Logo.png" alt="HSBC" className="h-14 w-auto object-contain" />
            </Link>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-secondary">
            {/* <Link href="/accessibility" className="hover:text-primary transition-colors">Accessibility Statement</Link> */}
            <span className="text-border hidden md:inline">|</span>
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <span className="text-border hidden md:inline">|</span>
            <span className="text-gray-500">© 2026 HSBC & Dasra</span>
          </div>

          <div className="flex items-center gap-4 text-secondary">
            <a href="#" className="hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href="#" className="hover:text-primary transition-colors"><Twitter className="w-5 h-5" /></a>
          </div>
        </div>
      </footer>

      {/* <AccessibilityWidget /> */}
    </div>
  );
}