"use client";

import ContactForm from "@components/contact/ContactForm";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@components/ui/dialog";
import { Mail, Phone } from "lucide-react";

interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ContactModal = ({ open, onOpenChange }: ContactModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="contact-modal-content !fixed !top-1/2 !left-1/2 !z-[1100] max-h-[calc(100svh-32px)] w-[calc(100%-32px)] max-w-[940px] !-translate-x-1/2 !-translate-y-1/2 overflow-y-auto rounded-[28px] border border-white/15 bg-black/95 p-0 text-white shadow-2xl shadow-black/50 backdrop-blur-xl sm:rounded-[28px] [&>button]:top-5 [&>button]:right-5 [&>button]:text-white">
        <div className="grid gap-0 lg:grid-cols-[0.86fr_1.14fr]">
          <aside className="border-b border-white/10 bg-white/3 p-6 sm:p-8 lg:border-r lg:border-b-0">
            <p className="mb-4 text-[12px] leading-none font-semibold tracking-[0.18em] text-white/45 uppercase">
              Project inquiry
            </p>
            <DialogTitle className="max-w-90 text-[34px] leading-[1.05] font-medium text-white sm:text-[42px]">
              Tell me what you are trying to build.
            </DialogTitle>
            <DialogDescription className="mt-5 max-w-97.5 text-[14px] leading-6 text-white/58">
              Share the goal, timeline, and the best way to reach you. I will
              reply with the next practical step.
            </DialogDescription>

            <div className="mt-8 space-y-4 text-[14px] text-white/72">
              <a
                className="flex items-center gap-3 transition-colors hover:text-white"
                href="tel:+48734667582"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/15 bg-white/4">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                </span>
                +48 734 667 582
              </a>
              <a
                className="flex items-center gap-3 break-all transition-colors hover:text-white"
                href="mailto:hubertgrzesiak.dev@gmail.com"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/15 bg-white/4">
                  <Mail className="h-4 w-4" aria-hidden="true" />
                </span>
                hubertgrzesiak.dev@gmail.com
              </a>
            </div>
          </aside>

          <div className="p-6 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
