import { useState } from "react";

export function ReviewItem({ review }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedReview, setEditedReview] = useState(review.reviewText);
  const [editedRating, setEditedRating] = useState(review.rating);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    // Here you would typically make an API call to update the review
    console.log("Saving review:", { text: editedReview, rating: editedRating });
    setIsEditing(false);
  };

  const handleDelete = () => {
    // Here you would typically make an API call to delete the review
    console.log("Deleting review:", review._id);
  };

  const handleRatingChange = (newRating) => {
    setEditedRating(newRating);
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
      <div className="flex flex-col md:flex-row md:items-start space-y-4 md:space-y-0 md:space-x-4 items-center justify-center">
        <img
          src={review.book.image || "/placeholder.svg"}
          alt={review.book.title}
          className="w-24 h-36 object-cover rounded"
        />
        <div className="flex-1 flex flex-col items-center justify-center">
          <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">
            {review.book.title}
          </h3>
          <div className="flex items-center mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => isEditing && handleRatingChange(star)}
                className={`w-5 h-5 relative ${
                  isEditing ? "cursor-pointer" : "cursor-default"
                }`}
                disabled={!isEditing}
              >
                <svg
                  className={`w-5 h-5 absolute bottom-0 left-2.5 ${
                    star <= (isEditing ? editedRating : review.rating)
                      ? "text-yellow-400"
                      : "text-gray-300 dark:text-gray-600"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </button>
            ))}
          </div>
          {isEditing ? (
            <textarea
              value={editedReview}
              onChange={(e) => setEditedReview(e.target.value)}
              className="w-full p-2 border rounded mb-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              rows={3}
            />
          ) : (
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              {review.reviewText}
            </p>
          )}
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {new Date(review.createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>
      <div className="flex justify-end space-x-2 mt-4">
        {isEditing ? (
          <>
            <button
              onClick={() => setIsEditing(false)}
              className="px-4 py-2 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors duration-200"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-200"
            >
              Submit
            </button>
          </>
        ) : (
          <button
            onClick={handleEdit}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors duration-200"
          >
            Edit
          </button>
        )}
        <button
          onClick={handleDelete}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors duration-200"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
