import "@styles/Navbar.css";
import "@styles/globals.css";
import "@styles/Animation.scss";
import "@styles/Post.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Poppins } from "next/font/google";
import { cn } from "@lib/utils";
import { Toaster } from "@/components/ui/sonner";
import Footer from "@components/home/sections/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Providers } from "./providers";
import Navbar from "@components/home/components/Navbar";

export const metadata: Metadata = {
  title: "Hubert Grzesiak - Frontend Developer",
  description:
    "Welcome to my website! My name is Hubert Grzesiak, and I'm a passionate Frontend Developer. I specialize in technologies like React.js, Tailwind CSS, Next.js, and MongoDB. Explore my portfolio to see my projects and skills in action.",
  keywords: [
    "Hubert Grzesiak",
    "Frontend Developer",
    "Web Developer",
    "web dev",
    "React",
    "Tailwind CSS",
    "Next.js",
    "MongoDB",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="pl" suppressHydrationWarning>
      <body className={cn(poppins.className, "antialiased")}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
        <Analytics />
        <SpeedInsights />
        <Toaster />
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
