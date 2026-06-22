// import { useMemo } from "react";
import {
  FiBarChart2,
  FiCode,
  FiLayers,
  FiMessageSquare,
  FiShield,
  FiTarget,
} from "../../../../assets/icons/icons";
 
export const resources =  [
      {
        id: "ai-writing-tips",
        category: "Guides",
        title: "AI Writing Tips",
        description:
          "Write clearer hooks, stronger CTAs, and better structure — without losing your voice.",
        meta: "6 min read",
        icon: FiMessageSquare,
        featured: true,
      },
      {
        id: "product-updates",
        category: "Updates",
        title: "Product Updates",
        description:
          "See what is new in WriteFlow AI — faster generation, new templates, and smarter rewrites.",
        meta: "Changelog",
        icon: FiBarChart2,
      },
      {
        id: "prompt-engineering-guide",
        category: "Playbook",
        title: "Prompt Engineering Guide",
        description:
          "Practical prompt patterns for captions, blogs, emails, and scripts that convert.",
        meta: "9 min read",
        icon: FiTarget,
      },
      {
        id: "workflow-documentation",
        category: "Docs",
        title: "Workflow Documentation",
        description:
          "Learn how to go from brief → draft → refine → publish with consistent quality.",
        meta: "Documentation",
        icon: FiLayers,
      },
      {
        id: "content-strategy-guide",
        category: "Strategy",
        title: "Content Strategy Guide",
        description:
          "Plan content pillars, repurpose ideas, and stay consistent across channels.",
        meta: "8 min read",
        icon: FiShield,
      },
      {
        id: "api-integrations",
        category: "Developers",
        title: "API & Integrations",
        description:
          "Embed WriteFlow AI in your product or tools — templates, tone control, and exports.",
        meta: "API reference",
        icon: FiCode,
      },
      {
        id: "template-workflows",
        category: "Docs",
        title: "Template Workflows",
        description:
          "A practical library of repeatable workflows: captions, blogs, emails, and scripts — with examples you can copy.",
        meta: "10 min read",
        icon: FiLayers,
        featured: true,
      },
    ]