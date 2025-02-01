import { useState, useEffect } from "react";
import { ReviewsList } from "./ReviewsList";
import { UserInfo } from "./UserInfo";
import { useSelector } from "react-redux";
export function UserDashboard() {
  const { data: user, status } = useSelector((state) => state.user);

  if (status === "loading") {
    return <p>Loading..</p>;
  }

  if (status === "error") {
    return <p>Something Went Wrong..</p>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-gray-200">
        User Dashboard
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <UserInfo user={user} />
        {user.reviews?.length ? (
          <div className="md:col-span-2">
            <ReviewsList reviews={user.reviews} />
          </div>
        ) : (
          "No Reviews"
        )}
      </div>
    </div>
  );
}
