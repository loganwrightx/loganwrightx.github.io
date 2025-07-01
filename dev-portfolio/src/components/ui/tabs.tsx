import React, { ReactNode, useState, createContext, useContext } from "react";

type TabsContextType = {
  activeTab: string;
  setActiveTab: (value: string) => void;
};

const TabsContext = createContext<TabsContextType | undefined>(undefined);

export function Tabs({ defaultValue, children }: { defaultValue: string; children: ReactNode }) {
  const [activeTab, setActiveTab] = useState(defaultValue);
  return <TabsContext.Provider value={{ activeTab, setActiveTab }}>{children}</TabsContext.Provider>;
}

export function TabsList({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`flex justify-center gap-4 bg-[#3a3a3c] rounded-xl p-2 border border-[#48484a] ${className}`}
    >
      {children}
    </div>
  );
}

export function TabsTrigger({
  value,
  children,
  className = "",
}: {
  value: string;
  children: ReactNode;
  className?: string;
}) {
  const context = useContext(TabsContext);
  if (!context) throw new Error("TabsTrigger must be used within Tabs");
  const { activeTab, setActiveTab } = context;

  const isActive = activeTab === value;
  return (
    <button
      onClick={() => setActiveTab(value)}
      className={`
        px-4 py-2 rounded-xl font-medium cursor-pointer select-none
        transition-colors duration-200
        ${isActive ? "bg-[#ffd60a] text-black" : "text-[#f5f5f7] hover:text-[#ffd60a]"}
        ${className}
      `}
    >
      {children}
    </button>
  );
}

export function TabsContent({
  value,
  children,
  className = "",
}: {
  value: string;
  children: ReactNode;
  className?: string;
}) {
  const context = useContext(TabsContext);
  if (!context) throw new Error("TabsContent must be used within Tabs");
  const { activeTab } = context;

  if (activeTab !== value) return null;

  return <div className={`mt-6 ${className}`}>{children}</div>;
}
