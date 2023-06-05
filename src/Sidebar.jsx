import { FaTimes } from "react-icons/fa";
import logo from "./assets/logo.png";
import { social, links } from "./data";
import { useGlobalContext } from "./context";

export const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
      <div className="sidebar-header">
        <img src={logo} alt="Sangy K" className="logo" />
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
    </aside>
  );
};
