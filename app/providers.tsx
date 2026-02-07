"use client";

import { ThemeProvider } from "next-themes";
import { ViewTransitions } from "next-view-transitions";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ViewTransitions>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </ThemeProvider>
    </ViewTransitions>
  );
}
