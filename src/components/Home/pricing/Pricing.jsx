import { useState } from "react";
import { CheckIcon, CrossIcon, ArrowIcon } from "./icons/icons.jsx";
import { plans } from "./data/PlanData";
import { useNavigate } from "react-router-dom";
import { PATHS } from "@/utils/path";

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState("");

  const navigate = useNavigate();

  return (
    <section className="theme-section-soft relative w-full overflow-hidden px-4 py-16 sm:px-8 sm:py-20 md:px-10 md:py-24 lg:px-16">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[var(--color-primary)]/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[var(--color-secondary)]/16 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(132,101,205,0.08),transparent_60%)]"
      />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center">
        <h2 className="mt-6 text-center text-4xl font-bold tracking-tight text-[var(--color-text)] sm:text-5xl md:text-6xl">
          Simple & Affordable{" "}
          <span className="text-[var(--color-accent)]">Pricing</span>
        </h2>
        <p className="mt-4 max-w-2xl text-center text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
          Pick a plan that matches your workflow. Upgrade anytime as your
          content output grows.
        </p>

        <div className="mt-10 grid w-full max-w-6xl grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => {
            const isPro = plan.name === "PRO";
            const isSelected = selectedPlan === plan.name;

            return (
              <div
                key={plan.name}
                role="button"
                tabIndex={0}
                aria-label={`${plan.name} plan`}
                aria-pressed={isSelected}
                onClick={() => setSelectedPlan(plan.name)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedPlan(plan.name);
                  }
                }}
                className={`group relative rounded-3xl border p-1.5 transition-transform duration-150 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]/50 ${
                  isPro
                    ? "border-[var(--color-primary)]/45 bg-[var(--color-primary)]/8"
                    : "border-[var(--color-border)] bg-[var(--color-surface)]"
                } ${isSelected ? "ring-2 ring-[var(--color-accent)]/35" : "ring-0"}`}
              >
                <div
                  aria-hidden
                  className={`pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
                    isPro
                      ? "bg-[radial-gradient(circle_at_30%_10%,rgba(132,101,205,0.14),transparent_45%)]"
                      : "bg-[radial-gradient(circle_at_30%_10%,rgba(132,101,205,0.08),transparent_50%)]"
                  }`}
                />
                {isPro && (
                  <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--color-border)] bg-[var(--color-background)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                    Most popular
                  </div>
                )}

                <div
                  className={`relative h-full rounded-3xl border ${plan.innerBorderClass} bg-[var(--color-surface)] p-6 transition-colors duration-150 sm:p-7`}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`size-4 rounded-sm transition-all duration-200 ${
                        isSelected
                          ? "bg-[var(--color-accent)] ring-2 ring-[var(--color-accent)]/40"
                          : plan.dotClass
                      }`}
                    />
                    <p className="text-sm font-semibold text-[var(--color-text)]">
                      {plan.name}
                    </p>
                  </div>

                  <div className="mt-5 flex items-end gap-2">
                    <h3 className="text-4xl font-semibold text-[var(--color-text)]">
                      {plan.price}
                    </h3>
                    {plan.price !== "Free" && (
                      <p className="pb-1 text-xs font-semibold uppercase tracking-wide text-[var(--color-muted)]">
                        /month
                      </p>
                    )}
                  </div>

                  <p className="mt-4 max-w-[28ch] text-sm leading-relaxed text-[var(--color-muted)] sm:text-base">
                    {plan.description}
                  </p>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedPlan(plan.name);
                      if (plan.name == "STARTER") {
                        navigate(PATHS.DASHBOARD);
                      }
                    }}
                    className={`mt-6 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors duration-150 ${
                      isSelected ? "theme-button-primary" : plan.buttonClass
                    }`}
                  >
                    {plan.name === "STARTER" ? "START FREE" : "GET STARTED"}
                    <ArrowIcon className="transition-all duration-300 group-hover:translate-x-1" />
                  </button>

                  <div className="mt-9 space-y-4">
                    {plan.features.map((feature) => (
                      <div
                        key={feature.text}
                        className="flex items-center gap-2.5 text-sm sm:text-base"
                      >
                        <span
                          className={`inline-flex size-6 items-center justify-center rounded-full ${
                            feature.included
                              ? "bg-[var(--color-primary)]/10 text-[var(--color-accent)]"
                              : "bg-[var(--color-surface)] text-[var(--color-muted)]"
                          }`}
                        >
                          {feature.included ? <CheckIcon /> : <CrossIcon />}
                        </span>
                        <p
                          className={
                            feature.included
                              ? "text-[var(--color-muted)]"
                              : "text-[var(--color-muted)]/65"
                          }
                        >
                          {feature.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
