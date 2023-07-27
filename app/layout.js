import "@styles/Navbar.css";
import "@styles/globals.css";
import "@styles/Animation.scss";
import "@styles/Post.css";
import Head from "next/head";
import Navbar from "@components/Navbar.jsx";
import Animation from "@components/Animation";
import { useEffect, useState } from "react";
import { useHistory } from "next";
export const metadata = {
  title: "Hubert Grzesiak",
  description: "My Portfolio",
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap"
        rel="stylesheet"
      />
    </Head>
    <body>
      <div className="main">
        <div className="gradient" />
      </div>
      <main className="app">
        <Navbar />
        <div className="delay"> {children}</div>
      </main>
    </body>
  </html>
);

export default RootLayout;
