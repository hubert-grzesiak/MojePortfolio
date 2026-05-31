"use client";

import { ThemeProvider } from "next-themes";
import { ViewTransitions } from "next-view-transitions";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ViewTransitions>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem={false}
        forcedTheme="dark"
        themes={["dark"]}
      >
        {children}
      </ThemeProvider>
    </ViewTransitions>
  );
}
