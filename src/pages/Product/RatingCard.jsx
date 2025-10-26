import { Star } from 'lucide-react';
import React from 'react'

function RatingCard({ rating ,maxRating,width,high ,size}) {
  return (
    <div className="flex gap-2 items-center">
      <div className="flex flex-row gap-1">
        {[...Array(maxRating).keys()].map((index) => (
          <Star
            key={index}
            className={`${width} ${high} ${
              index < rating
                ? "fill-yellow-400 text-yellow-400"
                : "fill-gray-400 text-gray-400"
            }`}
          />
        ))}
      </div>
      <p className={`text-gray-500 ${size}`}>({rating})</p>
    </div>
  );
}

export default RatingCard
