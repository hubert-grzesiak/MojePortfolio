import "@styles/Navbar.css";
import "@styles/globals.css";
import "@styles/Animation.scss";
import "@styles/Post.css";
import type { Metadata } from "next";
import Navbar from "@components/Navbar";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

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
  metadataBase: new URL("https://hubertgrzesiak.com/"),
  openGraph: {
    title: "Hubert Grzesiak - Frontend Developer",
    description:
      "Welcome to my website! My name is Hubert Grzesiak, and I'm a passionate Frontend Developer. I specialize in technologies like React.js, Tailwind CSS, Next.js, and MongoDB. Explore my portfolio to see my projects and skills in action.",
    type: "website",
    locale: "en_US",
    url: "https://hubertgrzesiak.com",
    siteName: "Hubert Grzesiak",
    images: "https://hubertgrzesiak.com/opengraph-image.png",
  },
};
const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="pl">
    <body className={inter.className}>
      <div className="main">
        <div className="gradient" />
      </div>
      <main className="app">
        <Navbar />
        {children}
        <Analytics />
      </main>
    </body>
  </html>
);

export default RootLayout;
