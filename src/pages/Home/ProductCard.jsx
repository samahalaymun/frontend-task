import React from "react";
import { useNavigate } from "react-router-dom";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

function ProductCard({ product, onAddToCart }) {
  const navigate = useNavigate();
  const discountedPrice = (
    product.price -
    (product.price * product.discountPercentage) / 100
  ).toFixed(2);
  return (
    <div
      key={product.id}
      className="cursor-pointer group border rounded-sm overflow-hidden hover:shadow-sm transition-all"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <div className="relative w-full overflow-hidden">

        <AspectRatio ratio={1 / 1}>
          <img
            src={product.thumbnail}
            alt={product.title}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform"
          />
        </AspectRatio>
      </div>
      <div className="p-2 space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-sm md:text-lg font-bold">
            ${discountedPrice}
          </span>
          {product.discountPercentage > 0 && (
            <span className="text-xs line-through text-gray-400">
              ${product.price}
            </span>
          )}

          {product.discountPercentage > 0 && (
            <span className="  text-red-400 text-xs">
              -{product.discountPercentage}%
            </span>
          )}
        </div>
        <h3 className=" text-sm md:text-lg font-semibold truncate">
          {product.title}
        </h3>
        <p className="md:text-sm text-xs text-gray-500">
          {product.brand} •{" "}
          <span className="capitalize">{product.category}</span>
        </p>

        <div className="flex items-center text-yellow-500 text-xs md:text-sm">
          <Star className="w-4 h-4 fill-yellow-400" />
          <span className="ml-1 text-gray-700">{product.rating}</span>
        </div>

        <p
          className={`md:text-sm text-xs ${
            product.availabilityStatus === "In Stock"
              ? "text-green-600"
              : "text-red-500"
          }`}
        >
          {product.availabilityStatus}
        </p>
        <Button
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart(product);
          }}
          className="w-full mt-2 "
          variant="outline"
        >
          Buy now
        </Button>
      </div>
    </div>
  );
}

export default ProductCard;
