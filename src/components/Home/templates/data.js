import {
  FiBarChart2,
  FiLayers,
  FiMessageSquare,
  FiSend,
  FiTarget,
  FiZap,
} from "../../../assets/icons/icons";

export const filters = ["All", "Social Media", "Blogs", "Marketing", "Emails", "Scripts"];

export  const templates = 
[
      {
        id: "instagram-caption",
        title: "Instagram Caption",
        description:
          "Scroll-stopping captions with hooks, emojis, and a clear call to action — in your tone.",
        category: "Social Media",
        icon: FiZap,
        badge: "High engagement",
      },
      {
        id: "product-launch-copy",
        title: "Product Launch Copy",
        description:
          "Launch messaging that highlights value, handles objections, and drives sign-ups.",
        category: "Marketing",
        icon: FiTarget,
        badge: "Conversion ready",
      },
      {
        id: "linkedin-post",
        title: "LinkedIn Post",
        description:
          "Thoughtful, professional posts with strong openers, structure, and credibility.",
        category: "Social Media",
        icon: FiBarChart2,
        badge: "Founder-friendly",
      },
      {
        id: "youtube-script",
        title: "YouTube Script",
        description:
          "A complete script with a hook, pacing, transitions, and a natural-sounding outro.",
        category: "Scripts",
        icon: FiLayers,
        badge: "Creator workflow",
      },
      {
        id: "email-campaign",
        title: "Email Campaign",
        description:
          "A multi-email sequence with subject lines, personalization angles, and clear CTAs.",
        category: "Emails",
        icon: FiSend,
        badge: "Sequence included",
      },
      {
        id: "blog-outline",
        title: "Blog Outline",
        description:
          "SEO-aware outlines with headings, key points, and suggested sections to fill fast.",
        category: "Blogs",
        icon: FiMessageSquare,
        badge: "Publish faster",
      },
    ];