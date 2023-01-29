import { SidebarProvider } from "../../contexts/SidebarContext";
import ContentWrapper from "./ContentWrapper";
import NavSidebar from "./NavSidebar";

export default function Layout() {
  return (
    <SidebarProvider>
      <div className="relative">
        <NavSidebar />
        <ContentWrapper />
      </div>
    </SidebarProvider>
  );
}
