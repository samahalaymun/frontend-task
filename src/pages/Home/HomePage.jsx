import { useProduct } from "@/hooks/useProducts";
import React from "react";
import Pagination from "./Pagination";
import ProductsSkeleton from "@/components/common/ProductsSkeleton";
import ProductCard from "./ProductCard";

function HomePage() {
  const { data, isPending, isError, error } = useProduct();

  const handleAddToCart = (product) => {
    console.log("Added to cart:", product.title);
  };
  if (isPending) return <ProductsSkeleton />;
  return (
    <div className="flex flex-col gap-8 items-center">
      <div className="grid grid-cols-2 lg:grid-cols-4 sm:grid-cols-3 gap-2 md:gap-4 lg:gap-6">
        {data?.products?.map((product) => (
          <ProductCard
            product={product}
            key={product.id}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
      <Pagination data={data} />
    </div>
  );
}

export default HomePage;
