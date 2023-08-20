import "@styles/Navbar.css";
import "@styles/globals.css";
import "@styles/Animation.scss";
import "@styles/Post.css";
import Head from "next/head";
import Navbar from "@components/Navbar.jsx";
export const metadata = {
  title: "Hubert Grzesiak - Frontend Developer",
  description:
    "Welcome to my website! My name is Hubert Grzesiak, and I'm a passionate Frontend Developer. I specialize in technologies like React.js, Tailwind CSS, Next.js, and MongoDB. Explore my portfolio to see my projects and skills in action.",
};

const RootLayout = ({ children }) => (
  <html lang="pl">
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
