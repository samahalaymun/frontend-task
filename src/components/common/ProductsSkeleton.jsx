import React from 'react'
import { Skeleton } from '../ui/skeleton';

function ProductsSkeleton() {
  return (
    <div className="min-h-screen items-center">
      <div className="w-full gap-2 md:gap-6 grid grid-cols-2 lg:grid-cols-4 sm:grid-cols-3">
        {Array.from({ length: 16 }).map((_, i) => (
          <div className='flex flex-col gap-4'>
            <Skeleton className="h-80 w-full rounded-sm" />
            <Skeleton className="h-2 w-[60%] rounded-sm" />
            <Skeleton className="h-3 w-[80%] rounded-sm" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsSkeleton
