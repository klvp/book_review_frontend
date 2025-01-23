import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import NotFound from "./pages/NotFound.jsx";
import BookListPage from "./pages/BookListPage.jsx";
import BookDetailPage from "./pages/BookDetailPage.jsx";
import { booksLoader, getSingleBookLoader, userLoader } from "./loaders.js";
import Dashboard from "./pages/Dashboard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
    errorElement: <NotFound />,
  },
  {
    path: "/app",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/books",
    element: <BookListPage />,
    loader: booksLoader,
  },
  {
    path: "/book/:bookId",
    element: <BookDetailPage />,
    loader: getSingleBookLoader,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    // loader: userLoader,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
