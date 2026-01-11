import { useState } from "react";
import { FaTiktok, FaYoutube } from "react-icons/fa";
import { FiFileText, FiUpload } from "react-icons/fi";
import { GoFileDirectory } from "react-icons/go";
import { RiGlobalLine, RiInstagramFill } from "react-icons/ri";
import YouTubeModal from "./common/YouTubeModal";

export const Sidebar = () => {
  const [isYTOpen, setIsYTOpen] = useState(false);
  return (
    <aside className="fixed left-2 top-44 z-40">
      <div className="bg-white rounded-xl shadow-md p-4 flex flex-col gap-2 items-center w-18">
        <button
          aria-label="AI Assistant"
          className="group relative w-12 h-12 rounded-full flex items-center justify-center bg-linear-to-br from-indigo-500 via-violet-500 to-cyan-400 text-white hover:opacity-90"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-bot-message-square text-white size-6"
          >
            <path d="M12 6V2H8"></path>
            <path d="m8 18-4 4V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Z"></path>
            <path d="M2 12h2"></path>
            <path d="M9 11v2"></path>
            <path d="M15 11v2"></path>
            <path d="M20 12h2"></path>
          </svg>
          <span className="absolute left-full ml-4 top-1/2 -translate-y-1/2 hidden group-hover:flex items-center gap-2 bg-white text-black px-3 py-1.5 rounded-full shadow whitespace-nowrap">
            <span className="text-sm">AI Assistant</span>
          </span>
        </button>

        <button
          aria-label="Add YouTube Content"
          onClick={() => setIsYTOpen(true)}
          className="group relative w-12 h-12 rounded-full flex items-center justify-center bg-white text-black hover:bg-[#437CFF] hover:text-white transition-colors duration-200"
        >
          <FaYoutube size={25} />
          <span className="absolute left-full ml-4 top-1/2 -translate-y-1/2 hidden group-hover:flex items-center gap-2 bg-white text-black px-3 py-1.5 rounded-full shadow whitespace-nowrap">
            <span className="text-sm">Add YouTube Content</span>
            <kbd className="ml-4 text-xs bg-gray-100 px-2 py-0.5 rounded">
              Y
            </kbd>
          </span>
        </button>

        <button
          aria-label="Add TikTok Content"
          className="group relative w-12 h-12 rounded-full flex items-center justify-center bg-white textblack0 hover:bg-[#437CFF] hover:text-white transition-colors duration-200"
        >
          <FaTiktok size={25} />
          <span className="absolute left-full ml-4 top-1/2 -translate-y-1/2 hidden group-hover:flex items-center gap-2 bg-white text-black px-3 py-1.5 rounded-full shadow whitespace-nowrap">
            <span className="text-sm">Add TikTok Content</span>
            <kbd className="ml-4 text-xs bg-gray-100 px-2 py-0.5 rounded">
              T
            </kbd>
          </span>
        </button>
        <button
          aria-label="Add TikTok Content"
          className="group relative w-12 h-12 rounded-full flex items-center justify-center bg-white textblack0 hover:bg-[#437CFF] hover:text-white transition-colors duration-200"
        >
          <RiInstagramFill size={25} />
          <span className="absolute left-full ml-4 top-1/2 -translate-y-1/2 hidden group-hover:flex items-center gap-2 bg-white text-black px-3 py-1.5 rounded-full shadow whitespace-nowrap">
            <span className="text-sm">Add Instagram Content</span>
            <kbd className="ml-4 text-xs bg-gray-100 px-2 py-0.5 rounded">
              I
            </kbd>
          </span>
        </button>
        <button
          aria-label="Add TikTok Content"
          className="group relative w-12 h-12 rounded-full flex items-center justify-center bg-white textblack0 hover:bg-[#437CFF] hover:text-white transition-colors duration-200"
        >
          <RiGlobalLine size={25} />
          <span className="absolute left-full ml-4 top-1/2 -translate-y-1/2 hidden group-hover:flex items-center gap-2 bg-white text-black px-3 py-1.5 rounded-full shadow whitespace-nowrap">
            <span className="text-sm">Add Website Link</span>
            <kbd className="ml-4 text-xs bg-gray-100 px-2 py-0.5 rounded">
              G
            </kbd>
          </span>
        </button>
        <button
          aria-label="Add Website Link"
          className="group relative w-11 h-11 rounded-full flex items-center justify-center bg-white text-gray-700 hover:bg-[#437CFF] hover:text-white transition-colors duration-200"
        >
          <FiFileText size={25} className="text-current" />
          <span className="absolute left-full ml-4 top-1/2 -translate-y-1/2 hidden group-hover:flex items-center gap-2 bg-white text-black px-3 py-1.5 rounded-full shadow whitespace-nowrap">
            <span className="text-sm">Add Text Content</span>
            <kbd className="ml-4 text-xs bg-gray-100 px-2 py-0.5 rounded">
              F
            </kbd>
          </span>
        </button>
        <button
          aria-label="Add Website Link"
          className="group relative w-11 h-11 rounded-full flex items-center justify-center bg-white text-gray-700 hover:bg-[#437CFF] hover:text-white transition-colors duration-200"
        >
          <FiUpload size={25} className="text-current" />
          <span className="absolute left-full ml-4 top-1/2 -translate-y-1/2 hidden group-hover:flex items-center gap-2 bg-white text-black px-3 py-1.5 rounded-full shadow whitespace-nowrap">
            <span className="text-sm">Upload File</span>
            <kbd className="ml-4 text-xs bg-gray-100 px-2 py-0.5 rounded">
              U
            </kbd>
          </span>
        </button>

        <button
          aria-label="Files"
          className="group relative w-12 h-12 rounded-full flex items-center justify-center bg-white text-gray-700 hover:bg-[#437CFF] hover:text-white transition-colors duration-200"
        >
          <GoFileDirectory size={25} />
          <span className="absolute left-full ml-4 top-1/2 -translate-y-1/2 hidden group-hover:flex items-center gap-2 bg-white text-black px-3 py-1.5 rounded-full shadow">
            <span className="text-sm">Files</span>
            <kbd className="ml-4 text-xs bg-gray-100 px-2 py-0.5 rounded">
              D
            </kbd>
          </span>
        </button>
      </div>
      {isYTOpen && (
        <YouTubeModal isOpen={isYTOpen} onClose={() => setIsYTOpen(false)} />
      )}
    </aside>
  );
};

export default Sidebar;
