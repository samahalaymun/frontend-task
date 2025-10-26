import React from "react";

export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-5">
      <div className="w-full max-w-md py-6 px-4  md:p-8 bg-card rounded-lg shadow-lg">
        {children}
      </div>
    </div>
  );
}
