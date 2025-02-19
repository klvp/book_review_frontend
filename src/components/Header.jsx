import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import getCookie, { deleteCookie } from "../utility/helper";

const Header = () => {
  const [loggedin, setLoggedin] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (getCookie("token")) {
      setLoggedin(true);
    }
  }, []);
  const handleLogout = () => {
    deleteCookie("token");
    window.location.href = "/books";
  };
  return (
    <header className="fixed top-0 left-0 w-5/5 bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between">
        {/* <Link to="/" className="text-lg font-bold">
          Home
        </Link> */}
        <Link to="/books" className="text-lg font-bold">
          Books
        </Link>
        <div>
          {loggedin && (
            <>
              <Link to="/dashboard" className="mr-4">
                Dashboard
              </Link>
              <button onClick={handleLogout} className="mr-4">
                Logout
              </button>
            </>
          )}
          {!loggedin && (
            <>
              <Link to="/login" className="mr-4">
                Login
              </Link>
              <Link to="/register" className="mr-4">
                Register
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
