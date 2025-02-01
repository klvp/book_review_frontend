import { ReviewItem } from "./ReviewItem";

export function ReviewsList({ reviews }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
        Your Reviews
      </h2>
      <div className="space-y-4">
        {reviews.length
          ? reviews?.map((review) => (
              <ReviewItem key={review._id} review={review} />
            ))
          : null}
      </div>
    </div>
  );
}
