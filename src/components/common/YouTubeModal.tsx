import React from "react";
import { FaUser, FaYoutube } from "react-icons/fa";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const YouTubeModal: React.FC<Props> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      aria-modal="true"
      role="dialog"
    >
      <div
        className="absolute inset-0 bg-black/70"
        onClick={onClose}
      />

      <div
        className="relative bg-white rounded-lg shadow-xl w-130 max-w-full p-6 mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <FaYoutube size={20} className="text-red-600" />
            Add YouTube Content
          </h3>
          <button className="text-gray-500 hover:text-gray-700" onClick={onClose} aria-label="Close">
            ✕
          </button>
        </header>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">URL</label>
          <input className="w-full border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-300" placeholder="Paste a URL here" />
          <p className="text-sm text-red-500 mt-2">Please enter a URL</p>
        </div>

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
          <button className="px-4 py-2 rounded bg-white border" onClick={onClose}>Cancel</button>
          <button className="px-4 py-2 rounded bg-indigo-500 text-white">Add Content</button>
        </footer>
      </div>
    </div>
  );
};

export default YouTubeModal;
