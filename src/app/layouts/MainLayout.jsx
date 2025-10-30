import Navbar from "@/components/common/Navbar"
import Footer from "@/components/common/Footer"
import { Outlet } from "react-router-dom"

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Top navbar */}
      <Navbar />

      {/* Page content */}
      <main className="flex-1 p-2 md:p-6">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
