import React from "react";
import { Skeleton } from "../ui/skeleton";

function ProductDetailsSkeleton() {
  return (
    <div className="min-h-screen items-center">
      <div className="w-full gap-8 grid grid-cols-1 md:grid-cols-2 mt-10">
        <div className="flex flex-col gap-4">
          <Skeleton className="h-140 w-full rounded-sm" />
          <div className="overflow-hidden flex gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton className="h-20 w-full rounded-sm" />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <Skeleton className="h-4 w-[50%] rounded-lg" />
          <Skeleton className="h-4 w-full rounded-lg" />
          <Skeleton className="h-4 w-[70%] rounded-lg" />
          <div className="flex gap-4">
            <Skeleton className="h-15 w-[50%] rounded-lg" />
            <Skeleton className="h-15 w-[50%] rounded-lg" />
          </div>
          <div className="flex gap-2">
            <Skeleton className="h-4 w-[30%] rounded-lg" />
            <Skeleton className="h-4 w-[50%] rounded-lg" />
          </div>
          <div className="flex gap-2">
            <Skeleton className="h-4 w-[30%] rounded-lg" />
            <Skeleton className="h-4 w-[50%] rounded-lg" />
          </div>
          <div className="flex gap-2">
            <Skeleton className="h-4 w-[30%] rounded-lg" />
            <Skeleton className="h-4 w-[50%] rounded-lg" />
          </div>
          <div className="flex gap-2">
            <Skeleton className="h-4 w-[30%] rounded-lg" />
            <Skeleton className="h-4 w-[50%] rounded-lg" />
          </div>
          <Skeleton className="h-4 w-[70%] rounded-lg" />
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsSkeleton;
