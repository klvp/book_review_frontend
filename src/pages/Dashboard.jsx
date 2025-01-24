import React from "react";
import { useLoaderData } from "react-router-dom";
import { UserDashboard } from "../components/UserDashboard";

const Dashboard = () => {
  const user = useLoaderData();
  console.log("🚀 ~ Dashboard ~ user:", user);

  return (
    <div className={"dark w-[80vw]"}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
        <div className="container mx-auto px-4 py-8">
          <UserDashboard user={user} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
