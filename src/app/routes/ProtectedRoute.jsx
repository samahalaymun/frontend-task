import { Navigate } from "react-router-dom"
import { useAuthStore } from "@/store/authStore"

export default function ProtectedRoute({ children }) {
  const { token } = useAuthStore((s) => s)
  return token ? (
    children
  ) : (
    <Navigate to="/login?message=Please login first" replace />
  )
}
