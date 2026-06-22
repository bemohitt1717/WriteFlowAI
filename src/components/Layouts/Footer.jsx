import { motion } from "framer-motion";
import { FaXTwitter, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  const columns = [
    {
      title: "Product",
      links: [
        { label: "Features", href: "#features" },
        { label: "Pricing", href: "#pricing" },
        { label: "Templates", href: "#templates" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", href: "#blog" },
        { label: "Documentation", href: "#docs" },
        { label: "Help Center", href: "#support" },
      ],
    },
  ];

  const socials = [
    { label: "Twitter", icon: FaXTwitter, href: "#" },
    { label: "GitHub", icon: FaGithub, href: "#" },
    { label: "LinkedIn", icon: FaLinkedin, href: "#" },
    { label: "Instagram", icon: FaInstagram, href: "#" },
  ];

  return (
    <footer className="theme-section-soft relative w-full overflow-hidden px-4 pt-16 sm:px-8 sm:pt-20 md:px-10 lg:px-16">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(132,101,205,0.08),transparent_60%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[var(--color-border)] to-transparent"
      />

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="relative mx-auto w-full max-w-7xl"
      >
        <div className="grid gap-12 pb-12 lg:grid-cols-[1.2fr_1.8fr]">
          <div className="max-w-xl">
            <div className="flex items-center gap-3">
              <div className="flex size-11 items-center justify-center rounded-xl bg-[var(--color-primary)]">
                <span className="text-lg font-bold text-[var(--color-background)]">
                  W
                </span>
              </div>
              <div className="flex items-baseline gap-1">
                <p className="text-2xl font-bold tracking-tight text-[var(--color-text)]">
                  WriteFlow
                </p>
                <span className="text-xl font-bold text-[var(--color-accent)]">
                  ai
                </span>
              </div>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-[var(--color-muted)] sm:text-base">
              WriteFlow AI helps creators, marketers, and startups generate
              high-quality content faster with intelligent AI workflows.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              {socials.map((s) => {
                const IconComponent = s.icon;
                return (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.16 }}
                    className="theme-button-secondary inline-flex size-11 items-center justify-center rounded-full p-0 transition-colors duration-150"
                    aria-label={s.label}
                  >
                    <IconComponent className="text-xl" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="text-sm font-semibold text-[var(--color-text)]">
                  {col.title}
                </p>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <motion.a
                        href={link.href}
                        whileHover={{ x: 2 }}
                        transition={{ duration: 0.16 }}
                        className="inline-flex text-sm text-[var(--color-muted)] transition-colors duration-150 hover:text-[var(--color-accent)]"
                      >
                        {link.label}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex flex-col items-center justify-between gap-4 border-t border-[var(--color-border)] py-8 sm:flex-row">
          <p className="text-xs font-semibold text-[var(--color-muted)]">
            © {new Date().getFullYear()} WriteFlow AI. All rights reserved.
          </p>

          <div className="flex items-center gap-2 text-xs font-semibold text-[var(--color-muted)]">
            <span className="inline-flex items-center gap-2">
              <span className="relative inline-flex size-2 rounded-full bg-[var(--color-accent)]" />
              Status: Online
            </span>
            <span className="text-[var(--color-border)]">•</span>
            <span>Built by WriteFlow AI</span>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
