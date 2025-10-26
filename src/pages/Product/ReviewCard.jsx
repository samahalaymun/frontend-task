import { Avatar } from '@/components/ui/avatar';
import { AvatarImage } from '@radix-ui/react-avatar';
import React from 'react'
import RatingCard from './RatingCard';
import moment from 'moment';

function ReviewCard({ review }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">
        <Avatar>
          <AvatarImage
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNL_ZnOTpXSvhf1UaK7beHey2BX42U6solRA&s"
            alt="review-user-img"
          />
        </Avatar>
        <h3 className="md:text-base text-sm font-semibold">
          {review.reviewerName}
        </h3>
      </div>
      <div className="flex items-center gap-2">
        <RatingCard
          size="md:text-sm text-xs"
          rating={review.rating}
          maxRating={5}
          width="md:w-4 w-3"
          high="md:h-4 h-3"
        />
        <p className="text-gray-400 md:text-sm text-xs">
           {moment(review.date).format("L")}
        </p>
      </div>

      <p className="md:text-base text-sm">{review.comment}</p>
    </div>
  );
}

export default ReviewCard
