import React from "react";
import ContactForm from "./ContactForm";
import { Metadata } from "next/types";
import Hero from "@components/contact/sections/Hero";
import Typography from "@components/shared/Typography";
import { CallIcon, MessageIcon } from "@components/icons";

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
      "Want to contact with me? I'm Hubert Grzesiak, a passionate Frontend Developer specializing in React.js, Tailwind CSS, Next.js, and MongoDB.",
    type: "website",
    locale: "en_US",
    url: "https://hubertgrzesiak.com",
    siteName: "Hubert Grzesiak",
    images: "https://hubertgrzesiak.com/opengraph-image.png",
  },
};
const Contact = () => {
  return (
    <main>
      <Hero />
      <section className="w-full bg-white-900 px-6 py-9 dark:bg-black-200 md:p-[72px]">
        <div className="mx-auto flex max-w-[1240px] flex-col-reverse lg:flex-row lg:justify-between lg:gap-4">
          <div className="flex max-w-full flex-col gap-[40px] lg:w-[434px]">
            <div className="flex flex-col gap-[30px]">
              <Typography className="text-[20px] leading-[30px] text-black-300 dark:text-white-900 md:text-[24px] md:leading-[31px]">
                Phone Number
              </Typography>
              <div className="flex items-center gap-[13px]">
                <CallIcon className="[&>path]:fill-black-400 dark:[&>path]:fill-white-800" />
                <a
                  href="tel:+48 734 667 582"
                  className="font-poppins text-[18px] !font-semibold leading-[26px] text-black-400 dark:text-white-800 md:text-[24px] md:leading-[31px]"
                >
                  +48 734 667 582
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-[30px]">
              <Typography className="text-[20px] leading-[30px] text-black-300 dark:text-white-900 md:text-[24px] md:leading-[31px]">
                Email Address
              </Typography>
              <div className="flex items-center gap-[13px]">
                <MessageIcon className="shrink-0 [&>path]:fill-black-400 dark:[&>path]:fill-white-800" />
                <a
                  href="mailto:hubertgrzesiak.dev@gmail.com"
                  className="font-poppins text-[18px] !font-semibold leading-[26px] text-black-400 dark:text-white-800 md:text-[24px] md:leading-[31px]"
                >
                  hubertgrzesiak.dev@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div className="w-full pb-[48px] md:pb-[70px] lg:max-w-[700px] lg:pb-0">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
