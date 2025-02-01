export function UserInfo({ user }) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 max-h-[80vh]">
      <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
        User Information
      </h2>
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 bg-gray-300 dark:bg-gray-600 rounded-full mb-4 flex items-center justify-center text-2xl font-bold text-white">
          {user.name?.charAt(0)?.toUpperCase()}
        </div>
        <h2 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
          {user.name}
        </h2>
        <p className="text-gray-600 dark:text-gray-400">{user.email}</p>
      </div>
    </div>
  );
}
