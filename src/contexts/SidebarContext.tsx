import React, { createContext, useContext, useState } from "react";

type SidebarContextValue = { isExpanded: boolean; setIsExpanded: Function };
const SidebarContext = createContext<SidebarContextValue | null>(null);

export type SidebarProviderProps = {
  children?: React.ReactNode;
};

export function SidebarProvider({ children }: any) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <SidebarContext.Provider value={{ isExpanded, setIsExpanded }}>
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  const context = useContext(SidebarContext);

  if (!context) {
    throw new Error(
      "useCurrentUser has to be used within <CurrentUserContext.Provider>"
    );
  }

  return context;
}
