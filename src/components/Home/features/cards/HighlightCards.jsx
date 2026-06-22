import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiBarChart2,
  FiShield,
  FiX,
  FiZap,
} from "../../../../assets/icons/icons";

const cardTransition = {
  type: "spring",
  stiffness: 190,
  damping: 28,
  mass: 0.9,
};

const detailVariants = {
  hidden: { opacity: 0, y: 14, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.42, ease: "easeOut" },
  },
};

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
};

const highlightedFeatures = [
  {
    icon: FiZap,
    imageSrc: "/gifs/lightning-fast-saas.gif",
    title: "Lightning Fast",
    description:
      "Generate engaging content in seconds, not hours. Our AI-powered engine delivers results instantly.",
    extendedDescription:
      "Move from rough idea to polished draft with a fast generation loop built for creators, founders, and lean content teams.",
    details: [
      "Instant prompt-to-draft generation for captions, blogs, and ideas.",
      "Smart suggestions reduce rewrite cycles without losing your voice.",
      "Reusable outputs help teams publish more consistently.",
      "Fast feedback loops keep momentum high across every campaign.",
    ],
    typewriter:
      "WriteFlow keeps the creative flow moving: brief, generate, refine, and publish while the idea is still fresh.",
  },
  {
    icon: FiBarChart2,
    imageSrc: "/gifs/data-driven-insights-saas.gif",
    title: "Data-Driven Insights",
    description:
      "Get performance metrics and analytics to optimize every piece of content for maximum engagement.",
    extendedDescription:
      "Turn content performance into clear creative direction with actionable signals that help every draft become sharper.",
    details: [
      "Surface engagement patterns before your next campaign goes live.",
      "Compare messaging angles across formats and audiences.",
      "Spot high-performing tones, hooks, and calls to action.",
      "Give teams a shared view of what is working.",
    ],
    typewriter:
      "Every recommendation is designed to make your next piece more focused, more relevant, and easier to improve.",
  },
  {
    icon: FiShield,
    imageSrc: "/gifs/original-content-verification-saas.gif",
    title: "100% Original Content",
    description:
      "Every piece is unique and plagiarism-free. Built with ethical AI practices and quality assurance.",
    extendedDescription:
      "Create confidently with originality checks, consistent guidance, and brand-aware generation that avoids generic output.",
    details: [
      "Generate fresh drafts from your own positioning and inputs.",
      "Keep brand tone consistent across campaigns and channels.",
      "Reduce repetitive phrasing with guided rewrite options.",
      "Ship content with stronger quality control from the start.",
    ],
    typewriter:
      "Originality is not just a safety feature. It is how WriteFlow helps your brand sound specific, credible, and alive.",
  },
];

const TypewriterText = ({ text }) => {
  const [visibleText, setVisibleText] = useState("");

  useEffect(() => {
    let index = 0;

    const timer = window.setInterval(() => {
      index += 1;
      setVisibleText(text.slice(0, index));

      if (index >= text.length) {
        window.clearInterval(timer);
      }
    }, 24);

    return () => window.clearInterval(timer);
  }, [text]);

  return (
    <p className="min-h-16 text-sm leading-relaxed text-[var(--color-muted)] sm:text-base">
      {visibleText}
      <motion.span
        aria-hidden
        className="ml-0.5 inline-block h-4 w-0.5 translate-y-0.5 bg-[var(--color-accent)]"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut" }}
      />
    </p>
  );
};

const HighlightCard = ({ feature, index, active, dimmed, onOpen, onClose }) => {
  const Icon = feature.icon;
  const hasImage = Boolean(feature.imageSrc);

  return (
    <motion.article
      layout
      role={!active ? "button" : undefined}
      tabIndex={!active ? 0 : undefined}
      aria-label={!active ? `${feature.title} feature card` : undefined}
      aria-expanded={!active ? active : undefined}
      onClick={!active ? onOpen : undefined}
      onKeyDown={(event) => {
        if (active) return;
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onOpen();
        }
      }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ ...cardTransition, delay: index * 0.04 }}
      whileHover={
        !active
          ? { y: -3, transition: { duration: 0.18 } }
          : undefined
      }
      className={`group theme-card relative overflow-hidden rounded-xl ${
        hasImage && !active ? "p-4 sm:p-5" : "p-7 sm:p-8 lg:p-9"
      } ${
        active
          ? "min-h-165 p-5 sm:p-7 md:col-span-3 lg:min-h-125 lg:p-8"
          : "min-h-90 cursor-pointer"
      } ${
        dimmed
          ? "opacity-45 blur-[1px] saturate-75"
          : "opacity-100 blur-0 saturate-100"
      } transition-[box-shadow,opacity,filter] duration-300`}
    >
      {active && (
        <motion.div
          className="absolute -inset-px rounded-xl bg-[var(--color-primary)]/35"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}

      <div
        aria-hidden
        className={`absolute inset-0 ${
          active
            ? "bg-[radial-gradient(circle_at_30%_10%,rgba(132,101,205,0.18),transparent_36%)]"
            : "bg-[radial-gradient(circle_at_30%_10%,rgba(132,101,205,0.12),transparent_48%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        }`}
      />

      <div className="relative z-10 h-full rounded-[10px]">
        <div
          className={`grid h-full gap-8 ${
            active ? "lg:grid-cols-[0.9fr_1.1fr] lg:items-center" : ""
          }`}
        >
          <div className="flex flex-col">
            {hasImage ? (
              <motion.div
                layout
                className={`relative mb-6 w-full overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] ${
                  active ? "aspect-[16/8.2] lg:aspect-video" : "aspect-video"
                }`}
              >
                <div
                  aria-hidden
                  className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(132,101,205,0.14),transparent_40%)]"
                />
                <motion.img
                  src={feature.imageSrc}
                  alt={`${feature.title} visual`}
                  className="relative z-10 h-full w-full object-cover"
                  initial={false}
                  animate={{ opacity: 1, scale: active ? 1.015 : 1.02 }}
                  transition={cardTransition}
                  loading="lazy"
                  decoding="async"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-[var(--color-border)]"
                />
              </motion.div>
            ) : (
              <motion.div
                layout
                className={`mb-5 inline-flex w-fit items-center justify-center overflow-hidden rounded-lg border border-[var(--color-border)] bg-[var(--color-primary)]/10 p-5 text-[var(--color-accent)] ${
                  active ? "sm:p-5" : ""
                }`}
              >
                <motion.div
                  animate={active ? { scale: [1, 1.03, 1] } : undefined}
                  transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Icon size={active ? 56 : 35} />
                </motion.div>
              </motion.div>
            )}

            <motion.h3
              layout="position"
              className={`mb-3 font-semibold leading-tight text-[var(--color-text)] ${
                active ? "text-3xl sm:text-4xl" : "text-2xl md:text-3xl"
              }`}
            >
              {feature.title}
            </motion.h3>

            <motion.p
              layout="position"
              className={`leading-relaxed ${
                active
                  ? "max-w-2xl text-base text-[var(--color-muted)] sm:text-lg"
                  : "text-base text-[var(--color-muted)] sm:text-lg"
              }`}
            >
              {active ? feature.extendedDescription : feature.description}
            </motion.p>

            {!active && (
              <div className="mt-7 text-sm font-semibold text-[var(--color-accent)]">
                <motion.span
                  className="inline-flex items-center gap-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  animate={{ x: 0 }}
                >
                  Read More -&gt;
                </motion.span>
              </div>
            )}
          </div>

          <AnimatePresence>
            {active && (
              <motion.div
                className="relative"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  hidden: { opacity: 0, scale: 0.98, filter: "blur(10px)" },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    filter: "blur(0px)",
                    transition: {
                      staggerChildren: 0.08,
                      delayChildren: 0.12,
                    },
                  },
                }}
              >
                <motion.button
                  type="button"
                  aria-label="Close feature details"
                  onClick={(event) => {
                    event.stopPropagation();
                    onClose();
                  }}
                  className="absolute right-0 top-0 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-muted)] transition-colors hover:text-[var(--color-text)]"
                >
                  <FiX size={18} />
                </motion.button>

                <motion.div
                  variants={detailVariants}
                  className="theme-pill mb-7 mr-12 inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em]"
                >
                  Premium workflow
                </motion.div>

                <motion.ul
                  variants={listVariants}
                  className="mb-7 grid gap-3 sm:grid-cols-2"
                >
                  {feature.details.map((item) => (
                    <motion.li
                      key={item}
                      variants={detailVariants}
                      className="flex items-start gap-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)]/80 p-4 text-sm leading-relaxed text-[var(--color-muted)]"
                    >
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[var(--color-accent)]" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>

                <motion.div
                  variants={detailVariants}
                  className="mb-8 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/80 p-5"
                >
                  <TypewriterText
                    key={feature.title}
                    text={feature.typewriter}
                  />
                </motion.div>

                <motion.div variants={detailVariants}>
                  <motion.button
                    type="button"
                    onClick={(event) => event.stopPropagation()}
                    className="theme-button-primary inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition-colors"
                  >
                    Explore this feature
                  </motion.button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.article>
  );
};

const HighlightCards = ({ activeFeature, setActiveFeature }) => {
  return (
    <motion.div
      layout
      className="relative mb-16 grid grid-cols-1 gap-6 sm:mb-20 sm:gap-8 md:mb-24 md:grid-cols-3 md:gap-9"
    >
      <AnimatePresence>
        {activeFeature !== null && (
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 rounded-[2rem] bg-[radial-gradient(circle_at_50%_40%,rgba(132,101,205,0.14),transparent_44%)]"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.35 }}
          />
        )}
      </AnimatePresence>

      {highlightedFeatures.map((feature, index) => (
        <HighlightCard
          key={feature.title}
          feature={feature}
          index={index}
          active={activeFeature === index}
          dimmed={activeFeature !== null && activeFeature !== index}
          onOpen={() => setActiveFeature(index)}
          onClose={() => setActiveFeature(null)}
        />
      ))}
    </motion.div>
  );
};

export default HighlightCards;
