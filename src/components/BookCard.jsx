import React from "react";

const BookCard = ({ book }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-colors duration-300">
      <img
        src={book.image || "/placeholder.svg"}
        alt={book.title}
        className="w-full h-64 object-cover object-top"
      />
      <div className="p-4 bg-white bg-opacity-75 dark:bg-gray-800 dark:bg-opacity-75">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {book.title}
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
          {book.authors.join(", ")}
        </p>
        <p className="text-sm text-gray-700 dark:text-gray-400 mb-4 line-clamp-3">
          {book.description}
        </p>
        <div className="flex items-center">
          <span className="text-yellow-500 mr-1">★</span>
          <span className="text-sm text-gray-600 dark:text-gray-300">
            {book.rating.toFixed(1)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
