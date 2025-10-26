import { getProducts } from "@/services/productService";
import { useProductStore } from "@/store/productStore";
import { useQuery } from "@tanstack/react-query";

export const useProduct = () => {
  const { filters } = useProductStore((state) => state);

   return useQuery({
     queryKey: ["products", filters],
     queryFn: () => getProducts(filters),
     keepPreviousData: true,
     retry: 1,
     staleTime: 1000 * 60 * 5,
   });
};