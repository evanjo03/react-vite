import { Outlet } from "react-router-dom";
import { useSidebar } from "../../contexts/SidebarContext";

export default function ContentWrapper() {
  const { isExpanded, setIsExpanded } = useSidebar();
  return (
    <div
      className={`absolute top-0 right-0 p-6 pl-[74px] flex flex-col justify-center items-center w-full ${
        isExpanded && "blur-sm sm:blur-none"
      }`}
    >
      <Outlet />
    </div>
  );
}
