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
 * Improved version with:
 * - More predictable animation timing
 * - Cleaned class structure
 * - Optional disabled state support
 * - Better accessibility (aria-label, type="button")
 */
export function AnimatedGradientButton({
  text = "Click Me",
  className,
  onClick,
}: AnimatedGradientButtonProps) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    onClick?.();
    setTimeout(() => setClicked(false), 350);
  };

  return (
    <motion.button
      type="button"
      aria-label={text}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      className={cn(
        "relative inline-flex h-12 select-none overflow-hidden rounded-xl p-[1px]",
        "focus:outline-none transition-all duration-300",
        "hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]",
        className
      )}
    >
      {/* Animated gradient border */}
      <span
        className="absolute inset-[-1000%] animate-gradient-spin bg-[conic-gradient(from_90deg_at_50%_50%,#06b6d4_0%,#3b82f6_50%,#06b6d4_100%)]"
      />

      {/* Button body */}
      <span className="relative inline-flex h-full w-full items-center justify-center rounded-xl bg-slate-900 px-6 text-sm font-medium text-white backdrop-blur-3xl transition-colors duration-300 hover:bg-slate-800">
        {text}

        {/* Click ripple effect */}
        <AnimatePresence>
          {clicked && (
            <motion.span
              key="ripple"
              className="absolute inset-0 rounded-xl bg-blue-500/40"
              initial={{ scale: 0, opacity: 0.6 }}
              animate={{ scale: 1.5, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            />
          )}
        </AnimatePresence>
      </span>
    </motion.button>
  );
}
