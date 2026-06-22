export const plans = [
    {
      name: "STARTER",
      price: "Free",
      description:
        "For trying WriteFlow AI and building a daily writing habit.",
      dotClass: "",
      innerBorderClass: "border-[var(--color-border)]",
      buttonClass: "theme-button-secondary",
      features: [
        { text: "Caption + idea generation", included: true },
        { text: "Smart rewriting (limited)", included: true },
        { text: "Tone presets (basic)", included: true },
        { text: "Original content generation", included: true },
        { text: "Export formats (basic)", included: false },
        { text: "Analytics insights", included: false },
      ],
    },
    {
      name: "PRO",
      price: "$19",
      description:
        "For creators who publish consistently and want faster output.",
      dotClass: "",
      innerBorderClass: "border-[var(--color-primary)]/35",
      buttonClass: "theme-button-secondary",
      features: [
        { text: "Captions, blogs, hooks & scripts", included: true },
        { text: "Smart rewriting + expand/shorten", included: true },
        { text: "Tone control (all presets)", included: true },
        { text: "One-click export (PDF/Word/MD)", included: true },
        { text: "Templates for recurring content", included: true },
        { text: "Performance insights (analytics)", included: true },
      ],
    },
    {
      name: "ENTERPRISE",
      price: "$49",
      description:
        "For teams scaling content with workflows, API, and support.",
      dotClass: "",
      innerBorderClass: "border-[var(--color-border)]",
      buttonClass: "theme-button-secondary",
      features: [
        { text: "Unlimited workspaces & team seats", included: true },
        { text: "API integration for your product", included: true },
        { text: "Custom templates + workflows", included: true },
        { text: "Advanced analytics & reporting", included: true },
        { text: "Multi-language generation (50+)", included: true },
        { text: "Priority 24/7 support", included: true },
      ],
    },
  ];
