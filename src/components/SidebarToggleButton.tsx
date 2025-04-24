import React from "react";

interface Props {
  onClick: () => void;
}

const SidebarToggleButton: React.FC<Props> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="z-50 p-2 bg-amber-50 text-orange-400 rounded-md"
    aria-label="Toggle sidebar"
  >
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  </button>
);

export default SidebarToggleButton;
