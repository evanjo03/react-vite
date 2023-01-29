import { createContext, useContext, useState } from "react";

type SidebarContextValue = { isExpanded: boolean; setIsExpanded: Function };
const SidebarContext = createContext<SidebarContextValue>(
  {} as SidebarContextValue
);

export type SidebarProviderProps = {
  children: JSX.Element;
};

export function SidebarProvider({ children }: SidebarProviderProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <SidebarContext.Provider value={{ isExpanded, setIsExpanded }}>
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  return useContext(SidebarContext);
}
