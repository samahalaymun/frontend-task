import React, { useEffect } from "react";
import AppRoutes from "@/app/routes";
import { useAuthStore } from "@/store/authStore";

export default function App() {
  const { token, setupAutoLogout } = useAuthStore((state) => state);
  useEffect(() => {
    if (token) setupAutoLogout(token);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <AppRoutes />
    </div>
  );
}
