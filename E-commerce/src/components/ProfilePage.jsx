import React from "react";

const ProfilePage = () => {
  const user = JSON.parse(localStorage.getItem("user")) || {
    name: "John Doe",
    email: "john@example.com",
    role: "Admin",
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg w-full max-w-md p-8 space-y-6 transition">
        <div className="text-center">
          {/* <img
            className="h-24 w-24 mx-auto rounded-full border-4 border-indigo-500 object-cover"
            src="https://i.pravatar.cc/150?img=10"
            alt="profile"
          /> */}
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mt-4">
            {user.username}
          </h2>
          <p className="text-gray-500 dark:text-gray-300"></p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-sm text-gray-500 dark:text-gray-400">Email</label>
            <p className="text-lg text-gray-800 dark:text-white font-medium">{user.email}</p>
          </div>
          <div>
            <label className="text-sm text-gray-500 dark:text-gray-400">Role</label>
            <p className="text-lg text-gray-800 dark:text-white font-medium capitalize">{user.isAdmin ? "Admin" : "User "}</p>
          </div>
        </div>

        {/* <button className="w-full mt-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition">
          Edit Profile
        </button> */}
      </div>
    </div>
  );
};

export default ProfilePage;
