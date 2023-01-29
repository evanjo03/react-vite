import { Outlet } from "react-router-dom";
import NavSidebar from "./NavSidebar";

export default function Layout() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <NavSidebar />
        <Outlet />
      </div>
    </div>
  );
}
