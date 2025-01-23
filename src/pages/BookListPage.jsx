import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import BookCard from "../components/BookCard";

const BookListPage = () => {
  const books = useLoaderData();
  console.log("🚀 ~ BookListPage ~ books:", books);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {books.map((book) => (
        <Link to={`/book/${book._id}`}>
          <BookCard key={book._id} book={book} />
        </Link>
      ))}
    </div>
  );
};

export default BookListPage;
