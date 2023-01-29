import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useSidebar } from "../../contexts/SidebarContext";
import useMediaQuery from "../../hooks/useMediaQuery";

export default function ContentWrapper() {
  const { isExpanded } = useSidebar();
  const [conditionalClasses, setConditionalClasses] = useState("");
  const isMobile = useMediaQuery("(max-width: 576px)");

  function getCssClasses(isExpanded: boolean, isMobile: boolean) {
    if (isMobile && isExpanded) {
      return "pl-[74px] blur-sm";
    } else if (!isMobile && isExpanded) {
      return "pl-[424px]";
    } else {
      return "pl-[74px]";
    }
  }

  useEffect(() => {
    setConditionalClasses(getCssClasses(isExpanded, isMobile));
  }, [isMobile, isExpanded]);

  return (
    <div
      className={`absolute top-0 right-0 p-6 flex flex-col justify-center items-center w-full ${conditionalClasses}`}
    >
      <Outlet />
    </div>
  );
}
