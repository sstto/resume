"use client";

import { useRef } from "react";
import BentoGrid from "@/components/bento-grid";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <main className="min-h-screen transition-colors duration-500 relative overflow-x-hidden">
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>
      
      <div className="py-12 px-4 md:py-20 md:px-8">
        <BentoGrid />
      </div>
    </main>
  );
}
