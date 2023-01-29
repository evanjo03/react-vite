import ContentWrapper from "./ContentWrapper";
import NavSidebar from "./NavSidebar";

export default function Layout() {
  return (
    <div className="relative">
      <NavSidebar />
      <ContentWrapper />
    </div>
  );
}
