import { useState, useEffect } from "react";
import { ReviewsList } from "./ReviewsList";
import { UserInfo } from "./UserInfo";
export function UserDashboard({ user }) {
  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-800 dark:text-gray-200">
        Loading...
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-gray-200">
        User Dashboard
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <UserInfo user={user} />
        <div className="md:col-span-2">
          <ReviewsList reviews={user.reviews} />
        </div>
      </div>
    </div>
  );
}
