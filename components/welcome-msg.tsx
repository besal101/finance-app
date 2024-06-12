"use client";

import React from "react";
import { useUser } from "@clerk/nextjs";

const Welcomemsg = () => {
  const { user, isLoaded } = useUser();
  return (
    <div className="mb-4 space-y-2">
      <h2 className="text-2xl font-medium text-white lg:text-4xl">
        Welcome Back{isLoaded ? "," : ""} {user?.firstName}👋
      </h2>
      <p className="text-sm text-[#89b6fd] lg:text-base">
        This is your financial Overview Report
      </p>
    </div>
  );
};

export default Welcomemsg;
