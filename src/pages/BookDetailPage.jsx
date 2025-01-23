import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { getSingleBookLoader } from "../loaders";

const BookDetailPage = () => {
  const { bookId } = useParams();
  const book = useLoaderData(bookId);
  console.log("🚀 ~ BookDetailPage ~ book:", book);

  const [comments, setComments] = useState(book.reviews ?? []);
  const [newComment, setNewComment] = useState("");
  const [newRating, setNewRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment && newRating) {
      const comment = {
        reviewText: newComment,
        rating: newRating,
        book: bookId,
      };
      console.log("🚀 ~ handleSubmit ~ comment:", comment);
      setNewComment("");
      setNewRating(0);
      fetch(`http://localhost:3000/api/reviews`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzkxZDFkNjE0Y2RkNTZiNGJkY2NkMWQiLCJpYXQiOjE3Mzc2Mzg1NjJ9.GTkCiyBlE3pCCVbfn6wv_hCuLHQdLF-B-uL0LQ9AT_Q",
        },
        body: JSON.stringify(comment),
      })
        .then(() => {
          getSingleBookLoader({ params: { bookId } }).then((data) =>
            setComments(() => data.reviews)
          );
        })
        .catch((error) => setComments((prev) => prev));
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden mb-8">
        <div className="p-6">
          <div className="flex flex-col md:flex-row">
            <img
              src={book.image || "/placeholder.svg"}
              alt={book.title}
              className="w-full md:w-1/3 rounded-lg shadow-lg mb-4 md:mb-0 md:mr-6"
            />
            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">
                {book.title}
              </h1>
              <p className="text-xl mb-4 text-gray-600 dark:text-gray-300">
                Authors: {book.authors.join(", ")}
              </p>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.round(book.rating)
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-2 text-lg text-gray-600 dark:text-gray-300">
                  {book.rating.toFixed(1)}
                </span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-left">
                {book.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden mb-8">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Add a Comment
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <textarea
                className="w-full px-3 py-2 text-gray-700 dark:text-gray-300 border rounded-lg focus:outline-none bg-gray-100 dark:bg-gray-700"
                rows={4}
                placeholder="Write your comment here"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                required
              ></textarea>
            </div>
            <div className="flex items-center space-x-2">
              <span className="mr-2 text-gray-700 dark:text-gray-300">
                Rating:
              </span>
              {[1, 2, 3, 4, 5].map((rating) => (
                <button
                  key={rating}
                  type="button"
                  className={`w-6 h-6 ${
                    rating <= newRating ? "text-yellow-400" : "text-gray-300"
                  } focus:outline-none relative`}
                  onClick={() => setNewRating(rating)}
                >
                  <svg
                    key={rating}
                    className={`w-5 h-5 text-yellow-400 absolute bottom-0 left-2.5 `}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </button>
              ))}
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Submit Comment
            </button>
          </form>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Comments
          </h2>
          {comments.length ? (
            comments.map((comment) => (
              <div
                key={comment.id}
                className="mb-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <img
                      src={`https://api.dicebear.com/6.x/avataaars/svg?seed=${comment._id} `}
                      alt="User avatar"
                      className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-600"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${
                            i < comment.rating
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="mb-2 text-gray-700 dark:text-gray-300 text-left">
                      {comment.reviewText}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div> Feel free to comment first 🚀</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookDetailPage;
