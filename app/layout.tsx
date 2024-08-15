import "@styles/Navbar.css";
import "@styles/globals.css";
import "@styles/Animation.scss";
import "@styles/Post.css";
import type { Metadata } from "next";
import Head from "next/head";
import Navbar from "@components/Navbar";

export const metadata: Metadata = {
  title: "Hubert Grzesiak - Frontend Developer",
  description:
    "Welcome to my website! My name is Hubert Grzesiak, and I'm a passionate Frontend Developer. I specialize in technologies like React.js, Tailwind CSS, Next.js, and MongoDB. Explore my portfolio to see my projects and skills in action.",
  twitter: {
    card: "summary_large_image",
    site: "@HubertGrzesiak",
  },
  alternates: {
    canonical: "https://hubertgrzesiak.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hubertgrzesiak.com",
    siteName: "Hubert Grzesiak",
    images: [
      {
        url: "https://hubertgrzesiak.com/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Hubert Grzesiak - Frontend Developer",
      },
    ],
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="pl">
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
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
        {children}
      </main>
    </body>
  </html>
);

export default RootLayout;
