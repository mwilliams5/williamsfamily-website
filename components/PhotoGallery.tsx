"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

interface Props {
  photos: string[];
  basePath: string;
  altPrefix?: string;
}

export default function PhotoGallery({ photos, basePath, altPrefix = "Family photo" }: Props) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const close = useCallback(() => setLightboxIndex(null), []);

  const prev = useCallback(
    () => setLightboxIndex((i) => (i !== null ? (i - 1 + photos.length) % photos.length : null)),
    [photos.length]
  );

  const next = useCallback(
    () => setLightboxIndex((i) => (i !== null ? (i + 1) % photos.length : null)),
    [photos.length]
  );

  // Keyboard navigation
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIndex, close, prev, next]);

  // Lock body scroll when open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxIndex]);

  return (
    <>
      {/* Photo grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {photos.map((photo, i) => (
          <button
            key={photo}
            onClick={() => setLightboxIndex(i)}
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

      {/* Lightbox overlay */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/92"
          onClick={close}
        >
          {/* Close button */}
          <button
            onClick={close}
            className="absolute top-4 right-5 text-white/80 hover:text-white text-5xl leading-none z-10 transition-colors"
            aria-label="Close"
          >
            ×
          </button>

          {/* Prev arrow */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-6xl leading-none z-10 p-2 transition-colors select-none"
            aria-label="Previous photo"
          >
            ‹
          </button>

          {/* Image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${basePath}/${photos[lightboxIndex]}`}
            alt={`${altPrefix} ${lightboxIndex + 1}`}
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: "90vw", maxHeight: "88vh", objectFit: "contain" }}
            className="rounded shadow-2xl"
          />

          {/* Next arrow */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-6xl leading-none z-10 p-2 transition-colors select-none"
            aria-label="Next photo"
          >
            ›
          </button>

          {/* Counter */}
          <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/50 text-sm tabular-nums">
            {lightboxIndex + 1} / {photos.length}
          </p>
        </div>
      )}
    </>
  );
}
