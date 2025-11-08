import { AnimatedGradientButton } from "@/components/animated-gradient-button";

export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center bg-slate-950">
      <AnimatedGradientButton text="Deploy Now 🚀" href="https://vercel.com" />
    </div>
  );
}
