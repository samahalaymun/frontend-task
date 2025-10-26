import { Button } from "@/components/ui/button";
import { useProductDetails } from "@/hooks/useProductDetails";
import { ArrowLeft } from "lucide-react";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DetailsCard from "./DetailsCard";
import { Badge } from "@/components/ui/badge";
import ReviewCard from "./ReviewCard";
import RatingCard from "./RatingCard";
import { ButtonGroup } from "@/components/ui/button-group";
import ProductDetailsSkeleton from "@/components/common/ProductDetailsSkeleton";

function ProductDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isPending, isError, error } = useProductDetails(id);
  const discountedPrice = (
    data?.price -
    (data?.price * data?.discountPercentage) / 100
  ).toFixed(2);

  const [currentImage, setCurrentImage] = useState(0);

  if (isPending) return <ProductDetailsSkeleton/>;
  return (
    <div>
      <div className="w-full mb-2 md:mb-5 ">
        <Button
          onClick={() => navigate("/")}
          variant="ghots"
          className="text-gray-500"
        >
          <ArrowLeft /> Back to products
        </Button>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-4">
          <div className="border border-r rounded-sm">
            <img src={data.images[currentImage]} />
          </div>
          <div className="flex flex-row gap-4 overflow-x-scroll">
            {data.images.map((image, index) => (
              <div
                className={`w-30 border rounded-sm ${
                  index === currentImage
                    ? "border-2 border-gray-500 opacity-70"
                    : "border-gray-300 "
                }`}
                onClick={() => setCurrentImage(index)}
              >
                <img src={image} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="lg:text-4xl md:text-2xl text-base font-semibold border-b border-gray-400 pb-4">
            {data.title}
          </h1>
          <div className="flex items-center gap-2">
            <span className="md:text-lg text-sm font-bold">
              ${discountedPrice}
            </span>
            {data.discountPercentage > 0 && (
              <span className="text-xs md:text-sm line-through text-gray-400">
                ${data.price}
              </span>
            )}

            {data.discountPercentage > 0 && (
              <span className="  text-red-400 text-xs md:text-sm">
                -{data.discountPercentage}%
              </span>
            )}
          </div>
          <div className="border-b border-gray-400 pb-4">
            <h4 className="lg:text-2xl md:text-lg text-sm font-semibold mb-2">
              Customer reviews
            </h4>

            <RatingCard
              width="w-4 md:w-8"
              high="h-4 md:h-8"
              rating={data.rating}
              maxRating={5}
              size="text-xs md:text-lg"
            />
          </div>

          <div className="flex flex-col gap-4">
            <DetailsCard label="Brand" value={data.brand} />
            <DetailsCard label="Category" value={data.category} />
            <div className="flex gap-2">
              <ButtonGroup>
                <Button variant="outline">-</Button>
                <Button variant="outline">1</Button>
                <Button variant="outline">+</Button>
              </ButtonGroup>
              <Button>Add to cart</Button>
            </div>
            <DetailsCard label="Availablity" value={data.availabilityStatus} />
            <DetailsCard label="Return policy" value={data.returnPolicy} />
            <DetailsCard
              label="Shipping Information"
              value={data.shippingInformation}
            />
          </div>
          <div className="flex flex-row gap-2">
            {data.tags.map((tag) => (
              <Badge>{tag}</Badge>
            ))}
          </div>

          <div>
            <h4 className="md:text-base text-sm font-medium mb-2">Details:</h4>
            <p className="md:text-base text-sm">Style #: {data.sku}</p>
          </div>
        </div>
      </div>

      <div className="my-10">
        <h3 className="lg:text-2xl md:text-lg text-base font-semibold mb-2">
          Reviews
        </h3>
        <div className="flex flex-col gap-6">
          {data.reviews.map((review) => (
            <ReviewCard review={review} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
