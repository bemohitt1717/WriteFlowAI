import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import HighlightCards from "./cards/HighlightCards";
import MoreCards from "./cards/MoreCards";

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(null);

  return (
    <section className="theme-section relative w-full overflow-hidden px-6 py-16 sm:px-8 sm:py-20 md:px-10 md:py-24 lg:px-16 lg:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[var(--color-primary)]/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[var(--color-secondary)]/18 blur-3xl"
      />

      <AnimatePresence>
        {activeFeature !== null && (
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-[220px] z-0 mx-auto h-[620px] max-w-6xl rounded-[2rem] bg-[var(--color-surface)]/65"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          />
        )}
      </AnimatePresence>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-12 text-center sm:mb-16 md:mb-20">
          <h2 className="mb-4 text-4xl font-bold leading-tight text-[var(--color-text)] sm:mb-5 sm:text-5xl md:text-5xl lg:text-6xl">
            Powerful Features for{" "}
            <span className="text-[var(--color-accent)]">
              Modern Content Creators
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-[var(--color-muted)] sm:text-xl">
            Everything you need to create, publish, and analyze content at
            scale. Designed for teams and individuals who demand excellence.
          </p>
        </div>

        <div className="relative left-1/2 w-full max-w-7xl -translate-x-1/2 lg:w-[calc(100vw-8rem)] lg:max-w-[88rem] xl:w-[calc(100vw-10rem)] 2xl:max-w-[92rem]">
          <HighlightCards
            activeFeature={activeFeature}
            setActiveFeature={setActiveFeature}
          />
        </div>

        <div className="mb-12 sm:mb-14 md:mb-16">
          <h3 className="mb-3 text-2xl font-bold text-[var(--color-text)] sm:text-3xl">
            Explore More <span className="text-[var(--color-accent)]">Capabilities</span>
          </h3>
          <p className="max-w-2xl text-base text-[var(--color-muted)] sm:text-lg">
            Powerful tools and integrations designed to enhance your workflow
            and unlock new possibilities.
          </p>
        </div>

        <MoreCards />
      </div>
    </section>
  );
};

export default Features;
