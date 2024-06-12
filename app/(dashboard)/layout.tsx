import React from "react";
import Header from "@/components/header";

interface DashboardLayout {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayout> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="px-3 lg:px-14">{children}</main>
    </>
  );
};

export default DashboardLayout;
