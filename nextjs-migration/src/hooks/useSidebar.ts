import { useState } from "react";

const useSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return { isSidebarOpen, toggleSidebar, closeSidebar };
};

export default useSidebar;
