import React, { useState } from "react";
import { FaUser, FaYoutube } from "react-icons/fa";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onAdd?: (payload: {
    url: string;
    title: string;
    author?: string;
    thumbnail: string;
  }) => void;
}

const YouTubeModal: React.FC<Props> = ({ isOpen, onClose, onAdd }) => {
  const [url, setUrl] = useState("");
  const [meta, setMeta] = useState<null | {
    title: string;
    author_name: string;
    thumbnail_url: string;
  }>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const fetchOEmbed = async (videoUrl: string) => {
    if (!videoUrl) return;
    setLoading(true);
    setError(null);
    setMeta(null);
    try {
      const endpoint = `https://www.youtube.com/oembed?url=${encodeURIComponent(
        videoUrl
      )}&format=json`;
      const res = await fetch(endpoint);
      if (!res.ok) throw new Error("No metadata found for this URL");
      const data = await res.json();
      setMeta({
        title: data.title,
        author_name: data.author_name,
        thumbnail_url: data.thumbnail_url,
      });
    } catch (err: Error | unknown) {
      setError(err instanceof Error ? err.message : "Failed to fetch metadata");
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") fetchOEmbed(url);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      aria-modal="true"
      role="dialog"
    >
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />

      <div
        className="relative bg-white rounded-lg shadow-xl w-130 max-w-full p-6 mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <FaYoutube size={20} className="text-red-600" />
            Add YouTube Content
          </h3>
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={onClose}
            aria-label="Close"
          >
            ✕
          </button>
        </header>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            URL
          </label>
          <input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            onBlur={() => fetchOEmbed(url)}
            onKeyDown={handleKey}
            className="w-full border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-300"
            placeholder="Paste a URL here"
          />
          {error ? (
            <p className="text-sm text-red-500 mt-2">{error}</p>
          ) : (
            <p className="text-sm text-gray-500 mt-2">
              Press Enter or click outside to fetch preview
            </p>
          )}
        </div>

        {/* Preview intentionally hidden in modal; metadata is still fetched for Add Content */}

        {loading && (
          <div className="mb-4 p-3 bg-blue-50 rounded text-sm text-blue-700">
            Fetching metadata...
          </div>
        )}

        <div className="mb-6">
          <h4 className="text-sm font-semibold mb-3">Supports</h4>
          <ul className="space-y-3 text-sm text-gray-700">
            <li className="flex items-center gap-3">
              <FaYoutube size={20} className="text-red-600" />
              YouTube Videos/Shorts
            </li>
            <li className="flex items-center gap-3">
              <FaUser className="text-gray-600" />
              YouTube Channel
            </li>
          </ul>
        </div>

        <footer className="flex items-center justify-end gap-3">
          <button
            className="px-4 py-2 rounded bg-white border"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 rounded bg-indigo-500 text-white disabled:opacity-50"
            onClick={() => {
              if (meta && onAdd) {
                onAdd({
                  url,
                  title: meta.title,
                  author: meta.author_name,
                  thumbnail: meta.thumbnail_url,
                });
              }
              onClose();
            }}
            disabled={!meta}
          >
            Add Content
          </button>
        </footer>
      </div>
    </div>
  );
};

export default YouTubeModal;
