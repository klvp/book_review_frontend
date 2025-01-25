import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import BookCard from "../components/BookCard";

const BookListPage = () => {
  const books = useLoaderData();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {books.length ? (
        books.map((book) => (
          <Link to={`/book/${book._id}`} key={book._id}>
            <BookCard book={book} />
          </Link>
        ))
      ) : (
        <p>Network Failed</p>
      )}
    </div>
  );
};

export default BookListPage;
