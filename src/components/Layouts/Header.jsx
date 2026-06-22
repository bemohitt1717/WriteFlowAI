import { useEffect, useMemo, useState } from "react";
import { FiMenu, FiX } from "../../assets/icons/icons";
import { PATHS } from "../../utils/path";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("");
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = useMemo(
    () => [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "Template", href: "#template" },
      { label: "Blog/Docs", href: "#blogs" },
    ],
    []
  );

  useEffect(() => {
    const sectionIds = ["features", "pricing"];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));

        if (visible.length > 0) {
          const id = visible[0].target.id;
          setActiveHref(`#${id}`);
        }
      },
      {
        root: null,
        threshold: [0.18, 0.28, 0.38],
        rootMargin: "-30% 0px -60% 0px",
      }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const linkClass = (href) => {
    const isActive = href !== "#" && href === activeHref;
    return [
      "text-md font-medium transition-colors duration-150",
      isActive ? "text-[var(--color-text)]" : " hover:text-[var(--color-accent)]",
    ].join(" ");
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b border-[var(--color-border)] bg-[var(--color-background)]/95 shadow-[0_2px_14px_rgba(14,22,17,0.06)]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-primary)]">
            <span className="text-lg font-bold text-(--color-background)">W</span>
          </div>
          <div className="flex items-center">
            <h1 className="text-2xl font-bold tracking-tight text-[var(--color-text)]">
              WriteFlow
            </h1>
            <span className="ml-1 text-lg font-bold text-[var(--color-accent)]">ai</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={linkClass(link.href)}
                  onClick={() => {
                    setActiveHref(link.href);
                    setIsMenuOpen(false);
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Section - Hamburger + CTA */}
        <div className="flex items-center gap-3">
          {/* Hamburger Menu Button - Mobile Only */}
          <button
            onClick={toggleMenu}
            className="p-2 text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)] md:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>

          <button onClick={() => {navigate(PATHS.DASHBOARD)}} className="theme-button-primary cursor-pointer rounded-lg px-6 py-2.5 text-sm font-semibold transition-colors duration-150">
            Get Started
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-[var(--color-border)] bg-[var(--color-background)] md:hidden">
          <nav className="max-w-7xl mx-auto px-6 py-4">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={`${linkClass(link.href)} block py-2`}
                    onClick={() => {
                      setActiveHref(link.href);
                      setIsMenuOpen(false);
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
