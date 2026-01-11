

export const Sidebar = () => {
  return (
    <aside className="fixed left-2 top-54 z-40">
      <div className="bg-white rounded-xl shadow-md p-2 flex flex-col gap-3 items-center w-14">
        <button className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-gray-100">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="3"
              y="3"
              width="18"
              height="18"
              rx="4"
              stroke="#111827"
              strokeWidth="1.2"
            />
            <circle cx="12" cy="12" r="3" fill="#111827" />
          </svg>
        </button>

        <button className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-gray-100">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 6.5v11c0 1-1 1.5-1.9.9l-5.6-3.4a2 2 0 00-2.1 0l-5.6 3.4A1.2 1.2 0 013 17.5v-11C3 5.5 4 5 4.9 5.6l5.6 3.4a2 2 0 002.1 0l5.6-3.4c.9-.5 1.9 0 1.9.9z"
              stroke="#111827"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <button className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-gray-100">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2v20M2 12h20"
              stroke="#111827"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <button className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-gray-100">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="8" r="3" stroke="#111827" strokeWidth="1.2" />
            <path
              d="M6 19c1-3 5-4 6-4s5 1 6 4"
              stroke="#111827"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <button className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-gray-100">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 12h18M12 3v18"
              stroke="#111827"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <button className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-gray-100">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="3"
              y="4"
              width="18"
              height="14"
              rx="2"
              stroke="#111827"
              strokeWidth="1.2"
            />
            <path
              d="M7 8h10"
              stroke="#111827"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <button className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-gray-100">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 12h16M8 8l-4 4 4 4"
              stroke="#111827"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <button className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-gray-100">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 7h18v10H3z"
              stroke="#111827"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
            <path
              d="M8 12h8"
              stroke="#111827"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
