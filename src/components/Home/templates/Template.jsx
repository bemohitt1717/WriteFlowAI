import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  FiBarChart2,
  FiLayers,
  FiMessageSquare,
  FiSend,
  FiTarget,
  FiZap,
} from "../../../assets/icons/icons";
import { filters, templates } from "./data";

const Template = () => {
 

  

  const [activeFilter, setActiveFilter] = useState("All");
  const [query, setQuery] = useState("");

  const filteredTemplates = useMemo(() => {
    const q = query.trim().toLowerCase();
    return templates.filter((t) => {
      const matchesFilter = activeFilter === "All" || t.category === activeFilter;
      const matchesQuery =
        q.length === 0 ||
        t.title.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q) ||
        t.category.toLowerCase().includes(q);
      return matchesFilter && matchesQuery;
    });
  }, [activeFilter, query, templates]);

  return (
    <section
      id="templates"
      className="theme-section relative w-full overflow-hidden px-4 py-16 sm:px-8 sm:py-20 md:px-10 md:py-24 lg:px-16"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(132,101,205,0.08),transparent_60%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-[var(--color-primary)]/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-44 -right-44 h-[560px] w-[560px] rounded-full bg-[var(--color-secondary)]/16 blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
         

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-[var(--color-text)] sm:text-5xl md:text-6xl">
            Create Anything with{" "}
            <span className="text-[var(--color-accent)]">
              Smart Templates
            </span>
          </h2>

          <p className="mt-4 text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
            Explore professionally crafted AI templates for creators, marketers,
            startups, and teams.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:mt-12 sm:gap-5">
          <div className="flex flex-col items-stretch justify-between gap-4 md:flex-row md:items-center">
            <div className="relative w-full md:max-w-md">
              <div className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-[var(--color-accent)]">
                <FiMessageSquare size={18} />
              </div>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search templates..."
                className="w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] py-3 pl-11 pr-4 text-sm text-[var(--color-text)] outline-none transition-colors placeholder:text-[var(--color-muted)] focus:border-[var(--color-accent)]/50"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-[var(--color-border)]"
              />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 md:justify-end">
              {filters.map((label) => {
                const active = label === activeFilter;
                return (
                  <button
                    key={label}
                    type="button"
                    onClick={() => setActiveFilter(label)}
                    className={`relative inline-flex items-center justify-center rounded-full px-4 py-2 text-xs font-semibold transition-all duration-200 ${
                      active
                        ? "text-[var(--color-background)]"
                        : "text-[var(--color-muted)] hover:text-[var(--color-text)]"
                    }`}
                  >
                    <span
                      className={`absolute inset-0 rounded-full ${
                        active
                          ? "bg-[var(--color-primary)]"
                          : "bg-[var(--color-surface)]"
                      }`}
                    />
                    <span
                      className={`absolute inset-0 rounded-full border ${
                        active ? "border-[var(--color-accent)]/40" : "border-[var(--color-border)]"
                      }`}
                    />
                    <span className="relative">{label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filteredTemplates.map((t, index) => {
              const Icon = t.icon;
              return (
                <motion.article
                  key={t.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.04 }}
                  whileHover={{ y: -3 }}
                  className="group theme-card relative overflow-hidden rounded-2xl p-6 transition-transform duration-150 hover:-translate-y-0.5"
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_15%,rgba(132,101,205,0.12),transparent_55%)] opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                  />

                  <motion.div
                    className="relative mb-5 inline-flex size-12 items-center justify-center rounded-2xl border border-[var(--color-border)] bg-[var(--color-primary)]/10 text-[var(--color-accent)]"
                  >
                    <div
                      aria-hidden
                      className="absolute inset-0 rounded-2xl bg-[var(--color-primary)]/5 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                    />
                    <Icon size={22} className="relative" />
                  </motion.div>

                  <div className="mb-3 flex items-center justify-between gap-3">
                    <h3 className="text-lg font-semibold leading-tight text-[var(--color-text)]">
                      {t.title}
                    </h3>
                    <span className="shrink-0 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1 text-[11px] font-semibold text-[var(--color-muted)]">
                      {t.category}
                    </span>
                  </div>

                  <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                    {t.description}
                  </p>

                  <div className="mt-5 flex items-center justify-between gap-3">
                    <span className="inline-flex rounded-full border border-[var(--color-border)] bg-[var(--color-primary)]/10 px-3 py-1 text-[11px] font-semibold text-[var(--color-accent)]">
                      {t.badge}
                    </span>
                    <button
                      type="button"
                      className="theme-button-primary inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-colors duration-150"
                    >
                      Generate Template
                      <span
                        aria-hidden
                        className="inline-flex"
                      >
                        <FiZap size={14} />
                      </span>
                    </button>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Template;

