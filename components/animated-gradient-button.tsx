"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedGradientButtonProps {
  /** Text displayed inside the button */
  text?: string;
  /** Optional custom className for styling overrides */
  className?: string;
  /** Optional callback fired when the button is clicked */
  onClick?: () => void;
}

/**
 * Animated Gradient Button
 * ---------------------------------
 * A reusable, responsive button component featuring:
 * - Conic gradient border animation
 * - Smooth hover/tap scaling (Framer Motion)
 * - Click-triggered ripple pulse animation
 * - Dark theme ready, perfect for UI reels
 */
export function AnimatedGradientButton({
  text = "Click Me",
  className,
  onClick,
}: AnimatedGradientButtonProps) {
  const [clicked, setClicked] = useState(false);

  // Handle button click with temporary animation state
  const handleClick = () => {
    setClicked(true);
    onClick?.(); // optional callback
    setTimeout(() => setClicked(false), 400);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      className={cn(
        "relative inline-flex h-12 select-none overflow-hidden rounded-xl p-[1px]",
        "focus:outline-none transition-all duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]",
        className
      )}
    >
      {/* Animated gradient border */}
      <span className="absolute inset-[-1000%] animate-gradient-spin bg-[conic-gradient(from_90deg_at_50%_50%,#06b6d4_0%,#3b82f6_50%,#06b6d4_100%)]" />

      {/* Button body */}
      <span className="relative inline-flex h-full w-full items-center justify-center rounded-xl bg-slate-900 px-6 text-sm font-medium text-white backdrop-blur-3xl transition-colors duration-300 hover:bg-slate-800">
        {text}

        {/* Click ripple effect */}
        <AnimatePresence>
          {clicked && (
            <motion.span
              key="ripple"
              className="absolute inset-0 rounded-xl bg-blue-500/40"
              initial={{ scale: 0, opacity: 0.7 }}
              animate={{ scale: 1.4, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          )}
        </AnimatePresence>
      </span>
    </motion.button>
  );
}
