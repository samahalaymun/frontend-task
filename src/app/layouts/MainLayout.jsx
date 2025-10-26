import React from "react";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

export default function MainLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Top navbar */}
      <Navbar />

      {/* Page content */}
      <main className="flex-1 p-2 md:p-6">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
