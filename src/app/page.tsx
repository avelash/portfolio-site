"use client";

import { useState } from "react";
import Image from "next/image";

export default function HomePage() {
  const [selected, setSelected] = useState<string | null>(null);

  const images = ["/projects/one.jpg", "/projects/two.jpg", "/projects/three.jpg"];

  return (
    <main className="min-h-screen bg-white text-gray-900 p-8">
      {/* Header */}
      <h1 className="text-4xl font-bold text-center mb-8">
        Welcome to Ahinoam&apos;s Portfolio
      </h1>

      {/* Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {images.map((src) => (
          <div
            key={src}
            className="cursor-pointer hover:scale-[1.02] transition"
            onClick={() => setSelected(src)}
          >
            <Image
              src={src}
              alt="Portfolio piece"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>

      {/* Overlay / Lightbox */}
      {selected && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          {/* Close Button */}
          <button
            onClick={() => setSelected(null)}
            className="absolute top-6 right-6 text-white text-3xl font-bold hover:scale-110 transition"
          >
            &times;
          </button>

          {/* Centered Image */}
          <div className="max-w-4xl max-h-[80vh] p-4">
            <Image
              src={selected}
              alt="Expanded view"
              width={1000}
              height={700}
              className="rounded-xl shadow-lg object-contain w-full h-full"
            />
          </div>
        </div>
      )}
    </main>
  );
}
