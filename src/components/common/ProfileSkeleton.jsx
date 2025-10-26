import React from 'react'
import { Skeleton } from "@/components/ui/skeleton";

function ProfileSkeleton() {
  return (
    <div className="min-h-screen flex flex-col gap-8 items-center">
      <div className="flex flex-col space-y-3 items-center">
        <Skeleton className="w-28 h-28 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>

      <div className="flex flex-col gap-8 items-center w-full">
        <div className="flex justify-between gap-8 w-full">
          <div className="space-y-2 w-[50%]">
            <Skeleton className="w-28 h-4" />
            <Skeleton className="h-4 w-full" />
          </div>
          <div className="space-y-2 w-[50%]">
            <Skeleton className="w-28 h-4" />
            <Skeleton className="h-4 w-full" />
          </div>
        </div>

        <div className="flex justify-between gap-8 w-full">
          <div className="space-y-2 w-[50%]">
            <Skeleton className="w-28 h-4" />
            <Skeleton className="h-4 w-full" />
          </div>
          <div className="space-y-2 w-[50%]">
            <Skeleton className="w-28 h-4" />
            <Skeleton className="h-4 w-full" />
          </div>
        </div>
        <div className="flex justify-between gap-8 w-full">
          <div className="space-y-2 w-[50%]">
            <Skeleton className="w-28 h-4" />
            <Skeleton className="h-4 w-full" />
          </div>
          <div className="space-y-2 w-[50%]">
            <Skeleton className="w-28 h-4" />
            <Skeleton className="h-4 w-full" />
          </div>
        </div>
        <div className="flex justify-between gap-8 w-full">
          <div className="space-y-2 w-[50%]">
            <Skeleton className="w-28 h-4" />
            <Skeleton className="h-4 w-full" />
          </div>
          <div className="space-y-2 w-[50%]">
            <Skeleton className="w-28 h-4" />
            <Skeleton className="h-4 w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileSkeleton
