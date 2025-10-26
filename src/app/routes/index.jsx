import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "@/pages/Login/LoginPage";
import HomePage from "@/pages/Home/HomePage";
import ProductDetailsPage from "@/pages/Product/ProductDetailsPage";
import ProfilePage from "@/pages/Profile/ProfilePage";
import ProtectedRoute from "./ProtectedRoute";
import AuthRoute from "./AuthRoute";
import MainLayout from "../layouts/MainLayout";

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
          path="/"
          element={
            <ProtectedRoute>
              <MainLayout>
                <HomePage />
              </MainLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/product/:id"
          element={
            <ProtectedRoute>
              <MainLayout>
                <ProductDetailsPage />
              </MainLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
            <MainLayout> <ProfilePage /></MainLayout>
             
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
