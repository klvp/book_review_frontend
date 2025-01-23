import React from "react";

const Dashboard = () => {
  const user = {
    avatar: "https://via.placeholder.com/150",
    name: "John Doe",
    email: "john.doe@example.com",
  };

  const reviews = [
    {
      book: "The Great Gatsby",
      review:
        "A beautifully written classic that captures the essence of the Jazz Age.",
    },
    {
      book: "To Kill a Mockingbird",
      review:
        "An impactful story about justice and morality in the Deep South.",
    },
    {
      book: "1984",
      review:
        "A chilling portrayal of a dystopian future that feels all too real.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        {/* User Info Section */}
        <div className="p-6 flex items-center space-x-4">
          <img
            src={user.avatar}
            alt="User Avatar"
            className="w-16 h-16 rounded-full border border-gray-300"
          />
          <div>
            <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="border-t border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Your Reviews
          </h3>
          <ul className="space-y-4">
            {reviews.map((review, index) => (
              <li
                key={index}
                className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200"
              >
                <h4 className="text-md font-bold text-gray-700">
                  {review.book}
                </h4>
                <p className="text-gray-600 mt-2">{review.review}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
