import React from "react";
import ContactForm from "./ContactForm";
import { Metadata } from "next/types";

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
const Contact = () => {
  return (
    <main className="mt-[80px]">
      <div className="mx-auto max-w-3xl">
        <div className="mx-auto w-full max-w-5xl py-12 md:py-20">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold">Get in Touch</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="mb-1 text-lg font-medium">Address</h3>
                  <p className="text-muted-foreground">
                    Poznańska 201, 62-800 Kalisz
                  </p>
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-medium">Phone</h3>
                  <p className="text-muted-foreground">(+48) 700 600 500</p>
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-medium">Email</h3>
                  <p className="text-muted-foreground">
                    32422@uniwersytetkaliski.edu.pl
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="mb-6 text-3xl font-bold">Send a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
