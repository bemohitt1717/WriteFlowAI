import { motion } from "framer-motion";
 import { resources } from "./data/blogData";

const Blogs = () => {
   
  
  return (
    <section
      id="resources"
      className="theme-section-soft relative w-full overflow-hidden px-4 py-16 sm:px-8 sm:py-20 md:px-10 md:py-24 lg:px-16"
    >
      {/* Ambient background lighting */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(132,101,205,0.08),transparent_60%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-44 -top-44 h-[560px] w-[560px] rounded-full bg-[var(--color-primary)]/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-52 -right-56 h-[640px] w-[640px] rounded-full bg-[var(--color-secondary)]/16 blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-[var(--color-text)] sm:text-5xl md:text-6xl">
            Resources to Help You{" "}
            <span className="text-[var(--color-accent)]">
              Create Better
            </span>
          </h2>

          <p className="mt-4 text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
            Explore guides, product updates, AI writing tips, and documentation
            to get the most out of WriteFlow AI.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:mt-12 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((r, index) => {
            const Icon = r.icon;
            const isFeatured = Boolean(r.featured);

            return (
              <motion.article
                key={r.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{
                  duration: 0.45,
                  ease: "easeOut",
                  delay: index * 0.04,
                }}
                whileHover={{ y: -3 }}
                className={`group theme-card relative overflow-hidden rounded-2xl p-6 transition-transform duration-150 hover:-translate-y-0.5 ${
                  isFeatured ? "lg:col-span-2" : ""
                }`}
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_15%,rgba(132,101,205,0.1),transparent_55%)] opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                />

                <div className="relative flex items-start justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1 text-[11px] font-semibold text-[var(--color-muted)]">
                      {r.category}
                    </span>
                    <span className="inline-flex rounded-full border border-[var(--color-border)] bg-[var(--color-primary)]/10 px-3 py-1 text-[11px] font-semibold text-[var(--color-accent)]">
                      {r.meta}
                    </span>
                    {isFeatured && (
                      <span className="inline-flex rounded-full border border-[var(--color-border)] bg-[var(--color-primary)]/10 px-3 py-1 text-[11px] font-semibold text-[var(--color-accent)]">
                        Featured
                      </span>
                    )}
                  </div>

                  <motion.div
                    aria-hidden
                    className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl border border-[var(--color-border)] bg-[var(--color-primary)]/10 text-[var(--color-accent)]"
                  >
                    <div
                      aria-hidden
                      className="absolute inset-0 rounded-2xl bg-[var(--color-primary)]/5 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                    />
                    <Icon size={22} className="relative" />
                  </motion.div>
                </div>

                <h3 className="relative mt-5 text-lg font-semibold leading-tight text-[var(--color-text)]">
                  {r.title}
                </h3>
                <p className="relative mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
                  {r.description}
                </p>

                <div className="relative mt-6 flex items-center justify-between gap-3">
                  <span className="text-xs font-semibold text-[var(--color-muted)]">
                    Updated weekly
                  </span>
                  <button
                    type="button"
                    className="theme-button-secondary inline-flex items-center justify-center rounded-full px-4 py-2 text-xs font-semibold transition-colors duration-150"
                  >
                    Read More
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center md:mt-12">
          <motion.button
            type="button"
            className="theme-button-secondary inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors"
          >
            Explore Documentation
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Blogs;

