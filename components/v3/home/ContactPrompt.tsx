"use client";

import ContactModal from "@components/contact/ContactModal";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const ContactPrompt = () => {
  const [open, setOpen] = useState(false);
  const suppressNextFocus = useRef(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    if (params.get("contact") === "open") {
      setOpen(true);
    }
  }, []);

  const handleOpenChange = (nextOpen: boolean) => {
    setOpen(nextOpen);

    if (!nextOpen) {
      suppressNextFocus.current = true;
      window.setTimeout(() => {
        suppressNextFocus.current = false;
      }, 250);
    }
  };

  const openFromFocus = () => {
    if (suppressNextFocus.current) {
      return;
    }

    setOpen(true);
  };

  return (
    <>
      <button
        type="button"
        className="group liquid-glass mx-auto mt-10 flex min-h-16 w-full max-w-[576px] items-center gap-3 rounded-full bg-black/10 py-2 pr-2 pl-6 text-left backdrop-blur-2xl transition-colors hover:bg-white/[0.05] focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:outline-none"
        onClick={() => setOpen(true)}
        onFocus={openFromFocus}
      >
        <span className="min-w-0 flex-1 text-[15px] leading-5 text-white/75 sm:text-[16px]">
          Ask about a project, audit, or performance fix...
        </span>
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white text-black transition-transform group-hover:translate-x-0.5">
          <ArrowRight className="h-5 w-5" aria-hidden="true" />
        </span>
      </button>
      <ContactModal open={open} onOpenChange={handleOpenChange} />
    </>
  );
};

export default ContactPrompt;
