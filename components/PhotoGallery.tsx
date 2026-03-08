"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

interface Props {
  photos: string[];
  basePath: string;
  altPrefix?: string;
}

export default function PhotoGallery({ photos, basePath, altPrefix = "Family photo" }: Props) {
  // -1 means closed; >= 0 means open at that index
  const [index, setIndex] = useState(-1);
  const isOpen = index >= 0;

  const close = useCallback(() => setIndex(-1), []);
  const prev = useCallback(() => setIndex((i) => (i - 1 + photos.length) % photos.length), [photos.length]);
  const next = useCallback(() => setIndex((i) => (i + 1) % photos.length), [photos.length]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, close, prev, next]);

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      {/* Thumbnail grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {photos.map((photo, i) => (
          <button
            key={photo}
            type="button"
            onClick={() => setIndex(i)}
            className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-zoom-in group"
            aria-label={`View photo ${i + 1}`}
          >
            <Image
              src={`${basePath}/${photo}`}
              alt={`${altPrefix} ${i + 1}`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={close}
        >
          {/* Close */}
          <button
            type="button"
            onClick={close}
            className="absolute top-4 right-5 text-white/80 hover:text-white text-5xl leading-none z-10 transition-colors"
            aria-label="Close"
          >
            ×
          </button>

          {/* Prev */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-6xl leading-none z-10 p-2 transition-colors select-none"
            aria-label="Previous photo"
          >
            ‹
          </button>

          {/* Full image */}
          <div
            className="flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={`${basePath}/${photos[index]}`}
              alt={`${altPrefix} ${index + 1}`}
              width={1200}
              height={900}
              unoptimized
              style={{ maxWidth: "90vw", maxHeight: "88vh", width: "auto", height: "auto" }}
              className="rounded shadow-2xl"
            />
          </div>

          {/* Next */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-6xl leading-none z-10 p-2 transition-colors select-none"
            aria-label="Next photo"
          >
            ›
          </button>

          {/* Counter */}
          <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/50 text-sm tabular-nums pointer-events-none">
            {index + 1} / {photos.length}
          </p>
        </div>
      )}
    </>
  );
}
