import { motion } from "framer-motion";
import ctaMotion from "../../../assets/svg/cta-motion.svg";
import { FiZap } from "../../../assets/icons/icons";
import { PATHS } from "../../../utils/path";
import { useNavigate } from "react-router-dom";
import { container, item } from "./data/ctaData";

const CtaSection = () => {
  const navigate = useNavigate();



  return (
    <section
      id="final-cta"
      className="theme-section-soft relative w-full overflow-hidden px-4 py-16 sm:px-8 sm:py-20 md:px-10 md:py-24 lg:px-16"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[var(--color-border)] to-transparent"
      />

      <div className="relative mx-auto w-full max-w-7xl">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="theme-card relative overflow-hidden rounded-3xl"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-linear-to-br from-[var(--color-surface)]/70 via-white to-[var(--color-surface)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-[var(--color-border)]"
          />

          <div className="relative grid gap-8 p-6 sm:p-8 md:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-10 lg:p-12">
            <div className="relative max-w-xl">
              <motion.div
                variants={item}
                className="theme-pill inline-flex items-center gap-2 rounded-full px-4 py-2"
              >
                <span className="size-1.5 rounded-full bg-[var(--color-accent)]" />
                <p className="text-sm font-semibold">Ready to start</p>
              </motion.div>

              <motion.h2
                variants={item}
                className="mt-5 text-4xl font-bold leading-tight tracking-tight text-[var(--color-text)] sm:text-5xl"
              >
                Turn your idea into a{" "}
                <span className="text-[var(--color-accent)]">draft</span>.
              </motion.h2>

              <motion.p
                variants={item}
                className="mt-4 max-w-lg text-base leading-relaxed text-[var(--color-muted)] sm:text-lg"
              >
                Start with a rough thought. WriteFlow turns it into clean,
                ready-to-edit content in seconds.
              </motion.p>

              <motion.div
                variants={item}
                className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
              >
                <button
                  onClick={() => {
                    navigate(PATHS.DASHBOARD);
                  }}
                  type="button"
                  className="theme-button-primary cursor-pointer inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold transition-colors sm:w-auto"
                >
                  Get Started Free
                  <FiZap size={18} className="text-white/95" />
                </button>
              </motion.div>

              <motion.p
                variants={item}
                className="mt-4 text-sm font-semibold text-[var(--color-muted)]"
              >
                No credit card required.
              </motion.p>
            </div>

            <motion.div
              variants={item}
              className="relative flex min-h-[270px] items-center justify-center sm:min-h-[360px] lg:min-h-[430px]"
            >
              <motion.img
                src={ctaMotion}
                alt="WriteFlow AI drafting preview"
                className="w-full max-w-[620px] select-none object-contain"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
