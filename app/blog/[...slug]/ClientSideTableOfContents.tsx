"use client";

import { DashboardTableOfContents } from "@components/blog/toc";
import { useEffect, useState } from "react";

export function ClientSideTableOfContents() {
  const [toc, setToc] = useState<
    { title: string | null; url: string | null }[]
  >([]);

  useEffect(() => {
    const tocElements = Array.from(
      document.querySelectorAll(".subheading-anchor"),
    );

    const items = tocElements.map((item) => ({
      title: item.textContent,
      url: item.getAttribute("href"),
    }));

    setToc(items);
  }, []);

  const tableOfItems = toc.map((item) => ({
    title: item.title,
    url: item.url,
  }));

  console.log("tableOfItems", tableOfItems);

  return <DashboardTableOfContents toc={{ items: tableOfItems }} />;
}
