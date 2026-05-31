import "@styles/globals.css";
import "@styles/Post.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Poppins } from "next/font/google";
import { cn } from "@lib/utils";
import { Toaster } from "@/components/ui/sonner";
import Footer from "@components/shared/sections/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Providers } from "@app/providers";
import { FloatingNav } from "@components/ui/floating-navbar";

export const metadata: Metadata = {
  metadataBase: new URL("https://hubertgrzesiak.com/"),
  title: "Hubert Grzesiak - Portfolio v1",
  description:
    "Version 1 of Hubert Grzesiak's portfolio website, preserved as an archive of the previous homepage design.",
  robots: {
    index: false,
    follow: true,
  },
};

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html
      lang="pl"
      className="dark"
      style={{ colorScheme: "dark" }}
      suppressHydrationWarning
    >
      <body className={cn(poppins.className, "antialiased")}>
        <Providers>
          <FloatingNav />
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
