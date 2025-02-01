import React, { useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import BookCard from "../components/BookCard";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../store/booksSlice";

const BookListPage = () => {
  const dispatch = useDispatch();
  const { data: books, status } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  if (status === "loading") {
    return <p>Loading..</p>;
  }

  if (status === "error") {
    return <p>Something Went Wrong..</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {books.length ? (
        books.map((book) => (
          <Link to={`/book/${book._id}`} key={book._id}>
            <BookCard book={book} />
          </Link>
        ))
      ) : (
        <p>No Books Found</p>
      )}
    </div>
  );
};

export default BookListPage;
