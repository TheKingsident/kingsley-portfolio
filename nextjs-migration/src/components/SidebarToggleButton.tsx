import React from "react";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
<FontAwesomeIcon icon={faBars} />

interface Props {
  onClick: () => void;
  isSidebarOpen: boolean;
}

const SidebarToggleButton: React.FC<Props> = ({ onClick, isSidebarOpen }) => (
  <button
    onClick={onClick}
    className="z-50 px-2 py-1 bg-amber-50 text-orange-400 rounded-md text-2xl"
    aria-label="Toggle sidebar"
  >
    <FontAwesomeIcon icon={isSidebarOpen ? faXmark : faBars} />
  </button>
);

export default SidebarToggleButton;
