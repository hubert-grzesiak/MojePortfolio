"use client";
import { Link } from "next-view-transitions";
import "../styles/not-found.css";
const NotFound = () => {
  return (
    <div className="relative h-full w-full">
      <div className="container-error-page">
        <div className="error-page">
          <div>
            <h1 data-h1="404">404</h1>
            <p data-p="NOT FOUND">NOT FOUND</p>
          </div>
        </div>
        <Link href="/" className="text-xl hover:text-gray-500">
          Back to home page
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
