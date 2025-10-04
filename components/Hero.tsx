
"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-full flex justify-center py-10">
      <div className="relative w-[90%] max-w-5xl h-[300px] md:h-[500px]  overflow-hidden shadow-lg">
        <Image
          src="/header.jpg"
          alt="Hero Image"
          fill
          style={{ objectFit: "cover" }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
        />
      </div>
    </div>
  );
}
