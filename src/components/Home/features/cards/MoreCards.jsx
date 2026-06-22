import { motion } from "framer-motion";
import {
  FiCode,
  FiDownload,
  FiLayers,
  FiRefreshCw,
  FiTarget,
  FiUser,
} from "../../../../assets/icons/icons";

const moreFeatures = [
  {
    icon: FiDownload,
    title: "One-Click Export",
    description: "Download in multiple formats: PDF, Word, markdown, and more.",
  },
  {
    icon: FiRefreshCw,
    title: "Smart Rewriting",
    description:
      "Rephrase, simplify, or enhance any text with intelligent suggestions.",
  },
  {
    icon: FiTarget,
    title: "Tone Control",
    description:
      "Choose from professional, casual, friendly, or custom tone settings.",
  },
  {
    icon: FiCode,
    title: "API Integration",
    description:
      "Seamlessly integrate WriteFlow AI into your own applications.",
  },
  {
    icon: FiUser,
    title: "Custom Templates",
    description:
      "Create and save templates for recurring content types and workflows.",
  },
  {
    icon: FiLayers,
    title: "Multi-Language",
    description: "Generate content in 50+ languages with native quality.",
  },
];

const MoreCard = ({ icon: Icon, title, description }) => {
  return (
    <motion.div
      className="group theme-card relative overflow-hidden rounded-xl p-6 transition-transform duration-150 hover:-translate-y-0.5"
      whileHover={{ y: -2 }}
      transition={{ duration: 0.16 }}
    >
      <div className="absolute inset-0 bg-[var(--color-primary)]/5 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
      <div className="relative z-10">
        <div className="mb-4 inline-flex rounded-lg bg-[var(--color-primary)]/10 p-3 text-[var(--color-accent)]">
          <Icon size={24} />
        </div>
        <h3 className="mb-2 text-base font-semibold leading-tight text-[var(--color-text)]">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-[var(--color-muted)]">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const MoreCards = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
      {moreFeatures.map((feature) => (
        <MoreCard
          key={feature.title}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
};

export default MoreCards;
