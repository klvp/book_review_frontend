import React from "react";

const RoutesInfo = () => {
  return (
    <div className="container mx-auto p-4 dark:bg-gray-900">
      <h1 className="text-2xl font-bold mb-4  dark:text-white">
        Book Review App
      </h1>
      <p className="mb-4 text-gray-600 dark:text-gray-400 text-left">
        This app is a book review platform where users can register, login, view
        a list of books, see book details, and manage their reviews. Below are
        the routes available in the app:
      </p>
      <h2 className="text-xl font-bold mt-8 mb-4  dark:text-white text-left">
        Features Implemented
      </h2>
      <ul className="list-inside space-y-2 text-gray-600 dark:text-gray-400 text-left">
        <li>
          Authentication Pages:
          <ul className="list-disc list-inside ml-4">
            <li>
              A Registration page to allow users to sign up (name, email,
              password).
            </li>
            <li>A Login page to authenticate users.</li>
          </ul>
        </li>
        <li>
          Book List Page:
          <ul className="list-disc list-inside ml-4">
            <li>Displays a list of books fetched from the backend.</li>
            <li>
              Each book contains details like title, author, and average rating.
            </li>
            <li>
              When user click on a book it opens deatil page with all comments
              and reviews.
            </li>
          </ul>
        </li>
        <li>
          Book Details Page:
          <ul className="list-disc list-inside ml-4">
            <li>Shows book details (title, author, description, etc.).</li>
            <li>Lists all reviews for the book.</li>
            <li>
              Allows logged-in users to add their own reviews or ratings for the
              book.
            </li>
          </ul>
        </li>
        <li>
          User Dashboard:
          <ul className="list-disc list-inside ml-4">
            <li>Allows users to see the books they've reviewed.</li>
            <li>Options to edit or delete their reviews.</li>
          </ul>
        </li>
        <li>
          Responsive Design:
          <ul className="list-disc list-inside ml-4">
            <li>App looks good on both desktop and mobile devices.</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default RoutesInfo;
