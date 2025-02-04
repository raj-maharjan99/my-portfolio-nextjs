import Link from "next/link";
import React from "react";

export default function NotFoundPage() {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-4xl font-bold text-red-500">404 - Page Not Found</h1>
      <p className="text-gray-600 mt-2">
        Oops! The page you are looking for doesn not exist.
      </p>
      <Link
        href="/"
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Go Back Home
      </Link>
    </div>
  );
}
