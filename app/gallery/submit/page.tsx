"use client";

import { useState, useRef } from "react";
import Link from "next/link";

type Status = "idle" | "loading" | "success" | "error";

export default function SubmitPhotoPage() {
  const [uploaderName, setUploaderName] = useState("");
  const [caption, setCaption] = useState("");
  const [event, setEvent] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) return;
    setFile(f);
    setPreview(URL.createObjectURL(f));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) { setErrorMsg("Please select a photo."); setStatus("error"); return; }
    setStatus("loading");
    setErrorMsg("");

    const formData = new FormData();
    formData.append("photo", file);
    formData.append("uploader_name", uploaderName.trim());
    formData.append("caption", caption.trim());
    formData.append("event", event.trim());

    const res = await fetch("/api/photos/submit", { method: "POST", body: formData });

    if (res.ok) {
      setStatus("success");
    } else {
      const data = await res.json();
      setErrorMsg(data.error || "Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="max-w-lg mx-auto px-4 py-24 text-center">
        <div className="text-6xl mb-4">📸</div>
        <h1 className="text-3xl font-serif font-bold text-primary-900 mb-3">Photo Submitted!</h1>
        <p className="text-gray-600 mb-8">
          Thanks for sharing! Your photo will be reviewed and added to the gallery soon.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/gallery" className="btn-primary inline-block">← Back to Gallery</Link>
          <button
            onClick={() => {
              setUploaderName(""); setCaption(""); setEvent("");
              setFile(null); setPreview(null); setStatus("idle");
              if (fileRef.current) fileRef.current.value = "";
            }}
            className="inline-block border border-primary-300 hover:border-primary-500 text-primary-700 font-semibold px-6 py-3 rounded-xl transition-all text-sm hover:bg-primary-50"
          >
            Submit Another
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto px-4 py-16">
      <div className="text-center mb-10">
        <div className="text-5xl mb-4">📸</div>
        <p className="text-sm font-bold uppercase tracking-widest text-warm-600 mb-2">Photo Gallery</p>
        <h1 className="text-4xl font-serif font-bold text-primary-900 mb-3">Submit a Photo</h1>
        <p className="text-gray-600 max-w-md mx-auto">
          Share a family photo and it will be reviewed for the{" "}
          <Link href="/gallery" className="text-primary-600 hover:text-primary-800 underline underline-offset-2">
            Photo Gallery
          </Link>.
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 md:p-8">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="uploader_name" className="block text-sm font-semibold text-gray-700 mb-1.5">
              Your Name <span className="text-red-500">*</span>
            </label>
            <input
              id="uploader_name"
              type="text"
              required
              value={uploaderName}
              onChange={(e) => setUploaderName(e.target.value)}
              placeholder="e.g. Uncle Rob"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
              Photo <span className="text-red-500">*</span>
            </label>
            <div
              onClick={() => fileRef.current?.click()}
              className="cursor-pointer border-2 border-dashed border-gray-300 hover:border-primary-400 rounded-xl p-6 text-center transition-colors"
            >
              {preview ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={preview} alt="Preview" className="max-h-48 mx-auto rounded-lg object-contain" />
              ) : (
                <>
                  <div className="text-4xl mb-2">🖼️</div>
                  <p className="text-sm text-gray-500">Click to choose a photo</p>
                  <p className="text-xs text-gray-400 mt-1">JPEG, PNG, GIF or WebP · Max 10 MB</p>
                </>
              )}
            </div>
            <input
              ref={fileRef}
              type="file"
              accept="image/jpeg,image/jpg,image/png,image/gif,image/webp"
              onChange={handleFile}
              className="hidden"
            />
            {file && (
              <p className="text-xs text-gray-400 mt-1.5">{file.name} ({(file.size / 1024 / 1024).toFixed(1)} MB)</p>
            )}
          </div>

          <div>
            <label htmlFor="caption" className="block text-sm font-semibold text-gray-700 mb-1.5">
              Caption <span className="font-normal text-gray-400">(optional)</span>
            </label>
            <input
              id="caption"
              type="text"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              placeholder="e.g. The whole gang at Christmas 2019"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400"
            />
          </div>

          <div>
            <label htmlFor="event" className="block text-sm font-semibold text-gray-700 mb-1.5">
              Event / Year <span className="font-normal text-gray-400">(optional)</span>
            </label>
            <input
              id="event"
              type="text"
              value={event}
              onChange={(e) => setEvent(e.target.value)}
              placeholder="e.g. Reunion 2021, Christmas 2019"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400"
            />
          </div>

          {status === "error" && (
            <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
              ⚠️ {errorMsg}
            </p>
          )}

          <button
            type="submit"
            disabled={status === "loading" || !file}
            className="w-full bg-primary-800 hover:bg-primary-900 disabled:opacity-60 text-white font-bold py-3.5 rounded-xl transition-all text-sm shadow-md"
          >
            {status === "loading" ? "Uploading…" : "📸 Submit Photo"}
          </button>
        </form>
      </div>

      <div className="text-center mt-6">
        <Link href="/gallery" className="text-sm text-gray-500 hover:text-primary-700 transition-colors">
          ← Back to Gallery
        </Link>
      </div>
    </div>
  );
}
