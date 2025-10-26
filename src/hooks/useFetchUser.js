import { getUserProfile } from "@/services/authService";
import { useQuery } from "@tanstack/react-query";

export const useFetchUser = () => {
    return useQuery({
      queryKey: ["userProfile"],
      queryFn: getUserProfile,
      retry: 1,
      staleTime: 1000 * 60 * 5,
    });
};
