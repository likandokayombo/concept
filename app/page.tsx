"use client";

import Hero from "@/components/Hero";
import Description from "@/components/Description";

export default function Home() {
  return (
    <main className="relative bg-gray-50 min-h-screen">
      <Hero />
      <Description />
    </main>
  );
}
