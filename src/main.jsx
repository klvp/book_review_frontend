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
import Layout from "./components/Layout.jsx";
import RoutesInfo from "./pages/RoutesInfo.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <RoutesInfo />
      </Layout>
    ),
    errorElement: <NotFound />,
  },
  {
    path: "/login",
    element: (
      <Layout>
        <Login />
      </Layout>
    ),
  },
  {
    path: "/register",
    element: (
      <Layout>
        <Register />
      </Layout>
    ),
  },
  {
    path: "/books",
    element: (
      <Layout>
        <BookListPage />
      </Layout>
    ),
    // loader: booksLoader,
  },
  {
    path: "/book/:bookId",
    element: (
      <Layout>
        <BookDetailPage />
      </Layout>
    ),
    // loader: getSingleBookLoader,
  },
  {
    path: "/dashboard",
    element: (
      <Layout>
        <Dashboard />
      </Layout>
    ),
    loader: userLoader,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
