import Link from "next/link";
import { AnimatedGradientButton } from "@/components/animated-gradient-button";

export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center bg-slate-950">
      <Link href="https://vercel.com" target="_blank" rel="noopener noreferrer">
        <AnimatedGradientButton text="Deploy Now 🚀" />
      </Link>
    </div>
  );
}