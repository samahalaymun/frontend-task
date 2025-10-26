import { Navigate } from "react-router-dom";
import { useAuthStore } from "@/store/authStore";

export default function AuthRoute({ children }) {
  const token = useAuthStore((state) => state.token);

  if (token) {
    return <Navigate to="/" replace />;
  }

  return children;
}
