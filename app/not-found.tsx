"use client";
import Link from "next/link";
import "../styles/not-found.css";
import Navbar from "@components/home/components/Navbar";
const NotFound = () => {
  return (
    <div className="relative h-full w-full max-w-[1400px]">
      <Navbar className="absolute top-[36px]" />
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
