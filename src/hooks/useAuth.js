import { loginUser } from "@/services/authService";
import { useAuthStore } from "@/store/authStore";
import { useMutation } from "@tanstack/react-query";

export const useAuth = () => {
  const { setToken, setUser } = useAuthStore((state) => state);
  return useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      setToken(data.accessToken);
      setUser(data);
    },
  });
};
