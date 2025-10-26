import { getProductDetails } from "@/services/productService";
import { useQuery } from "@tanstack/react-query";

export const useProductDetails = ( productId ) => {
  return useQuery({
    queryKey: ["productDetails",productId],
    queryFn: () => getProductDetails(productId),
    retry: 1,
    staleTime: 1000 * 60 * 5,
  });
};