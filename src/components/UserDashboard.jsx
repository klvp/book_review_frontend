import { useState, useEffect } from "react";
import { ReviewsList } from "./ReviewsList";
import { UserInfo } from "./UserInfo";
export function UserDashboard({ user }) {
  console.log("🚀 ~ UserDashboard ~ user:", user);
  //   const [user, setUser] = useState(null);

  //   useEffect(() => {
  //     // In a real application, you would fetch this data from your API
  //     const mockUser = {
  //       _id: "6791d1d614cdd56b4bdccd1d",
  //       name: "yash",
  //       email: "yash@dev.com",
  //       reviews: [
  //         {
  //           _id: "67924388d7320aed53e83f23",
  //           book: {
  //             _id: "6790f2125776f5a4608eee50",
  //             title: "The Go Programming Language",
  //             image:
  //               "http://books.google.com/books/content?id=SJHvCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  //           },
  //           rating: 5,
  //           reviewText: "hello klvp",
  //           createdAt: "2025-01-23T13:26:32.138Z",
  //         },
  //         {
  //           _id: "67923a93a0c453405c098118",
  //           book: {
  //             _id: "6790f2125776f5a4608eee50",
  //             title: "The Go Programming Language",
  //             image:
  //               "http://books.google.com/books/content?id=SJHvCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  //           },
  //           rating: 4,
  //           reviewText: "Good to read and practice",
  //           createdAt: "2025-01-23T12:48:19.259Z",
  //         },
  //       ],
  //     };
  //     setUser(mockUser);
  //   }, []);

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
