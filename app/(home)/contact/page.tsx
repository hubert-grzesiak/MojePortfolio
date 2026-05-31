import { Metadata } from "next/types";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Hubert Grzesiak - Contact",
  description:
    "I'm Hubert Grzesiak, a passionate Frontend Developer specializing in React.js, Tailwind CSS, Next.js, and MongoDB. Check out my portfolio to see my projects.",
  keywords: [
    "Hubert Grzesiak",
    "contact Hubert Grzesiak",
    "get in touch with a Frontend Developer",
    "web developer contact",
    "freelance developer inquiries",
  ],
  robots: {
    index: false,
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
      "Want to contact with me? I'm Hubert Grzesiak, a passionate Frontend Developer specializing in React.js, Tailwind CSS, Next.js, and MongoDB.",
    type: "website",
    locale: "en_US",
    url: "https://hubertgrzesiak.com",
    siteName: "Hubert Grzesiak",
    images: "https://hubertgrzesiak.com/opengraph-image.png",
  },
};
const Contact = () => {
  redirect("/?contact=open");
};

export default Contact;
