import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility: cn()
 * ----------------------------------
 * Merges class names using clsx + tailwind-merge.
 * Prevents conflicting Tailwind classes and keeps final output clean.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}