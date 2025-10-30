import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from "@/pages/Login/LoginPage"
import HomePage from "@/pages/Home/home-page"
import ProductDetailsPage from "@/pages/Product/ProductDetailsPage"
import ProfilePage from "@/pages/Profile/ProfilePage"
import ProtectedRoute from "./ProtectedRoute"
import AuthRoute from "./AuthRoute"
import MainLayout from "../layouts/MainLayout"

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public route */}
        <Route
          path="/login"
          element={
            <AuthRoute>
              <LoginPage />
            </AuthRoute>
          }
        />
        {/* Protected routes */}
        <Route
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductDetailsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
