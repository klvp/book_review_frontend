import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { UserDashboard } from "../components/UserDashboard";
import { useDispatch } from "react-redux";
import { getUser } from "../store/userSlice";
import getCookie from "../utility/helper";

const Dashboard = () => {
  const user = useLoaderData();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!getCookie("token")) {
      window.location.href = "/login";
    }
    dispatch(getUser());
  }, []);

  return (
    <div className={"dark w-[80vw]"}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
        <div className="container mx-auto px-4 py-8">
          <UserDashboard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
