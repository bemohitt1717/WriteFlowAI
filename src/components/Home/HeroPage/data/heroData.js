import { useState } from "react";

export const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

export  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };


export const heroContent = {
  heading: "Create Content 10x faster with WriteFlow ai",
  description: "Generate high-quality captions, blogs, and ideas in seconds using powerful AI — no writing skills needed.",
  ctaButton: "Get Started Free",
  assurance: "✓ No credit card required",
  demoHeading: "See WriteFlow AI in Action",
  demoDescription: "Watch how our AI instantly generates engaging content. From captions to blogs, get professional-quality writing in seconds.",
};